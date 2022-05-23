import BaseController from './base.controller';
import Forbidden from './../errors/Forbidden';

export default class UserController extends BaseController {
  constructor(Server) {
    super(Server);
  }

  async login(req, res) {
    await super.ensureOperation(req, res, async () => {
      const {email, password} = req.body;
      if (!email || !password) {
        throw new Forbidden();
      }

      res.send({email, password});
    });
  }
}
