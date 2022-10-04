/*
  Warnings:

  - You are about to drop the column `aspectRatio` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `instructions` on the `Game` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[gameMonetizeKey]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[gameMonetizeId]` on the table `Game` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `gameMonetizeKey` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gameMonetizeId` to the `Game` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "gameMonetizeKey" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Game" DROP COLUMN "aspectRatio",
DROP COLUMN "instructions",
ADD COLUMN     "gameMonetizeId" INTEGER NOT NULL,
ALTER COLUMN "originUrl" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Category_gameMonetizeKey_key" ON "Category"("gameMonetizeKey");

-- CreateIndex
CREATE UNIQUE INDEX "Game_gameMonetizeId_key" ON "Game"("gameMonetizeId");
