/*
  Warnings:

  - The primary key for the `IgnoredGames` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `gameMonetizeId` on the `IgnoredGames` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[url]` on the table `IgnoredGames` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `url` to the `IgnoredGames` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Game_gameMonetizeId_key";

-- DropIndex
DROP INDEX "IgnoredGames_gameMonetizeId_key";

-- AlterTable
ALTER TABLE "IgnoredGames" DROP CONSTRAINT "IgnoredGames_pkey",
DROP COLUMN "gameMonetizeId",
ADD COLUMN     "url" TEXT NOT NULL,
ADD CONSTRAINT "IgnoredGames_pkey" PRIMARY KEY ("url");

-- CreateIndex
CREATE UNIQUE INDEX "IgnoredGames_url_key" ON "IgnoredGames"("url");
