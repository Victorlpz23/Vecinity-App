const User = require('../models/user.model');
const mailer = require('../config/mailer.config');
const createError = require('http-errors');
const jwt = require('jsonwebtoken');
const Community = require('../models/community.model');

module.exports.list = (req, res, next) => {
  User.find()
    .then((users) => res.json(users))
    .catch(next);
};


module.exports.create = (req, res, next) => {
   User.create(req.body)
    .then((user) => {
      // mailer.sendConfirmationEmail(user);
      res.status(201).json(user);
    })
    .catch(next);
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
  if (req.user.id !== req.params.userId) {
    return next(createError(403, "Forbidden"));
  }

  Object.assign(req.user, req.body);
  req.user.save()
    .then((user) => res.json(user))
    .catch(next);
};



module.exports.delete = (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(createError(403, "Forbidden"));
  }

  User.deleteOne({ _id: req.user.id })
    .then(() => res.status(204).send())
    .catch(next);
};


module.exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user || !req.body.password) {
        return next(createError(401, { errors: { password: 'Invalid Credentials' }}));
      }

      if (!user.confirm) {
        return next(createError(401, { errors: { email: 'Please Confirm your account' }}));
      }

      user.checkPassword(req.body.password)
        .then((match) => {
          if (!match) {
            return next(createError(401, { errors: { password: 'Invalid Credentials' }}));
          }

          const token = jwt.sign({ sub: user.id, exp: Date.now() / 1000 + 3_600 }, process.env.JWT_SECRET);
          res.json({ token, ...user.toJSON() });
        });
    })
    .catch(next);
};