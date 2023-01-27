const NotFoundError = require('../errors/not-found-error');


module.exports = async (req, res) => {
    const errorMessage = `Not Found: ${req.method} on ${req.url}`;
    console.log('you came here')
    // res.status(404);
    // res.send({msg: 'not found'});
    throw new NotFoundError(errorMessage);
  };
