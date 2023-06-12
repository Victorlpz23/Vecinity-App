require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const createError = require('http-errors');
const helmet = require('helmet');
const mongoose = require('mongoose');
const secure = require('./middlewares/secure.mid');
const cors = require('./config/cors.config');

// Load configuration
require('./config/db.config');


const app = express();
app.use(express.static(__dirname + "/public"));
app.use(cors);
app.use(helmet());
app.use(logger('dev'));



app.use(express.json());
app.use(secure.removeId);



const api = require('./config/routes.config');
app.use('/api/v1', api);

app.get("/*", (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

// Error Handling
app.use((req, res, next) => next(createError(404, 'Route not found')));

app.use((error, req, res, next) => {
  console.error(error);
  if (error instanceof mongoose.Error.ValidationError) {
    error = createError(400, error);
  } else if (
    error instanceof mongoose.Error.CastError &&
    error.path === "_id"
  ) {
    const resourceName = error.model().constructor.modelName;
    error = createError(404, `${resourceName} not found`);
  } else if (error.message.includes("E11000")) {
    // Duplicate keys
    Object.keys(error.keyValue).forEach((key) => error.keyValue[key] = 'Already exists');
    error = createError(409, { errors: error.keyValue });
  } else if (!error.status) {
    error = createError(500, error);
  }
  console.error(error);

  const data = {
    message: error.message,
  };

  if (error.errors) {
    const errors = Object.keys(error.errors).reduce((errors, errorKey) => {
      errors[errorKey] = error.errors[errorKey]?.message || error.errors[errorKey];
      return errors;
    }, {});
    data.errors = errors;
  }

  res.status(error.status).json(data);
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.info(`Application is running at port ${port}`));
