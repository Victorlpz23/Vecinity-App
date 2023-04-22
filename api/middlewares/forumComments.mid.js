const ForumComment = require('../models/forumComment.model');
const createError = require('http-errors');


module.exports.exists = (req, res, next) => {
  const forumCommentId = req.params.forumCommentId || req.params.id;
  ForumComment.findById(forumCommentId)
    .populate('author')
    .then((forumComment) => {
      if (forumComment) {
        req.forumComment = forumComment;
        next();
      } else {
        next(createError(404, 'Forum Topic not found'));
      }
    })
    .catch(next);
};

module.exports.checkAuthor = (req, res, next) => {
  if (req.forumComment.author.toString() !== req.user.id.toString()) {
    next(createError(403, "Forbidden"));
  } else {
    next();
  }
};