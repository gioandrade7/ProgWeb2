FROM node:20-alpine

WORKDIR /app

COPY package.json ./

RUN npm install

RUN chown -R node.node /app

COPY . .

EXPOSE 3333
RUN chmod 777 node_modules
CMD ["sh", "./start.sh"]