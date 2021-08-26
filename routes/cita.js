import routerx from 'express-promise-router';
import citaController from '../controllers/CitaController';

const router = routerx();

router.post('/add', citaController.add);

router.get('/list', citaController.list);

router.get('/query', citaController.query);

router.put('/update', citaController.update);

router.delete('/remove', citaController.remove);


export default router;