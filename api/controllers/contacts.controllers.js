const Contact = require("../models/contact.model");

module.exports.list = (req, res, next) => {
  Contact.find()
    .then((contact) => res.json(contact))
    .catch(next);
};

module.exports.create = (req, res, next) => {
  Contact.create(req.body)
    .then((contact) => res.status(201).json(contact))
    .catch(next);
};

module.exports.detail = (req, res, next) => res.json(req.contact);

module.exports.update = (req, res, next) => {
  Object.assign(req.contact, req.body)
  req.community.save()
    .then((contact) => res.json(contact))
    .catch(next)
}

module.exports.delete = (req, res, next) => {
  Contact.deleteOne({ _id: req.contact.id })
    .then(() => res.status(204).send())
    .catch(next);
}