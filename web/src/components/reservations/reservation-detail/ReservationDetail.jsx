import React, { useEffect, useState } from 'react';
import reservationsService from '../../../services/reservations';
import { useNavigate, useParams } from 'react-router-dom';

function ReservationDetail() {
  const [reservation, setReservation] = useState({});
  const navigate = useNavigate();
  const { id, reservationId } = useParams();

  useEffect(() => {
    async function fetchReservation() {
      try {
        const reservation = await reservationsService.detail(id, reservationId);
        setReservation(reservation);
      } catch (error) {
        console.error(error);
        const statusCode = error.response?.status;
        if (statusCode === 404) {
          navigate('/');
        }
      }
    }
    fetchReservation();
  }, [id, reservationId]);

  return (
    <>
    <div>{reservation.facility}</div>
    </>
  );
}

export default ReservationDetail;