import React, { FormEvent, useState } from 'react'
import {TextField} from '@mui/material'
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { SignUpDto } from '@/types/auth';
import api from '@/utils/api';
import { useRouter } from 'next/router';

function SignUp() {
    const [nome, setNome] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [senha, setSenha] = useState<string>("")

    const router = useRouter()
 
    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        const credenciais: SignUpDto = {nome: nome!, email: email!, senha: senha!}
        api.post("/signup", credenciais).
        then((data) => {
          router.push("/produto")
        })
    }

    return (
      <>
        <h1>Criação de Conta</h1>
        <form onSubmit={onSubmit}>
          <Box sx={{ mb: 2 }}>
            <TextField
              label="Nome"
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              label="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              label="Senha"
              required
              value={senha}
              type= "password"
              onChange={(e) => setSenha(e.target.value)}
            />
          </Box>
          <Button type="submit" variant="contained">
            Enviar
          </Button>
        </form>
      </>
    );


}

export default SignUp