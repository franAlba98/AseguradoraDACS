import {Router} from 'express';
import DetalleSiniestroController from '../controllers/detalleSiniestro.controllers';
import { verificaToken } from '../middlewares/autenticacion';
const router = Router();
const controller = new DetalleSiniestroController;

router.get('/', verificaToken, controller.getAll);
router.get('/:idDetalleSiniestro', verificaToken, controller.getById);
router.post('/', verificaToken,controller.new);
router.put('/:idDetalleSiniestro', verificaToken,controller.change);

export default router;