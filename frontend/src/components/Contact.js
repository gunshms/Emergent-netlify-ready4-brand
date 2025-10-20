import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Send, Instagram, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    toast.success('Message sent successfully! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative py-32 px-6 bg-[#0A0A0A]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            {t.contact.title}
          </h2>
          <p className="text-xl text-white/60 font-light tracking-wide">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t.contact.form.name}
                required
                className="w-full px-6 py-4 bg-[#1A1A1A] border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-colors duration-300"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t.contact.form.email}
                required
                className="w-full px-6 py-4 bg-[#1A1A1A] border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-colors duration-300"
              />
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t.contact.form.message}
                required
                rows={6}
                className="w-full px-6 py-4 bg-[#1A1A1A] border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-colors duration-300 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="group w-full flex items-center justify-center space-x-3 bg-white text-[#0A0A0A] px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              <span>{t.contact.form.submit}</span>
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </form>

          {/* Social Links */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Connect With Us</h3>
              <p className="text-white/60 leading-relaxed">
                Reach out through your preferred platform. We're here to help bring your vision to life.
              </p>
            </div>

            <div className="space-y-4">
              {/* WhatsApp */}
              <a
                href={`https://wa.me/${t.contact.social.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-4 p-6 bg-[#1A1A1A] border border-white/10 rounded-lg hover:bg-[#1A1A1A]/80 hover:border-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors duration-300">
                  <MessageCircle className="w-6 h-6 text-white/70 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-sm text-white/60 uppercase tracking-wider">WhatsApp</p>
                  <p className="text-white font-medium">{t.contact.social.whatsapp}</p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href={`https://instagram.com/${t.contact.social.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-4 p-6 bg-[#1A1A1A] border border-white/10 rounded-lg hover:bg-[#1A1A1A]/80 hover:border-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors duration-300">
                  <Instagram className="w-6 h-6 text-white/70 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-sm text-white/60 uppercase tracking-wider">Instagram</p>
                  <p className="text-white font-medium">{t.contact.social.instagram}</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;