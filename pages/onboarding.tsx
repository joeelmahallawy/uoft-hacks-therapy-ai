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
  useMantineColorScheme,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import React from "react";
import { useRouter } from "next/router";

export default function OnboardingPage() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const router = useRouter();
  const form = useForm({
    initialValues: {
      name: "",
      //   darkMode: true,
      reasonHere: "",
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
        marginTop: 150,
        // background: t.colors.gray[5],
        background: "black",
        borderRadius: 10,
        color: "black",
      })}
      mx="auto"
    >
      <form
        onSubmit={form.onSubmit(async (values) => {
          if (typeof window !== "undefined")
            localStorage.setItem("settings", JSON.stringify(values));
          router.push("/home");
          //   //   const formData = new FormData();

          //   // //   formData.append("name", values.name);
          //   // //   formData.append("reasonhere", values.reasonHere);
          //   //   console.log(formData);
          //   console.log(values);
          //   const form = new FormData();
          //   form.append(
          //     "data",
          //     new File([JSON.stringify(values)], "test.json", {
          //       type: "text/plain",
          //     })
          //   );

          //   //   const blob = new Blob([values], { type: "multipart/form-data" });
          //   //   form.append("data", JSON.stringify(values));

          //   const postToIPFS = await fetch(
          //     `https://api.estuary.tech/content/add`,
          //     {
          //       method: "POST",
          //       body: form,
          //       headers: {
          //         Authorization: `Bearer EST3e15bc59-5708-4d98-b805-56ebc329f04eARY`,
          //       },
          //     }
          //   );

          //   console.log(postToIPFS);
          //   const response = await postToIPFS.text();
          //   console.log(response);
        })}
      >
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
          {...form.getInputProps("name")}
        />

        <Textarea
          {...form.getInputProps("reasonHere")}
          maxRows={4}
          autosize
          minRows={4}
          mt={15}
          placeholder="Open up about your feelings, tell us what's on your mind."
          label="What brought you here today?"
          //   withAsterisk
        />
        {/* <Switch mt={20} label="Enable dark mode" /> */}
        {/* <Group position="right" mt="md"> */}
        <Button type="submit" fullWidth mt={15}>
          Enter
        </Button>
        {/* </Group> */}
      </form>
    </Box>
  );
}
