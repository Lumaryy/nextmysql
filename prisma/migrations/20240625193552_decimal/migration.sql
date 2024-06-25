/*
  Warnings:

  - Made the column `precio` on table `juegos` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `juegos` MODIFY `precio` DECIMAL(10, 2) NOT NULL;
