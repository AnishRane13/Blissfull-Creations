import React from 'react';

const CategoriesOverview = () => {
  const categories = [
    { name: 'Earrings', link: '/earrings', image: '/earrings4.png' },
    { name: 'Necklaces', link: '/necklace', image: '/necklace2.png' },
    { name: 'Collections', link: '/collections', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx2JKhcuMJ01LgQrycm9TqaTRD0sSg8dhDaA&s' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-8 px-4">
      {categories.map((category) => (
        <a
          key={category.name}
          href={category.link}
          className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105"
        >
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-70" />
          <div className="absolute bottom-4 left-4 right-4 text-white text-center">
            <h3 className="text-xl font-semibold mb-1">{category.name}</h3>
            <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Explore our {category.name.toLowerCase()} collection
            </p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default CategoriesOverview;
