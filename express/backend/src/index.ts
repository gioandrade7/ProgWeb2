import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import validateEnv from './utils/validateEnv';

dotenv.config();
validateEnv();

const app = express();
const PORT = process.env.PORT || 3333;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World !');
});

app.listen(PORT, () => {
  console.log(`Aplicação rodando na porta ${PORT}.`);
});
