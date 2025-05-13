import { ChevronRight } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

interface ArticleCardProps {
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, excerpt, imageUrl, date }) => {
  return (
    <div className="card overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl group border border-gray-100">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full rounded-lg h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-xs bg-blue-600 text-white px-3 py-1 rounded-full shadow">
          {date}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {excerpt}
        </p>
        
        <Link to={`/articles/1`} className="text-blue-600 font-medium inline-flex items-center hover:underline transition-colors duration-300">
          Read More <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

const ArticlesSection: React.FC = () => {
  const articles = [
    {
      title: "The Future of React: What's Coming in 2025",
      excerpt: "Exploring the upcoming features and improvements in React's ecosystem and how they will shape frontend development.",
      imageUrl: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "Apr 15, 2025"
    },
    {
      title: "Designing for Accessibility: Best Practices",
      excerpt: "Learn how to create inclusive web experiences that work for everyone, regardless of abilities or disabilities.",
      imageUrl: "https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "Mar 22, 2025"
    },
    {
      title: "MongoDB vs SQL: Choosing the Right Database",
      excerpt: "A comprehensive comparison of MongoDB and SQL databases, helping you make informed decisions for your projects.",
      imageUrl: "https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "Feb 10, 2025"
    }
  ];

  return (
    <section id="articles" className="section-padding bg-white/90">
      <div className="container mx-auto">
        <h2 className="section-title text-center">My Articles</h2>
        
        <div className="mt-12  grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              title={article.title}
              excerpt={article.excerpt}
              imageUrl={article.imageUrl}
              date={article.date}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="inline-block px-8 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-300 font-semibold"
          >
            See More Articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;