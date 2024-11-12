// import React from 'react';

// const FeaturedProducts = () => {
//   const products = [
//     { id: 1, name: 'Elegant Earrings', description: 'Stunning earrings for every occasion', image: '/images/earrings.jpg' },
//     { id: 2, name: 'Timeless Necklace', description: 'Classic necklaces to elevate any look', image: '/images/necklace.jpg' },
//     { id: 3, name: 'Exclusive Collection', description: 'Explore our latest curated sets', image: '/images/collection.jpg' },
//   ];

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-12 px-4">
//       {products.map((product) => (
//         <div
//           key={product.id}
//           className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transform transition duration-300 group"
//         >
//           {/* Product Image with Hover Zoom Effect */}
//           <div className="overflow-hidden rounded-t-lg">
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
//             />
//           </div>

//           {/* Product Details with Hover Effects */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
//           <div className="relative p-6 flex flex-col justify-between">
//             <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-purple-600 transition-colors duration-300">
//               {product.name}
//             </h3>
//             <p className="text-white opacity-80 mb-4 group-hover:opacity-100 transition-opacity duration-300">
//               {product.description}
//             </p>
//             <a
//               href="/collections"
//               className="mt-4 inline-block text-sm font-medium text-white hover:text-purple-600 bg-purple-600 hover:bg-purple-700 rounded-md px-6 py-2 transition-all duration-300 transform hover:scale-105"
//             >
//               View More
//             </a>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FeaturedProducts;




import React from 'react';

const FeaturedProducts = () => {
  const products = [
    { id: 1, name: 'Elegant Earrings', description: 'Stunning earrings for every occasion', image: '/images/earrings.jpg' },
    { id: 2, name: 'Timeless Necklace', description: 'Classic necklaces to elevate any look', image: '/images/necklace.jpg' },
    { id: 3, name: 'Exclusive Collection', description: 'Explore our latest curated sets', image: '/images/collection.jpg' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8 px-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="relative group rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
        >
          {/* Image with Gradient Overlay */}
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-70"></div>

          {/* Product Info Overlay */}
          <div className="absolute bottom-4 left-4 right-4 text-white text-center">
            <h3 className="text-xl font-bold mb-1">{product.name}</h3>
            <p className="text-sm mb-4 opacity-90">{product.description}</p>
            <a
              href="/collections"
              className="inline-block px-6 py-2 bg-purple-600 rounded-full text-sm font-medium text-white hover:bg-purple-700 transition duration-300 transform hover:scale-105"
            >
              View More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProducts;
