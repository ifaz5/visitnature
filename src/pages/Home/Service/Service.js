import React from 'react';
import { useHistory } from 'react-router';

const Service = ({service}) => {
    const { name, duration, photoUrl } = service?.data;
    const history = useHistory();
    const handleBooking = id => {
        history.push(`/orderReview/${id}`)
    }
    return (
        <div className="w-80 bg-gray-200 text-center mt-3 mb-3 rounded">
            <img className="rounded h-60 w-full" src={photoUrl} alt="" />
            <h3>{name}</h3>
            <p>{duration}</p>
            <button onClick={() => handleBooking(service._id)} className="bg-red-400 px-3 py-1 rounded-2xl text-white mb-2">Book Now</button>
        </div>
    );
};

export default Service;