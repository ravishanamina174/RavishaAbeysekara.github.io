import { ArrowLeft, Code2 } from 'lucide-react';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const dummyArticles = [
  {
    id: '1',
    title: "The Future of React: What's Coming in 2025",
    date: 'Apr 15, 2025',
    content: `## React\nReact is evolving rapidly, with new features like Server Components, React Forget, and more. In this article, we explore what's next for the React ecosystem and how you can prepare as a developer.\n\n## Frontend\nStay tuned for more updates!`,
    tags: ['React', 'Frontend', '2025'],
    imageUrl: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: '2',
    title: 'Designing for Accessibility: Best Practices',
    date: 'Mar 22, 2025',
    content: `## Accessibility\nAccessibility is crucial for modern web apps. Learn how to make your projects inclusive and user-friendly for everyone.\n\n## UI/UX\nWe cover ARIA, color contrast, keyboard navigation, and more.`,
    tags: ['Accessibility', 'UI/UX', 'Best Practices'],
    imageUrl: "https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: '3',
    title: 'MongoDB vs SQL: Choosing the Right Database',
    date: 'Feb 10, 2025',
    content: `## MongoDB\nChoosing the right database is key for scalable apps.\n\n## SQL\nWe compare MongoDB and SQL, their strengths, and when to use each.\n\n## Backend\nGet practical tips for real-world projects.`,
    tags: ['MongoDB', 'SQL', 'Backend'],
    imageUrl: "https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

function parseContent(content: string) {
  // Split by ## SectionName and render anchors
  const lines = content.split(/\n/);
  const elements: React.ReactNode[] = [];
  let currentSection = '';
  lines.forEach((line, idx) => {
    const match = line.match(/^##\s*(.+)$/);
    if (match) {
      currentSection = match[1];
      elements.push(
        <h2
          id={currentSection.replace(/\s+/g, '').toLowerCase()}
          key={`section-${currentSection}`}
          className="text-xl font-bold text-blue-600 mt-8 mb-2"
        >
          {currentSection}
        </h2>
      );
    } else if (line.trim() !== '') {
      elements.push(
        <p key={idx} className="mb-2 text-gray-800 font-mono">
          {line}
        </p>
      );
    }
  });
  return elements;
}

const ArticlesPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const article = dummyArticles.find((a) => a.id === id) || dummyArticles[0];

  const handleTagClick = (tag: string) => {
    const anchor = document.getElementById(tag.replace(/\s+/g, '').toLowerCase());
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16 relative overflow-hidden">
      {/* Animated Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500 opacity-10 rounded-full blur-3xl animate-slowpulse z-0" />
      <div className="relative z-10 w-full max-w-2xl mt-20">
        <div className="bg-white/90 border border-blue-100 rounded-2xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
          <button
            onClick={() => navigate('/')}
            className="absolute top-4 left-4 flex items-center gap-1 text-blue-600 hover:underline font-medium text-sm z-10 bg-transparent"
            style={{padding: 0}}
          >
            <ArrowLeft size={18} /> Back
          </button>
          <div className="absolute top-4 right-4 animate-bounce text-blue-500">
            <Code2 size={32} />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 animate-fade-in">
            {article.title}
          </h1>
          <div className="flex items-center gap-3 mb-4 animate-fade-in flex-wrap">
            <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-semibold">{article.date}</span>
            {article.tags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagClick(tag)}
                className="text-xs bg-gray-100 text-blue-600 px-2 py-1 rounded-full font-medium hover:bg-blue-50 hover:underline transition-colors duration-200 cursor-pointer border border-blue-100"
                type="button"
              >
                {tag}
              </button>
            ))}
          </div>
          <div className="bg-gray-900 text-green-400 rounded-lg p-6 text-sm font-mono overflow-x-auto shadow-inner animate-fade-in" style={{ whiteSpace: 'pre-wrap' }}>
            {parseContent(article.content)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticlesPage; 