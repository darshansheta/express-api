const express = require('express');
const logger = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const compress = require('compression');
const methodOverride = require('method-override');
const cors = require('cors');
const { notFound, errorHandler, BadRequestError } = require('./middlewares');
const routes = require('./routes');
const appConfig = require('./config/app');
const { requestLogger } = require('./logger');
const app = express();
// const db = require('./db.js');

// db.authenticate().then(() => {
//     console.log('Database connected...');
// }).catch(err => {
//     console.log('Error: ' + err);
// });

// error handler
require('express-async-errors');

app.use(requestLogger);



if (appConfig.env === 'development') {
  app.use(logger('dev'));
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(compress());
app.use(methodOverride());
app.use(helmet());

app.use(cors());

app.use(routes);

app.use(notFound);
app.use(errorHandler);
// app.use(BadRequestError);




module.exports = app;
