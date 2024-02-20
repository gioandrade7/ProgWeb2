import { PrismaClient, Usuario } from "@prisma/client";
import { LoginDTO } from "./auth.types";
import { compare } from "bcryptjs";

const prisma = new PrismaClient()

const checkCredentials = async ({email, senha}: LoginDTO): Promise<false | Usuario> => {
    const usuario = await prisma.usuario.findUnique({ where: { email } })
    if(!usuario) return false 
    const ok = await compare(senha, usuario.senha)
    if (ok) return usuario
    return false 
}

export default checkCredentials;