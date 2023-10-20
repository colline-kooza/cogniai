/*
  Warnings:

  - You are about to drop the column `result` on the `Chat` table. All the data in the column will be lost.
  - You are about to drop the column `search` on the `Chat` table. All the data in the column will be lost.
  - Added the required column `prompt` to the `Chat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `response` to the `Chat` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Chat" DROP COLUMN "result",
DROP COLUMN "search",
ADD COLUMN     "prompt" TEXT NOT NULL,
ADD COLUMN     "response" TEXT NOT NULL;
