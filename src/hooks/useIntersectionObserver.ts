import { useEffect } from 'react';

export const useIntersectionObserver = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Remove opacity-0 and add animation class
          entry.target.classList.remove('opacity-0');
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      // Only add opacity-0 if the section is below the viewport
      const rect = section.getBoundingClientRect();
      if (rect.top > window.innerHeight) {
        section.classList.add('opacity-0');
      }
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);
};