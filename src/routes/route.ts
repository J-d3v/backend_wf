import { Router } from 'express';
import { AuthHandler } from '../handler/handler';
import { AuthController } from '../controller/control';
import { UserService } from '../db/visitantes';

const router = Router();
const userService = new UserService();
const authController = new AuthController(userService);
const authHandler = new AuthHandler(authController);

// Ruta para el inicio de sesión
router.post('/login', authHandler.loginHandler.bind(authHandler));

export default router;