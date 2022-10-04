import type { NextApiRequest, NextApiResponse } from "next";
import { fetchCategory } from "../../lib/fetch-category";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const path = req.query.path as string;
  const cursor: number = parseInt(req.query.cursor as string);
  res.status(200).json(await fetchCategory(path, cursor));
}
