import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Library = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('photos');

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
      title: t.library.item1.title,
      subtitle: t.library.item1.subtitle,
      event: t.library.item1.event,
      image: null,
      gradient: null,
      category: 'photos',
    },
    {
      id: 2,
      type: 'small',
      title: t.library.item2.title,
      subtitle: t.library.item2.subtitle,
      image: null,
      gradient: 'from-purple-600 via-blue-500 to-cyan-400',
      category: 'photos',
    },
    {
      id: 3,
      type: 'small',
      title: t.library.item3.title,
      subtitle: t.library.item3.subtitle,
      image: null,
      gradient: 'from-orange-500 via-red-500 to-pink-500',
      category: 'photos',
    },
    {
      id: 4,
      type: 'small',
      title: t.library.item4.title,
      subtitle: t.library.item4.subtitle,
      image: null,
      gradient: 'from-purple-700 via-purple-600 to-blue-500',
      category: 'photos',
    },
    {
      id: 5,
      type: 'small',
      title: t.library.item5.title,
      subtitle: t.library.item5.subtitle,
      image: null,
      gradient: 'from-blue-600 via-purple-600 to-pink-500',
      category: 'photos',
    },
  ];

  const filteredItems = libraryItems.filter(
    (item) => activeFilter === 'all' || item.category === activeFilter || activeFilter === 'photos'
  );

  const featuredItem = filteredItems.find((item) => item.type === 'featured');
  const smallItems = filteredItems.filter((item) => item.type === 'small');

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <p className="text-sm md:text-base text-gray-500 mb-2 uppercase tracking-wide">
            {t.library.subtitle}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
            {t.library.title}
          </h2>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeFilter === filter.id
                    ? 'bg-blue-900 text-white border-blue-900 shadow-lg'
                    : 'bg-white text-gray-600 border-gray-300 hover:border-blue-400'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Library Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-8">
          {/* Featured Large Card */}
          {featuredItem && (
            <div className="lg:row-span-2 relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer h-[376px] md:h-[420px] lg:h-[440px]">
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
                <p className="text-white/80 text-sm mb-2">{featuredItem.subtitle}</p>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 line-clamp-2">
                  {featuredItem.title}
                </h3>
                <p className="text-white/70 text-sm">{featuredItem.event}</p>
              </div>
            </div>
          )}

          {/* Small Cards Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-5 h-[376px] md:h-[420px] lg:h-[440px]">
            {smallItems.map((item) => (
              <div
                key={item.id}
                className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
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

                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-semibold text-gray-800">
                    KOL
                  </span>
                </div>

                {/* Logo/Text Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-4">
                    <div className="text-white text-2xl md:text-3xl font-bold mb-1">KOL</div>
                    <p className="text-white/80 text-[10px] md:text-xs leading-tight">
                      với kỳ nguyên<br />vươn mình<br />của dân tộc
                    </p>
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white/90 text-xs font-medium line-clamp-1">{item.title}</p>
                  <p className="text-white/70 text-[10px] line-clamp-1">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center">
          <button className="bg-white hover:bg-gray-50 text-blue-900 px-8 py-3 rounded-full font-medium text-base transition-all duration-300 border border-gray-300 hover:border-blue-400 shadow-sm hover:shadow-md inline-flex items-center gap-2">
            {t.library.viewMore}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Library;
