import io from "Socket.IO-client";

import { Box, Button, Center, Flex, Text } from "@mantine/core";
import { useEffect, useState } from "react";

import { useSpeechSynthesis, useSpeechRecognition } from "react-speech-kit";
import { Navbar } from "./home";

let socket;
const HomePage = () => {
  // const { speak } = useSpeechSynthesis();
  const [therapistResponse, setTherapistResponse] = useState("");
  const [conversationContext, setConversationContext] = useState("");
  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    // @ts-expect-error
    if (!localStorage.getItem("settings")) window.location = "/onboarding";
    socketInitializer();
  }, [therapistResponse]);

  useEffect(() => {
    const speech = new SpeechSynthesisUtterance(therapistResponse);
    speech.voice = window.speechSynthesis.getVoices()[10];

    speech.pitch = 0.8;
    speech.volume = 0.75;

    speech.rate = 0.65;
    window.speechSynthesis.speak(speech);
  }, [therapistResponse]);

  const socketInitializer = async () => {
    await fetch("/api/socket");
    socket = io();

    socket.on("connect", () => {
      console.log("Connected to socket!");
    });

    socket?.on("response", ({ therapistResponse, context }) => {
      console.log(context);
      setConversationContext(context);
      setTherapistResponse(therapistResponse);
    });
  };

  return (
    <Box>
      <Navbar />

      <Flex
        sx={{
          width: "75vw",
          height: "70vh",
          background: "white",
          margin: "40px auto",
          borderRadius: 10,
          justifyContent: "space-between",
          flexDirection: "column",
          padding: 10,
        }}
      >
        <ChatComponent
          who={"Harmony"}
          content={`Hello ${
            typeof window !== "undefined" &&
            JSON.parse(localStorage.getItem("settings")).name
          }, what would you like to talk about today?`}
        />

        {isRecording ? (
          <Button
            sx={{ width: "80%" }}
            onClick={() => {
              setIsRecording(false);
              socket?.emit("pause-recording", { conversationContext });
            }}
          >
            STOP
          </Button>
        ) : (
          <Button
            sx={{ width: "80%", margin: "0 auto 10px auto" }}
            onClick={async () => {
              setIsRecording(true);
              socket?.emit("listen", {
                conversationContext,
                patientName: typeof window !== "undefined" && localStorage,
              });
            }}
          >
            Start
          </Button>
        )}
      </Flex>
    </Box>
  );
};
export default HomePage;

const ChatComponent = ({
  who,
  content,
}: {
  who: "Harmony" | string;
  content: string;
}) => {
  return (
    <Text color="black">
      <span style={{ fontWeight: 600 }}>{who}:</span> {content}
    </Text>
  );
};
