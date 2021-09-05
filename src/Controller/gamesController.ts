import { Request, Response } from 'express';
import { Games } from '../Models/Games';
import { GameAttributes } from '../interfaces/Game';

export class GamesController {
  async getGames(req: Request, res: Response): Promise<void> {
    const games = await Games.findAll();
    res.status(200).json(games);
  }

  async getGame(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const game = await Games.findByPk(id);
    if (!game) {
      res.sendStatus(404);
    } else {
      res.status(200).json(game);
    }
  }

  async createGame(req: Request, res: Response): Promise<void> {
    const { title, year, price }: GameAttributes = req.body;
    const result = await Games.create({ title, year, price });
    if (!result) {
      res.sendStatus(500);
    } else {
      res.status(200).json(result);
    }
  }

  async deleteGame(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const result = await Games.destroy({ where: { id } });
    console.log(result);
    if (!result) {
      res.sendStatus(404);
    } else {
      res.status(200).json({ status: 'game deleted' });
    }
  }

  async updateGame(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const updatedGame = await Games.update(req.body, { where: { id } });
    if (!updatedGame) {
      res.sendStatus(404);
    } else {
      res.status(200).json({ status: 'game updated' });
    }
  }
}
