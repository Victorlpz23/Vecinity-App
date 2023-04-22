const Community = require('../models/community.model');

module.exports.list = (req, res, next) => {
  Community.find()
    .populate('claims')
    .populate('neighbours')
    .populate('manager')
    .then((communities) => res.json(communities))
    .catch(next);
};



module.exports.create = (req, res, next) => {
  let code = Math.random().toString(36).substring(0, 6);       

  req.body.manager = req.user.id;
  req.body.code = code
  Community.create(req.body)
    .then((community) => res.status(201).json(community))
    .catch(next);
};


module.exports.detail = (req, res, next) => res.json(req.community);


module.exports.update = (req, res, next) => {
  Object.assign(req.community, req.body);
  req.community.save()
    .then((community) => res.json(community))
    .catch(next);
};



module.exports.delete = (req, res, next) => {
  Community.deleteOne({ _id: req.community.id })
    .then(() => res.status(204).send())
    .catch(next);
};