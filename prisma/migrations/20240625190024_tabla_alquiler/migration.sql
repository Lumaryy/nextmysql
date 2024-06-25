-- CreateTable
CREATE TABLE `alquiler` (
    `idAlquiler` INTEGER NOT NULL AUTO_INCREMENT,
    `fecha_alguiler` DATETIME(3) NOT NULL,
    `fecha_devolucion` DATETIME(3) NOT NULL,
    `cantidad` INTEGER NOT NULL,
    `estado` ENUM('Activo', 'Inactivo') NOT NULL DEFAULT 'Activo',
    `id_juego` INTEGER NOT NULL,

    PRIMARY KEY (`idAlquiler`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `alquiler` ADD CONSTRAINT `alquiler_id_juego_fkey` FOREIGN KEY (`id_juego`) REFERENCES `juegos`(`idJuego`) ON DELETE RESTRICT ON UPDATE CASCADE;
