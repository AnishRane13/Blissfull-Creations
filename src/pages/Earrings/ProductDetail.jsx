import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import earringsData from './earringsData';

const ProductDetail = () => {
  const { productId } = useParams();
  const product = earringsData.find((item) => item.id === parseInt(productId));
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component mounts
  }, []);

  // Simulate multiple images (you can add more image URLs to your data)
  const productImages = product?.images || [];


  if (!product) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center space-y-4">
        <div className="w-24 h-24 mx-auto">
          <svg className="w-full h-full text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </div>
        <h2 className="text-3xl font-serif text-gray-900">Product Not Found</h2>
        <p className="text-gray-600">The jewelry piece you're looking for is no longer available.</p>
        <button className="mt-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700">
          Return to Collection
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
    <nav className="flex items-center space-x-4 text-sm text-gray-500">
      <a href="/" className="hover:text-purple-600 transition-colors">
        Home
      </a>
      <svg
        className="w-4 h-4 text-gray-500"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a 1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
      <a href="/earrings" className="hover:text-purple-600 transition-colors">
        {product.type}
      </a>
      <svg
        className="w-4 h-4 text-gray-500"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a 1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
      <span className="text-purple-600">{product.name}</span>
    </nav>
  </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Images */}
          <div className="space-y-8">
            {/* Main Image */}
            <div className="aspect-square overflow-hidden rounded-2xl bg-gray-100">
              <img 
                src={productImages[selectedImage]} 
                alt={product.name} 
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700" 
              />
            </div>
            
            {/* Thumbnail Images */}
            <div className="grid grid-cols-3 gap-4">
              {productImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    selectedImage === index ? 'border-purple-600 ring-2 ring-purple-200' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Product Info */}
          <div className="lg:py-8">
            <div className="space-y-8">
              {/* Title Section */}
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="h-px bg-purple-600 w-12"></div>
                  <span className="text-purple-600 uppercase tracking-wider text-sm font-medium">
                    {product.type} Collection
                  </span>
                </div>
                <h1 className="text-5xl font-serif text-gray-900 mb-4">{product.name}</h1>
                <div className="flex items-center space-x-4">
                  <span className="text-3xl font-serif text-gray-900">${product.price}</span>
                  {product.price >= 100 && (
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      Free Shipping
                    </span>
                  )}
                </div>
              </div>

              {/* Details Section */}
              <div className="space-y-6 border-t border-b border-gray-100 py-8">
                <div>
                  <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wider mb-3">Material</h3>
                  <div className="inline-block px-4 py-2 bg-purple-50 text-purple-700 rounded-full">
                    {product.material}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wider mb-3">Description</h3>
                  <p className="text-gray-600 leading-relaxed">{product.description}</p>
                </div>

                {/* Color */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wider mb-3">Color</h3>
                  <div className="inline-block px-4 py-2 bg-gray-50 text-gray-700 rounded-full">
                    {product.color}
                  </div>
                </div>
              </div>

              {/* Add to Cart Section */}
              <div className="space-y-6">
                <div className="flex items-center space-x-6">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                    <div className="flex items-center border border-gray-200 rounded-lg w-32">
                      <button 
                        className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      >
                        −
                      </button>
                      <span className="flex-1 text-center py-2 border-x border-gray-200">{quantity}</span>
                      <button 
                        className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  
                  <button className="flex-1 bg-purple-600 text-white py-4 px-8 rounded-xl font-medium
                    transition-all duration-300 
                    hover:bg-purple-700 
                    active:bg-purple-800
                    focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
                    flex items-center justify-center space-x-2 group">
                    <svg className="w-5 h-5 transform group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <span>Add to Cart</span>
                  </button>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-3 gap-4 pt-8">
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <svg className="w-6 h-6 mx-auto mb-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="block text-sm text-gray-600">Fast Shipping</span>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <svg className="w-6 h-6 mx-auto mb-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="block text-sm text-gray-600">30-Day Returns</span>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <svg className="w-6 h-6 mx-auto mb-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="block text-sm text-gray-600">Secure Payment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;