import express from 'express';
import dotenv from 'dotenv';
import validateEnv from './utils/validateEnv';
import morgan from 'morgan';
import router from './router';

dotenv.config();
validateEnv();

const app = express();
const PORT = process.env.PORT || 4455;

app.use(morgan('combined'));
app.use(express.json())
app.use(router);

app.use('/img', express.static(`${__dirname}/../public/img`));

app.listen(PORT, () => {
  console.log(`Express app iniciada na porta ${PORT}.`);
});
