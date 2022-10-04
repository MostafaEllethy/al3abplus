import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma-client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const categoryId: number = parseInt(req.query.categoryId as string);
  const gameId: number = parseInt(req.query.gameId as string);
  const gamesCount = await prisma.game.count({
    where: {
      categoryId: categoryId,
    },
  });
  const randomInt = Math.floor(Math.random() * (gamesCount - 12));

  const games = await prisma.game.findMany({
    skip: randomInt < gamesCount - 12 || randomInt < 0 ? 0 : randomInt,
    where: {
      categoryId: categoryId,
      AND: {
        id: {
          not: gameId,
        },
      },
    },
    take: 12,
  });
  await prisma.$disconnect();
  res.status(200).json(games);
}
