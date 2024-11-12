import React, { useState } from "react";

const Hero = () => {
  return (
    <div className="relative bg-white pb-16">
      {/* Hero Header with Gradient Background */}
      <div className="relative overflow-visible bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] bg-top" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 pt-6">
          <div className="text-center relative">
            <h1 className="text-3xl sm:text-5xl font-serif tracking-tight text-gray-900 mb-8">
              Have a look at the best of Featured products
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
