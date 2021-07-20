import {Router} from 'express';
import EstadoSiniestroController from '../controllers/estadoSiniestro.controllers';
import { verificaToken } from '../middlewares/autenticacion';
const router = Router();
const controller = new EstadoSiniestroController;

router.get('/', controller.getAll);
router.get('/:idEstadoSiniestro', verificaToken, controller.getById);

export default router;