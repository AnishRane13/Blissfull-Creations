import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const reviews = [
    {
      name: 'Sarah L.',
      feedback: 'The earrings I bought are absolutely stunning! The craftsmanship and design have exceeded my expectations.',
    },
    {
      name: 'John P.',
      feedback: 'Purchased a necklace for my anniversary. My wife loved it, and the quality is top-notch. Highly recommended!',
    },
    {
      name: 'Emma R.',
      feedback: 'Every piece I’ve bought from Blissful Creations has been wonderful. They add a touch of elegance to every outfit.',
    },
  ];

  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-800">Customer Testimonials</h2>
      </div>

      <div className="space-y-8 max-w-3xl mx-auto">
        {reviews.map((review, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-sm">
            <div className="flex items-center justify-center text-purple-500 text-3xl mb-3">
              <FaQuoteLeft />
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">"{review.feedback}"</p>
            <p className="mt-4 text-right font-medium text-gray-600">- {review.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
