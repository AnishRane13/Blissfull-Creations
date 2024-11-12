import React from 'react';

const CategoriesOverview = () => {
  const categories = [
    { name: 'Earrings', link: '/earrings', image: '/images/earrings-category.jpg' },
    { name: 'Necklaces', link: '/necklace', image: '/images/necklaces-category.jpg' },
    { name: 'Bracelets', link: '/bracelets', image: '/images/bracelets-category.jpg' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {categories.map((category, index) => (
        <div key={index} className="relative">
          <a href={category.link}>
            <img src={category.image} alt={category.name} className="w-full h-48 object-cover rounded-lg" />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
              {category.name}
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default CategoriesOverview;
