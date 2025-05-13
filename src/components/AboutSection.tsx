import React from 'react';
import { FaLightbulb, FaPuzzlePiece, FaSearch, FaUsers } from 'react-icons/fa';

const expertise = [
  {
    icon: <FaPuzzlePiece className="expertise-icon" />, 
    title: 'Problem Solver',
    desc: 'I enjoy tackling complex challenges and finding effective solutions.'
  },
  {
    icon: <FaSearch className="expertise-icon" />, 
    title: 'Detail Oriented',
    desc: 'I pay close attention to every aspect of my work for quality results.'
  },
  {
    icon: <FaLightbulb className="expertise-icon" />, 
    title: 'Creative Thinker',
    desc: 'I bring fresh ideas and innovative approaches to every project.'
  },
  {
    icon: <FaUsers className="expertise-icon" />, 
    title: 'Team Player',
    desc: 'I collaborate effectively and value diverse perspectives.'
  },
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-white/90">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="section-title mb-6">
            About <span className="highlight-blue">Me</span>
          </h2>
          <div className="text-gray-700 text-lg leading-relaxed mb-10">
            <p className="mb-6 animate-fade-in">
              I'm a passionate developer who thrives at the intersection of design and functionality. 
              I love building beautiful, intuitive, and scalable applications using modern web technologies.
            </p>
            <p className="mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              With a strong foundation in the <span className="highlight-blue">MERN stack</span> (MongoDB, Express, React, Node.js), 
              I craft digital experiences that are not only visually appealing but also highly functional and user-friendly.
            </p>
            <p className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              As a <span className="highlight-yellow">UI/UX enthusiast</span>, I believe in the power of thoughtful design to solve problems and enhance user satisfaction. 
              I'm constantly exploring new tools and techniques to push the boundaries of what's possible in web development.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            {expertise.map((item, idx) => (
              <div key={idx} className="card">
                {item.icon}
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-500 text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;