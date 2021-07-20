import { Router } from 'express';
import CoberturaController from '../controllers/cobertura.controllers';
import { verificaToken } from '../middlewares/autenticacion';
const router = Router();

const controller = new CoberturaController();
router.get('/', controller.getAll);
router.get('/:idCobertura', controller.getById);
router.get('/:idCobertura/tiposiniestros', verificaToken,controller.getTipoSiniestros);

export default router;