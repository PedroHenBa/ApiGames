import { Request, Response } from 'express';
import { UserAttributes } from '../interfaces/User';
import { Users } from '../Models/Users';
import { sign } from 'jsonwebtoken';

export class UsersControllers {
  async userAuth(req: Request, res: Response): Promise<void> {
    const { email, password }: UserAttributes = req.body;
    const user = await Users.findOne({ where: { email } });
    if (!user) {
      res.status(404).json({ status: 'email invalid' });
      return null;
    }
    if (user.password === password) {
      sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        {
          expiresIn: '2h',
        },
        (error, token) => {
          if (error) {
            res.status(500).json({ error: 'Error generating token' });
          } else {
            res.status(200).json({ token });
          }
        },
      );
    } else {
      res.status(401).json('password invalid');
    }
  }
}
