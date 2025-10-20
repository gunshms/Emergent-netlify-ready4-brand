import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import * as Icons from 'lucide-react';

const Services = () => {
  const { t } = useLanguage();
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <section id="services" className="relative py-32 px-6 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            {t.services.title}
          </h2>
          <p className="text-xl text-white/60 font-light tracking-wide">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((service, index) => {
            const Icon = Icons[service.icon];
            return (
              <div
                key={service.id}
                className="group relative overflow-hidden rounded-lg bg-[#1A1A1A] border border-white/5 hover:border-white/20 transition-all duration-500"
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Preview Image Overlay */}
                <div
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    hoveredService === service.id ? 'opacity-30' : 'opacity-0'
                  }`}
                >
                  <img
                    src={service.preview}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/80 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative p-8 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 group-hover:scale-110 transition-all duration-500">
                    {Icon && <Icon className="w-7 h-7 text-white/70 group-hover:text-white transition-colors duration-500" />}
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white group-hover:translate-x-1 transition-transform duration-300">
                      {service.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Hover Effect Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;