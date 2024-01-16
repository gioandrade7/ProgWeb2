import {readFile, readdir} from  "fs/promises"
import { createServer } from "http"
import {config as dotenvConfig} from "dotenv"

dotenvConfig();
const PORT = process.env.PORT ?? 3333 
const DIR = process.env.DIR ?? "./public"

async function gerar_lorem( qtd: number) {
    let p = '';
    for (let i = 0; i < qtd; i++) {
        p += `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptas officia veniam debitis maxime deleniti iure tempora perferendis, hic unde totam modi. Ipsum obcaecati earum, totam itaque officiis quaerat dolor.</p>`
    }
    return p;
}

const server = createServer( async (req, res) => {

    const content = await readFile(`${DIR}/content.html`)
    res.write(content)
    
    if(req.url !== '/favicon.ico'){
        const qtd = req.url?.split("=")[1] ?? "0"
        res.write(await gerar_lorem(parseInt( qtd)))
    }
    res.end()
 
})

server.listen(PORT, ()=>{
    console.log(`Aplicação rodando na porta ${PORT}`)
})