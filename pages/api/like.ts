import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma-client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = JSON.parse(req.body);
  const oldValue = data.oldValue;
  let likes = data.value ? 1 : 0;
  likes -= oldValue ? 1 : 0;
  let dislikes = data?.value === false ? 1 : 0;
  dislikes -= oldValue === false ? 1 : 0;

  await prisma.game.update({
    where: {
      id: data.id as number,
    },
    data: {
      likes: {
        increment: likes,
      },
      dislikes: {
        increment: dislikes,
      },
    },
  });

  await prisma.$disconnect();
  res.status(201).end();
}
