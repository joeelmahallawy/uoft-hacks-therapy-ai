import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  let config = {
    method: "post",
    url: "https://api.estuary.tech/content/add",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_ESTUARY_API_KEY}`,
    },
  };

  const request = await fetch(config);

  const data = await request.json();
  //
};
