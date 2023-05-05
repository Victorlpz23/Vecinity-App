const Claim = require('../models/claim.model');

module.exports.list = (req, res, next) => {
  Claim.find({ community: req.params.id })
    .populate('author')
    .populate('community')
    .then((claims) => res.json(claims))
    .catch(next);
};


module.exports.create = (req, res, next) => {
  console.log(req.body)
  req.body.community = req.user.community
  req.body.author = req.user.id
  Claim.create(req.body)
    .then((claim) => res.status(201).json(claim))
    .catch(next);
};


module.exports.detail = (req, res, next) => res.json(req.claim);


module.exports.update = (req, res, next) => {
  Object.assign(req.claim, req.body);
  req.claim.save()
    .then((claim) => res.json(claim))
    .catch(next);
};


module.exports.delete = (req, res, next) => {
  Claim.deleteOne({ _id: req.claim.id })
    .then(() => res.status(204).send())
    .catch(next);
};


