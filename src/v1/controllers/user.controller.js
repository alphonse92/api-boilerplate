import BaseController from './base.controller';

export default class UserController extends BaseController {
  constructor(Server) {
    super(Server);
  }

  async get(req, res) {
    await super.ensureOperation(req, res, async () => {
      res.send('ok');
    });
  }

  async list(req, res) {
    await super.ensureOperation(req, res, async () => {
      res.send('ok');
    });
  }

  async save(req, res) {
    await super.ensureOperation(req, res, async () => {
      res.send('ok');
    });
  }

  async update(req, res) {
    await super.ensureOperation(req, res, async () => {
      res.send('ok');
    });
  }

  async delete(req, res) {
    await super.ensureOperation(req, res, async () => {
      res.send('ok');
    });
  }
}
