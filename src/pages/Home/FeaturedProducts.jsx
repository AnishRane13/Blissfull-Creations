import React from 'react';

const FeaturedProducts = () => {
  const products = [
    { id: 1, name: 'Elegant Earrings', description: 'Stunning earrings for every occasion', image: '/images/earrings.jpg' },
    { id: 2, name: 'Timeless Necklace', description: 'Classic necklaces to elevate any look', image: '/images/necklace.jpg' },
    { id: 3, name: 'Exclusive Collection', description: 'Explore our latest curated sets', image: '/images/collection.jpg' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8 px-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="relative group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transform transition duration-300"
        >
          {/* Product Image with Hover Zoom Effect */}
          <div className="overflow-hidden rounded-t-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Product Details with Transition */}
          <div className="p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                {product.name}
              </h3>
              <p className="text-gray-500 group-hover:text-gray-700 transition-colors duration-300">{product.description}</p>
            </div>
            <a
              href="/collections"
              className="mt-4 inline-block text-sm font-medium text-purple-600 hover:text-purple-700 bg-purple-50 rounded-md px-4 py-2 transition duration-300 transform hover:scale-105"
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
