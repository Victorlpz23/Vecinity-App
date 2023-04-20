const User = require('../models/user.model');
const mailer = require('../config/mailer.config');
const createError = require('http-errors');

module.exports.list = (req, res, next) => {
  User.find()
    .then((users) => res.json(users))
    .catch(next);
};


module.exports.create = (req, res, next) => {
  User.create(req.body)
    .then((user) => {
      mailer.sendConfirmationEmail(user);
      res.status(201).json(user);
    })
    .catch(next);
};

module.exports.join = (req, res, next) => {
  // TODO
};

module.exports.confirm = (req, res, next) => {
  req.user.confirm = true;

  req.user
    .save()
    .then((user) => {
      res.redirect(`${process.env.WEB_URL}/login`);
    })
    .catch(next);
};


module.exports.detail = (req, res, next) => res.json(req.user);


module.exports.update = (req, res, next) => {
  Object.assign(req.user, req.body);
  req.user.save()
    .then((user) => res.json(user))
    .catch(next);
};



module.exports.delete = (req, res, next) => {
  User.deleteOne({ _id: req.user.id })
    .then(() => res.status(204).send())
    .catch(next);
};


module.exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return next(createError(401, "Invalid credentials"));
      }

      user.checkPassword(req.body.password)
        .then((match) => {
          if (!match) {
            return next(createError(401, "Invalid credentials"));
          }

          res.json(user);
        });
    })
    .catch(next);
};