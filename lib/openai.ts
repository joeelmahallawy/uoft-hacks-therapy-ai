import { Configuration, OpenAIApi } from "openai";

export const conversate = async (
  conversation
): Promise<{ fullPrompt: string; therapistResponse: string }> => {
  const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: conversation + ".",
    temperature: 0.7,
    max_tokens: 3500,
    top_p: 0.5,
    frequency_penalty: 1,
    presence_penalty: 1,
  });

  console.log(
    JSON.parse(response.config.data).prompt +
      `\n\n${response.data.choices[0].text}`
  );
  return {
    fullPrompt: JSON.parse(response.config.data).prompt,
    therapistResponse: response.data.choices[0].text,
  };
};
