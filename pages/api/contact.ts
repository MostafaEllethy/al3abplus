import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma-client";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await prisma.contact.create({ data: JSON.parse(req.body) });
  await prisma.$disconnect();
  res.status(201).end();
}
