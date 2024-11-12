import React from 'react';

const Testimonials = () => {
  const reviews = [
    { name: 'Sarah', feedback: 'Absolutely love the earrings! High quality and beautiful.' },
    { name: 'John', feedback: 'The necklace I bought was perfect for my anniversary gift.' },
    { name: 'Emma', feedback: 'Blissful Creations never disappoints! Great craftsmanship.' },
  ];

  return (
    <div className="space-y-8">
      {reviews.map((review, index) => (
        <div key={index} className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-800 italic">"{review.feedback}"</p>
          <p className="text-gray-600 mt-2 text-right">- {review.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
