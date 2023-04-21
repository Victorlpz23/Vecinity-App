const Claim = require('../models/claim.model');

module.exports.list = (req, res, next) => {
  Claim.find()
    .then((claims) => res.json(claims))
    .catch(next);
};


module.exports.create = (req, res, next) => {
  Claim.create(req.body)
    .then((claim) => res.status(201).json(claim))
    .catch(next);
};


module.exports.detail = (req, res, next) => res.json(req.claim);


module.exports.delete = (req, res, next) => {
  Claim.deleteOne({ _id: req.claim.id })
    .then(() => res.status(204).send())
    .catch(next);
};


