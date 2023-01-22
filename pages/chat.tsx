import io from "socket.io-client";
import { Box, Button, Center, Flex, Loader, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import { Navbar } from "./home";
import Footer from "../components/footer";

let socket;
const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  // const { speak } = useSpeechSynthesis();
  const [therapistResponse, setTherapistResponse] = useState("");
  const [conversationContext, setConversationContext] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [settings, setSettings] = useState<{
    name: string;
    reasonHere: string;
  }>();
  const [conversationMessages, setConversationMessages] = useState([
    {
      name: `Harmony`,
      content: `Hello ${
        typeof window !== "undefined" &&
        JSON.parse(localStorage.getItem("settings")).name
      }, what would you like to talk about today?`,
    },
  ]);

  useEffect(() => {
    if (!localStorage.getItem("settings")) {
      // @ts-expect-error
      window.location = "/onboarding";
      return;
    }
    setSettings(JSON.parse(localStorage.getItem("settings")));
    socketInitializer();
  }, [therapistResponse]);

  useEffect(() => {
    const speech = new SpeechSynthesisUtterance(therapistResponse);
    speech.voice = window.speechSynthesis.getVoices()[10];

    speech.pitch = 0.8;
    speech.volume = 0.75;

    speech.rate = 0.85;
    window.speechSynthesis.speak(speech);
  }, [therapistResponse]);

  const socketInitializer = async () => {
    await fetch("/api/socket");
    socket = io();

    socket.on("connect", () => {
      console.log("Connected to socket!");
    });

    socket?.on("response", ({ therapistResponse, context }) => {
      setIsLoading(false);
      setConversationContext(context);
      setTherapistResponse(therapistResponse);
      conversationMessages.push({
        content: therapistResponse,
        name: "Harmony",
      });

      setConversationMessages([...conversationMessages]);
    });

    socket.on("current-input", (speechInput) => {
      conversationMessages.push({
        content: speechInput,
        name:
          typeof window !== "undefined" &&
          JSON.parse(localStorage.getItem("settings")).name,
      });
      setConversationMessages([...conversationMessages]);
    });
  };

  return settings ? (
    <>
      <Box>
        <Navbar />

        <Flex
          sx={{
            width: "75vw",
            height: "65vh",
            background: "white",
            margin: "40px auto",
            borderRadius: 10,
            justifyContent: "space-between",
            flexDirection: "column",
            padding: 10,
          }}
        >
          <Box>
            {conversationMessages.map((msg) => (
              <ChatComponent who={msg.name} content={msg.content} />
            ))}
          </Box>

          {isRecording ? (
            <Button
              color="red"
              sx={{ width: "100%", margin: "0 auto 10px auto" }}
              onClick={() => {
                setIsRecording(false);
                socket?.emit("pause-recording", { conversationContext });
              }}
            >
              Stop
            </Button>
          ) : (
            <Button
              loading={isLoading}
              color="violet"
              sx={{
                width: "100%",
                margin: "0 auto 10px auto",
                // position: "fixed",
              }}
              onClick={async () => {
                setIsRecording(true);
                setIsLoading(true);
                socket?.emit("listen", {
                  conversationContext,
                  patientName: settings.name,
                });
              }}
            >
              Start
            </Button>
          )}
        </Flex>
      </Box>

      <Footer data={[]} />
    </>
  ) : (
    <Center sx={{ height: "100vh" }}>
      <Loader size="xl" variant="dots" />;
    </Center>
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
