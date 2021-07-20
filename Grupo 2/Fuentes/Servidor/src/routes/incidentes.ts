import { Router } from 'express';
import IncidenteController from '../controllers/incidente.controllers';
import { verificaToken } from '../middlewares/autenticacion';
const router = Router();

const controller = new IncidenteController();
router.get('/', controller.getAll);
router.get('/:idIncidente', verificaToken, controller.getById);

export default router;