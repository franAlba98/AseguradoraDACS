import {Router} from 'express';
import SiniestroController from '../controllers/siniestro.controllers';
import multer from 'multer';
import { verificaToken } from '../middlewares/autenticacion';
const upload = multer({
    dest: 'images'
});
const router = Router();
const controller = new SiniestroController;

router.get('/',verificaToken, controller.getAll);
router.get('/infoUser',verificaToken,controller.infoCurrentUser);
router.get('/info',verificaToken,controller.info);
router.get('/infoSingle/:idSiniestro',verificaToken,controller.infoSingle);
router.get('/:idSiniestro',verificaToken, controller.getById);
router.post('/',verificaToken,upload.array('upload'),controller.new);
router.put('/:idSiniestro',verificaToken,controller.change);
//router.post('/upload/:idSiniestro',verificaToken,upload.array('upload'),controller.upload);

export default router;