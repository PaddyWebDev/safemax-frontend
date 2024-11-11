/*
  Warnings:

  - You are about to drop the column `Comments` on the `appointment` table. All the data in the column will be lost.
  - Added the required column `status` to the `Appointment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `appointment` DROP COLUMN `Comments`,
    ADD COLUMN `comments` VARCHAR(191) NULL,
    ADD COLUMN `status` ENUM('Pending', 'Approved', 'Denied') NOT NULL;
