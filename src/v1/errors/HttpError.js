export class HttpError extends Error {
  constructor(message = 'Http error.') {
    super(message);
    this.status = 500;
  }
}
