const Event = require('../models/event.model');
const createError = require('http-errors');


module.exports.exists = (req, res, next) => {
  const eventId = req.params.eventId || req.params.id;
  Event.findById(eventId)
    .then((event) => {
      if (event) {
        req.event = event;
        next();
      } else {
        next(createError(404, 'Event not found'));
      }
    })
    .catch(next);
};

