import './App.css'
import Aboutus from './components/Aboutus';
import Header from './components/Header'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import { useEffect } from 'react';
import WhyChooseUs from './components/Whychooseus';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {

  // Smooth scrolling behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
   <>
  <Header />
  <Hero />
  <main className="max-w-7xl mx-auto scroll-smooth">
    {/* Sections with IDs */}
    <section id="about">
      <Aboutus />
    </section>

    <section id="portfolio">
      <Portfolio />
    </section>

    <section id="services">
      <Services />
    </section>

    <section id="why-choose-us">
      <WhyChooseUs />
    </section>

    <section id="portfolio">
      <Portfolio />
    </section>
    <section id="contact">
      <Contact />
    </section>
    
  </main>
  <Footer />
</>

  )
}

export default App
