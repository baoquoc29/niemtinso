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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentIndividualSlide, setCurrentIndividualSlide] = useState(0);
  const [headerRef, headerVisible] = useScrollAnimation();
  const [orgRef, orgVisible] = useScrollAnimation();
  const [individualRef, individualVisible] = useScrollAnimation();
  const [statsRef, statsVisible] = useScrollAnimation();


  const organizations = [
    { id: 1, name: 'Wind Eco', logo: '/images/company/1.Công ty CP Wind Eco.webp' },
    { id: 2, name: 'Wind Media', logo: '/images/company/Công ty CP Gió Media (Wind Media).png' },
    { id: 3, name: 'IEC Consulting', logo: '/images/company/Công ty CP IEC Consulting.png' },
    { id: 4, name: 'Kênh 28', logo: '/images/company/Công ty CP Kênh 28 Entertainment.webp' },
    { id: 5, name: 'Metub', logo: '/images/company/Công ty CP Metub Việt Nam.jpg' },
    { id: 6, name: 'MCV Group', logo: '/images/company/Công ty CP Tập đoàn MCV (MCV Group).jpg' },
    { id: 7, name: 'Đất Việt VAC', logo: '/images/company/Công ty CP Tập đoàn Đất Việt (DatViet VAC).png' },
    { id: 8, name: 'VCCorp', logo: '/images/company/Công ty CP VCCorp.png' },
    { id: 9, name: 'SChannel', logo: '/images/company/Công ty CP dịch vụ quảng cáo & truyền thông SChannel.png' },
    { id: 10, name: 'Orange Agency', logo: '/images/company/Công ty TNHH Orange Agency & Biết Thế Network.jpg' },
    { id: 11, name: 'Shopee', logo: '/images/company/Công ty TNHH Shopee.png' },
    { id: 12, name: 'Thư viện Pháp luật', logo: '/images/company/Công ty TNHH Thư viện Pháp luật.png' },
    { id: 13, name: 'TVH Media', logo: '/images/company/Công ty TNHH Truyền thông & Giải trí TVH Media.jpg' },
    { id: 14, name: 'iSocial', logo: '/images/company/Công ty TNHH Truyền thông iSocial Việt Nam.png' },
    { id: 15, name: 'Vitamin Network', logo: '/images/company/Công ty TNHH truyền thông Vitamin Network.jpg' },
    { id: 16, name: 'B.School', logo: '/images/company/Trường TH, THCS & THPT B.School.png' },
  ];

  // Carousel settings
  const itemsPerSlide = 6;
  const totalSlides = Math.ceil(organizations.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentSlideItems = () => {
    const startIndex = currentSlide * itemsPerSlide;
    const endIndex = startIndex + itemsPerSlide;
    return organizations.slice(startIndex, endIndex);
  };

  // Auto-scroll effect for organizations
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, [currentSlide]);

  // Individual carousel functions
  const individualsPerSlide = 4;
  const allIndividuals = [
    {
      id: 1,
      name: 'MC. Khánh Vy',
      role: t.members.individual1.role,
      description: 'Tạo nội dung giá trị bền vững',
      gradient: 'from-orange-400 via-orange-500 to-yellow-400',
      image: '/images/MC_KHANH_VY.png',
    },
    {
      id: 2,
      name: 'Rapper. Đen Vâu',
      role: t.members.individual2.role,
      description: 'Người truyền cảm hứng tích cực',
      gradient: 'from-red-500 via-red-600 to-pink-500',
      image: '/images/RP_DEN_VAU.png',
    },
    {
      id: 3,
      name: 'Hoa hậu Bảo Ngọc',
      role: t.members.individual3.role,
      description: t.members.individual3.description,
      gradient: 'from-pink-400 via-pink-500 to-rose-400',
      image: '/images/HH_BAO_NGOC.png',
    },
    {
      id: 4,
      name: 'KOL Meichan',
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
      imageStyle: { transform: 'translateX(60px) translateY(20px) scale(1.2)' },
    },
    {
      id: 6,
      name: 'TIỂU VY',
      role: 'HOA HẬU',
      description: 'Hoa hậu Việt Nam, biểu tượng sắc đẹp và trí tuệ trẻ.',
      gradient: 'from-pink-400 via-pink-500 to-rose-400',
      image: '/images/Tieu_Vy.png',
      imageStyle: { transform: 'translateX(60px) translateY(30px) scale(0.9)' },
    },
    {
      id: 7,
      name: 'NGUYỄN SĨ TUẤN',
      role: 'KOL',
      description: 'KOL nổi bật với nhiều hoạt động cộng đồng.',
      gradient: 'from-green-400 via-green-500 to-emerald-400',
      image: '/images/Nguyen_Si_Tuan.png',
      imageStyle: { transform: 'translateX(50px) translateY(20px) scale(0.9)' },
    },
    {
      id: 8,
      name: 'ĐỖ ĐĂNG QUANG',
      role: 'KOL',
      description: 'KOL trẻ năng động, sáng tạo và truyền cảm hứng.',
      gradient: 'from-yellow-400 via-yellow-500 to-orange-400',
      image: '/images/Do_Dang_Quang.png',
      imageStyle: { transform: 'translateX(50px) translateY(-80px) scale(1.5)' },
    },
  ];

  const totalIndividualSlides = Math.ceil(allIndividuals.length / individualsPerSlide);

  const nextIndividualSlide = () => {
    setCurrentIndividualSlide((prev) => (prev + 1) % totalIndividualSlides);
  };

  const prevIndividualSlide = () => {
    setCurrentIndividualSlide((prev) => (prev - 1 + totalIndividualSlides) % totalIndividualSlides);
  };

  const getCurrentIndividualSlideItems = () => {
    const startIndex = currentIndividualSlide * individualsPerSlide;
    const endIndex = startIndex + individualsPerSlide;
    return allIndividuals.slice(startIndex, endIndex);
  };

  // Auto-scroll effect for individuals
  useEffect(() => {
    const interval = setInterval(() => {
      nextIndividualSlide();
    }, 14000); // Change slide every 14 seconds

    return () => clearInterval(interval);
  }, [currentIndividualSlide]);
  // Track if stats animation has run (persists across renders)
  const hasAnimatedStats = useRef(false);

  // Hook for counting animation - runs only once
  const useCountAnimation = (end, duration = 2000) => {
    const [count, setCount] = useState(() => hasAnimatedStats.current ? end : 0);

    useEffect(() => {
      if (!statsVisible || hasAnimatedStats.current) return;

      let startTime;
      const endValue = typeof end === 'string' ? parseInt(end) : end;
      if (isNaN(endValue)) {
        setCount(end);
        hasAnimatedStats.current = true;
        return;
      }

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);

        setCount(Math.floor(progress * endValue));

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
          hasAnimatedStats.current = true; // Mark as animated after completion
        }
      };

      requestAnimationFrame(animate);
    }, [statsVisible, end, duration]);

    return count;
  };

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
          className={`text-center mb-8 md:mb-12 transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0 scale-100 blur-0' : 'opacity-0 translate-y-12 scale-95 blur-sm'}`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3000d9] mb-6">
            {t.members.title}
          </h2>
        </div>

        {/* Organizations Section */}
        <div
          ref={orgRef}
          className={`mb-16 transition-all duration-1000 ${orgVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#3000d9] text-center mb-8">
            {t.members.tabOrganizations}
          </h3>

          {/* Carousel Container */}
          <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
              {getCurrentSlideItems().map((org, index) => {
                // Diverse animations for each card
                const animations = [
                  orgVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-8 scale-95',
                  orgVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-8 scale-95',
                  orgVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 -translate-y-8 -rotate-3',
                  orgVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-8 rotate-3',
                  orgVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75',
                  orgVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                ];
                const animationClass = animations[index % animations.length];

                return (
                  <div
                    key={org.id}
                    className={`group cursor-pointer pb-4 hover:shadow-lg transition-all duration-700 shadow-md rounded-xl bg-white ${animationClass}`}
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    {/* Logo Container */}
                    <div className="rounded-t-xl p-6 flex items-center justify-center h-32 bg-gradient-to-br from-gray-50 to-gray-100">
                      {org.logo ? (
                        <div className="flex items-center justify-center h-full w-full">
                          <img
                            src={org.logo}
                            alt={org.name}
                            className="w-auto max-h-20 object-contain group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      ) : (
                        <span className="text-gray-600 font-semibold text-lg">{org.name}</span>
                      )}
                    </div>

                    {/* Organization Name */}
                    <div className="text-center py-3 px-2">
                      <h4 className="font-semibold text-gray-900 text-sm line-clamp-2">{org.name}</h4>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center gap-6">
              <button
                onClick={prevSlide}
                className="bg-[#3000d9] text-white p-2 rounded-full hover:bg-[#2400b0] transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label="Previous slide"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="bg-[#3000d9] text-white p-2 rounded-full hover:bg-[#2400b0] transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label="Next slide"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Individuals Section */}
        <div
          ref={individualRef}
          className={`mb-12 transition-all duration-1000 ${individualVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#3000d9] text-center mb-8">
            {t.members.tabIndividuals}
          </h3>

          {/* Carousel Container */}
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {getCurrentIndividualSlideItems().map((person, index) => {
                const isSpecialCard = ['Khánh Vy', 'Đen Vâu', 'Bảo Ngọc', 'Meichan', 'MONO', 'TIỂU VY', 'NGUYỄN SĨ TUẤN', 'ĐỖ ĐĂNG QUANG'].some(name => person.name.includes(name));
                const displayName = person.name.includes('.') ? person.name.split('.')[1].trim().toUpperCase() : person.name.toUpperCase();
                const displayRole = person.role.toUpperCase();

                // Diverse animations based on card position
                const animations = [
                  individualVisible ? 'opacity-100 translate-y-0 rotate-0 scale-100' : 'opacity-0 translate-y-12 rotate-6 scale-90',
                  individualVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-12 scale-95',
                  individualVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-12 scale-95',
                  individualVisible ? 'opacity-100 translate-y-0 rotate-0 scale-100' : 'opacity-0 -translate-y-12 -rotate-6 scale-90'
                ];
                const animationClass = animations[index % animations.length];

                return (
                  <div
                    key={person.id}
                    className={`group cursor-pointer hover:shadow-lg transition-all duration-700 shadow-lg rounded-xl bg-white flex flex-col h-full ${animationClass}`}
                    style={{ transitionDelay: `${index * 120}ms` }}
                  >
                    {/* Card with gradient */}
                    <div
                      className={`relative overflow-hidden rounded-t-xl bg-gradient-to-br ${person.gradient} h-[280px] md:h-[300px]`}
                      style={isSpecialCard ? {
                        backgroundImage: 'url(/images/background_kol_card.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                      } : {}}
                    >
                      {/* Badge */}
                      <div className="absolute z-10" style={{ top: '20px', left: '20px', width: '260px', height: '24px' }}>
                        <div>
                          <h3 className="text-white font-bold text-2xl leading-tight drop-shadow-lg">{displayName}</h3>
                          <p className="text-white font-semibold text-lg drop-shadow-md">{displayRole}</p>
                        </div>
                      </div>

                      {/* Image */}
                      <div className="absolute inset-0 flex items-end justify-center">
                        {person.image ? (
                          <>
                            <img
                              src={person.image}
                              alt={person.name}
                              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                              style={person.imageStyle || (() => {
                                if (person.name.includes('Khánh Vy')) return { transform: 'translateX(50px) translateY(20px) scale(0.9)' };
                                if (person.name.includes('Đen Vâu')) return { transform: 'translateX(30px) translateY(30px) scale(0.9)' };
                                if (person.name.includes('Bảo Ngọc')) return { transform: 'translateX(80px) translateY(-50px) scale(1.5)' };
                                if (person.name.includes('Meichan')) return { transform: 'translateX(70px) translateY(20px) scale(0.8)' };
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
                    <div className="text-center py-4 px-2 flex-1 flex flex-col justify-start">
                      <h3 className="font-bold text-gray-900 mb-2">{person.name}</h3>
                      <p className="text-sm text-gray-500 line-clamp-2">{person.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center gap-6">
              <button
                onClick={prevIndividualSlide}
                className="bg-[#3000d9] text-white p-2 rounded-full hover:bg-[#2400b0] transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label="Previous slide"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextIndividualSlide}
                className="bg-[#3000d9] text-white p-2 rounded-full hover:bg-[#2400b0] transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label="Next slide"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>


        {/* Stats Section */}
        <div
          ref={statsRef}
          className={`bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12 transition-all duration-1000 ${statsVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'}`}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#3000d9] text-center mb-8">
            {t.members.networkTitle}
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => {
              const CountUp = ({ value }) => {
                const count = useCountAnimation(value);
                return <>{typeof count === 'number' ? count : count}</>;
              };

              // Diverse animations for each stat
              const statAnimations = [
                statsVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-8 scale-75',
                statsVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-8 scale-75',
                statsVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-8 scale-75',
                statsVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-75'
              ];
              const statAnimation = statAnimations[index % statAnimations.length];

              return (
                <div
                  key={index}
                  className={`text-center transition-all duration-700 ${statAnimation}`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div className="text-4xl md:text-5xl font-bold text-[#3000d9] mb-2">
                    <CountUp value={stat.value} />
                  </div>
                  <div className="text-sm md:text-base text-black font-bold">
                    {stat.label}
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

export default Members;
