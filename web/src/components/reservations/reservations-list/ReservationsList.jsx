import React, { useEffect, useState } from 'react';
import ReservationItem from '../reservation-item/ReservationItem';
import reservationsService from '../../../services/reservations';
import { useParams } from 'react-router-dom';

function ReservationsList({ refresh }) {

  const [reservations, setReservations] = useState([]);
  const { id } = useParams();



  useEffect(() => {
    reservationsService.list(id)
      .then((reservations) => {
        setReservations(reservations);
      }).catch(console.error);
  }, [id, refresh]);



  return (
    <>
      <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-green md:text-2xl dark:text-white mb-4">
        My Reservations
      </h1>
      {reservations.length > 0
        ? reservations.map(reservation => <ReservationItem key={reservation.id} reservation={reservation} communityId={id} ></ReservationItem>)
        : <section className="bg-white dark:bg-gray-800">
          <div className="flex flex-col items-center justify-center px-6 py-2 mx-auto">
            <div className="w-full bg-gray-100 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-900 dark:border-gray-700">
              <div className="p-6 space-y-2 md:space-y-2 sm:p-8">
                <ul>
                  <li className='font-bold text-green mb- text-center'>You have no reservations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      }
    </>
  );
}

export default ReservationsList;