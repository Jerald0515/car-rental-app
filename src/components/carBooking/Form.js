    import React, { useEffect, useState, useContext } from 'react';
    import { createBooking, getStoreLocations } from '../Services';
    import { BookCreatedFlagContext } from '../context/BookCreatedFlagContext';

    function Form({ car }) {
        const [storeLocation, setStoreLocation] = useState([]);
        const { showToastMsg, setShowToastMsg } = useContext(BookCreatedFlagContext);
        const [formValue, setFormValue] = useState({
            location: '',
            pickUpDate: '',
            dropOffDate: '',
            pickUpTime: '',
            dropOffTime: '',
            contactNumber: '',
            userName: '',
            carId: {connect:
            {id:" "}}
        });

        const today = new Date();
        useEffect(() => {
            getStoreLocation_();
        }, []);

        useEffect(() => {
            if (car) {
                setFormValue(prevState => ({
                    ...prevState,
                    carId: car.id // Just the ID of the car
                }));
            }
        }, [car]);

        const getStoreLocation_ = async () => {
            const resp = await getStoreLocations();
            setStoreLocation(resp?.storesLocations);
            console.log(resp);
        };

        const handleChange = (event) => {
            setFormValue({
                ...formValue,
                [event.target.name]: event.target.value
            });
        };

        const handleSubmit = async () => {
            console.log(formValue);
            const resp = await createBooking(formValue);
            console.log(resp);
            if (resp) {
                setShowToastMsg(true);
            }
        };
        
        

        return (
            <div>
                <div className="flex flex-col w-full mb-5">
                    <label className="text-gray-400">PickUp Location</label>
                    <select
                        className="select select-bordered w-full max-w-lg"
                        name="location"
                        onChange={handleChange}
                        value={formValue.location} // Ensure that the selected value is set
                    >
                        <option disabled value="">PickUp Location?</option>
                        {storeLocation &&
                            storeLocation.map((loc, index) => (
                                <option key={index} value={loc.address}>{loc.address}</option>
                            ))}
                    </select>
                </div>
                <div className="flex flec-col gap-5 mb-5">
                    <div className="flex flex-col w-full">
                        <label className="text-gray-400">UserName</label>
                        <input
                            type="text"
                            onChange={handleChange}
                            placeholder="Enter"
                            name="userName"
                            className="input input-bordered w-full max-w-lg"
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label className="text-gray-400">Pick Up Date</label>
                        <input
                            type="date"
                            min={today}
                            onChange={handleChange}
                            placeholder="Type here"
                            name="pickUpDate"
                            className="input input-bordered w-full max-w-lg"
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label className="text-gray-400">Drop Off Date</label>
                        <input
                            type="date"
                            onChange={handleChange}
                            placeholder="Type here"
                            name="dropOffDate"
                            className="input input-bordered w-full max-w-lg"
                        />
                    </div>
                </div>
                <div className="flex gap-5 ">
                    <div className="flex flex-col w-full mb-5">
                        <label className="text-gray-400">Pick Up Time</label>
                        <input
                            type="time"
                            onChange={handleChange}
                            name="pickUpTime"
                            placeholder="Type here"
                            className="input input-bordered w-full max-w-lg"
                        />
                    </div>
                    <div className="flex flex-col w-full mb-5">
                        <label className="text-gray-400">Drop Off Time</label>
                        <input
                            type="time"
                            name="dropOffTime"
                            onChange={handleChange}
                            placeholder="Type here"
                            className="input input-bordered w-full max-w-lg"
                        />
                    </div>
                </div>
                <div className="flex flex-col w-full mb-5">
                    <label className="text-gray-400">Contact Number</label>
                    <input
                        type="text"
                        placeholder="Type here"
                        onChange={handleChange}
                        name="contactNumber"
                        className="input input-bordered w-full max-w-lg"
                    />
                </div>
                <div className="modal-action">
                    <button className="btn">Close</button>
                    <button
                        className="btn bg-blue-500 text-white hover:bg-blue-800"
                        onClick={handleSubmit}
                    >
                        Save
                    </button>
                </div>
            </div>
        );
    }

    export default Form;
