import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const { t } = useLanguage();
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0" style={{backgroundImage: `url('https://img.freepik.com/premium-photo/abstract-colors-gradient-background-red-orange-purple-blurred-wave-dark-grain-texture-effect-copy-space_284753-2293.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/50 via-[#0A0A0A]/70 to-[#0A0A0A]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="text-center max-w-5xl mx-auto space-y-8">
          {/* Tagline */}
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-1000">
            {t.hero.tagline}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/70 font-light tracking-wide animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            {t.hero.subtitle}
          </p>

          {/* CTA Button */}
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
            <button
              onClick={scrollToPortfolio}
              className="group inline-flex items-center space-x-3 bg-white text-[#0A0A0A] px-8 py-4 rounded-full font-medium text-lg hover:bg-white/90 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105"
            >
              <span>{t.hero.cta}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
