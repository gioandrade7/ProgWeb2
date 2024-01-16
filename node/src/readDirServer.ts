import {readdir} from  "fs/promises"
import { createServer } from "http"

const DIR = process.argv[2] || "./public"

const server = createServer( async (req, res) => {
    const files = await readdir(DIR);
    res.writeHead(200, { "Content-Type":"text/html;charset=utf-8" })
    res.write(files.join("<br>"))
    res.end()
})

server.listen(3333)