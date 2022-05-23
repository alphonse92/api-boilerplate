import {HttpError} from '../errors/HttpError';

export default class BaseController {
  constructor(Server) {
    this.Server = Server;
  }
  get(req, res) {
    res.send('Method not implemented yet.');
  }
  list(req, res) {
    res.send('Method not implemented yet.');
  }
  save(req, res) {
    res.send('Method not implemented yet.');
  }
  update(req, res) {
    res.send('Method not implemented yet.');
  }
  delete(req, res) {
    res.send('Method not implemented yet.');
  }

  async ensureOperation(req, res, errorPruneOp) {
    try {
      await errorPruneOp();
    } catch (e) {
      const {status = 500, message} = e;
      if (e instanceof HttpError) {
        res.status(status).send(message);
      } else {
        console.log(e);
        res.send('Unexpected error');
      }
    }
  }
}
