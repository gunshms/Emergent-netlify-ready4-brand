import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { TrendingUp } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-32 px-6 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            {t.about.title}
          </h2>
          <p className="text-xl text-white/60 font-light tracking-wide">
            {t.about.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-center text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-24 leading-relaxed">
          {t.about.description}
        </p>

        {/* Timeline */}
        <div className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.about.timeline.map((item, index) => (
              <div
                key={index}
                className="text-center space-y-4 group"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="relative inline-block">
                  <div className="w-16 h-16 mx-auto rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-500">
                    <TrendingUp className="w-8 h-8 text-white/60 group-hover:text-white transition-colors duration-500" />
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-white group-hover:scale-105 transition-transform duration-300">{item.year}</p>
                  <p className="text-sm text-white/60 uppercase tracking-wider">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Our Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {t.about.team.map((member, index) => (
              <div
                key={index}
                className="group text-center space-y-4"
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                <div className="relative overflow-hidden rounded-lg aspect-square mx-auto max-w-sm">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="space-y-1">
                  <h4 className="text-xl font-semibold text-white">{member.name}</h4>
                  <p className="text-sm text-white/60 uppercase tracking-wider">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;