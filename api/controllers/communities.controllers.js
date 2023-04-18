const Community = require('../models/community.model');

module.exports.list = (req, res, next) => {
 Community.find()
  .then((communities) => res.json(communities))
  .catch(next)
}


module.exports.create = (req, res, next) => {
  Community.create(req.body)
    .then((community) => res.status(201).json(community))
    .catch(next)
}



module.exports.detail = (req, res, next) => {

}


module.exports.update = (req, res, next) => {

}



module.exports.delete = (req, res, next) => {

}