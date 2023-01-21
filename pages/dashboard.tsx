import io from "Socket.IO-client";

import { Button } from "@mantine/core";
import { useEffect } from "react";
import { useSpeech } from "react-use";

let socket;
const DashboardPage = () => {
  // const voices =
  //   typeof window !== "undefined" ? window.speechSynthesis.getVoices() : null;

  useEffect(() => {
    socketInitializer();
  }, []);

  const socketInitializer = async () => {
    await fetch("/api/socket");
    socket = io();

    socket.on("connect", () => {
      console.log("Connected to socket!");
    });

    socket.on("response", (msg) => {
      console.log(`the returned message:`, msg);
    });
  };

  return (
    <>
      <Button
        onClick={async () => {
          socket?.emit("listen", "blank msg");
        }}
      >
        Start
      </Button>
      <Button
        onClick={() => {
          socket?.emit("pause-recording", "hello");
        }}
      >
        STOP
      </Button>
    </>
  );
};
export default DashboardPage;
