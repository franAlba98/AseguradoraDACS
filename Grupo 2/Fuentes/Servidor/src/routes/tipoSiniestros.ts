import { Router } from 'express';
import TipoSiniestroController from '../controllers/tipoSiniestro.controllers';
import { verificaToken } from '../middlewares/autenticacion';
const router = Router();

const controller = new TipoSiniestroController();
router.get('/', verificaToken, controller.getAll);
router.get('/:idTipoSiniestro', verificaToken, controller.getById);
router.get('/:idTipoSiniestro/coberturas', verificaToken, controller.getCoberturas);
export default router;