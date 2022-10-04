/*
  Warnings:

  - Made the column `mobileReady` on table `Game` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Game" ALTER COLUMN "mobileReady" SET NOT NULL;
