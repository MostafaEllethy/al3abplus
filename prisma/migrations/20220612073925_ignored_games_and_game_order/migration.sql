-- AlterTable
ALTER TABLE "Game" ADD COLUMN     "order" INTEGER;

-- CreateTable
CREATE TABLE "IgnoredGames" (
    "gameMonetizeId" INTEGER NOT NULL,

    CONSTRAINT "IgnoredGames_pkey" PRIMARY KEY ("gameMonetizeId")
);
