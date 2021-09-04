import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

class AuthJwt {
  public authorizeJWT(req: Request, res: Response, next: NextFunction): void {
    const JWT = req.headers.authorization;
    if (JWT != undefined) {
      this.verifyJWT(res, next, JWT);
    }
    res.status(401);
    res.json({ error: 'invalid token' });
  }

  private verifyJWT(res: Response, next: NextFunction, JWT: string): void {
    jwt.verify(JWT, process.env.JWT_SECRET, (error) => {
      if (error) {
        res.status(400);
        res.json({ error: 'Invalid Token' });
        return null;
      }
      res.status(200);
      next();
    });
  }
}

export default AuthJwt;
