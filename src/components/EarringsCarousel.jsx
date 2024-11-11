import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const EarringsCarousel = () => {
  const data = [
    {
      id: 1,
      name: "Earring1",
      price: 64376,
      cutPrice: 73892,
      img: "https://assets.ajio.com/medias/sys_master/root/20230515/3ouj/64621c6b42f9e729d78674ad/-473Wx593H-469067774-multi-MODEL3.jpg"
    },
    {
      id: 2,
      name: "Earring2",
      price: 55999,
      cutPrice: 62000,
      img: "https://assets.ajio.com/medias/sys_master/root/20230317/1wHD/64147bc4f997dde6f40640bc/shining-diva-gold-toned-jhumkas-10265er-gold-plated-jhumka-earrings.jpg"
    },
    {
      id: 3,
      name: "Earring3",
      price: 72000,
      cutPrice: 81000,
      img: "https://assets.ajio.com/medias/sys_master/root/20230515/3ouj/64621c6b42f9e729d78674ad/-473Wx593H-469067774-multi-MODEL3.jpg"
    },
    {
      id: 4,
      name: "Earring4",
      price: 68500,
      cutPrice: 75000,
      img: "https://assets.ajio.com/medias/sys_master/root/20230317/1wHD/64147bc4f997dde6f40640bc/shining-diva-gold-toned-jhumkas-10265er-gold-plated-jhumka-earrings.jpg"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-center h-[500px] bg-gray-100 rounded-lg overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.img
            key={data[activeIndex].id}
            src={data[activeIndex].img}
            alt={data[activeIndex].name}
            className="max-h-full max-w-full object-contain"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          />
        </AnimatePresence>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium">{data[activeIndex].name}</h3>
          <div className="flex items-center space-x-2">
            <motion.span
              className="text-red-500 line-through text-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              ${(data[activeIndex].cutPrice / 100).toFixed(2)}
            </motion.span>
            <motion.span
              className="text-xl font-medium text-gray-800"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              ${(data[activeIndex].price / 100).toFixed(2)}
            </motion.span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <motion.button
            onClick={handlePrev}
            className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft size={20} />
          </motion.button>
          <motion.button
            onClick={handleNext}
            className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight size={20} />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default EarringsCarousel;