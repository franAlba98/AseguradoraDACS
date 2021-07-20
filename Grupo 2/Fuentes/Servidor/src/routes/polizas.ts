import {Router} from 'express';
import PolizaController from '../controllers/poliza.controllers';
import { verificaToken } from '../middlewares/autenticacion';
const router = Router();
const controller = new PolizaController;

router.get('/', verificaToken, controller.getAll);
router.get('/info', verificaToken,controller.info);
router.get('/:idPoliza', verificaToken, controller.getById);


export default router;