import { Server } from "Socket.IO";
import recorder from "node-record-lpcm16";
import speech from "@google-cloud/speech";
import { ENCODING, SAMPLE_RATE_HERTZ } from "../../utils";

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

  // handle audio commands
  io.on("connection", (socket) => {
    socket.on("listen", (stream) => {
      // Create a recognize stream
      const recognizeStream = client
        // @ts-expect-error
        .streamingRecognize(request)
        // we get a "no audio in long time error because we paused the audio"
        .on("error", console.error)
        .on("data", (data) => {
          io.emit(`response`, data.results[0].alternatives[0].transcript);
        });

      // Start recording and send the microphone input to the Speech API.
      // Ensure SoX is installed, see https://www.npmjs.com/package/node-record-lpcm16#dependencies

      recording.stream().on("error", console.error).pipe(recognizeStream);

      console.log("Listening, press Ctrl+C to stop.");
    });
    socket.on("stop-recording", () => {
      console.log(`we stopped recording`);
      recording.stop();
    });
    socket.on("pause-recording", () => {
      console.log(`we paused recording`);
      recording.pause();
    });
    socket.on("resume-recording", () => {
      console.log(`we resumed recording`);
      recording.resume();
    });
  });

  res.end();
};
export default handler;
