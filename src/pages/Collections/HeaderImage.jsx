import React from 'react';

const HeaderImage = ({ title, subtitle }) => {
  return (
    <div className="relative bg-gray-900">
      {/* Background Image Container */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover object-center"
          src="https://plus.unsplash.com/premium_photo-1661645433820-24c8604e4db5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8amV3ZWxsZXJ5JTIwY29sbGVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
          alt="Collection"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/60 to-gray-900/90" />
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Decorative Elements */}
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-20 h-0.5 bg-purple-500" />
            <span className="text-purple-400 uppercase tracking-wider text-sm font-medium">
              Jewelry Collection
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-serif font-medium tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-xl text-gray-300 max-w-2xl">
            {subtitle}
          </p>

          {/* Call to Action */}
          <div className="mt-10 flex items-center space-x-6">
            <a
              href="#collection"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-all duration-300 hover:shadow-lg"
            >
              Shop Now
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
            </a>
            <a
              href="#filter"
              className="text-base font-medium text-white hover:text-purple-400 transition-colors duration-300"
            >
              Browse Categories
              <span aria-hidden="true"> →</span>
            </a>
          </div>
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

export default HeaderImage;