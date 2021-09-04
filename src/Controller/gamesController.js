const Games = require('../Models/Games');

const get_games = (req, res) => {
  Games.findAll()
    .then((games) => {
      res.statuscocode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(makeJson(games));
    })
    .catch((error) => {
      res.statuscocode = 404;
      res.render('<h1>Resultados nao encontrados</h1>');
    });
};

const get_game_id = (req, res) => {
  const id = req.params.id;
  if (isNaN(id)) {
    res.sendStatus(400);
  } else {
    Games.findByPk(id)
      .then((game) => {
        if (game) {
          res.statuscocode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.end(makeJson(game));
        } else {
          res.sendStatus(404);
        }
      })
      .catch((error) => {
        res.send(500);
      });
  }
};

const post_game = (req, res) => {
  const { title, year, price } = req.body;
  Games.create({
    title: title,
    year: year,
    price: price,
  })
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(400));
};

const delete_game = (req, res) => {
  const id = req.params.id;
  if (isNaN(id)) {
    res.sendStatus(400);
  } else {
    Games.destroy({
      where: {
        id: id,
      },
    })
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(400));
  }
};

const put_game = (req, res) => {
  const id = req.params.id;
  if (isNaN(id)) {
    res.sendStatus(400);
  } else {
    Games.update(req.body, { where: { id: id } })
      .then(() => res.sendStatus(200))
      .catch((error) => res.sendStatus(404));
  }
};

function makeJson(data) {
  return JSON.stringify(data, null, 4);
}

module.exports = {
  get_games,
  get_game_id,
  post_game,
  delete_game,
  put_game,
};
