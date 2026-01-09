import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Programs = () => {
  const { t } = useLanguage();

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
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm md:text-base text-gray-600 mb-2 uppercase tracking-wide">
            {t.programs.sectionSubtitle}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            {t.programs.sectionTitle}
          </h2>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {/* Card 1 - Large Left (Đại Sứ) */}
          <div className="md:col-span-1 lg:col-span-2 lg:row-span-2 relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group">
            <div className={`absolute inset-0 bg-gradient-to-br ${programs[0].gradient}`}></div>
            <div className="relative p-4 md:p-5 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="text-xs md:text-sm text-white/80 uppercase tracking-wider">
                    <div>{t.programs.badge}</div>
                    <div className="font-bold">{t.programs.action2026}</div>
                  </div>
                  {programs[0].badge && (
                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-white">
                      {programs[0].badge}
                    </div>
                  )}
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight line-clamp-2">
                  {programs[0].title}
                </h3>
                <div className="h-1 w-16 bg-white mb-4"></div>
                {programs[0].description && (
                  <p className="text-base md:text-lg text-white/90 mb-4 leading-relaxed line-clamp-2">
                    {programs[0].description}
                  </p>
                )}
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm md:text-base text-white font-medium">
                  {programs[0].event}
                </p>
                <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 rounded-full transition-all duration-300 group-hover:translate-x-1">
                  <svg className="w-5 h-5 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 - Top Right (Tín Nhiệm) */}
          <div className="md:col-span-1 lg:col-span-2 relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group h-[250px] md:h-[240px] lg:h-[230px]">
            <div className={`absolute inset-0 bg-gradient-to-br ${programs[1].gradient}`}></div>
            <div className="relative p-4 md:p-5 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between mb-3">
                  <div className="text-xs text-white/80 uppercase tracking-wider">
                    <div>{t.programs.badge}</div>
                    <div className="font-bold">{t.programs.action2026}</div>
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight line-clamp-1">
                  {programs[1].title}
                </h3>
                {programs[1].subtitle && (
                  <p className="text-base text-white/90 font-medium mb-2 truncate">
                    {programs[1].subtitle}
                  </p>
                )}
                {programs[1].description && (
                  <p className="text-xs md:text-sm text-white/75 leading-relaxed line-clamp-2">
                    {programs[1].description}
                  </p>
                )}
              </div>
              <div className="flex items-center justify-between mt-3">
                <p className="text-xs md:text-sm text-white font-medium">
                  {programs[1].event}
                </p>
                <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 rounded-full transition-all duration-300 group-hover:translate-x-1">
                  <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 - Middle Right (Kiểm Chứng) */}
          <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group h-[250px] md:h-[240px] lg:h-[230px]">
            <div className={`absolute inset-0 bg-gradient-to-br ${programs[2].gradient}`}></div>
            <div className="relative p-4 md:p-5 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between mb-3">
                  <div className="text-xs text-white/80 uppercase tracking-wider">
                    <div>{t.programs.badge}</div>
                    <div className="font-bold">{t.programs.action2026}</div>
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight line-clamp-1">
                  {programs[2].title}
                </h3>
                {programs[2].subtitle && (
                  <p className="text-base text-white/90 font-medium mb-2 truncate">
                    {programs[2].subtitle}
                  </p>
                )}
                {programs[2].description && (
                  <p className="text-xs md:text-sm text-white/75 leading-relaxed line-clamp-2">
                    {programs[2].description}
                  </p>
                )}
              </div>
              <div className="flex items-center justify-between mt-3">
                <p className="text-xs md:text-sm text-white font-medium">
                  {programs[2].event}
                </p>
                <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 rounded-full transition-all duration-300 group-hover:translate-x-1">
                  <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Card 4 - Bottom Right (Không Một Mình) */}
          <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group h-[250px] md:h-[240px] lg:h-[230px]">
            <div className={`absolute inset-0 bg-gradient-to-br ${programs[3].gradient}`}></div>
            <div className="relative p-4 md:p-5 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between mb-3">
                  <div className="text-xs text-white/80 uppercase tracking-wider">
                    <div>{t.programs.badge}</div>
                    <div className="font-bold">{t.programs.action2026}</div>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight line-clamp-1">
                  {programs[3].title}
                </h3>
                {programs[3].subtitle && (
                  <p className="text-sm text-white/90 font-medium mb-2 truncate">
                    {programs[3].subtitle}
                  </p>
                )}
                {programs[3].description && (
                  <p className="text-xs md:text-sm text-white/75 leading-relaxed line-clamp-2">
                    {programs[3].description}
                  </p>
                )}
              </div>
              <div className="flex items-center justify-between mt-3">
                <p className="text-xs md:text-sm text-white font-medium">
                  {programs[3].event}
                </p>
                <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 rounded-full transition-all duration-300 group-hover:translate-x-1">
                  <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Card 5 - Bottom Left (KOL) */}
          <div className="md:col-span-1 lg:col-span-2 relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group h-[230px] md:h-[220px] lg:h-[210px]">
            <div className={`absolute inset-0 bg-gradient-to-br ${programs[4].gradient}`}></div>
            <div className="relative p-4 md:p-5 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between mb-3">
                  <div className="text-xs text-white/80 uppercase tracking-wider">
                    <div>{t.programs.badge}</div>
                    <div className="font-bold">{t.programs.action2026}</div>
                  </div>
                  {programs[4].badge && (
                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-white">
                      {programs[4].badge}
                    </div>
                  )}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight truncate">
                  {programs[4].title}
                </h3>
                {programs[4].subtitle && (
                  <p className="text-sm text-white/90 font-medium truncate">
                    {programs[4].subtitle}
                  </p>
                )}
              </div>
              <div className="flex items-center justify-between mt-3">
                <p className="text-xs md:text-sm text-white font-medium">
                  {programs[4].event}
                </p>
                <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 rounded-full transition-all duration-300 group-hover:translate-x-1">
                  <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Card 6 - Bottom Right (Digital Trust Awards) */}
          <div className="md:col-span-1 lg:col-span-2 relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group h-[230px] md:h-[220px] lg:h-[210px]">
            <div className={`absolute inset-0 bg-gradient-to-br ${programs[5].gradient}`}></div>
            <div className="relative p-4 md:p-5 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between mb-3">
                  <div className="text-xs text-white/80 uppercase tracking-wider">
                    <div>{t.programs.badge}</div>
                    <div className="font-bold">{t.programs.action2026}</div>
                  </div>
                  {programs[5].badge && (
                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-white">
                      {programs[5].badge}
                    </div>
                  )}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight truncate">
                  {programs[5].title}
                </h3>
                {programs[5].description && (
                  <p className="text-xs md:text-sm text-white/80 leading-relaxed line-clamp-2">
                    {programs[5].description}
                  </p>
                )}
              </div>
              <div className="flex items-center justify-between mt-3">
                <p className="text-xs md:text-sm text-white font-medium">
                  {programs[5].event}
                </p>
                <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 rounded-full transition-all duration-300 group-hover:translate-x-1">
                  <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;

