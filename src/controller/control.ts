import { Request, Response } from 'express';
import { UserService } from '../db/visitantes';

export class AuthController {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  async login(req: Request, res: Response) {
    const { usuario, contrasena } = req.body;

    try {
      const user = await this.userService.getUserByCredentials(usuario, contrasena);

      if (user) {
        return res.status(200).json({
          nombreCompleto: user.nombre,
          numeroBoleto: user.boleto,
        });
      } else {
        return res.status(401).json({ message: 'No se pudo iniciar sesión. Usuario o contraseña incorrectos.' });
      }
    } catch (error) {
      console.error('Error during login:', error);
      return res.status(500).json({ message: 'Server error during login' });
    }
  }
}