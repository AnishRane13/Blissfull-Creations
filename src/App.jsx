import './App.css'
import InfoBanner from './components/InforBanner';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <InfoBanner/>
      </main>
    </div>
  );
}

export default App
