const { UniqueConstraintError, ValidationError, AggregateError } = require('sequelize');
const logger = require('../logger');
const APIError = require('../errors/api-error');
const NotFoundError = require('../errors/not-found-error');

module.exports = async (error, req, res, next) => {
    logger.error(error);
    // catch db error
    if (error instanceof UniqueConstraintError) {
      return res.status(400).send({
        error: {
          code: 400,
          message: `duplicate_${error.parent.constraint}`
        }
      });
    }
    if (error instanceof ValidationError) {
      return res.status(400).send({
        error: {
          code: 400,
          message: error.message
        }
      });
    }
    if (error instanceof AggregateError) {
      return res.status(400).send({
        error: {
          code: 400,
          message: error.errors[0].errors.errors[0].message
        }
      });
    }

    // this will also work but we dont need as we already added APIError if case
    // if (error instanceof NotFoundError) {
    //   return res.status(404).send({
    //     error: {
    //       code: 404,
    //       message: 'darshn'
    //     }
    //   });
    // }

    // catch api error
    if (error instanceof APIError) {
        return res.status(error.status).send({
          error: {
            code: error.status,
            message: error.message
          }
        });
      }
  
    // connect all errors
    return res.status(500).send({
      error: {
        code: 500,
        message: error
      }
    });
  };