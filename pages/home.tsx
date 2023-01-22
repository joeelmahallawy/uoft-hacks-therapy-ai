import { Box, Center, Flex, Text } from "@mantine/core";
import { Button, Group } from "@mantine/core";
import { Select, Image, Title } from "@mantine/core";
import React, { useEffect } from "react";
import Footer from "../components/footer";
import logo from "../utils/HARMONY_AI.png";



export function Navbar() {
  return (
    <Box sx={{ background: "black" }}>
      <Center sx={{ padding: 10, justifyContent: "space-between" }}>

        <a href="/">
          <Box>
            <Image src={logo.src} width={175} />
          </Box>
        </a>
        <Center sx={{ gap: 30 }}>
          <a href="/chat">
            <Button
              size="lg"
              sx={{ background: "none", "&:hover": { background: "none" } }}
            >
              Chat
            </Button>
          </a>
          <a href="/settings">
            <Button
              size="lg"
              sx={{ background: "none", "&:hover": { background: "none" } }}
            >
               Settings
            </Button>
          </a>
        </Center>
      </Center>
    </Box>
  );
}
const IndexPage = () => {
  useEffect(() => {
    if (!localStorage.getItem("settings")) {
      // @ts-expect-error
      window.location = "/onboarding";
    }
  }, []);

  return (
    <>
      <Navbar />

      <Group position="center">
        <Center mt={40}>
          <Title
            variant="gradient"
            gradient={{ from: "#ed6ea0", to: "#00FFFF", deg: 35 }}
          >
            Hello you beautiful soul, welcome to my office!
          </Title>
        </Center>
      </Group>
      <Group
        position="center"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Group mt={30}>
          <Image
            src="https://img.freepik.com/premium-photo/teddy-bears-with-bouquet-red-roses-black-background-selective-focus_309761-311.jpg?w=1480"
            alt="Alternate text"
            width="500px"
          />
        </Group>
        <Group style={{ flex: 1 }} mt={10}>
          <a href="/chat">
            <Button
              size="lg"
              variant="gradient"
              gradient={{ from: "#4B0082", to: "#00FFFF", deg: 35 }}
            >
              Talk to me
            </Button>
          </a>
        </Group>
      </Group>
      <Footer data={[]}/>
    </>
  );
};

export default IndexPage;
