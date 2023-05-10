const Reservation = require("../models/reservation.model");

module.exports.list = (req, res, next) => {
  Reservation.find({ community: req.params.id, author: req.user.id })
    .populate("author")
    .then((reservations) => {
      res.json(reservations);
    })
    .catch(next);
};

module.exports.detail = (req, res, next) => res.json(req.reservation);

module.exports.create = (req, res, next) => {
  req.body.community = req.user.community
  req.body.author = req.user.id
  Reservation.create(req.body)
    .then((reservation) => res.status(201).json(reservation))
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  Reservation.deleteOne({ _id: req.reservation.id })
    .then(() => res.status(204).send())
    .catch(next);
};