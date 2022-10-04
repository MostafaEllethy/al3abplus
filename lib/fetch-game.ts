import prisma from "./prisma-client";

export async function fetchGame(path: string) {
  const game = await prisma.game.findUnique({
    where: {
      path: path,
    },
    select: {
      id: true,
      title: true,
      category: true,
      provider: true,
      description: true,
      iFrameLink: true,
      imageUrl: true,
      path: true,
      mobileReady: true,
    },
  });
  await prisma.$disconnect();
  return game;
}
