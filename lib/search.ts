import prisma from "./prisma-client";

export async function search(q: string) {
  await prisma.searchLog.upsert({
    where: {
      name: q,
    },
    update: {
      count: {
        increment: 1,
      },
    },
    create: {
      name: q,
      count: 1,
    },
  });
  const games = await prisma.game.findMany({
    where: {
      OR: [
        { name: { contains: q, mode: "insensitive" } },
        { title: { contains: q, mode: "insensitive" } },
      ],
    },
    take: 60,
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
