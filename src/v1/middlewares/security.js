import {Server} from '../../server';

export const getAllowAppIdMiddleware = (req, res, next) => {
  const {CLIENT_APP_ID} = Server.getInstance().getConfig();
  const appId = req.header('x-application-id');
  if (appId !== CLIENT_APP_ID) return res.status(401).send('Unauthorized app');
  return next();
};
