const jwt = require('jsonwebtoken');
const { verify } = require('jsonwebtoken');

function authJwt(req, res, next) {
  const authToken = req.headers.authorization;

  if (authToken != undefined) {
    const bearer = authToken.split(' ');
    const token = bearer[1];

    jwt.verify(token, process.env.JWT_SECRET, (error, data) => {
      if (error) {
        res.status(400);
        res.json({ error: 'Invalid Token' });
        return null;
      }
      res.status(200);
      req.token = token;
      req.loggedUsser = { id: data.id, email: data.email };
      next();
    });
    return null;
  }
  res.status(401);
  res.json({ error: 'invalid token' });
}

module.exports = authJwt;
