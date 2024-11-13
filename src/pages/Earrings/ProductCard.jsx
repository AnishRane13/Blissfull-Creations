import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500">
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Quick View Button - Appears on Hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <Link to={`/earrings/${product.id}`}>
            <button className="bg-white/90 text-gray-900 px-6 py-2 rounded-full font-medium transform -translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-white">
              Quick View
            </button>
          </Link>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6">
        {/* Type and Color Badges */}
        <div className="flex justify-between items-start mb-2">
          {product.type && (
            <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full">
              {product.type}
            </span>
          )}
          {product.color && (
            <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full">
              {product.color}
            </span>
          )}
        </div>

        {/* Product Name */}
        <h3 className="text-lg font-semibold text-gray-900 leading-tight mb-1">
          {product.name}
        </h3>

        {/* Material */}
        {product.material && (
          <p className="text-sm text-gray-500 mb-3">
            {product.material}
          </p>
        )}

        {/* Description */}
        {product.description && (
          <p className="text-sm text-gray-600 line-clamp-2 mb-4">
            {product.description}
          </p>
        )}

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 uppercase">Price</span>
            <span className="text-xl font-bold text-gray-900">
              ${product.price}
            </span>
          </div>
          
          {/* <button className="bg-gray-900 text-white px-4 py-2 rounded-lg font-medium 
            transition-all duration-300 
            hover:bg-gray-800
            active:bg-gray-950
            focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">
            Add to Cart
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
