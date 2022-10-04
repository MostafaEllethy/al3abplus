import { PrismaClient, Provider } from "@prisma/client";
import { CATEGORIES } from "../constants";

const prisma = new PrismaClient();

const Providers: Provider[] = [{ id: 1, name: "gamemonetize" }];

async function main() {
  await prisma.$transaction([
    ...CATEGORIES.map((c) =>
      prisma.category.upsert({
        where: {
          id: c.id,
        },
        update: {},
        create: {
          id: c.id,
          title: c.title,
          imageUrl: c.imageUrl,
          color: c.color,
          path: c.path,
        },
      })
    ),
    ...Providers.map((p) =>
      prisma.provider.upsert({
        where: {
          name: p.name,
        },
        update: {},
        create: {
          id: p.id,
          name: p.name,
        },
      })
    ),
  ]);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
