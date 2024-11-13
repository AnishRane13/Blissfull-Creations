import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Quick View Button - Appears on Hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
          <Link to={`/products/${product.id}`}>
            <button className="bg-white/95 text-gray-900 px-8 py-3 rounded-full font-medium 
              transform -translate-y-8 group-hover:translate-y-0 transition-all duration-500 
              hover:bg-white hover:shadow-lg
              flex items-center space-x-2">
              <span>Quick View</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </Link>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 space-y-4">
        {/* Type and Color Badges */}
        <div className="flex flex-wrap gap-2">
          {product.type && (
            <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-purple-50 text-purple-700 rounded-full ring-1 ring-purple-700/10">
              {product.type}
            </span>
          )}
          {product.color && (
            <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-gray-50 text-gray-600 rounded-full ring-1 ring-gray-600/10">
              {product.color}
            </span>
          )}
        </div>

        {/* Product Details */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-900 leading-tight group-hover:text-purple-700 transition-colors duration-300">
            {product.name}
          </h3>
          
          {product.material && (
            <p className="text-sm font-medium text-gray-500">
              {product.material}
            </p>
          )}

          {product.description && (
            <p className="text-sm text-gray-600 line-clamp-2">
              {product.description}
            </p>
          )}
        </div>

        {/* Price and Action */}
        <div className="pt-4 flex items-center justify-between border-t border-gray-100">
          <div className="flex flex-col">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Price</span>
            <div className="flex items-baseline space-x-2">
              <span className="text-xl font-bold text-gray-900">${product.price}</span>
              {product.comparePrice && (
                <span className="text-sm text-gray-500 line-through">${product.comparePrice}</span>
              )}
            </div>
          </div>
          
          {/* <button className="bg-purple-600 text-white px-6 py-2.5 rounded-lg font-medium 
            transition-all duration-300 
            hover:bg-purple-700 hover:shadow-md
            active:bg-purple-800
            focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Add to Cart
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;