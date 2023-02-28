import { Router } from 'express';
import * as homeController from './controllers/home';
import * as errorMiddlewares from './middlewares/errors';
const router = Router();

router.get('/', homeController.handleIndex);
router.use(errorMiddlewares.notFoundHandler)
router.use(errorMiddlewares.errorHandler);

export default router;