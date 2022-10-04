import prisma from "./prisma-client";

export async function fetchCategory(path: string, cursor?: number) {
  const category = await prisma.category.findUnique({
    include: {
      games: {
        take: 60,
        orderBy: [{ featured: "desc" }, { id: "desc" }],
        skip: cursor ? 1 : 0,
        cursor: cursor ? { id: cursor } : undefined,
        select: {
          id: true,
          imageUrl: true,
          title: true,
          path: true,
          mobileReady: true,
          featured: true,
          order: true,
        },
      },
    },
    where: {
      path: path,
    },
  });
  await prisma.$disconnect();
  return category;
}
