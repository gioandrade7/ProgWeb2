import { PrismaClient, Usuario } from "@prisma/client";
import { CreateUsuarioDTO } from "./usuario.types";
import { genSalt, hash } from "bcryptjs";


const prisma = new PrismaClient()

const createUsuario = async (usuario: CreateUsuarioDTO): Promise<Usuario> => 
{
    const salt = await genSalt(parseInt(process.env.SALT_ROUNDS!))
    const senha = await hash(usuario.senha, salt)
    return await prisma.usuario.create({
        data:{ ...usuario, senha}
    })
}

export default createUsuario

