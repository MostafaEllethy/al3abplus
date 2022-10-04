import prisma from "./prisma-client";

export async function fetchCategories() {
  const categories = await prisma.category.findMany();
  await prisma.$disconnect();
  return categories;
}
