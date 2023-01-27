const APIError = require('../errors/api-error');

class BadRequestError extends APIError {
    constructor(message = 'Not Found') {
      super(404, message);
    }
  }

module.exports = async (err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
      throw new BadRequestError(err.message);
    }
    return next();
  };