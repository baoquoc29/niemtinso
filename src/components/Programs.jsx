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
      id: 1,
      gradient: 'from-blue-900 via-blue-800 to-purple-900',
      title: t.programs.ambassador.title,
      subtitle: t.programs.ambassador.subtitle,
      description: t.programs.ambassador.description,
      event: t.programs.ambassador.event,
      badge: 'ĐẠI SỨ AI',
    },
    {
      id: 2,
      gradient: 'from-pink-600 via-red-500 to-orange-500',
      title: t.programs.trust.title,
      subtitle: t.programs.trust.subtitle,
      description: t.programs.trust.description,
      event: t.programs.trust.event,
    },
    {
      id: 3,
      gradient: 'from-purple-900 via-purple-700 to-red-600',
      title: t.programs.verification.title,
      subtitle: t.programs.verification.subtitle,
      description: t.programs.verification.description,
      event: t.programs.verification.event,
    },
    {
      id: 4,
      gradient: 'from-blue-600 via-blue-500 to-cyan-400',
      title: t.programs.notAlone.title,
      subtitle: t.programs.notAlone.subtitle,
      description: t.programs.notAlone.description,
      event: t.programs.notAlone.event,
    },
    {
      id: 5,
      gradient: 'from-purple-900 via-yellow-600 to-yellow-500',
      title: t.programs.kol.title,
      subtitle: t.programs.kol.subtitle,
      description: t.programs.kol.description,
      event: t.programs.kol.event,
      badge: 'KOL',
    },
    {
      id: 6,
      gradient: 'from-red-800 via-red-600 to-orange-500',
      title: t.programs.awards.title,
      subtitle: t.programs.awards.subtitle,
      description: t.programs.awards.description,
      event: t.programs.awards.event,
      badge: 'DIGITAL TRUST AWARDS',
    },
  ];

  return (
    <section className="py-8 md:py-12 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-6 md:mb-8 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#3000d9]">
            {t.programs.sectionTitle}
          </h2>
        </div>

        {/* Programs Grid */}
        <div 
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 transition-all duration-700 delay-200 ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Card 1 - Large Left (Image Only) */}
          <div className="md:col-span-1 lg:col-span-2 lg:row-span-2 relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group card-animate h-[300px] md:h-[350px] lg:h-[400px] bg-white">
            <img 
              src="/images/hd2026.jpg" 
              alt="Hành động 2026" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Card 2 - Top Right (Image Only) */}
          <div className="md:col-span-1 lg:col-span-2 relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group card-animate h-[180px] md:h-[170px] lg:h-[195px] bg-white">
            <img 
              src="/images/hd2026-02.jpg" 
              alt="Hành động 2026" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Card 3 - Middle Right (Image Only) */}
          <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group card-animate h-[180px] md:h-[170px] lg:h-[195px] bg-white">
            <img 
              src="/images/hd2026-03.jpg" 
              alt="Hành động 2026" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Card 4 - Bottom Right (Image Only) */}
          <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group card-animate h-[180px] md:h-[170px] lg:h-[195px] bg-white">
            <img 
              src="/images/hd2026-04.jpg" 
              alt="Hành động 2026" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Card 5 - Bottom Left (Image Only) */}
          <div className="md:col-span-1 lg:col-span-2 relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group card-animate h-[180px] md:h-[200px] lg:h-[220px] bg-white">
            <img 
              src="/images/hd2026-05.jpg" 
              alt="Hành động 2026" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Card 6 - Bottom Right (Image Only) */}
          <div className="md:col-span-1 lg:col-span-2 relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group card-animate h-[180px] md:h-[200px] lg:h-[220px] bg-white">
            <img 
              src="/images/hd2026-06.jpg" 
              alt="Hành động 2026" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;

