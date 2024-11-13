import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const reviews = [
    {
      name: 'Sarah L.',
      feedback: 'The earrings I bought are absolutely stunning! The craftsmanship and design have exceeded my expectations.',
      rating: 5,
      image: '/api/placeholder/64/64',
      title: 'Verified Buyer',
      product: 'Crystal Drop Earrings'
    },
    {
      name: 'John P.',
      feedback: 'Purchased a necklace for my anniversary. My wife loved it, and the quality is top-notch. Highly recommended!',
      rating: 5,
      image: '/api/placeholder/64/64',
      title: 'Verified Buyer',
      product: 'Pearl Pendant Necklace'
    },
    {
      name: 'Emma R.',
      feedback: 'Every piece Ive bought from Blissful Creations has been wonderful. They add a touch of elegance to every outfit.',
      rating: 5,
      image: '/api/placeholder/64/64',
      title: 'Regular Customer',
      product: 'Various Collections'
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4 transform transition-all duration-500 hover:scale-105">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="relative transform transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-full p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-purple-100 text-4xl">
                  <FaQuoteLeft />
                </div>

                {/* Rating */}
                <div className="flex mb-6 text-yellow-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} className="w-5 h-5" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  "{review.feedback}"
                </p>

                {/* Customer Info */}
                <div className="flex items-center mt-8">
                  <img
                    className="w-12 h-12 rounded-full object-cover"
                    src={review.image}
                    alt={review.name}
                  />
                  <div className="ml-4">
                    <p className="font-medium text-gray-900">{review.name}</p>
                    {/* <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-500">
                      <span>{review.title}</span>
                      <span className="hidden sm:inline mx-2">•</span>
                      <span>{review.product}</span>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a
            href="#"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-300"
          >
            Start Shopping
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;