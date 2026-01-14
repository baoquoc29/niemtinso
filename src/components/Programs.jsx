import React, { useEffect, useRef, useState } from 'react';
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

const Programs = () => {
  const { t } = useLanguage();
  const [headerRef, headerVisible] = useScrollAnimation();
  const [gridRef, gridVisible] = useScrollAnimation();

  const programs = [
    {
      id: '01',
      title: t.programs.program1.title,
      items: t.programs.program1.items,
      icon: '🔐'
    },
    {
      id: '02',
      title: t.programs.program2.title,
      items: t.programs.program2.items,
      icon: '🗄️'
    },
    {
      id: '03',
      title: t.programs.program3.title,
      items: t.programs.program3.items,
      icon: '👁️'
    },
    {
      id: '04',
      title: t.programs.program4.title,
      items: t.programs.program4.items,
      icon: '🏛️'
    },
    {
      id: '05',
      title: t.programs.program5.title,
      items: t.programs.program5.items,
      icon: '👥'
    },
    {
      id: '06',
      title: t.programs.program6.title,
      items: t.programs.program6.items,
      icon: '🌐'
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-8 md:mb-12 transition-all duration-700 ease-out ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3000d9] mb-4">
            {t.programs.sectionTitle}
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
            {t.programs.sectionDescription}
          </p>
        </div>

        {/* Programs Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-10"
        >
          {programs.map((program, index) => (
            <div
              key={program.id}
              className={`relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 ease-out overflow-hidden group ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-50"></div>

              {/* Card Content */}
              <div className="relative p-6 h-full flex flex-col">
                {/* Number Badge */}
                <div className="text-4xl md:text-5xl font-bold text-blue-300 mb-3">
                  {program.id}
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-[#3000d9] mb-4 whitespace-pre-line leading-tight">
                  {program.title}
                </h3>

                {/* Icon */}
                {/*<div*/}
                {/*    className="absolute top-6 right-6 text-5xl md:text-6xl opacity-70 group-hover:scale-110 transition-transform duration-300">*/}
                {/*  {program.icon}*/}
                {/*</div>*/}

                {/* Items List */}
                <ul className="space-y-2 mb-6 flex-grow">
                  {program.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <a
                  href="#"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors duration-300 group/link"
                >
                  {t.programs.viewDetails}
                  <svg
                    className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              {/* Hover Effect Border */}
              <div
                className="absolute inset-0 border-2 border-blue-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        {/*<div className="text-center">*/}
        {/*  <button*/}
        {/*    className="bg-white hover:bg-gray-50 text-[#3000d9] px-8 py-3 rounded-full font-medium text-base transition-all duration-300 border border-[#3000d9] shadow-sm hover:shadow-md inline-flex items-center gap-2 btn-animate">*/}
        {/*    {t.programs.ctaButton}*/}
        {/*    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">*/}
        {/*      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />*/}
        {/*    </svg>*/}
        {/*  </button>*/}
        {/*</div>*/}
      </div>
    </section>
  );
};

export default Programs;

