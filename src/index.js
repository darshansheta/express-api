const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const { notFound, errorHandler } = require('./middlewares');
require('dotenv').config();

const user = require('./models/user.model.js');

const db = require('./db.js');

db.authenticate().then(() => {
    console.log('Database connected...');
}).catch(err => {
    console.log('Error: ' + err);
});


const app = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});