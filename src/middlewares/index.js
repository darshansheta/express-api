// TODO: create centeral middleware so that we dont need to write try catch in for each controllers method
// function notFound(req, res, next) {
//     res.status(404);
//     const error = new Error('Not Found', req.originalUrl);
//     next(error);
// }

const notFound = require('./not-found-error');
const BadRequestError = require('./validate-json');

const errorHandler = require('./error');

module.exports = {
    notFound,
    errorHandler,
    BadRequestError
}