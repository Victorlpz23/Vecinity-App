const Community = require('../models/community.model');
const createError = require('http-errors');

module.exports.list = (req, res, next) => {
  Community.find()
    .then((communities) => res.json(communities))
    .catch(next);
};


module.exports.create = (req, res, next) => {
  Community.create(req.body)
    .then((community) => res.status(201).json(community))
    .catch(next);
};



module.exports.detail = (req, res, next) => {
  Community.findById(req.params.id)
    .then((community) => {
      if (!community) {
        next(createError(404, 'Community not found'));
      } else {
        res.json(community);
      }
    })
    .catch(next);
};


module.exports.update = (req, res, next) => {
  Community.findByIdAndUpdate(req.params.id, req.body, { runValidators: true, new: true })
    .then((community) => {
      if (!community) {
        next(createError(404, 'Community not found'));
      } else {
        res.json(community);
      }
    });
};



module.exports.delete = (req, res, next) => {
  Community.findByIdAndDelete(req.params.id)
    .then((community) => {
      if (!community) {
        next(createError(404, 'Community not found'));
      } else {
        res.status(204).send();
      }
    })
    .catch(next);
};