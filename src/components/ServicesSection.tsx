import { Code, Database, Paintbrush } from 'lucide-react';
import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay }) => {
  return (
    <div 
      className="card border border-gray-100 hover:shadow-2xl hover:border-blue-600 transform hover:-translate-y-2 transition-all duration-300"
      style={{ animationDelay: delay }}
    >
      <div className="mb-4 text-blue-600 flex justify-center">
        <div className="p-4 bg-blue-50 rounded-lg">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">{title}</h3>
      <p className="text-gray-600 text-center">
        {description}
      </p>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies like React, Node.js, and MongoDB.",
      icon: <Code size={32} />,
      delay: "0s"
    },
    {
      title: "UI/UX Design",
      description: "User-centered design solutions that are both aesthetically pleasing and functional, focusing on the end-user experience.",
      icon: <Paintbrush size={32} />,
      delay: "0.2s"
    },
    {
      title: "Database Design",
      description: "Efficient database architecture and management systems that ensure data integrity and optimal performance.",
      icon: <Database size={32} />,
      delay: "0.4s"
    }
  ];

  return (
    <section id="services" className="section-padding bg-white/90">
      <div className="container mx-auto">
        <h2 className="section-title text-center">My Services</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;