import { Router } from 'express';
import VehiculoController from '../controllers/vehiculo.controllers';
import { verificaToken } from '../middlewares/autenticacion';
const router = Router();

const controller = new VehiculoController();
router.get('/', verificaToken, controller.getAll);
router.get('/:idVehiculo', verificaToken, controller.getById);

export default router;