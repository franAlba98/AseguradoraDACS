import { Router } from 'express';
import AgenciaController from '../controllers/agencia.controllers';
import { verificaToken } from '../middlewares/autenticacion';
const router = Router();

const controller = new AgenciaController();
router.get('/', verificaToken, controller.getAll);
router.get('/:idAgencia', verificaToken, controller.getById);

export default router;