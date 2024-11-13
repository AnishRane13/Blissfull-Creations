import React from 'react';
import { useParams } from 'react-router-dom';
import earringsData from '../../data/earringsData';

const ProductDetail = () => {
  const { productId } = useParams();
  const product = earringsData.find((item) => item.id === parseInt(productId));

  if (!product) return <div>Product not found.</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img src={product.image} alt={product.name} className="w-full h-96 object-cover mb-4" />
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-gray-700 mt-4">{product.description}</p>
      <p className="mt-4 text-lg font-semibold">Material: {product.material}</p>
      <p className="mt-2 text-lg font-semibold">Price: ${product.price}</p>
      <button className="mt-6 bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
