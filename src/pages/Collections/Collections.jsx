import React, { useState } from 'react';
import Filter from './Filter';
import ProductCard from './ProductCard';
import HeaderImage from './HeaderImage';
import collectionsData from './collectionsData';

const Collections = () => {
  const [filters, setFilters] = useState({
    type: ['All'],
    color: ['All'],
    priceRange: ['All']
  });

  const filteredEarrings = collectionsData.filter((item) => {
    // Type filter
    const typeMatch = filters.type.includes('All') || filters.type.includes(item.type);
    
    // Color filter
    const colorMatch = filters.color.includes('All') || filters.color.includes(item.color);
    
    // Price filter
    const priceMatch = filters.priceRange.includes('All') || filters.priceRange.some(range => {
      if (range === 'All') return true;
      const [min, max] = JSON.parse(range);
      if (max === null) {
        return item.price >= min;
      }
      return item.price >= min && item.price <= max;
    });

    return typeMatch && colorMatch && priceMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <HeaderImage
        title="Our Exquisite Collection"
        subtitle="Discover timeless elegance in every piece"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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

        <div className="mb-12">
          <Filter filters={filters} setFilters={setFilters} />
        </div>

        <div className="mb-8">
          <p className="text-gray-600">
            Showing {filteredEarrings.length} products
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
          {filteredEarrings.map((earring) => (
            <div key={earring.id} className="transform hover:-translate-y-1 transition-transform duration-300">
              <ProductCard product={earring} />
            </div>
          ))}
        </div>

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

export default Collections;