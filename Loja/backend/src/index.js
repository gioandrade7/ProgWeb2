const express = require("express")
require("dotenv").config()

const PORT = process.env.PORT ?? 4455
const app = express()

app.get("/", (req, res) => {
    res.send("Bem-vindo(a) à turma de PW2 d !")
})

app.listen(PORT, () => {
    console.log(`API rodando na porta ${PORT}`)
})