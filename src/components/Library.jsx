import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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

const Library = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('photos');
  const [headerRef, headerVisible] = useScrollAnimation();
  const [gridRef, gridVisible] = useScrollAnimation();

  const filters = [
    { id: 'photos', label: t.library.filterPhotos },
    { id: 'videos', label: t.library.filterVideos },
    { id: 'infographics', label: t.library.filterInfographics },
    { id: 'longform', label: t.library.filterLongform },
  ];

  const libraryItems = [
    {
      id: 1,
      type: 'featured',
      title: 'Chương trình Người có Ảnh hưởng Niềm Tín',
      subtitle: 'Hội nghị KOL Toàn quốc lần thứ 2 (KOLs Summit 2026)',
      event: '',
      image: '/images/KOL_2025-357.jpg',
      gradient: null,
      category: 'photos',
    },
    {
      id: 2,
      type: 'small',
      title: 'Chương trình tín nhiệm người có ảnh hưởng',
      subtitle: '',
      image: '/images/KOL_2025-367.jpg',
      gradient: null,
      category: 'photos',
    },
    {
      id: 3,
      type: 'small',
      title: 'Chương trình tín nhiệm người có ảnh hưởng',
      subtitle: '',
      image: '/images/KOL_2025-451.jpg',
      gradient: null,
      category: 'photos',
    },
    {
      id: 4,
      type: 'small',
      title: 'Chương trình tín nhiệm người có ảnh hưởng',
      subtitle: '',
      image: '/images/KOL_2025-466.jpg',
      gradient: null,
      category: 'photos',
    },
    {
      id: 5,
      type: 'small',
      title: 'Chương trình tín nhiệm người có ảnh hưởng',
      subtitle: '',
      image: '/images/KOL_2025-457.jpg',
      gradient: null,
      category: 'photos',
    },
  ];

  const filteredItems = libraryItems.filter(
    (item) => activeFilter === 'all' || item.category === activeFilter || activeFilter === 'photos'
  );

  const featuredItem = filteredItems.find((item) => item.type === 'featured');
  const smallItems = filteredItems.filter((item) => item.type === 'small');

  return (
    <section className="py-6 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`mb-8 md:mb-12 transition-all duration-1000 relative ${headerVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-90'}`}
        >
          {/* Title and Button Container - Responsive Layout */}
          <div className="text-center mb-6 relative">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#3000d9]">
              {t.library.title}
            </h2>
            
            {/* View More Button - Absolute positioned on both mobile and desktop */}
            <Link to="/library" className="absolute top-0 right-0 bg-white hover:bg-gray-50 text-[#3000d9] px-4 py-2 md:px-6 md:py-2.5 rounded-full font-medium text-xs md:text-base transition-all duration-300 border border-[#3000d9] shadow-sm hover:shadow-md inline-flex items-center gap-2 btn-animate">
              <span className="hidden md:inline">{t.library.viewMore}</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border btn-animate ${activeFilter === filter.id
                  ? 'bg-[#3000d9] text-white border-[#3000d9] shadow-lg'
                  : 'bg-white text-gray-600 border-gray-300 hover:border-[#3000d9]'
                  }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Library Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-8"
        >
          {/* Featured Large Card */}
          {featuredItem && (
            <div className={`lg:row-span-2 relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer h-[376px] md:h-[420px] lg:h-[440px] transition-all duration-700 ${gridVisible ? 'opacity-100 translate-x-0 rotate-0 scale-100' : 'opacity-0 -translate-x-12 -rotate-2 scale-95'}`}
              style={{ transitionDelay: '100ms' }}
            >
              {featuredItem.image ? (
                <img
                  src={featuredItem.image}
                  alt={featuredItem.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                  <svg className="w-20 h-20 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              )}
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 line-clamp-2">
                  {featuredItem.title}
                </h3>
                <p className="text-white/80 text-sm mb-3">{featuredItem.subtitle}</p>
              </div>
            </div>
          )}

          {/* Small Cards Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-5 h-[376px] md:h-[420px] lg:h-[440px]">
            {smallItems.map((item, index) => {
              // Diverse animations for small cards
              const animations = [
                gridVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-90',
                gridVisible ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 translate-x-8 rotate-3',
                gridVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75',
                gridVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 -translate-y-8 -rotate-2'
              ];
              const animationClass = animations[index % animations.length];

              return (
                <div
                  key={item.id}
                  className={`relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer transition-all duration-700 ${animationClass}`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  {/* Background */}
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${item.gradient}`}></div>
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                  {/* Bottom Content with Arrow */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 flex items-end justify-between">
                    <div className="flex-1">
                      <p className="text-white text-xs md:text-sm font-medium line-clamp-2">{item.title}</p>
                    </div>
                    <button className="flex-shrink-0 ml-2 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-2 rounded-full transition-all duration-300 group-hover:translate-x-1">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Library;
