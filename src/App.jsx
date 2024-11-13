import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your page components
import Home from './pages/Home/Home';
import Earrings from './pages/Earrings/Earrings';
import Necklace from './pages/Necklace/Necklace';
import Collections from './pages/Collections/Collections';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProductDetail from './pages/Earrings/ProductDetail';

function App() {
  return (
    <Router>
      <div className='font-serif'>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/earrings" element={<Earrings />} />
          <Route path="/necklace" element={<Necklace />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/earrings/:productId" element={<ProductDetail />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
