module.exports.removeId = (req, res, next) => {
  if (req.body) {
    delete req.body._id;
  }
  next();
};