import {HttpError} from './HttpError';

export default class Forbidden extends HttpError {
  constructor(message = 'invalid parameters') {
    super(message);
    this.status = 403;
  }
}
