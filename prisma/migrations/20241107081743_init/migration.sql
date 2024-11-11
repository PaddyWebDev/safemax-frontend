/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Appointment` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `appointment` MODIFY `status` ENUM('Pending', 'Approved', 'Denied') NOT NULL DEFAULT 'Pending';

-- CreateIndex
CREATE UNIQUE INDEX `Appointment_email_key` ON `Appointment`(`email`);
