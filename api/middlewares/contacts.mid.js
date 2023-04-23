const Contact = require('../models/contact.model');
const createError = require('http-errors');

module.exports.exists = (req, res, next) => {
  const contactId = req.params.contactId || req.params.id
  Contact.findById(contactId)
    .then((contact) => {
      if (contact) {
        req.contact = contact;
        next();
      } else {
        next(createError(404, 'Contact not found'))
      }
    })
    .catch(next);
}


