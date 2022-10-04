/*
  Warnings:

  - You are about to drop the column `gameMonetizeKey` on the `Category` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Category_gameMonetizeKey_key";

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "gameMonetizeKey";
