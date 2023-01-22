import { Box, Center, Flex, Text } from "@mantine/core";
import { Button, Group } from "@mantine/core";
import { Select, Image, Title } from "@mantine/core";
import React from "react";

function Navbar() {
  return (
    <>
      <Center sx={{ padding: 20, justifyContent: "space-between" }}>
        <Box sx={{}}>
          <Title>(Placeholder image)</Title>
        </Box>
        <Center sx={{ gap: 30 }}>
          <Button
            size="lg"
            sx={{ background: "none", "&:hover": { background: "none" } }}
          >
            Chat
          </Button>
          <Button
            size="lg"
            sx={{ background: "none", "&:hover": { background: "none" } }}
          >
            Account Settings
          </Button>
        </Center>
      </Center>
    </>
  );
}
const IndexPage = () => {
  return (
    <>
      <Navbar />

      <Group position="center">
        <Center mt={20}>
          <Title
            variant="gradient"
            gradient={{ from: "#ed6ea0", to: "#00FFFF", deg: 35 }}
          >
            Hello you beautiful soul, welcome to my office!
          </Title>
        </Center>

        <br></br>
      </Group>
      <Group
        position="center"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Group mt={20}>
          <Image
            src="https://img.freepik.com/premium-photo/teddy-bears-with-bouquet-red-roses-black-background-selective-focus_309761-311.jpg?w=1480"
            alt="Alternate text"
            width="500px"
          />
        </Group>
        <Group style={{ flex: 1 }}>
          <Button
            variant="gradient"
            gradient={{ from: "#4B0082", to: "#00FFFF", deg: 35 }}
            onClick={() => (window.location.href = "/chat")}
          >
            Talk to me
          </Button>
        </Group>
      </Group>
    </>
  );
};

export default IndexPage;
