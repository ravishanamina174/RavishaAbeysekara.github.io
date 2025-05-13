import { Download, Github, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import React from 'react';
import ContactForm from './ContactForm';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="section-padding bg-white/90 relative overflow-hidden">
      <div className="container mx-auto flex justify-center">
        <div className="relative w-full max-w-3xl">
          {/* Glassmorphism Card */}
          <div className="backdrop-blur-xl bg-white/80 border border-blue-100 rounded-2xl shadow-2xl p-8 md:p-12 flex flex-col items-center">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex gap-4 z-10">
              <a href="#" className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-800 transition-colors" aria-label="GitHub">
                <Github size={22} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-800 transition-colors" aria-label="LinkedIn">
                <Linkedin size={22} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-800 transition-colors" aria-label="Instagram">
                <Instagram size={22} />
              </a>
            </div>
            <h2 className="section-title text-center mb-2 mt-8">Let's Connect</h2>
            <p className="text-gray-600 text-center mb-8 max-w-lg">
              Have a project in mind or want to collaborate? Fill out the form below or reach out via social media. I'm always excited to work on new ideas and help bring visions to life with modern web technology.
            </p>
            <div className="w-full">
              <ContactForm />
            </div>
            <div className="mt-8 flex flex-col items-center gap-2">
              <a href="mailto:ravisha@example.com" className="text-blue-600 font-medium flex items-center gap-2 hover:underline">
                <Mail size={18} /> ravisha@example.com
              </a>
              <a href="tel:+94701234567" className="text-blue-600 font-medium flex items-center gap-2 hover:underline">
                <Phone size={18} /> +94 70 123 4567
              </a>
              <a href="#" className="inline-flex items-center button-blue font-semibold px-6 py-3 mt-4">
                <Download size={18} className="mr-2" /> Download My CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;