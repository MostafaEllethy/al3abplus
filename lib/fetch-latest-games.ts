import prisma from "./prisma-client";

export async function fetchLatestGames(cursor?: number) {
  const games = await prisma.game.findMany({
    orderBy: [{ createdAt: "desc" }, { id: "desc" }],
    where: {
      featured: false,
    },
    take: 60,
    skip: cursor ? 1 : 0,
    cursor: cursor
      ? {
          id: cursor,
        }
      : undefined,
    select: {
      id: true,
      imageUrl: true,
      title: true,
      path: true,
      mobileReady: true,
    },
  });
  await prisma.$disconnect();
  return games;
}
