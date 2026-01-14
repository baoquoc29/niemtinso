import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

// Lazy Image Component
const LazyImage = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className="w-full h-full">
      {isInView ? (
        <>
          {!isLoaded && (
            <div className="w-full h-full bg-gray-800 animate-pulse flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-600 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
          )}
          <img
            src={src}
            alt={alt}
            className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
            onLoad={() => setIsLoaded(true)}
          />
        </>
      ) : (
        <div className="w-full h-full bg-gray-800 animate-pulse"></div>
      )}
    </div>
  );
};

const LibraryPage = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('photos');
  const [showAll, setShowAll] = useState(false);

  const tabs = [
    { id: 'photos', label: t.library?.filterPhotos || 'Ảnh' },
    { id: 'videos', label: t.library?.filterVideos || 'Video' },
    { id: 'infographics', label: t.library?.filterInfographics || 'Infographic' },
    { id: 'longform', label: t.library?.filterLongform || 'Longform' },
  ];

  const libraryItems = {
    photos: [
      { id: 1, image: '/images/KOL_2025-357.jpg' },
      { id: 2, image: '/images/KOL_2025-367.jpg' },
      { id: 3, image: '/images/KOL_2025-451.jpg' },
      { id: 4, image: '/images/KOL_2025-466.jpg' },
      { id: 5, image: '/images/KOL_2025-457.jpg' },
      { id: 6, image: '/images/KOL_2025-474.jpg' },
      { id: 7, image: '/images/KOL_2025-473.jpg' },
      { id: 8, image: '/images/KOL_2025-477.jpg' },
      { id: 9, image: '/images/KOL_2025-490.jpg' },
      { id: 10, image: '/images/KOL_2025-509.jpg' },
      { id: 11, image: '/images/KOL_2025-552.jpg' },
      { id: 12, image: '/images/KOL_2025-567.jpg' },
      { id: 13, image: '/images/KOL_2025-585.jpg' },
      { id: 14, image: '/images/KOL_2025-699.jpg' },
      { id: 15, image: '/images/KOL_2025-725.jpg' },
      { id: 16, image: '/images/KOL_2025-741.jpg' },
      { id: 17, image: '/images/KOL_2025-751.jpg' },
      { id: 18, image: '/images/KOL_2025-756.jpg' },
      { id: 19, image: '/images/KOL_2025-773.jpg' },
      { id: 20, image: '/images/main 2.jpg' },
      { id: 21, image: '/images/main.jpg' },
    ],
    videos: [
      { id: 1, image: null },
      { id: 2, image: null },
      { id: 3, image: null },
      { id: 4, image: null },
    ],
    infographics: [
      { id: 1, image: null },
      { id: 2, image: null },
      { id: 3, image: null },
      { id: 4, image: null },
    ],
    longform: [
      { id: 1, image: null },
      { id: 2, image: null },
      { id: 3, image: null },
      { id: 4, image: null },
    ],
  };

  const currentItems = libraryItems[activeTab] || [];
  const displayedItems = showAll ? currentItems : currentItems.slice(0, 8);

  return (
    <main className="pt-16">
      <section className="py-8 md:py-10 bg-white min-h-screen">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header with Tabs and Button */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4 animate-fade-in-down">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setShowAll(false);
                  }}
                  className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 btn-animate ${activeTab === tab.id
                      ? 'bg-[#3000d9] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-[#3000d9]/10'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* View More Button */}
            {currentItems.length > 8 && !showAll && (
              <button
                onClick={() => setShowAll(true)}
                className="bg-white hover:bg-gray-50 border border-[#3000d9] text-[#3000d9] px-6 py-2.5 text-sm font-medium transition-all duration-300 flex items-center gap-2 self-start md:self-auto rounded-full btn-animate"
              >
                <span>{t.library?.viewMore || 'XEM THÊM'}</span>
              </button>
            )}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
            {displayedItems.map((item, index) => (
              <div
                key={item.id}
                className="relative aspect-[4/3] bg-black overflow-hidden group cursor-pointer card-animate"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.image ? (
                  <LazyImage
                    src={item.image}
                    alt={`Ảnh ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-black flex items-center justify-center">
                    <span className="text-white text-xl md:text-2xl font-bold">
                      {t.library?.filterPhotos || 'IMAGE'} {index + 1}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default LibraryPage;
