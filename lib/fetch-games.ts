import prisma from "./prisma-client";

export async function fetchGames() {
  const games = await prisma.game.findMany();
  await prisma.$disconnect();
  return games;
}
