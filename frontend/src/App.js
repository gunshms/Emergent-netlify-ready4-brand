import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { Toaster } from './components/ui/sonner';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Hero />
          <Portfolio />
          <About />
          <Services />
          <Testimonials />
          <Blog />
          <Contact />
          <Footer />
          <Toaster position="top-right" theme="dark" />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;