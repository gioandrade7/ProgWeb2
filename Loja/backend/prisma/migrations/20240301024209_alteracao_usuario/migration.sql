-- DropForeignKey
ALTER TABLE `usuarios` DROP FOREIGN KEY `usuarios_tipoUsuarioId_fkey`;

-- AddForeignKey
ALTER TABLE `usuarios` ADD CONSTRAINT `usuarios_tipoUsuarioId_fkey` FOREIGN KEY (`tipoUsuarioId`) REFERENCES `tipos_usuarios`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
