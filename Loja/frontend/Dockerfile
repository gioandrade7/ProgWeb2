FROM node:20-alpine

WORKDIR /app

COPY package.json ./

RUN npm install
RUN mkdir -p app/.next && chmod -R 777 app/.next

RUN chown -R node.node /app 

COPY ./ ./

EXPOSE 4466
RUN chmod 777 node_modules
CMD [ "sh", "start.sh" ]