/*
  Warnings:

  - The primary key for the `IgnoredGames` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[gameMonetizeId]` on the table `IgnoredGames` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "IgnoredGames" DROP CONSTRAINT "IgnoredGames_pkey",
ALTER COLUMN "gameMonetizeId" SET DATA TYPE TEXT,
ADD CONSTRAINT "IgnoredGames_pkey" PRIMARY KEY ("gameMonetizeId");

-- CreateIndex
CREATE UNIQUE INDEX "IgnoredGames_gameMonetizeId_key" ON "IgnoredGames"("gameMonetizeId");
