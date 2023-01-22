import { Server, Socket } from "socket.io";
import recorder from "node-record-lpcm16";
import speech from "@google-cloud/speech";
import { conversationStarter, ENCODING, SAMPLE_RATE_HERTZ } from "../../utils";
import { conversate } from "../../lib/openai";

const handler = async (req, res) => {
  // google speech
  const client = new speech.SpeechClient({
    credentials: {
      type: "service_account",
      private_key: process.env.NEXT_PUBLIC_SERVICE_ACCOUNT_PRIVATE_KEY,
      client_email: process.env.NEXT_PUBLIC_SERVICE_ACCOUNT_CLIENT_EMAIL,
      client_id: process.env.NEXT_PUBLIC_SERVICE_ACCOUNT_CLIENT_ID,
    },
  });

  const languageCode = "en-US";

  const request = {
    config: {
      encoding: ENCODING,
      sampleRateHertz: SAMPLE_RATE_HERTZ,
      languageCode: languageCode,
    },
    interimResults: false,
  };
  // init websocket connection
  let io;
  if (res.socket.server.io) {
    console.log("Socket is already running from /socket");
  } else {
    console.log("Socket is initializing from /socket");
    io = new Server(res.socket.server);
    res.socket.server.io = io;
  }
  io = res.socket.server.io;

  // audio listener
  // ***RECORDINGS CAN ONLY LAST 5 MINUTES MAX (305 seconds)***
  const recording = recorder.record();

  // speech-to-text
  let textFromClient;

  // handle audio commands
  io.once("connection", (socket: Socket) => {
    socket.on(
      "listen",
      ({
        conversationContext,
        patientName,
      }: {
        conversationContext: string;
        patientName: string;
      }) => {
        try {
          // Create a recognize stream and listen
          recording.stream().pipe(
            client
              //   @ts-expect-error
              .streamingRecognize({ ...request, singleUtterance: false })
              .on("error", console.error)
              .on("data", async (data) => {
                textFromClient = data.results[0].alternatives[0].transcript;
                socket.emit("current-input", textFromClient);

                let response;
                if (!conversationContext.length) {
                  // empty string, so we're starting the conversation
                  response = await conversate(
                    conversationStarter(patientName, textFromClient)
                  );
                  //   update convo with most recent AI response
                  response.fullPrompt =
                    response.fullPrompt + `${response.therapistResponse}.\n`;

                  socket.emit("response", {
                    therapistResponse: response.therapistResponse,
                    context: response.fullPrompt,
                  });
                } else {
                  // a convo is already going, so just continue
                  response = await conversate(
                    `${conversationContext}\n\n ${patientName}: ${textFromClient}.`
                  );
                  // update the convo with the most recent AI response
                  response.fullPrompt =
                    response.fullPrompt + `${response.therapistResponse}.\n`;

                  // send to FE
                  socket.emit("response", {
                    therapistResponse: response.therapistResponse,
                    context: response.fullPrompt,
                  });
                }
                res.end();
                return socket.disconnect();
              })
          );

          console.log("Listening, press Ctrl+C to stop.");
        } catch (err) {
          console.log(`Oh no, there was an error:`, err.message);
        }
      }
    );
    socket.on("pause-recording", () => {
      console.log(`we paused recording`);
      recording.pause();
      res.end();
    });

    // discnnect and remove all event listeners so we don't execute the event handlers multiple times
    socket.on("disconnect", function () {
      console.log(`disconnected socket`);
      socket.removeAllListeners();
    });
  });

  res.end();
};
export default handler;
