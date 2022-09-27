-- CreateTable
CREATE TABLE `categoria` (
    `id_categoria` INTEGER NOT NULL,
    `name_categoria` VARCHAR(30) NOT NULL,

    PRIMARY KEY (`id_categoria`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `comidas` (
    `id_comidas` INTEGER NOT NULL,
    `image_food` VARCHAR(255) NOT NULL,
    `name_food` VARCHAR(30) NOT NULL,
    `description` VARCHAR(80) NOT NULL,
    `price` INTEGER NOT NULL,
    `id_categoria` INTEGER NOT NULL,

    INDEX `id_categoria`(`id_categoria`),
    PRIMARY KEY (`id_comidas`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `comidas_orden` (
    `id_comidas_orden` INTEGER NOT NULL,
    `id_comidas` INTEGER NOT NULL,
    `id_orden` INTEGER NOT NULL,

    INDEX `id_comidas`(`id_comidas`),
    INDEX `id_orden`(`id_orden`),
    PRIMARY KEY (`id_comidas_orden`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `delivery` (
    `id_delivery` INTEGER NOT NULL,
    `name_delivery` VARCHAR(30) NOT NULL,

    PRIMARY KEY (`id_delivery`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orden` (
    `id_orden` INTEGER NOT NULL,
    `date` DATE NOT NULL,

    PRIMARY KEY (`id_orden`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pedidos` (
    `id_pedidos` INTEGER NOT NULL,
    `total_price` INTEGER NOT NULL,
    `id_orden` INTEGER NOT NULL,
    `id_delivery` INTEGER NOT NULL,

    INDEX `id_delivery`(`id_delivery`),
    INDEX `id_orden`(`id_orden`),
    PRIMARY KEY (`id_pedidos`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `comidas` ADD CONSTRAINT `comidas_ibfk_1` FOREIGN KEY (`id_categoria`) REFERENCES `categoria`(`id_categoria`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `comidas_orden` ADD CONSTRAINT `comidas_orden_ibfk_1` FOREIGN KEY (`id_comidas`) REFERENCES `comidas`(`id_comidas`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `comidas_orden` ADD CONSTRAINT `comidas_orden_ibfk_2` FOREIGN KEY (`id_orden`) REFERENCES `orden`(`id_orden`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `pedidos` ADD CONSTRAINT `pedidos_ibfk_1` FOREIGN KEY (`id_orden`) REFERENCES `orden`(`id_orden`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `pedidos` ADD CONSTRAINT `pedidos_ibfk_2` FOREIGN KEY (`id_delivery`) REFERENCES `delivery`(`id_delivery`) ON DELETE RESTRICT ON UPDATE RESTRICT;
