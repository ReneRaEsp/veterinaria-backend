import routerx from 'express-promise-router';
import citaRouter from './cita';

const router=routerx();

router.use('/cita', citaRouter);

export default router;