import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#0A0A0A]/95 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold text-white tracking-tight hover:opacity-80 transition-opacity duration-300"
          >
            LORA<span className="text-white/60">STUDIO</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['home', 'portfolio', 'about', 'services', 'clients', 'blog', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-sm text-white/70 hover:text-white transition-colors duration-300 uppercase tracking-wider"
              >
                {t.nav[item]}
              </button>
            ))}
          </nav>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 text-sm text-white/70 hover:text-white transition-colors duration-300"
              aria-label="Toggle Language"
            >
              <span className="text-lg">{language === 'en' ? '🇺🇸' : '🇧🇷'}</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-6 pb-4 space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
            {['home', 'portfolio', 'about', 'services', 'clients', 'blog', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left text-sm text-white/70 hover:text-white transition-colors duration-300 uppercase tracking-wider py-2"
              >
                {t.nav[item]}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
