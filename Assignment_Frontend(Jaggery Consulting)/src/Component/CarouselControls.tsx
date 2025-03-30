 
import React from 'react';

interface CarouselControlsProps {
  onPrev: () => void;
  onNext: () => void;
}

const CarouselControls: React.FC<CarouselControlsProps> = ({ onPrev, onNext }) => {
  return (
    <div className="flex  justify-between items-center mb-4  w-full ">
    <div className=''>
      <h1 className='font-bold text-white text-7xl'>Our Iconic Rides</h1>
    </div>
      <div className='px-4'>
      <button
        onClick={onPrev}
        className="bg-yellow-400 text-white p-2 mx-4 rounded-full h-10 w-10 hover:bg-gray-400"
      >
        &lt;
      </button>
      <button
        onClick={onNext}
        className="bg-yellow-400 text-white p-2 h-10 w-10 rounded-full hover:bg-gray-400"
      >
        &gt;
      </button>
      </div>
    </div>
  );
};

export default CarouselControls;
