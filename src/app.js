const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const { notFound, errorHandler } = require('./middlewares');
const routes = require('./routes');
// const db = require('./db.js');

// db.authenticate().then(() => {
//     console.log('Database connected...');
// }).catch(err => {
//     console.log('Error: ' + err);
// });


const app = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(routes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;