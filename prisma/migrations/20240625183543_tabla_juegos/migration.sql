-- CreateTable
CREATE TABLE `juegos` (
    `idJuego` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(50) NOT NULL,
    `descripcion` VARCHAR(80) NOT NULL,
    `precio` DECIMAL(65, 30) NULL,

    PRIMARY KEY (`idJuego`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
