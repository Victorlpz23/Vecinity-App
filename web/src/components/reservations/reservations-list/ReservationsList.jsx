import React, { useEffect, useState } from 'react'
import ReservationItem from '../reservation-item/ReservationItem';
import reservationsService from '../../../services/reservations'
import { useParams } from 'react-router-dom';

function ReservationsList() {

    const [reservations, setReservations] = useState([])
    const { id } = useParams()
    console.log(id)

    useEffect(() => {
      reservationsService.list(id)
      .then((reservations) => {
        setReservations(reservations)
      }).catch(console.error)
    }, [id])



  return (
    <>
      {reservations.map(reservation => <div><ReservationItem reservation={reservation} communityId={id} key={reservation.id} /></div>)}
    </>
  )
}

export default ReservationsList