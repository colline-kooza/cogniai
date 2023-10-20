/*
  Warnings:

  - You are about to drop the column `content` on the `Chat` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Chat` table. All the data in the column will be lost.
  - Added the required column `result` to the `Chat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `search` to the `Chat` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Chat" DROP COLUMN "content",
DROP COLUMN "title",
ADD COLUMN     "result" TEXT NOT NULL,
ADD COLUMN     "search" TEXT NOT NULL;
