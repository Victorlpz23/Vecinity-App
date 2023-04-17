require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const createError = require('http-errors');

const app = express();

app.use(logger('dev'));

// Error Handling
app.use((req, res, next) => next(createError(404, 'Route not found')));

app.use((error, req, res, next) => {
  if (!error.status) {
    createError(500, error)
  }

  const data = {
    message: error.message
  }
  console.error(error)

  res.status(error.status)
    .json(data)
});


const port = process.env.PORT || 3001;
app.listen(port, () => console.info(`Application is running at port ${port}`))
