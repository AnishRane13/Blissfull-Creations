import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600 mt-2">${product.price}</p>
        <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700">
          Quick View
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
