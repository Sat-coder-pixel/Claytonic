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
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import ProjectDetail from './components/ProjectDetail'
import { AnimatePresence, motion } from 'framer-motion'

function App() {

  // Smooth scrolling behavior (native)
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  // Home layout wrapped in motion for route transitions
  const HomeLayout = () => (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45 }}
    >
      <Hero />
      <main className="max-w-7xl mx-auto scroll-smooth bg-[#f3f4f6]">
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
    </motion.div>
  )

  // Router wrapper component so we can use hooks like useLocation/useNavigate
  const RouterWrapper = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Scroll to hash target when hash changes or when route changes
    useEffect(() => {
      const scrollToHash = (hash) => {
        if (!hash) return;
        const id = hash.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          // use smooth scrolling explicitly
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return true;
        }
        return false;
      }

      // If there's a hash on navigation, try to scroll to it. If the element
      // isn't present (e.g. we're on a detail page), navigate to home first
      // then retry shortly after mount.
      if (location.hash) {
        const found = scrollToHash(location.hash);
        if (!found && location.pathname !== '/') {
          // navigate to home then attempt scroll after a short delay
          navigate('/');
          setTimeout(() => scrollToHash(location.hash), 120);
        }
      }

      // also handle manual hashchange events
      const onHash = () => {
        if (window.location.hash) {
          const ok = scrollToHash(window.location.hash);
          if (!ok && window.location.pathname !== '/') {
            navigate('/');
            setTimeout(() => scrollToHash(window.location.hash), 120);
          }
        }
      }

      window.addEventListener('hashchange', onHash);
      return () => window.removeEventListener('hashchange', onHash);
    }, [location, navigate]);

    return (
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </AnimatePresence>
    )
  }

  return (
    <BrowserRouter>
      <Header />
      <RouterWrapper />
      <section id="contact">
        <Footer  />
      </section>
      
    </BrowserRouter>
  )
}

export default App
