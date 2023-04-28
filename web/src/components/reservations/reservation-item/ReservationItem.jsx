import React from 'react';
import { Link } from 'react-router-dom';

function ReservationItem({ reservation, communityId }) {
  return (
    <div><Link to={`/communities/${communityId}/reservations/${reservation.id}`}>{reservation.facility}</Link></div>
  );
}

export default ReservationItem;