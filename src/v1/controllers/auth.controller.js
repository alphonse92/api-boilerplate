import BaseController from './base.controller';
import {login} from '../services/auth.service';
export default class UserController extends BaseController {
  constructor(Server) {
    super(Server);
  }

  async login(req, res) {
    await super.ensureOperation(req, res, async () => {
      const result = await login(req.body);
      res.send(result);
    });
  }
}
