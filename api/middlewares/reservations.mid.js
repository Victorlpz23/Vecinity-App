const Reservation = require("../models/reservation.model");
const createError = require("http-errors");

module.exports.exists = (req, res, next) => {
  const reservationId = req.params.reservationId || req.params.id;
  Reservation.findById(reservationId)
    .populate("author")
    .then((reservation) => {
      if (reservation) {
        req.reservation = reservation;
        next();
      } else {
        next(createError(404, "Reservation not found"));
      }
    });
};

module.exports.checkAuthor = (req, res, next) => {
  if (req.reservation.author.toString() !== req.user.id.toString()) {
    next(createError(403, "Forbidden"));
  } else {
    next();
  }
};