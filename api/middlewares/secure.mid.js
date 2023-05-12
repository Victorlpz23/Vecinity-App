const User = require('../models/user.model');
const createError = require('http-errors');
const jwt = require('jsonwebtoken');
const Community = require('../models/community.model');


module.exports.removeId = (req, res, next) => {
  if (req.body) {
    delete req.body._id;
    delete req.body.confirm;
  }
  next();
};


module.exports.auth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")?.[1];
  console.log(token)

  if (!token) {
    return next(createError(401, "Missing access token"));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    User.findById(decoded.sub)
      .populate('community')
      .then((user) => {
        if (user) {
          req.user = user;
          next();
        } else {
          next(createError(401, "User not found"));
        }
      })
      .catch(next);

  } catch (err) {
    next(createError(401, "Invalid token"));
  }
};



// Middleware to know the role of the user
module.exports.checkRole = (role) => {
  return (req, res, next) => {
    if (req.user?.role === role) {
      next();
    } else {
      next(createError(403, "Forbidden"))
    }
  };
};


module.exports.isManager = (req, res, next) => {
  Community.findById(req.params.id)
    .then((community) => {
      if (req.user?.id === community.manager?.toString()) {
        next();
      } else {
        next(createError(403, "Forbidden"))
      }
    }).catch(next);
};
