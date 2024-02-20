import { Usuario } from "@prisma/client";

export type SingupDTO = Pick<Usuario, "nome" | "email" | "senha">;
export type LoginDTO = Pick<Usuario, "email" | "senha">