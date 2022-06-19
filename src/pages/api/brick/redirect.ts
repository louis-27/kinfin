import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return res.redirect(
    `http://localhost:3000/app/dashboard?response=${req.query.response}`
  );
}
