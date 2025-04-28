import { Request, Response } from 'express';
import { AuthController } from '../controller/control';

export class AuthHandler {
  private authController: AuthController;

  constructor(authController: AuthController) {
    this.authController = authController;
  }

  async loginHandler(req: Request, res: Response) {
    await this.authController.login(req, res);
  }
}