-- DropForeignKey
ALTER TABLE `compras` DROP FOREIGN KEY `compras_usuarioId_fkey`;

-- DropForeignKey
ALTER TABLE `compras_de_itens` DROP FOREIGN KEY `compras_de_itens_compraId_fkey`;

-- DropForeignKey
ALTER TABLE `compras_de_itens` DROP FOREIGN KEY `compras_de_itens_produtoId_fkey`;

-- AddForeignKey
ALTER TABLE `compras` ADD CONSTRAINT `compras_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `usuarios`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `compras_de_itens` ADD CONSTRAINT `compras_de_itens_compraId_fkey` FOREIGN KEY (`compraId`) REFERENCES `compras`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `compras_de_itens` ADD CONSTRAINT `compras_de_itens_produtoId_fkey` FOREIGN KEY (`produtoId`) REFERENCES `produtos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
