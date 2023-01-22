
import {
  Text,
  Button,
  Group,
  TextInput,
  Loader,
  Switch,
  useMantineTheme,
  Title,
  Center,
  Box,
  Textarea,
  Flex,
} from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons";
import router from "next/router";
import React, { useEffect, useState } from "react";
import { Navbar } from "./home";

function Demo() {
  const theme = useMantineTheme();
  return (
    <Group position="center">
      <Switch
        size="md"
        color={theme.colorScheme === "dark" ? "gray" : "dark"}
        onLabel={
          <IconSun size={16} stroke={2.5} color={theme.colors.yellow[4]} />
        }
        offLabel={
          <IconMoonStars size={16} stroke={2.5} color={theme.colors.blue[6]} />
        }
      />
    </Group>
  );
}
const SettingsPage = () => {
  useEffect(() => {
    if (!localStorage.getItem("settings")) {
      // @ts-expect-error
      window.location = "/onboarding";
      return;
    }
    setSettings(JSON.parse(localStorage.getItem("settings")));
  }, []);

  const [settings, setSettings] = useState<{
    name: string;
    reasonHere: string;
  }>();
  const [editModeOn, setEditModeOn] = useState(false);
  return settings ? (
    <>
      <Navbar />
      <Box
        sx={(t) => ({
          maxWidth: 400,
          padding: 25,
          marginTop: 150,
          background: "black",
          borderRadius: 10,
        })}
        mx="auto"
      >

        <Center>
          <Title color="white" order={2}>
            Account settings
          </Title>
        </Center>
        <TextInput
          mt={10}
          label="Your name"
          placeholder="e.g. John doe"
          disabled={editModeOn ? false : true}
          defaultValue={settings?.name}
          onChange={(e) => {
            setSettings({ ...settings, name: e.currentTarget.value });
          }}
        />

        <Textarea
          onChange={(e) => {
            setSettings({ ...settings, reasonHere: e.currentTarget.value });
          }}
          maxRows={4}
          autosize
          minRows={4}
          mt={15}
          defaultValue={settings?.reasonHere}
          disabled={editModeOn ? false : true}
          placeholder="Open up about your feelings, tell us what's on your mind."
          label="What brought you here today?"
        />

        <Flex sx={{ justifyContent: "flex-end" }}>
          {editModeOn ? (
            <Button
              mt={15}
              onClick={() => {
                setEditModeOn(false);
                typeof window !== "undefined" &&
                  localStorage.setItem("settings", JSON.stringify(settings));
              }}
            >
              Save
            </Button>
          ) : (
            <Button onClick={() => setEditModeOn(true)} mt={15}>
              Edit
            </Button>
          )}
        </Flex>
        {/* </Group> */}
      </Box>
    </>
  ) : (
    <Center sx={{ height: "100vh" }}>
      <Loader size="xl" variant="dots" />;
    </Center>
  );
};
export default SettingsPage;
