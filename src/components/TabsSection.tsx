import React, { useState } from 'react';
import { FaBriefcase, FaGraduationCap, FaHtml5, FaJs, FaNodeJs, FaReact, FaServer, FaTools } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiTailwindcss } from 'react-icons/si';

type TabType = 'skills' | 'experience' | 'education';

const frontendSkills = [
  {
    icon: <FaReact className="text-blue-500 w-8 h-8" />, name: 'React.js', level: 'Expert', desc: 'Building interactive UIs with React.'
  },
  {
    icon: <FaJs className="text-yellow-400 w-8 h-8" />, name: 'JavaScript / TypeScript', level: 'Advanced', desc: 'Modern JS and TS for scalable apps.'
  },
  {
    icon: <FaHtml5 className="text-orange-500 w-8 h-8" />, name: 'HTML & CSS / SCSS', level: 'Expert', desc: 'Semantic HTML and modern CSS/SCSS.'
  },
  {
    icon: <SiTailwindcss className="text-cyan-500 w-8 h-8" />, name: 'UI Frameworks (Tailwind, MUI)', level: 'Proficient', desc: 'Rapid UI with Tailwind and MUI.'
  },
];

const backendSkills = [
  {
    icon: <FaNodeJs className="text-green-600 w-8 h-8" />, name: 'Node.js', level: 'Advanced', desc: 'Server-side JavaScript with Node.'
  },
  {
    icon: <SiExpress className="text-gray-700 w-8 h-8" />, name: 'Express.js', level: 'Advanced', desc: 'REST APIs and middleware with Express.'
  },
  {
    icon: <SiMongodb className="text-green-700 w-8 h-8" />, name: 'MongoDB', level: 'Proficient', desc: 'NoSQL database for modern apps.'
  },
  {
    icon: <FaServer className="text-blue-400 w-8 h-8" />, name: 'RESTful API Design', level: 'Proficient', desc: 'Designing scalable REST APIs.'
  },
];

const TabsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('skills');

  const switchTab = (tab: TabType) => {
    setActiveTab(tab);
  };

  return (
    <section id="skills" className="section-padding bg-white/90">
      <div className="container mx-auto">
        <h2 className="section-title text-center">My Expertise</h2>
        
        <div className="mt-10 max-w-4xl mx-auto">
          {/* Tabs Navigation */}
          <div className="flex justify-center border-b border-gray-200 mb-10">
            <button
              className={`px-6 py-3 font-semibold text-lg transition-all duration-300 relative focus:outline-none ${
                activeTab === 'skills' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-blue-600'
              }`}
              onClick={() => switchTab('skills')}
            >
              <FaTools className="inline mr-2 mb-1 text-blue-600 w-5 h-5" />
              Skills
            </button>
            
            <button
              className={`px-6 py-3 font-semibold text-lg transition-all duration-300 relative focus:outline-none ${
                activeTab === 'experience' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-blue-600'
              }`}
              onClick={() => switchTab('experience')}
            >
              <FaBriefcase className="inline mr-2 mb-1 text-gray-700 w-5 h-5" />
              Experience
            </button>
            
            <button
              className={`px-6 py-3 font-semibold text-lg transition-all duration-300 relative focus:outline-none ${
                activeTab === 'education' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-blue-600'
              }`}
              onClick={() => switchTab('education')}
            >
              <FaGraduationCap className="inline mr-2 mb-1 text-yellow-600 w-5 h-5" />
              Education
            </button>
          </div>
          
          {/* Tab Content */}
          <div className="tab-content bg-white rounded-xl p-6 md:p-8 shadow-lg min-h-[300px] animate-fade-in border border-gray-100">
            {activeTab === 'skills' && (
              <div className="skills-content grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Frontend Development</h3>
                  <div className="grid grid-cols-1 gap-5">
                    {frontendSkills.map((skill) => (
                      <div key={skill.name} className="flex items-center gap-4 bg-blue-50 rounded-xl p-4 shadow hover:shadow-lg transition-all">
                        <div>{skill.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-gray-900 text-lg">{skill.name}</span>
                            <span className="ml-2 px-2 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-600 animate-fade-in">{skill.level}</span>
                          </div>
                          <div className="text-gray-500 text-sm mt-1">{skill.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Backend Development</h3>
                  <div className="grid grid-cols-1 gap-5">
                    {backendSkills.map((skill) => (
                      <div key={skill.name} className="flex items-center gap-4 bg-blue-50 rounded-xl p-4 shadow hover:shadow-lg transition-all">
                        <div>{skill.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-gray-900 text-lg">{skill.name}</span>
                            <span className="ml-2 px-2 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-600 animate-fade-in">{skill.level}</span>
                          </div>
                          <div className="text-gray-500 text-sm mt-1">{skill.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'experience' && (
              <div className="experience-content space-y-8">
                <div className="card p-6 border-l-4 border-blue-600 bg-white">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">Frontend Developer</h3>
                    <span className="text-blue-600 font-medium">2023 - Present</span>
                  </div>
                  <p className="text-gray-500 mb-3">TechSolutions Inc.</p>
                  <p className="text-gray-600">
                    Developing responsive and interactive web applications using React.js and modern frontend technologies.
                    Collaborating with UX designers to implement pixel-perfect designs and improve user experience.
                  </p>
                </div>
                
                <div className="card p-6 border-l-4 border-gray-200 bg-white">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">Web Design Intern</h3>
                    <span className="text-blue-600 font-medium">2022 - 2023</span>
                  </div>
                  <p className="text-gray-500 mb-3">Creative Agency Studio</p>
                  <p className="text-gray-600">
                    Assisted in designing and developing websites for various clients. 
                    Gained hands-on experience with HTML, CSS, JavaScript, and WordPress.
                  </p>
                </div>
              </div>
            )}
            
            {activeTab === 'education' && (
              <div className="education-content space-y-8">
                <div className="card p-6 border-l-4 border-blue-600 bg-white">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">BSc. (Hons) in Information Technology</h3>
                    <span className="text-blue-600 font-medium">2020 - Present</span>
                  </div>
                  <p className="text-gray-500 mb-3">SLTC Research University</p>
                  <p className="text-gray-600">
                    Specializing in Software Engineering with a focus on web and mobile application development.
                    Current GPA: 3.8/4.0
                  </p>
                </div>
                
                <div className="card p-6 border-l-4 border-gray-200 bg-white">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">Certificate in UI/UX Design</h3>
                    <span className="text-blue-600 font-medium">2022</span>
                  </div>
                  <p className="text-gray-500 mb-3">Design Academy Online</p>
                  <p className="text-gray-600">
                    Completed an intensive 6-month program focused on user interface design principles,
                    user experience research methods, and design tools like Figma and Adobe XD.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabsSection;