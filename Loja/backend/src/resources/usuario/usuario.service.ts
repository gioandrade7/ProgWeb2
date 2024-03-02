import { PrismaClient, Usuario } from "@prisma/client";
import { CreateUsuarioDTO, UpdateUsuarioDTO } from "./usuario.types";
import { genSalt, hash } from "bcryptjs";


const prisma = new PrismaClient()

export const createUsuario = async (usuario: CreateUsuarioDTO): Promise<Usuario> => 
{
    const salt = await genSalt(parseInt(process.env.SALT_ROUNDS!))
    const senha = await hash(usuario.senha, salt)
    return await prisma.usuario.create({
        data:{ ...usuario, senha}
    })
}

export const readUsuario = async (id: string): Promise<Usuario | null> => {
  return await prisma.usuario.findUnique({ where: { id } });
};

export const listUsuario = async (): Promise<Usuario[]> => {
  return await prisma.usuario.findMany();
};

export const removeUsuario = async (id: string): Promise<void> => {
    console.log(id)
    await prisma.usuario.delete({ where: { id } });
};

export const usuarioAlreadyExists = async (email: string): Promise<boolean> => {
  return !!(await prisma.usuario.findUnique({ where: { email } }));
};

export const updateUsuario = async (
  id: string,
  usuario: UpdateUsuarioDTO
): Promise<Usuario | null> => {
  return await prisma.usuario.update({ where: { id }, data: usuario });
};



