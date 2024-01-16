import {readFile, readdir} from  "fs/promises"
import { createServer } from "http"
import {config as dotenvConfig} from "dotenv"
import {createLink, valor} from "./utils/links"

dotenvConfig();
const PORT = process.env.PORT ?? 3333 
const DIR = process.env.DIR ?? "./public"

const server = createServer( async (req, res) => {
    const files = await readdir(DIR);

    if(req.url === "/"){
        res.write(files.map(file => createLink(file)).join(""))
        res.end()
    }
    else if(req.url === '/favicon.ico'){
        res.end()
    }
    else{ 
        const content = await readFile(`${DIR}${req.url}`)
        res.end(content)
    }
})

server.listen(PORT, ()=>{
    console.log(`Aplicação rodando na porta ${PORT}`)
})