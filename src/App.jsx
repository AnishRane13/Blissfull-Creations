import './App.css'
import Hero from './components/Hero';
import InfoBanner from './components/InforBanner';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen font-serif tracking-wider">
      <Navbar />
      <main>
        <InfoBanner/>
        <Hero/>
      </main>
    </div>
  );
}

export default App
