import './App.css';

// Komponentit
import Header from '../components/jsx/Header.jsx';
import Footer from '../components/jsx/Footer.jsx';
import SelectCountry from '../components/jsx/SelectCountry.jsx';
import Hero from '../components/jsx/Hero.jsx';
import PhotoGallery from '../components/jsx/Gallery.jsx';
import Map from '../components/jsx/Map.jsx';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <SelectCountry />
      <PhotoGallery />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
