npm install 
if [ "$NODE_ENV" = "production" ]; then
  echo "Frontend inicializada em ambiente de produção"
  nm run build
  npm start
else
  echo "Frontend inicializada em ambiente de desenvolvimento"
  npm run dev
fi
