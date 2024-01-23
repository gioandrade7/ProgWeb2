import express, { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import validateEnv from './utils/validateEnv';
import { readFile, writeFile } from 'fs/promises';

dotenv.config();
validateEnv();

const app = express();
const PORT = process.env.PORT || 3333;
const mode = process.argv[2];
const LOGS = process.env.LOGS;

let text: string;

app.use(async (req: Request, res: Response, next: NextFunction) => {
  console.log(`Requisição ${req.method} ${req.url} mode: ${mode}\n`);
  text = await (await readFile(`${LOGS}/logs.txt`)).toString();
  next();
});

app.use(async (req, res, next: NextFunction) => {
  if (mode === 'simples') {
    const date: string = new Date().toISOString();
    text += `hora de acesso: ${date}, url: ${req.url}, método: ${req.method}\n`;
    writeFile(`${LOGS}/logs.txt`, text);
  } else if (mode === 'completo') {
    const date: string = new Date().toISOString();
    text = `\nhora de acesso: ${date}, url: ${req.url}, método: ${req.method}, tipo HTTP: ${req.httpVersion}, User-Agent: ${req.get('User-Agent')}\n`;
    writeFile(`${LOGS}/logs.txt`, text);
  }
  next();
});

app.use('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(PORT, () => {
  console.log(`Express app iniciada na porta ${PORT}.`);
});
