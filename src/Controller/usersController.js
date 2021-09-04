const Users = require('../Models/Users');
const jwt = require('jsonwebtoken');

const user_auth = async (req, res) => {
  const { email, password } = req.body;
  const user = await Users.findOne({ where: { email: email } });
  if (user?.password === password) {
    jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: '2h',
      },
      (error, token) => {
        if (error) {
          res.status = 500;
          res.json({ error: 'Error generating token' });
          return null;
        }
        res.status = 200;
        res.json({ token: token });
        return null;
      },
    );
    return null;
  }
  res.status = 401;
  res.json({ error: 'password invalid or email invalid' });
};

module.exports = {
  user_auth,
};
