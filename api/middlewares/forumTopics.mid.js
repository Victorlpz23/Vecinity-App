const ForumTopic = require('../models/forumTopic.model');
const createError = require('http-errors');


module.exports.exists = (req, res, next) => {
  const forumTopicId = req.params.forumTopicId || req.params.id;
  ForumTopic.findById(forumTopicId)
    .populate('author')
    .then((forumTopic) => {
      if (forumTopic) {
        req.forumTopic = forumTopic;
        next();
      } else {
        next(createError(404, 'Forum Topic not found'));
      }
    })
    .catch(next);
};

module.exports.checkAuthor = (req, res, next) => {
  if (req.forumTopic.author.toString() !== req.user.id.toString()) {
    next(createError(403, "Forbidden"));
  } else {
    next();
  }
};