const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./database/Connection');
const routerGames = require('./Routes/games');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', routerGames);

connection
  .authenticate()
  .then(() => console.log('conexao efetuada com sucesso'))
  .catch((error) => console.log(error));

app.listen(3000, () => {
  console.log('server running');
});
