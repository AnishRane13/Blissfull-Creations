import React, { useState } from 'react';
import Filter from './Filter';
import ProductCard from './ProductCard';
import HeaderImage from './HeaderImage';

const Earrings = () => {
  const [filter, setFilter] = useState({
    type: 'All',
    color: 'All',
    priceRange: 'All',
  });

  const earringsData = [
    {
      id: 1,
      name: 'Gold Stud Earrings',
      image: '/images/gold-stud.jpg',
      type: 'Studs',
      color: 'Gold',
      price: 45,
      material: 'Gold Plated',
      description: 'Elegant gold stud earrings perfect for any occasion.',
    },
    {
      id: 2,
      name: 'Silver Hoop Earrings',
      image: '/images/silver-hoop.jpg',
      type: 'Hoops',
      color: 'Silver',
      price: 75,
      material: 'Sterling Silver',
      description: 'Classic silver hoop earrings that never go out of style.',
    },
    // More products...
  ];

  const filteredEarrings = earringsData.filter((item) => {
    return (
      (filter.type === 'All' || item.type === filter.type) &&
      (filter.color === 'All' || item.color === filter.color) &&
      (filter.priceRange === 'All' ||
        (filter.price >= filter.priceRange[0] && item.price <= filter.priceRange[1]))
    );
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <HeaderImage
        title="Our Exquisite Earrings Collection"
        subtitle="Discover timeless elegance in every piece"
      />
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm mb-8">
          <ol className="list-none p-0 inline-flex text-gray-500">
            <li className="flex items-center">
              <a href="/" className="hover:text-purple-600 transition-colors">Home</a>
              <svg className="h-5 w-5 mx-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </li>
            <li className="text-purple-600">Earrings Collection</li>
          </ol>
        </nav>

        {/* Filter Section */}
        <div className="mb-12">
          <Filter filter={filter} setFilter={setFilter} />
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-600">
            Showing {filteredEarrings.length} products
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
          {filteredEarrings.map((earring) => (
            <div key={earring.id} className="transform hover:-translate-y-1 transition-transform duration-300">
              <ProductCard product={earring} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredEarrings.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-500">Try adjusting your filters to find what you're looking for.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Earrings;