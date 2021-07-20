import {Router} from 'express';
import MensajeController from '../controllers/mensaje.controllers';
import { verificaToken } from '../middlewares/autenticacion';
const router = Router();
const controller = new MensajeController;

router.get('/', verificaToken, controller.getAll);
router.get('/:idMensaje', verificaToken, controller.getById);
router.get('/entrada/:idUsuarioReceptor', verificaToken, controller.getByIdReceptor);
router.get('/salida/:idUsuarioEmisor', verificaToken, controller.getByIdEmisor);
router.post('/', verificaToken,controller.new);
router.put('/:idMensaje', verificaToken,controller.change);

export default router;