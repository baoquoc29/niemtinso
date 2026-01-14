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

const Members = () => {
  const { t } = useLanguage();
  const [headerRef, headerVisible] = useScrollAnimation();
  const [contentRef, contentVisible] = useScrollAnimation();
  const [statsRef, statsVisible] = useScrollAnimation();
  const organizations = [
    { id: 1, name: 'Mobifone', logo: '/images/MobiFone_logo.png' },
    { id: 2, name: 'Vinaphone', logo: '/images/Logo_vinaphone_new.png' },
    { id: 3, name: 'Viettel', logo: '/images/Logo_Viettel.png' },
    { id: 4, name: 'Techcombank', logo: '/images/Techcombank_logo.png' },
    { id: 5, name: 'Vietcombank', logo: '/images/Vietcombank_Logo.png' },
    { id: 6, name: 'ABP', logo: '/images/logo-login copy.png' },
  ];
  const individuals = [
    {
      id: 1,
      name: 'KHÁNH VY',
      role: t.members.individual1.role,
      description: 'Tạo nội dung giá trị bền vững',
      gradient: 'from-orange-400 via-orange-500 to-yellow-400',
      image: '/images/MC_KHANH_VY.png',
    },
    {
      id: 2,
      name: 'ĐEN VÂU',
      role: t.members.individual2.role,
      description: 'Người truyền cảm hứng tích cực',
      gradient: 'from-red-500 via-red-600 to-pink-500',
      image: '/images/RP_DEN_VAU.png',
    },
    {
      id: 3,
      name: 'BẢO NGỌC',
      role: t.members.individual3.role,
      description: t.members.individual3.description,
      gradient: 'from-pink-400 via-pink-500 to-rose-400',
      image: '/images/HH_BAO_NGOC.png',
    },
    {
      id: 4,
      name: 'MEICHAN',
      role: t.members.individual4.role,
      description: t.members.individual4.description,
      gradient: 'from-purple-400 via-purple-500 to-violet-400',
      image: '/images/KOL_MEICHAN.png',
    },
    {
      id: 5,
      name: 'MONO',
      role: 'CA SĨ',
      description: 'Ca sĩ trẻ nổi bật với phong cách hiện đại.',
      gradient: 'from-blue-400 via-blue-500 to-cyan-400',
      image: '/images/Mono.png',
    },
    {
      id: 6,
      name: 'TIỂU VY',
      role: 'Hoa hậu',
      description: 'Hoa hậu Việt Nam, biểu tượng sắc đẹp và trí tuệ trẻ.',
      gradient: 'from-pink-400 via-pink-500 to-rose-400',
      image: '/images/Tieu_Vy.png',
    },
    {
      id: 7,
      name: 'NGUYỄN SỸ TUẤN',
      role: 'NGHỆ SĨ',
      description: 'KOL nổi bật với nhiều hoạt động cộng đồng.',
      gradient: 'from-green-400 via-green-500 to-emerald-400',
      image: '/images/Nguyen_Si_Tuan.png',
    },
    {
      id: 8,
      name: 'ĐỖ ĐĂNG QUANG',
      role: 'BIÊN ĐẠO',
      description: 'KOL trẻ năng động, sáng tạo và truyền cảm hứng.',
      gradient: 'from-yellow-400 via-yellow-500 to-orange-400',
      image: '/images/Do_Dang_Quang.png',
    },
  ];
  // Duplicate individuals for infinite scroll effect
  const duplicatedIndividuals = [...individuals, ...individuals];

  const stats = [
    { value: '100+', label: t.members.stats.kols },
    { value: '34', label: t.members.stats.provinces },
    { value: '400+', label: t.members.stats.delegates },
    { value: '100%', label: t.members.stats.free },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-8 md:mb-12 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3000d9] mb-6">
            {t.members.title}
          </h2>
        </div>

        {/* Heading Tổ chức/doanh nghiệp */}
        <div className="flex justify-center mb-4">
          <span className="px-6 py-2 rounded-full bg-[#3000d9] text-white text-base md:text-lg font-semibold shadow-md select-none pointer-events-none">
            {t.members.tabOrganizations}
          </span>
        </div>

        {/* Organizations Logos */}
        <div
          ref={contentRef}
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12 transition-all duration-700 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {organizations.map((org, index) => (
            <div
              key={org.id}
              className="rounded-xl p-6 flex items-center justify-center h-32 hover:shadow-md transition-all duration-300 card-animate"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {org.logo ? (
                <div className="flex items-center justify-center h-full">
                  <img
                    src={org.logo}
                    alt={org.name}
                    className={`w-auto object-contain ${org.name === 'Vinaphone' ? 'max-h-40' : 'max-h-20'}`}
                  />
                </div>
              ) : (
                <span className="text-gray-600 font-semibold text-lg">{org.name}</span>
              )}
            </div>
          ))}
        </div>

        {/* Heading Cá nhân */}
        <div className="flex justify-center mb-4">
          <span className="px-6 py-2 rounded-full bg-[#3000d9] text-white text-base md:text-lg font-semibold shadow-md select-none pointer-events-none">
            {t.members.tabIndividuals}
          </span>
        </div>

        {/* Infinite Carousel KOL Cards */}
        <div className="w-full overflow-x-hidden mb-12">
          <div
            className="flex flex-row gap-6 animate-marquee-right"
            style={{ width: 'max-content', minHeight: 340 }}
          >
            {duplicatedIndividuals.map((person, index) => {
              // Đồng bộ background cho tất cả KOL
              const cardBgStyle = {
                backgroundImage: 'url(/images/background_kol_card.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              };
              return (
                <div
                  key={index}
                  className="group cursor-pointer card-animate pb-4 hover:shadow-lg transition-all duration-300 shadow-lg rounded-xl bg-white min-w-[260px] max-w-xs w-full relative"
                  style={{ transitionDelay: `${(index % individuals.length) * 100}ms` }}
                >
                  {/* Card with gradient */}
                  <div
                    className={`relative overflow-hidden rounded-t-xl bg-gradient-to-br ${person.gradient} h-[280px] md:h-[300px] mb-4`}
                    style={cardBgStyle}
                  >
                    {/* Name & Role đồng bộ layout */}
                    <div className="absolute z-10 left-6 top-6 w-[260px]">
                      <h3 className="text-white font-bold text-2xl leading-tight drop-shadow-lg mb-1">
                        {person.name.toUpperCase()}
                      </h3>
                      <p className="text-white font-semibold text-lg drop-shadow-md">
                        {person.role.toUpperCase()}
                      </p>
                    </div>

                    {/* Image placeholder */}
                    <div className="absolute inset-0 flex items-end justify-center">
                      {person.image ? (
                        <>
                          <img
                            src={person.image}
                            alt={person.name}
                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                            style={(() => {
                              if (person.name === 'KHÁNH VY') return { transform: 'translateX(50px) translateY(20px) scale(0.9)' };
                              if (person.name === 'MONO') return { transform: 'translateX(50px) translateY(40px) scale(1.2)' };
                              if (person.name === 'TIỂU VY') return { transform: 'translateX(60px) translateY(40px) scale(0.9)' };
                              if (person.name === 'NGUYỄN SỸ TUẤN') return { transform: 'translateX(50px) translateY(40px) scale(0.9)' };
                              if (person.name === 'ĐỖ ĐĂNG QUANG') return { transform: 'translateX(50px) translateY(-40px) scale(1.5)' };
                              if (person.name.includes('ĐEN VÂU')) return { transform: 'translateX(30px) translateY(30px) scale(0.9)' };
                              if (person.name.includes('BẢO NGỌC')) return { transform: 'translateX(60px) translateY(0px) scale(1.5)' };
                              if (person.name.includes('MEICHAN')) return { transform: 'translateX(70px) translateY(30px) scale(0.8)' };
                              return {};
                            })()}
                          />
                          <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white" />
                        </>
                      ) : (
                        <div className="w-32 h-32 mb-8 bg-white/20 rounded-full flex items-center justify-center">
                          <svg className="w-16 h-16 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="text-center py-2">
                    <h3 className="font-bold text-gray-900 mb-1">{person.name}</h3>
                    <p className="text-sm text-gray-500 line-clamp-2">{person.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>


        {/* Stats Section */}
        <div
          ref={statsRef}
          className={`bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12 transition-all duration-700 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#3000d9] text-center mb-8">
            {t.members.networkTitle}
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-[#3000d9] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-black font-bold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Members;

/* Tailwind custom animation (bạn cần thêm vào tailwind.config.js):
  extend: {
    keyframes: {
      carousel: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-50%)' },
      },
    },
    animation: {
      carousel: 'carousel 30s linear infinite',
    },
  },
*/
// Nếu chưa có, thêm vào index.css:
/*
@layer utilities {
  .animate-carousel {
    animation: carousel 30s linear infinite;
  }
  @keyframes carousel {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
}
*/
