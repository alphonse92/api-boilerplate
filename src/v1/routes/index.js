import {Router as expresRouter} from 'express';
import makeUserRoutes from './users.routes';
import makeAuthRoutes from './auth.routes';

export default function initRoutes(Server) {
  const root = expresRouter();
  root.use('/v1', makeAuthRoutes(Server));
  root.use('/v1', makeUserRoutes(Server));
  return root;
}
