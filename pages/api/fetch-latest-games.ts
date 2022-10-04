import type { NextApiRequest, NextApiResponse } from "next";
import { fetchLatestGames } from "../../lib/fetch-latest-games";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const cursor: number = parseInt(req.query.cursor as string);
  res.status(200).json(await fetchLatestGames(cursor));
}
