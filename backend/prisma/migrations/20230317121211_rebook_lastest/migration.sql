/*
  Warnings:

  - You are about to drop the column `gender` on the `books` table. All the data in the column will be lost.
  - You are about to drop the `booksLibraries` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `bookId` to the `comments` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "booksLibraries" DROP CONSTRAINT "booksLibraries_bookId_fkey";

-- DropForeignKey
ALTER TABLE "booksLibraries" DROP CONSTRAINT "booksLibraries_bookStatusId_fkey";

-- AlterTable
ALTER TABLE "books" DROP COLUMN "gender",
ADD COLUMN     "category" TEXT,
ADD COLUMN     "language" TEXT,
ADD COLUMN     "pages" INTEGER,
ADD COLUMN     "publishedDate" TEXT,
ALTER COLUMN "rating" DROP NOT NULL;

-- AlterTable
ALTER TABLE "comments" ADD COLUMN     "bookId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "profile" ALTER COLUMN "picture" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "booksLibraries";

-- CreateTable
CREATE TABLE "ratings" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "bookId" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ratings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userBooks" (
    "id" SERIAL NOT NULL,
    "review" TEXT,
    "userId" INTEGER NOT NULL,
    "bookId" TEXT NOT NULL,
    "bookStatusId" INTEGER NOT NULL,
    "ratingId" INTEGER,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "userBooks_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "books"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ratings" ADD CONSTRAINT "ratings_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "books"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ratings" ADD CONSTRAINT "ratings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "userBooks" ADD CONSTRAINT "userBooks_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "books"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "userBooks" ADD CONSTRAINT "userBooks_bookStatusId_fkey" FOREIGN KEY ("bookStatusId") REFERENCES "bookStatus"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "userBooks" ADD CONSTRAINT "userBooks_ratingId_fkey" FOREIGN KEY ("ratingId") REFERENCES "ratings"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "userBooks" ADD CONSTRAINT "userBooks_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
