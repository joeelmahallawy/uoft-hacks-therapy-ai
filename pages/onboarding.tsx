import { useColorScheme } from "@mantine/hooks";

import {
  TextInput,
  Text,
  Checkbox,
  Button,
  Group,
  Box,
  Switch,
  Title,
  Textarea,
  Center,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import React from "react";

export default function OnboardingPage() {
  const colorScheme = useColorScheme();

  const form = useForm({
    initialValues: {
      name: "",
      darkMode: true,
    },

    validate: {
      name: (value) => (value.length ? null : "Please enter name"),
    },
  });

  return (
    <Box
      sx={(t) => ({
        maxWidth: 400,
        padding: 30,
        marginTop: 200,
        // background: t.colors.gray[5],
        background: "black",
        borderRadius: 10,
        color: "black",
      })}
      mx="auto"
    >
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <Center sx={{ flexDirection: "column" }}>
          <Title color="white" order={2}>
            Welcome to Harmony AI
          </Title>
          <Text color="dimmed" size="xs">
            I'm happy you're here, I know it took a lot to get here.
          </Text>
        </Center>
        <TextInput
          mt={10}
          withAsterisk
          label="Your name"
          placeholder="e.g. John doe"
          {...form.getInputProps("email")}
        />

        <Textarea
          maxRows={4}
          autosize
          minRows={4}
          mt={15}
          placeholder="Open up about your feelings, tell us what's on your mind."
          label="What brought you here today?"
          //   withAsterisk
        />
        <Switch mt={20} label="Enable dark mode" />
        {/* <Group position="right" mt="md"> */}
        <Button type="submit" fullWidth mt={15}>
          Enter
        </Button>
        {/* </Group> */}
      </form>
    </Box>
  );
}
