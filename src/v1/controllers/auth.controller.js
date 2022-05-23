import BaseController from './base.controller';
import Forbidden from './../errors/Forbidden';
export default class UserController extends BaseController {
  constructor(Server) {
    super(Server);
}

  async login(req, res) {
    await super.ensureOperation(req, res, async () => {
      res.send({email, password});
    });
  }
}
