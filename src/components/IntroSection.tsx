import React from 'react';

const IntroSection: React.FC = () => {
  return (
    <section id="intro" className="bg-white/90 py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <p className="text-gray-500 font-medium">
            BSc. (Hons) Undergraduate at SLTC Research University
          </p>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
          Hi, I'm <span className="highlight-blue">Ravisha Abeysekara</span>
        </h1>
        <div className="mb-10">
          <p className="text-gray-700 text-lg md:text-xl inline-block relative">
            <span className="relative inline-block">
              MERN Stack Developer <span className="mx-2">|</span> React Enthusiast <span className="mx-2">|</span> UI/UX Designer
              <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-600 to-transparent"></span>
            </span>
          </p>
        </div>
        <div className="mt-8 md:mt-12 flex justify-center">
          <a 
            href="#contact" 
            className="button-blue flex items-center justify-center"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;