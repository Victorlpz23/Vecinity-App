const Event = require('../models/event.model');

module.exports.list = (req, res, next) => {
  Event.find({ community: req.params.id })
    .then((events) => res.json(events))
    .catch(next);
};


module.exports.create = (req, res, next) => {
  req.body.community = req.user.community
  Event.create(req.body)
    .then((event) => res.status(201).json(event))
    .catch(next);
};


module.exports.detail = (req, res, next) => res.json(req.event);



module.exports.update = (req, res, next) => {
  Object.assign(req.event, req.body);
  req.event.save()
    .then((event) => res.json(event))
    .catch(next);
};


module.exports.delete = (req, res, next) => {
  Event.deleteOne({ _id: req.event.id })
    .then(() => res.status(204).send())
    .catch(next);
};


