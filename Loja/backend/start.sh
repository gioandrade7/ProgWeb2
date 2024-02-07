if [ "$NODE_ENV" = "production" ]; then
  echo "API inicializada em ambiente de produção"
  npm stard:prod
else
  echo "API inicializada em ambiente de desenvolvimento"
  npm run start
fi