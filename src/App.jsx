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
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProjectDetail from './components/ProjectDetail'

function App() {

  // Smooth scrolling behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  const HomeLayout = () => (
    <>
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

        <section id="testimonials">
          <Testimonials />
        </section>
      </main>
    </>
  )

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
      <Footer id="contact" />
    </BrowserRouter>
  )
}

export default App
