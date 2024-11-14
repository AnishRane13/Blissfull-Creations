import React from 'react';

const InfoBanner = () => {
  const handleScrollToFeatured = () => {
    const featuredSection = document.getElementById('featuredProduct');
    if (featuredSection) {
      const topPosition = featuredSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: topPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative bg-gray-900">
      {/* Background Image Container */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover object-center"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm_mVBMTwWVeSUfCVLiBkCFofHem1I8ahBsg&s"
          alt="Collection of beautiful earrings"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/60 to-gray-900/90" />
      </div>

      {/* Content Container */}
      <div className="relative max-w-4xl mx-auto px-6 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Title */}
          <h2 className="text-4xl font-serif font-medium tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
            Premium Quality Imitation Jewellery at Best Prices!
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-gray-300 mb-8">
            Discover our timeless collection and elevate your style effortlessly.
          </p>

          {/* Button */}
          {/* <button
            onClick={handleScrollToFeatured}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-all duration-300 hover:shadow-lg"
          >
            View Featured Products
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button> */}
        </div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-8 text-gray-50 transform translate-y-1"
          preserveAspectRatio="none"
          viewBox="0 0 1440 48"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 48h1440V0c-624 52-916 0-1440 0v48z" />
        </svg>
      </div>
    </div>
  );
};

export default InfoBanner;
