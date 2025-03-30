 


import React from 'react';
import { Ride } from '../App';  
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
interface RideCardProps {
  ride: Ride;
}

const RideCard: React.FC<RideCardProps> = ({ ride }) => {
  return (
    <div className="bg-gray-700 rounded-lg shadow-lg w-60">
      <div className="relative h-96 overflow-hidden rounded-lg">
        <video
          src={ride.videoUrl}
          autoPlay
          loop
          muted
          className="object-cover w-full h-full"
        />
        {/* Overlay container */}
        <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-b from-transparent to-gray-800  bg-opacity-50">
          <h2 className="text-xl font-semibold text-white">{ride.title}</h2>
          <p className="text-sm text-gray-300">{ride.location}</p>
          <p className="text-sm text-gray-300">{ride.description}</p>
         <Link to={ride.link}>
          <motion.button
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      className="h-12 bg-yellow-400 mt-4 w-40 rounded-lg mx-4"
    >
      Detail
    </motion.button>
    </Link>
          {/* <button className='h-12 bg-yellow-400 item mt-4 w-auto rounded-lg mx-4'>Detail</button> */}
        </div>
      </div>
    </div>
  );
};

export default RideCard;
