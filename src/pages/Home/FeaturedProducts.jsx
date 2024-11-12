import React from 'react';

const FeaturedProducts = () => {
  // Replace with your product data
  const products = [
    { id: 1, name: 'Elegant Earrings', description: 'Stunning earrings for every occasion', image: '/images/earrings.jpg' },
    { id: 2, name: 'Timeless Necklace', description: 'Classic necklaces to elevate any look', image: '/images/necklace.jpg' },
    { id: 3, name: 'Exclusive Collection', description: 'Explore our latest curated sets', image: '/images/collection.jpg' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="product-card group overflow-hidden rounded-lg shadow-md bg-white transform transition duration-300 hover:shadow-lg">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105" />
          <div className="p-4 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
              <p className="text-gray-600 mb-2">{product.description}</p>
            </div>
            <a href="/collections" className="text-purple-600 hover:text-purple-700 font-medium self-end">
              View More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProducts;