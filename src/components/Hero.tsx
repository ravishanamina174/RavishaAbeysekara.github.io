import React, { useCallback, useRef } from 'react';
import ravi1 from '../images/ravi1.jpg';
import ravi2 from '../images/ravi2.jpg';
import ravi3 from '../images/ravi3.jpg';
import ravi4 from '../images/ravi4.jpg';

const Hero: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!gridRef.current) return;
    
    const gridItems = gridRef.current.querySelectorAll('.grid-item');
    const rect = gridRef.current.getBoundingClientRect();
    
    gridItems.forEach((item) => {
      const itemRect = item.getBoundingClientRect();
      const x = (e.clientX - rect.left - itemRect.width / 2) / 20;
      const y = (e.clientY - rect.top - itemRect.height / 2) / 20;
      
      requestAnimationFrame(() => {
        (item as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });
    });
  }, []);
  
  const handleMouseLeave = useCallback(() => {
    if (!gridRef.current) return;
    
    const gridItems = gridRef.current.querySelectorAll('.grid-item');
    
    gridItems.forEach((item) => {
      requestAnimationFrame(() => {
        (item as HTMLElement).style.transform = 'translate(0, 0)';
      });
    });
  }, []);
  
  React.useEffect(() => {
    const grid = gridRef.current;
    if (grid) {
      grid.addEventListener('mousemove', handleMouseMove);
      grid.addEventListener('mouseleave', handleMouseLeave);
    }
    
    return () => {
      if (grid) {
        grid.removeEventListener('mousemove', handleMouseMove);
        grid.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [handleMouseMove, handleMouseLeave]);
  
  const gridImages = [
    ravi1,
    ravi2,
    ravi3,
    ravi4
  ];
  
  return (
    <section id="home" className="min-h-[70vh] flex items-center pt-24 bg-white/90 relative overflow-hidden mt-8">
      {/* Animated Accent */}
      <div className="absolute top-0 left-[20%] -translate-x-1/2 w-96 h-96 bg-blue-500 opacity-10 rounded-full blur-3xl animate-slowpulse z-0" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10 relative z-10">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Hi, I'm <span className="highlight-blue">Ravisha Abeysekara</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-xl">
            I'm a passionate <span className="highlight-blue">MERN Stack Developer</span> and <span className="highlight-blue">UI/UX Designer</span> dedicated to building seamless, scalable, and visually stunning web applications.<br />
            I blend technical expertise with creative design to deliver user-centric solutions that solve real-world problems and delight users.<br />
            Let's turn your ideas into impactful digital experiences.
          </p >
          <a href="#contact" className="button-blue inline-block">Let's Work Together</a>
        </div>
        <div className="flex-1">
          <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6">
            {gridImages.map((img, index) => (
              <div 
                key={index} 
                className={`grid-item overflow-hidden rounded-xl border border-gray-200 shadow-sm transition-all duration-500 ease-out bg-white ${
                  index === 0 ? 'col-span-2 row-span-2' : ''
                }`}
              >
                <img 
                  src={img} 
                  alt={`Portfolio image ${index + 1}`} 
                  className="object-cover w-full h-40 md:h-48 lg:h-56"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;