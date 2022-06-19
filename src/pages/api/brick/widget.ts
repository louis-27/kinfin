import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const url = `https://48b0-180-252-59-235.ap.ngrok.io/api/brick/redirect?response=${btoa(
    JSON.stringify(req.body)
  )}`;
  console.log(url);
  return res.send(url);
}
