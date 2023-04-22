const Reservation = require("../models/reservation.model");

module.exports.list = (req, res, next) => {
  Reservation.find()
    .populate("author")
    .then((reservations) => {
      res.json(reservations);
    })
    .catch(next);
};

module.exports.detail = (req, res, next) => res.json(req.reservation);

module.exports.create = (req, res, next) => {
  Reservation.create(req.body)
    .then((reservation) => res.status(201).json(reservation))
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  Reservation.deleteOne({ _id: req.reservation.id })
    .then(() => res.status(204).send())
    .catch(next);
};