import type { NextApiRequest, NextApiResponse } from "next";
import { CATEGORY_BASE_PATH, GAME_BASE_PATH } from "../../constants";
import { fetchCategories } from "../../lib/fetch-categories";
import { fetchGames } from "../../lib/fetch-games";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check for secret to confirm this is a valid request
  if (req.query.token !== "P@ssw0rd") {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    await res.revalidate("/");
    const categories = await fetchCategories();
    categories.map(async (c) => {
      await res.revalidate(`${CATEGORY_BASE_PATH}/${c.path}`);
    });
    const games = await fetchGames();
    games.map(async (g) => {
      await res.revalidate(`${GAME_BASE_PATH}/${g.path}`);
    });
    return res.json({ revalidated: true });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send("Error revalidating");
  }
}
