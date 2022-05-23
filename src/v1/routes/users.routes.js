import {Router as expresRouter} from 'express';
import UserController from '../controllers/user.controller';

export default function createUserRoutes(Server) {
  const router = expresRouter();

  const controller = new UserController(Server);

  router.get('/users/', controller.list.bind(controller));

  return router;
}
