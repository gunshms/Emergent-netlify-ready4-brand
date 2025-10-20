import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % t.testimonials.items.length);
  };

  const previous = () => {
    setCurrentIndex((prev) => (prev - 1 + t.testimonials.items.length) % t.testimonials.items.length);
  };

  const currentTestimonial = t.testimonials.items[currentIndex];

  return (
    <section id="clients" className="relative py-32 px-6 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A] to-[#1A1A1A]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            {t.testimonials.title}
          </h2>
          <p className="text-xl text-white/60 font-light tracking-wide">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="bg-[#1A1A1A] rounded-2xl border border-white/10 p-12 md:p-16 space-y-8">
            {/* Quote Icon */}
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <Quote className="w-8 h-8 text-white/60" />
              </div>
            </div>

            {/* Quote Text */}
            <p className="text-2xl md:text-3xl text-white/90 text-center leading-relaxed font-light">
              "{currentTestimonial.quote}"
            </p>

            {/* Author */}
            <div className="flex items-center justify-center space-x-6">
              <img
                src={currentTestimonial.image}
                alt={currentTestimonial.author}
                className="w-16 h-16 rounded-full object-cover grayscale"
              />
              <div>
                <p className="text-lg font-semibold text-white">{currentTestimonial.author}</p>
                <p className="text-sm text-white/60">{currentTestimonial.company}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 mt-12">
            <button
              onClick={previous}
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Dots */}
            <div className="flex items-center space-x-2">
              {t.testimonials.items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-white'
                      : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;