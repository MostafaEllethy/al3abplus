-- AlterTable
ALTER TABLE "SearchLog" ADD CONSTRAINT "SearchLog_pkey" PRIMARY KEY ("name");

-- CreateTable
CREATE TABLE "Contact" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);
