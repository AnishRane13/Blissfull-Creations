// import './App.css'
// import Hero from './components/Hero';
// import InfoBanner from './components/InforBanner';
// import Navbar from './components/Navbar'

// function App() {
//   return (
//     <div className="min-h-screen font-serif tracking-wider">
//       <Navbar />
//       <main>
//         <InfoBanner/>
//         <Hero/>
//       </main>
//     </div>
//   );
// }

// export default App



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your page components
import Home from './pages/Home/Home';
import Earrings from './pages/Earrings/Earrings';
import Necklace from './pages/Necklace/Necklace';
import Collections from './pages/Collections/Collections';
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <div>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/earrings" element={<Earrings />} />
          <Route path="/necklace" element={<Necklace />} />
          <Route path="/collections" element={<Collections />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
