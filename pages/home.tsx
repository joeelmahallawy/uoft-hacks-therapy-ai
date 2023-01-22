import io from "Socket.IO-client";

import { Button } from "@mantine/core";
import { useEffect, useState } from "react";

import { useSpeechSynthesis, useSpeechRecognition } from "react-speech-kit";

let socket;
const HomePage = () => {
  const { speak } = useSpeechSynthesis();
  const [therapistResponse, setTherapistResponse] = useState("");
  const [conversationContext, setConversationContext] = useState("");

  useEffect(() => {
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

  //   TODO: CHANGE LATER
  const patientName = "John";

  return (
    <>
      <Button
        onClick={async () => {
          socket?.emit("listen", { conversationContext, patientName });
        }}
      >
        Start
      </Button>

      <Button
        onClick={() => {
          socket?.emit("pause-recording", { conversationContext });
          //   console.log(global);
        }}
      >
        STOP
      </Button>
    </>
  );
};
export default HomePage;
