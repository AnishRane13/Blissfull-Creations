import React from 'react';

const InfoBanner = () => {
  const handleScrollToFeatured = () => {
    const featuredSection = document.getElementById('featuredProduct');
    if (featuredSection) {
      const topPosition = featuredSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: topPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-50 to-pink-50">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] bg-top" />
      
      <div className="relative max-w-4xl mx-auto px-6 py-12 pb-2 text-center">
        {/* Info Text */}
        <h2 className="text-4xl sm:text-4xl font-serif tracking-tight text-gray-900 mb-4">
          Premium Quality Imitation Jewellery at Best Prices!
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover our timeless collection and elevate your style effortlessly.
        </p>
        
        {/* Call to Action Button */}
        {/* <button 
          onClick={handleScrollToFeatured}
          className="inline-block px-8 py-3 bg-white border border-gray-200 text-gray-900 font-medium rounded-lg shadow-sm hover:border-gray-300 hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
        >
          Shop Now
        </button> */}

        {/* <h1 className="text-3xl sm:text-5xl font-serif tracking-tight text-gray-900 mb-8">
              Have a look at the best of Featured products
            </h1> */}

      </div>
    </div>
  );
};

export default InfoBanner;
