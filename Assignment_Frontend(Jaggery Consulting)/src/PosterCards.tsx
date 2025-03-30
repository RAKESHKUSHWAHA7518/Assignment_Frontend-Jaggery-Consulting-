// import React from 'react';
// import { motion } from 'framer-motion';

// const posters = [
//   { id: 1, title: 'Poster 1', image: 'https://via.placeholder.com/300x200?text=Poster+1' },
//   { id: 2, title: 'Poster 2', image: 'https://via.placeholder.com/300x200?text=Poster+2' },
//   { id: 3, title: 'Poster 3', image: 'https://via.placeholder.com/300x200?text=Poster+3' },
//   { id: 4, title: 'Poster 4', image: 'https://via.placeholder.com/300x200?text=Poster+4' },
// ];

// const cardVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: (custom:any) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: custom * 0.2, duration: 0.5 },
//   }),
// };

// const PosterCards = () => {
//   return (
//     <div className=" w-full  flex justify-center grid-cols-4 gap-6 p-4">
//       {posters.map((poster, index) => (
//         <motion.div
//           key={poster.id}
//           className="bg-white rounded-lg shadow-lg overflow-hidden"
//           custom={index}
//           variants={cardVariants}
//           initial="hidden"
//           animate="visible"
//           whileHover={{ scale: 1.05 }}
//         >
//           <img
//             src={poster.image}
//             alt={poster.title}
//             className="h-60 w-60 object-cover"
//           />
//           <div className="p-4">
//             <h3 className="text-lg font-bold">{poster.title}</h3>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// export default PosterCards;


import React from 'react';
import { motion } from 'framer-motion';

const posters = [
  { id: 1, title: 'Poster 1', image: 'https://d22pimhl2qmbj7.cloudfront.net/public/Kochi_cb42a7a748.jpg?w=640&q=75', location: 'New York' },
  { id: 2, title: 'Poster 2', image: 'https://d22pimhl2qmbj7.cloudfront.net/public/Bangalore_a29cdf2e2c.jpg?w=640&q=75', location: 'Los Angeles' },
  { id: 3, title: 'Poster 3', image: 'https://d22pimhl2qmbj7.cloudfront.net/public/Hyderabad_44ee040feb.jpg?w=640&q=75', location: 'Chicago' },
  { id: 4, title: 'Poster 4', image: 'https://d22pimhl2qmbj7.cloudfront.net/public/Bhubaneswar_b007f8a2ac.jpg?w=640&q=75', location: 'Miami' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: any) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.5 },
  }),
};

const PosterCards = () => {
  return (
    <div className="w-full flex justify-center gap-6 p-4">
      {posters.map((poster, index) => (
        <motion.div
          key={poster.id}
          className="bg-gray-800 rounded-2xl   overflow-hidden"
          custom={index}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={poster.image}
            alt={poster.title}
            className="h-60 w-40 object-cover  rounded-2xl"
          />
          <div className="p-4">
            <h3 className="text-lg  text-white font-bold">{poster.location}</h3>
            <p className="text-sm text-gray-400">{poster.title}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default PosterCards;

