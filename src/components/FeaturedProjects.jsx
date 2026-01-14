import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

// Hook để phát hiện scroll
const useScrollAnimation = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(element);
    return () => element && observer.unobserve(element);
  }, []);

  return [ref, isVisible];
};

const FeaturedProjects = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('posts');
  const [headerRef, headerVisible] = useScrollAnimation();
  const [gridRef, gridVisible] = useScrollAnimation();
  const [open, setOpen] = useState(false);

  const projects = [
    {
      id: 1,
      image: '/images/KOL_2025-451.jpg',
      title: t.projects.project1.title,
      description: t.projects.project1.description,
      category: 'posts',
    },
    {
      id: 2,
      image: '/images/k1m.webp',
      title: t.projects.project2.title,
      description: t.projects.project2.description,
      category: 'posts',
    },
    {
      id: 3,
      image: '/images/conguochanoi/conguochanoi.jpg',
      title: t.projects.project3.title,
      description: t.projects.project3.description,
      category: 'posts',
    },
    {
      id: 4,
      image: '/images/main.jpg',
      title: t.projects.project3.title,
      description: t.projects.project3.description,
      category: 'initiatives',
    },
    {
      id: 5,
      image: '/images/main.jpg',
      title: t.projects.project3.title,
      description: t.projects.project3.description,
      category: 'initiatives',
    },
    {
      id: 6,
      image: '/images/main.jpg',
      title: t.projects.project3.title,
      description: t.projects.project3.description,
      category: 'initiatives',
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
        <div
          ref={headerRef}
          className={`text-center mb-8 md:mb-12 transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0 scale-100 blur-0' : 'opacity-0 translate-y-12 scale-90 blur-sm'}`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {t.projects.title}
          </h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setActiveFilter('posts')}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 btn-animate ${activeFilter === 'posts'
                  ? 'bg-white text-purple-700 shadow-lg'
                  : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                }`}
            >
              {t.projects.filterPosts}
            </button>
            <button
              onClick={() => setActiveFilter('initiatives')}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 btn-animate ${activeFilter === 'initiatives'
                  ? 'bg-white text-purple-700 shadow-lg'
                  : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                }`}
            >
              {t.projects.filterInitiatives}
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
        >
          {filteredProjects.map((project, index) => {
            const [openIndex, setOpenIndex] = useState(null);
            const open = openIndex === index;

            // Diverse animations for each project card
            const animations = [
              gridVisible ? 'opacity-100 translate-y-0 rotate-0 scale-100' : 'opacity-0 translate-y-12 rotate-2 scale-90',
              gridVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-12 scale-95',
              gridVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-12 scale-95',
            ];
            const animationClass = animations[index % animations.length];

            return (
              <div
                key={project.id}
                className={`bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 group hover:-translate-y-2 relative p-1 ${animationClass}`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                {/* Image Placeholder */}
                <div className="relative h-48 md:h-72 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden rounded-xl">
                  {project.image ? (
                    <>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Fade bottom */}
                      <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white" />
                    </>
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
                <div className="p-6 flex flex-col">
                  <h3 className="text-lg md:text-2xl font-bold text-indigo-600 mb-3 leading-tight text-center min-h-[4rem] flex items-center justify-center">
                    {project.title}
                  </h3>

                  <div
                    className={`px-6 transition-all duration-500 overflow-hidden duration-1000 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-90"
                      }`}
                  >
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed text-center">
                      {project.description}
                    </p>
                  </div>

                  {/* Action Button */}
                  <div className="flex justify-center mt-auto">
                    <button onClick={() => setOpenIndex(open ? null : index)} className="flex bg-[#3000d9] hover:bg-[#2500b0] text-white p-2.5 rounded-full transition-all duration-300 items-center justify-center">
                      <svg
                        className={`w-5 h-5 transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"
                          }`}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )
          })}



          {/* {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 card-animate relative p-1"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 md:h-56 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden rounded-xl">
                {project.image ? (
                  <>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-24 rounded-b-xl bg-gradient-to-b from-transparent to-white" />
                  </>
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

              <div className="p-6">
                <h3 className="text-lg md:text-2xl font-bold text-indigo-600 mb-3 leading-tight text-center">
                  {project.title}
                </h3>
                
                <div
                  className={`px-6 transition-all duration-500 overflow-hidden duration-1000 ${
                    open ? "max-h-96 opacity-100" : "max-h-0 opacity-90"
                  }`}
                >
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed text-center">
                    {project.description}
                  </p>
                </div>

                <div className="flex justify-center">
                  <button onClick={() => setOpen(!open)} className="flex bg-[#3000d9] hover:bg-[#2500b0] text-white p-2.5 rounded-full transition-all duration-300 group-hover:translate-x-1 items-center justify-center">
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
            </div>
          ))} */}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <button className="bg-white hover:bg-gray-100 text-[#3000d9] px-8 py-3 rounded-full font-medium text-base transition-all duration-300 shadow-lg hover:shadow-xl btn-animate">
            {t.projects.viewMore}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
