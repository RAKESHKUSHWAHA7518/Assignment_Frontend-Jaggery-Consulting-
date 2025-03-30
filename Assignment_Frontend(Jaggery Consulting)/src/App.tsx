 


import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {   Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import ReactPlayer from 'react-player';
import PosterCards from './PosterCards';
import RideCard, { Ride } from './Component/RideCard';
import CategorySidebar, { Category } from './Component/CategorySidebar';
import CarouselControls from './Component/CarouselControls';
import { Link } from 'react-router-dom';
 
import { Home, MapPin, Globe, Zap, Ticket, Phone, Menu } from 'lucide-react';
export interface Ride {
  id: number;
  title: string;
  location: string;
  description: string;
  videoUrl: string;
  category: string;
  link:string;
}

 
const ridesData: { [key: string]: Ride[] } = {
  land: [
    {
      id: 1,
      title: 'Mini Coco Cup',
      location: 'Bengaluru',
      description: 'Spin around in giant cups placed on a rotating turntable floor!',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      category: 'Land',
       link:'/land'
    },
    {
      id: 2,
      title: 'Crazy Cars',
      location: 'Bhubaneshwar',
      description: 'Dash and crash into your friends on crazy bumper cars. So fun!',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      category: 'Land',
       link:'/land'
    },
    {
      id: 3,
      title: 'High Speed Coaster',
      location: 'Mumbai',
      description: 'Feel the adrenaline rush on this high-speed roller coaster!',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      category: 'Land',
       link:'/land'
    },
    {
      id: 4,
      title: 'Swing Ride',
      location: 'Delhi',
      description: 'Swing high into the sky on this fun and gentle ride!',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      category: 'Land',
       link:'/land'
    },
    {
      id: 5,
      title: 'Fun House',
      location: 'Chennai',
      description: 'Enjoy the quirky twists and turns inside the fun house!',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      category: 'Land',
      link:'/land'
    },
  ],
  water: [
    {
      id: 0,
      title: 'Water Slide',
      location: 'Hyderabad',
      description: 'Slide down a giant water slide and splash into the pool!',
      videoUrl: 'https://www.w3schools.com/html/movie.mp4',
      category: 'Water',
       link:'/water'
    },
    {
      id: 1,
      title: 'Bungee Jumping',
      location: 'Rishikesh',
      description: 'Experience the thrill of free-falling from a great height!',
      videoUrl: 'https://www.w3schools.com/html/movie.mp4',
      category: 'Adventure',
       link:'/water'
    },
    {
      id: 2,
      title: 'Scuba Diving',
      location: 'Goa',
      description: 'Dive deep into the ocean and explore marine life.',
      videoUrl: 'https://www.w3schools.com/html/movie.mp4',
      category: 'Water',
       link:'/water'
    },
    {
      id: 3,
      title: 'Hot Air Balloon Ride',
      location: 'Jaipur',
      description: 'Soar high in the sky and enjoy a breathtaking view!',
      videoUrl: 'https://www.w3schools.com/html/movie.mp4',
      category: 'Aerial',
       link:'/water'
    },
    {
      id: 4,
      title: 'Skydiving',
      location: 'Mysore',
      description: 'Jump from an airplane and enjoy an adrenaline rush!',
      videoUrl: 'https://www.w3schools.com/html/movie.mp4',
      category: 'Adventure',
       link:'/water'
    },
    {
      id: 5,
      title: 'Desert Safari',
      location: 'Dubai',
      description: 'Explore the vast deserts with an exciting safari ride!',
      videoUrl: 'https://www.w3schools.com/html/movie.mp4',
      category: 'Adventure',
       link:'/water'
    },
    {
      id: 6,
      title: 'Water Slide',
      location: 'Hyderabad',
      description: 'Slide down a giant water slide and splash into the pool!',
      videoUrl: 'https://www.w3schools.com/html/movie.mp4',
      category: 'Water',
       link:'/water'
    },
    {
      id: 7,
      title: 'White Water Rafting',
      location: 'Manali',
      description: 'Paddle through the wild rapids for an ultimate adventure!',
      videoUrl: 'https://www.w3schools.com/html/movie.mp4',
      category: 'Water',
       link:'/water'
    },
    {
      id: 8,
      title: 'Paragliding',
      location: 'Bir Billing',
      description: 'Glide through the air and enjoy stunning mountain views!',
      videoUrl: 'https://www.w3schools.com/html/movie.mp4',
      category: 'Aerial',
       link:'/water'
    },
    {
      id: 9,
      title: 'Rock Climbing',
      location: 'Hampi',
      description: 'Test your strength and climb natural rock formations!',
      videoUrl: 'https://www.w3schools.com/html/movie.mp4',
      category: 'Adventure',
       link:'/water'
    },
    {
      id: 10,
      title: 'Jet Skiing',
      location: 'Mumbai',
      description: 'Race across the waves with high-speed jet skiing!',
      videoUrl: 'https://www.w3schools.com/html/movie.mp4',
      category: 'Water',
       link:'/water'
    }
     
  ],
  kids: [
    {
      id: 7,
      title: 'Pony Train',
      location: 'Kochi',
      description: 'Hop onto a pony ride through a magical land!',
      videoUrl: 'https://www.w3schools.com/html/movie.mp4',
      category: 'Kids',
       link:'/kids'
    },
    {
      id: 8,
      title: 'Paragliding',
      location: 'Bir Billing',
      description: 'Glide through the air and enjoy stunning mountain views!',
      videoUrl: 'https://www.w3schools.com/html/movie.mp4',
      category: 'Aerial',
       link:'/kids'
    },
    {
      id: 9,
      title: 'Rock Climbing',
      location: 'Hampi',
      description: 'Test your strength and climb natural rock formations!',
      videoUrl: 'https://www.w3schools.com/html/movie.mp4',
      category: 'Adventure',
       link:'/kids'
    },
    {
      id: 10,
      title: 'Jet Skiing',
      location: 'Mumbai',
      description: 'Race across the waves with high-speed jet skiing!',
      videoUrl: 'https://www.w3schools.com/html/movie.mp4',
      category: 'Water',
       link:'/kids'
    }
     
  ],
};

function App() {
  const [navWhite, setNavWhite] = useState(false);
  const categories: Category[] = [
    { name: "Land", count: 24, icon: "🏔️", color: "#FCD34D" },
    { name: "Water", count: 18, icon: "🌊", color: "#60A5FA" },
    { name: "Kids", count: 32, icon: "👶", color: "#4ADE80" },
  ];

   
  const [activeCategory, setActiveCategory] = useState<string>('Land');
   
   
  const [startIndex, setStartIndex] = useState<number>(0);

  // Filter rides based on the active category (keys are in lowercase)
  const filteredRides: Ride[] = ridesData[activeCategory.toLowerCase()] || [];
  const total = filteredRides.length;

  // Auto-scroll every 2 seconds if 4 or more rides are available
  useEffect(() => {
    if (total >= 4) {
      const interval = setInterval(() => {
        setStartIndex((prev) => (prev + 1) % total);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [total]);

   
  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % total);
  };

  
  let visibleRides: Ride[] = [];
  if (total >= 4) {
    
    for (let i = 0; i < 4; i++) {
      const index = (startIndex + i) % total;
      visibleRides.push(filteredRides[index]);
    }
  } else {
     
    visibleRides = filteredRides;
  }

  
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        setNavWhite(window.scrollY >= heroHeight / 2);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navTextClass = navWhite
    ? 'text-black hover:text-blue-600'
    : 'text-white hover:text-blue-200';


    

    
  return (
    <div className="min-h-screen bg-gray-800 overflow-hidden">
      {/* Header */}
      <div className='px-40 rounded-md'>
         
            <header
      className={`fixed mt-10 w-5/6 z-50 items-center rounded-md transition-colors duration-300 ${
        navWhite ? 'bg-white' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto  relative flex items-center justify-center h-16">
      <div className='w-1/4 mx-20'>
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center">
          <h1
            className={`text-3xl px-20 font-bold ${
              navWhite ? 'text-blue-600' : 'text-white'
            }`}
          >
             Assignment
          </h1>
        </motion.div>
        </div>
        <div className='w-3/4'>
        <nav className="hidden text-bold md:flex space-x-8">
          <motion.a href="#" whileHover={{ scale: 1.1 }} className={navTextClass}>
            <Home className="h-5 w-5 inline mr-1" />
            Home
          </motion.a>
          {/* Dropdown for Location */}
          <div className="relative group">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              className={`${navTextClass} inline-block flex items-center`}
            >
              <MapPin className="h-5 w-5 inline mr-1" />
              Location
            </motion.a>
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <ul>
                <li className="p-2 hover:bg-gray-100 flex items-center">
                  <MapPin className="h-4 w-4 inline mr-1 text-blue-500" />
                  <a href="/" className="text-blue-500">
                    Noida
                  </a>
                </li>
                <li className="p-2 hover:bg-gray-100 flex items-center">
                  <MapPin className="h-4 w-4 inline mr-1 text-blue-500" />
                  <a href="/" className="text-blue-500">
                    Prayagraj
                  </a>
                </li>
                <li className="p-2 hover:bg-gray-100 flex items-center">
                  <MapPin className="h-4 w-4 inline mr-1 text-blue-500" />
                  <a href="/" className="text-blue-500">
                    Rides
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <motion.a href="#" whileHover={{ scale: 1.1 }} className={navTextClass}>
            <Globe className="h-5 w-5 inline mr-1" />
            Parks
          </motion.a>
          <motion.a href="#" whileHover={{ scale: 1.1 }} className={navTextClass}>
            <Zap className="h-5 w-5 inline mr-1" />
            Rides
          </motion.a>
          <motion.a href="#" whileHover={{ scale: 1.1 }} className={navTextClass}>
            <Ticket className="h-5 w-5 inline mr-1" />
            Tickets
          </motion.a>
          <motion.a href="#" whileHover={{ scale: 1.1 }} className={navTextClass}>
            <Phone className="h-5 w-5 inline mr-1" />
            Contact
          </motion.a>
        </nav>
        <div className="md:hidden absolute right-4 top-4">
          <Menu className={`${navWhite ? 'text-black' : 'text-white'} h-6 w-6`} />
        </div>
      </div>
      </div>
    </header>
      
       
      </div>

      {/* Hero Section */}
      <motion.section id="hero" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative h-screen">
        <div className="absolute inset-0 -mt-40    "  >
          <iframe
          className='w-screen bg-ray-800 aspect-video   '
            src="https://www.youtube.com/embed/yNN2PoilSp4?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            
          ></iframe>
           
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="text-white max-w-2xl">
            <h2 className="text-5xl font-bold mb-6">Welcome to the Land of Joy</h2>
            <p className="text-xl mb-8">
              Experience the thrill of India's largest and most exciting amusement park.
            </p>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700">
              Book Tickets
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      <div className='relative -mt-52 z-30'>
        <PosterCards />
      </div>

     
<div className="min-h-screen bg-gray-800 p-4  py-20">
  <div className="container mx-auto flex flex-col md:flex-row gap-8">
    {/* Sidebar for categories */}
    <div className="md:w-1/4 py-16">
      <CategorySidebar
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={(cat) => {
          setActiveCategory(cat);
          setStartIndex(0);
        }}
      />
    </div>

    {/* Ride Carousel */}
    <div className="flex-1 md:w-3/4">
      {total > 0 ? (
        total < 4 ? (
          // If fewer than 4 rides, render all without controls/auto-scroll
          <motion.div
            className="flex space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {filteredRides.map((ride) => (
              <div key={ride.id} className="w-72 flex-shrink-0">
                <RideCard ride={ride} />
              </div>
            ))}
          </motion.div>
        ) : (
          // If 4 or more rides, render a sliding carousel with controls and smooth motion
          <>
            <CarouselControls onPrev={handlePrev} onNext={handleNext} />
            {/* Container that clips overflowing cards */}
            <div className="overflow-hidden relative">
              {/* Animated inner container:
                  - Duplicates filteredRides to allow seamless looping.
                  - Each card has a fixed width (w-96 = 384px) and a 16px gap (space-x-4).
              */}
              <motion.div
                className="flex "
                animate={{ x: -startIndex * (384 + 16) }} // 384px card width + 16px gap
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {[
                  ...filteredRides,
                  // Append the first 4 cards for seamless looping
                  ...filteredRides.slice(0, 4),
                ].map((ride, index) => (
                  <div key={index} className="w-72 flex-shrink-0">
                    <RideCard ride={ride} />
                  </div>
                ))}
              </motion.div>
            </div>
          </>
        )
      ) : (
        <p className="text-center text-gray-600">
          No rides available for this category.
        </p>
      )}
<Link to="/land">
       <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            className="h-12 bg-yellow-400 mt-20 w-60 rounded-3xl mx-4"
          >
           Explore All Rides!
          </motion.button>
          </Link>
    </div>
  </div>
</div>


      {/* Featured Attractions Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-bold text-center mb-12">
            Featured Attractions
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Recoil",
                image: "https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                description: "Experience the thrill of zero gravity"
              },
              {
                title: "Wonder Splash",
                image: "https://images.unsplash.com/photo-1582560475093-ba66accbc424?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                description: "Make a splash in our water wonderland"
              },
              {
                title: "Sky Wheel",
                image: "https://images.unsplash.com/photo-1569396116180-210c182bedb8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                description: "See the world from new heights"
              }
            ].map((attraction, index) => (
              <motion.div
                key={attraction.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              >
                <img src={attraction.image} alt={attraction.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h4 className="text-xl text-white font-semibold mb-2">{attraction.title}</h4>
                  <p className="text-white">{attraction.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h5 className="text-xl font-bold mb-4">Contact Us</h5>
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>123 Park Avenue, Bangalore</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>+91 1234567890</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  <span>info@wExample.com</span>
                </div>
              </div>
            </div>
            <div>
              <h5 className="text-xl font-bold mb-4">Quick Links</h5>
              <ul className="space-y-2">
                {['About Us', 'Safety Guidelines', 'Park Rules', 'FAQs'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-blue-400">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-xl font-bold mb-4">Parks</h5>
              <ul className="space-y-2">
                {['Bangalore', 'Hyderabad', 'Kochi'].map((location) => (
                  <li key={location}>
                    <a href="#" className="hover:text-blue-400">Assignment Rakesh {location}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-xl font-bold mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                <Facebook className="h-6 w-6 hover:text-blue-400 cursor-pointer" />
                <Twitter className="h-6 w-6 hover:text-blue-400 cursor-pointer" />
                <Instagram className="h-6 w-6 hover:text-blue-400 cursor-pointer" />
                <Youtube className="h-6 w-6 hover:text-blue-400 cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p>&copy; 2025  Assignment Rakesh. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

