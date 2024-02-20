import { cleanEnv, num, port, str } from 'envalid';

const validateEnv = () => {
    cleanEnv(process.env, {
        NODE_ENV: str(),
        PORT: port(),
        SALT_ROUNDS: num()
    });
};

export default validateEnv;