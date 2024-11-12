import React from 'react';

const FeaturedProducts = () => {
  // Replace with your product data
  const products = [
    { id: 1, name: 'Elegant Earrings', description: 'Stunning earrings for every occasion', image: '/images/earrings.jpg' },
    { id: 2, name: 'Timeless Necklace', description: 'Classic necklaces to elevate any look', image: '/images/necklace.jpg' },
    { id: 3, name: 'Exclusive Collection', description: 'Explore our latest curated sets', image: '/images/collection.jpg' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg mb-4" />
          <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
          <p className="text-gray-600">{product.description}</p>
          <a href="/collections" className="text-purple-600 hover:text-purple-700 font-medium mt-4 inline-block">
            View More
          </a>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProducts;
