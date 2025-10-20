import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Play, X } from 'lucide-react';

const Portfolio = () => {
  const { t } = useLanguage();
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section id="portfolio" className="relative py-32 px-6 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            {t.portfolio.title}
          </h2>
          <p className="text-xl text-white/60 font-light tracking-wide">
            {t.portfolio.subtitle}
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.portfolio.videos.map((video, index) => (
            <div
              key={video.id}
              className="group relative aspect-video overflow-hidden rounded-lg bg-[#1A1A1A] cursor-pointer"
              onClick={() => setSelectedVideo(video)}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Thumbnail */}
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                    <Play className="w-8 h-8 text-white fill-white" />
                  </div>
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
                  <p className="text-xs text-white/60 uppercase tracking-wider">{video.category}</p>
                  <h3 className="text-xl font-semibold text-white">{video.title}</h3>
                  <p className="text-sm text-white/60">{video.duration}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cinematic Divider Text */}
        <div className="text-center mt-32 mb-12">
          <p className="text-2xl md:text-3xl text-white/30 font-light tracking-[0.2em] uppercase">
            Cut. Rhythm. Emotion.
          </p>
        </div>
      </div>

      {/* Cinema Mode Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black/98 flex items-center justify-center p-6 animate-in fade-in duration-300">
          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors duration-300 p-2 hover:bg-white/10 rounded-full"
            aria-label="Close"
          >
            <X size={32} />
          </button>

          <div className="max-w-6xl w-full space-y-6">
            <div className="aspect-video bg-[#1A1A1A] rounded-lg overflow-hidden">
              <img
                src={selectedVideo.thumbnail}
                alt={selectedVideo.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center space-y-2">
              <p className="text-sm text-white/50 uppercase tracking-wider">{selectedVideo.category}</p>
              <h3 className="text-3xl font-bold text-white">{selectedVideo.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;