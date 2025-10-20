import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Film } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative py-16 px-6 bg-[#0A0A0A] border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Tagline */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Film className="w-8 h-8 text-white/60" />
            <span className="text-2xl font-bold text-white">LORA<span className="text-white/60">STUDIO</span></span>
          </div>
          <p className="text-2xl md:text-3xl text-white/30 font-light tracking-[0.2em] uppercase">
            {t.footer.tagline}
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-white/40">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
