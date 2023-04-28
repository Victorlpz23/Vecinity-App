const Community = require('../models/community.model');
const createError = require('http-errors');



module.exports.exists = (req, res, next) => {
  const communityId = req.params.communityId || req.params.id 
  Community.findById(communityId)
    .populate('claims')
    .populate('neighbours')
    .populate('manager')
    .populate('forumTopics')
    .populate('forumComments')
    .populate('events')
    .populate('contacts')
    .populate('reservations')
    .then((community) => {
      if (community) {
        req.community = community;
        next();
      } else {
        next(createError(404, 'Community not found'));
      }
    })
    .catch(next);
};

module.exports.checkManager = (req, res, next) => {
  if (req.user.id !== req.community.manager.id) {
    next(createError(403, "Forbidden"));
  } else {
    next();
  }
};