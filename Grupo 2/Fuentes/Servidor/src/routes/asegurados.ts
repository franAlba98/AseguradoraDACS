import {Router} from 'express';
import AseguradoController from '../controllers/asegurado.controllers';
import { verificaToken } from '../middlewares/autenticacion';
const router = Router();
const controller = new AseguradoController;

router.get('/', controller.getAll);
router.get('/:idAsegurado', verificaToken, controller.getById);

export default router;