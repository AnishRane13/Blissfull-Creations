import React from 'react';
import InforBanner from '../../components/InforBanner';
import Hero from '../../components/Hero';
import FeaturedProducts from './FeaturedProducts';
import CategoriesOverview from './CategoriesOverview';
import Testimonials from './Testimonials';
// import NewsletterSignUp from '../../components/NewsletterSignUp';
// import Footer from './Footer';

const Home = () => {
  return (
    <div>
      {/* Hero and Introduction */}
      <InforBanner />
      <Hero />
      
      {/* Featured Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-6">
        {/* <h2 className="text-3xl font-serif text-gray-900 mb-6 text-center">Featured Products</h2> */}
         <h2 className="text-3xl font-serif text-gray-900 mb-6 text-center">Featured Products</h2>
        <FeaturedProducts id="featuredProduct"/>
      </section>

      {/* Categories Overview */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-gray-900 mb-6 text-center">Explore Our Categories</h2>
          <CategoriesOverview />
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-serif text-gray-900 mb-6 text-center">What Our Customers Say</h2>
          <Testimonials />
        </div>
      </section>

      {/* Newsletter Sign-Up */}
      {/* <section className="bg-gradient-to-r from-purple-50 to-pink-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <NewsletterSignUp />
        </div>
      </section> */}

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
