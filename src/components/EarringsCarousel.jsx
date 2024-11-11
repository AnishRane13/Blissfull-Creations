import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
// import {image} from "../../public/ear.jpg"

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
      img: "https://assets.ajio.com/medias/sys_master/root/20230515/3ouj/64621c6b42f9e729d78674ad/-473Wx593H-469067774-multi-MODEL3.jpg"
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
      img: "https://assets.ajio.com/medias/sys_master/root/20230515/3ouj/64621c6b42f9e729d78674ad/-473Wx593H-469067774-multi-MODEL3.jpg"
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
        <img
          src={data[activeIndex].img}
          alt={data[activeIndex].name}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium">{data[activeIndex].name}</h3>
          <div className="flex items-center space-x-2">
            <span className="text-red-500 line-through text-sm">
              ${(data[activeIndex].cutPrice / 100).toFixed(2)}
            </span>
            <span className="text-xl font-medium text-gray-800">
              ${(data[activeIndex].price / 100).toFixed(2)}
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={handlePrev}
            className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EarringsCarousel;