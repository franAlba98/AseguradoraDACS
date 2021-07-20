import {Router} from 'express';
import UsuarioController from '../controllers/usuario.controllers'
import { verificaToken } from '../middlewares/autenticacion';
const router = Router();
const controller = new UsuarioController;

router.post('/login',controller.login);
router.post('/google',controller.google);
router.post('/registrar',controller.new);
router.get('/', verificaToken, controller.getAll);
router.get('/:idUsuario', verificaToken, controller.getById);
export default router;