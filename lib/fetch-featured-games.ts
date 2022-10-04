import prisma from "./prisma-client";

export async function fetchFeaturedGames() {
  const games = await prisma.game.findMany({
    where: {
      featured: true,
    },
    orderBy: [
      {
        order: "asc",
      },
      { id: "desc" },
    ],
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
