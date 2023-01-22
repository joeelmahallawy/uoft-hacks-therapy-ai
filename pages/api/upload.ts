import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  //
  res.send({});
  //   try {
  //     // const body = JSON.parse(req.body);
  //     const form = new FormData();
  //     const randomID = `${Math.random()}`;

  //     fs.writeFileSync(`/${randomID}.json`, { Hello: "world" });
  //     setTimeout(() => {}, 10000);
  //     const data = fs.readFileSync(`/${randomID}.json`, { encoding: "utf-8" }); // World!

  //     const sleep = (timer) => new Promise(() => setTimeout(() => {}, timer));
  //     form.append("data", fs.createReadStream(data));

  //     console.log("data:", data);
  //     console.log(form.getHeaders());

  //     // console.log("data", data);
  //     // console.log(JSON.parse(req.body));

  //     // console.log(`heres shte data`, JSON.parse(data).reasonHere);
  //     const request = await fetch(`https://api.estuary.tech/content/add`, {
  //       method: "POST",
  //       body: form,
  //       headers: {
  //         Accept: "application/json",
  //         Authorization: `Bearer ${process.env.NEXT_PUBLIC_ESTUARY_API_KEY}`,
  //         // "Content-Type": "multipart/form-data",
  //         ...form.getHeaders(),
  //       },
  //     });

  //     console.log(request);

  //     const response = await request.json();

  //     return res.send({ success: true, response });
  //   } catch (err) {
  //     return res.send({ error: err.message, success: false });
  //   }
};

export default handler;
