import { verify } from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

class AuthJwt {
  public authorizeJWT(req: Request, res: Response, next: NextFunction): void {
    let JWT = req.headers.authorization;
    JWT = JWT.split(' ')[1];
    if (JWT) {
      verify(JWT, process.env.JWT_SECRET, (error) => {
        if (error) {
          res.status(400);
          res.json({ error: 'Invalid Token' });
          return null;
        }
        res.status(200);
        next();
      });
    } else {
      res.status(401);
      res.json({ error: 'invalid token' });
    }
  }
}

export default AuthJwt;
