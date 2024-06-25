/*
  Warnings:

  - Added the required column `id_usuario` to the `alquiler` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `alquiler` ADD COLUMN `id_usuario` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `usuarios` (
    `idUsuario` INTEGER NOT NULL AUTO_INCREMENT,
    `nombres` VARCHAR(50) NOT NULL,
    `direccion` VARCHAR(50) NOT NULL,
    `telefono` VARCHAR(50) NOT NULL,
    `correo` VARCHAR(60) NOT NULL,
    `rol` ENUM('invitado', 'administrador') NOT NULL DEFAULT 'invitado',
    `password` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`idUsuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `alquiler` ADD CONSTRAINT `alquiler_id_usuario_fkey` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios`(`idUsuario`) ON DELETE RESTRICT ON UPDATE CASCADE;
