import { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import MenuHighlights from './components/MenuHighlights';
import SpecialFeatures from './components/SpecialFeatures';
import Stats from './components/Stats';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Newsletter from './components/Newsletter';
import Reservation from './components/Reservation';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-stone-50">
      <Hero />
      <About />
      <MenuHighlights />
      <SpecialFeatures />
      <Stats />
      <Gallery selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
      <Reviews />
      <Newsletter />
      <Reservation />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
