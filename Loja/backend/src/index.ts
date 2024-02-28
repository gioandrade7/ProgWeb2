import express from 'express';
import dotenv from 'dotenv';
import morgan from "morgan";
import cookieParser from 'cookie-parser';
import { v4 as uuidv4} from "uuid"
import session from 'express-session';
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger-output.json";

import validateEnv from "./utils/validateEnv";
import router from "./router";
import setCookieLang from './middlewares/setCookieLanguage';
import { CompraItem } from '@prisma/client';
import { AddProdutoDTO } from './resources/compra/compra.types';


declare module "express-session" {
  interface SessionData {
    uid: string;
    tipoUsuarioId: string
    carrinho: AddProdutoDTO[]
  }
}

dotenv.config();
validateEnv();

const app = express();
const PORT = process.env.PORT || 4455;

app.use(morgan('combined'));
app.use(express.json())
app.use(cookieParser())
app.use(setCookieLang)
app.use(
  session({
    genid: (req) => uuidv4(),
    secret: "Hi9Cf#mK9Dm#@SmA76#4MP2sm@18",
    resave: true,
    saveUninitialized: true
  })
);

app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(router);

app.use('/img', express.static(`${__dirname}/../public/img`));

app.listen(PORT, () => {
  console.log(`Express app iniciada na porta ${PORT}.`);
});
