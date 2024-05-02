import React, { useEffect, useState } from 'react';
import CarCard from './CarCard';
import CardSkelton from './CardSkeleton';
import BookingModal from './carBooking/BookingModal';

function CarsList(props) {
    const [isLoaded, setIsLoaded] = useState(true);
    const [selectedCar, setSelectedCar] = useState(null);

    useEffect(() => {
        if (props.carsList) {
            setIsLoaded(false);
        }
    }, [props.carsList]);

    const openModal = (car) => {
        setSelectedCar(car);
        window.my_modal_4.showModal();
    };

    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {props.carsList && props.carsList.map((car, index) => (
                <div key={index} onClick={() => openModal(car)}>
                    <CarCard car={car} />
                </div>
            ))}
            {isLoaded &&
                [1, 2, 3, 4, 5].map((item, index) => (
                    <CardSkelton key={index} />
                ))
            }
            <dialog id="my_modal_4" className="modal">
                <BookingModal car={selectedCar} />
            </dialog>
        </div>
    );
}

export default CarsList;
