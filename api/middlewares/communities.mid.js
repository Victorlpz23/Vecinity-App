const Community = require('../models/community.model');
const createError = require('http-errors');



module.exports.exists = (req, res, next) => {
  const communityId = req.params.communityId || req.params.id 
  Community.findById(communityId)
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