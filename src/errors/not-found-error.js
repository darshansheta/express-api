const httpStatus = require('http-status');
const APIError = require('./api-error');

class NotFoundError extends APIError {
    constructor(message = 'Not Found') {
      super({message, status: httpStatus.NOT_FOUND});
    }
  }

module.exports = NotFoundError;