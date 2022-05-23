import {Router as expresRouter} from 'express';
import AuthController from '../controllers/auth.controller';

export default function createUserRoutes(Server) {
  const router = expresRouter();

  const controller = new AuthController(Server);

  router.post('/login', controller.login.bind(controller));

  return router;
}
