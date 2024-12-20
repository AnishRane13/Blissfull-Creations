import React from 'react';
import Earrings from '../../../public/earrings1.png'

const FeaturedProducts = () => {
  const products = [
    { id: 1, name: 'Elegant Earrings', description: 'Stunning earrings for every occasion',  image: '/earrings4.png', goTo: "earrings" },
    { id: 2, name: 'Timeless Necklace', description: 'Classic necklaces to elevate any look', image: '/necklace2.png', goTo: "necklaces" },
    { id: 3, name: 'Exclusive Collection', description: 'Explore our latest curated sets', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx2JKhcuMJ01LgQrycm9TqaTRD0sSg8dhDaA&s', goTo: "collections" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8 px-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="relative group rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
        >
          {/* Image with Gradient Overlay */}
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-70"></div>

          {/* Product Info Overlay */}
          <div className="absolute bottom-4 left-4 right-4 text-white text-center">
            <h3 className="text-xl font-bold mb-1">{product.name}</h3>
            <p className="text-sm mb-4 opacity-90">{product.description}</p>
            <a
              href={`/${product.goTo}`}
              className="inline-block px-6 py-2 bg-purple-600 rounded-full text-sm font-medium text-white hover:bg-purple-700 transition duration-300 transform hover:scale-105"
            >
              View More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProducts;
