import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const FeaturedProjects = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('posts');

  const projects = [
    {
      id: 1,
      image: null,
      title: t.projects.project1.title,
      description: t.projects.project1.description,
      category: 'posts',
    },
    {
      id: 2,
      image: null,
      title: t.projects.project2.title,
      description: t.projects.project2.description,
      category: 'initiatives',
    },
    {
      id: 3,
      image: null,
      title: t.projects.project3.title,
      description: t.projects.project3.description,
      category: 'posts',
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-16 md:py-24 bg-[#3000d8] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 border-2 border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border-2 border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <p className="text-sm md:text-base text-white/80 mb-2 uppercase tracking-wide">
            {t.projects.subtitle}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {t.projects.title}
          </h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setActiveFilter('posts')}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === 'posts'
                  ? 'bg-white text-purple-700 shadow-lg'
                  : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
              }`}
            >
              {t.projects.filterPosts}
            </button>
            <button
              onClick={() => setActiveFilter('initiatives')}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === 'initiatives'
                  ? 'bg-white text-purple-700 shadow-lg'
                  : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
              }`}
            >
              {t.projects.filterInitiatives}
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
            >
              {/* Image Placeholder */}
              <div className="relative h-48 md:h-56 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="w-16 h-16 text-gray-400"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Action Button */}
                <button className="bg-blue-600 hover:bg-blue-700 text-white p-2.5 rounded-full transition-all duration-300 group-hover:translate-x-1 inline-flex items-center justify-center">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <button className="bg-white hover:bg-gray-100 text-purple-700 px-8 py-3 rounded-full font-medium text-base transition-all duration-300 shadow-lg hover:shadow-xl">
            {t.projects.viewMore}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
