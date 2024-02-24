import { PrismaClient, Usuario } from "@prisma/client";
import { LoginDTO } from "./auth.types";
import { compare } from "bcryptjs";

const prisma = new PrismaClient()

const checkCredentials = async ({email, senha}: LoginDTO): Promise<false | Usuario> => {
    const usuario = await prisma.usuario.findUnique({ where: { email } })
    //console.log(usuario)
    if(!usuario) return false
    //console.log(senha, usuario.senha)
    const ok = await compare(senha, usuario.senha)
    //console.log(ok)
    if (ok) return usuario
    return false 
}

export default checkCredentials;