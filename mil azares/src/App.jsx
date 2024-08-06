import React from 'react';
import Header from './assets/components/Header';
import TitleSection from './assets/components/TitleSection';
import CarouselNavigation from './assets/components/CarouselNavigation';
import AboutUsSection from './assets/components/AboutUsSection';
import Footer from './assets/components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <section className='container mx-auto '>
        <TitleSection />
        </section>
        <CarouselNavigation />
        <AboutUsSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
