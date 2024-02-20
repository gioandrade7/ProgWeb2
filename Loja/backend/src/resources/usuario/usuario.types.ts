import { Usuario } from "@prisma/client";

export type CreateUsuarioDTO = Pick<Usuario, 'nome' | 'email' | 'senha' | 'tipoUsuarioId'>

export type UpdateUsuarioDTO = Pick<Usuario, 'nome' | 'email' | 'senha' | 'tipoUsuarioId'>