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
  const [activeTab, setActiveTab] = useState('organizations');
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
      name: 'KOL Meichen',
      role: t.members.individual4.role,
      description: t.members.individual4.description,
      gradient: 'from-purple-400 via-purple-500 to-violet-400',
      image: '/images/KOL_MEICHAN.png',
    },
  ];

  const stats = [
    { value: '100+', label: t.members.stats.kols },
    { value: '34', label: t.members.stats.provinces },
    { value: '400+', label: t.members.stats.delegates },
    { value: '100%', label: t.members.stats.free },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-8 md:mb-12 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="text-sm md:text-base text-black mb-2 uppercase tracking-wide font-medium">
            {t.members.subtitle}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3000d9] mb-6">
            {t.members.title}
          </h2>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setActiveTab('organizations')}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border btn-animate ${
                activeTab === 'organizations'
                  ? 'bg-[#3000d9] text-white border-[#3000d9] shadow-lg'
                  : 'bg-white text-gray-600 border-gray-300 hover:border-[#3000d9]'
              }`}
            >
              {t.members.tabOrganizations}
            </button>
            <button
              onClick={() => setActiveTab('individuals')}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border btn-animate ${
                activeTab === 'individuals'
                  ? 'bg-[#3000d9] text-white border-[#3000d9] shadow-lg'
                  : 'bg-white text-gray-600 border-gray-300 hover:border-[#3000d9]'
              }`}
            >
              {t.members.tabIndividuals}
            </button>
          </div>
        </div>

        {/* Organizations Logos */}
        {activeTab === 'organizations' && (
          <div 
            ref={contentRef}
            className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12 transition-all duration-700 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {organizations.map((org, index) => (
              <div
                key={org.id}
                className="bg-gray-50 rounded-xl p-6 flex items-center justify-center h-32 hover:shadow-md transition-all duration-300 card-animate"
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
        )}

        {/* Individuals Cards */}
        {activeTab === 'individuals' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {individuals.map((person, index) => (
              <div
                key={person.id}
                className="group cursor-pointer card-animate"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Card with gradient */}
                <div 
                  className={`relative overflow-hidden rounded-2xl shadow-lg bg-gradient-to-br ${person.gradient} h-[280px] md:h-[300px] mb-4`}
                  style={
                    (person.name.includes('Khánh Vy') || person.name.includes('Đen Vâu') || person.name.includes('Bảo Ngọc') || person.name.includes('Meichen')) ? {
                      backgroundImage: 'url(/images/background_kol_card.png)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    } : {}
                  }
                >
                  {/* Badge */}
                  <div className="absolute z-10" style={person.name.includes('Khánh Vy') ? {top: '20px', left: '20px', width: '260px', height: '24px'} : person.name.includes('Đen Vâu') ? {top: '20px', left: '20px', width: '260px', height: '24px'} : person.name.includes('Bảo Ngọc') ? {top: '20px', left: '20px', width: '260px', height: '24px'} : person.name.includes('Meichen') ? {top: '20px', left: '20px', width: '260px', height: '24px'} : {top: '16px', left: '16px'}}>
                    {person.name.includes('Khánh Vy') ? (
                      <div>
                        <h3 className="text-white font-bold text-2xl leading-tight drop-shadow-lg">KHÁNH VY</h3>
                        <p className="text-white font-semibold text-lg drop-shadow-md">MC</p>
                      </div>
                    ) : person.name.includes('Đen Vâu') ? (
                      <div>
                        <h3 className="text-white font-bold text-2xl leading-tight drop-shadow-lg">ĐEN VÂU</h3>
                        <p className="text-white font-semibold text-lg drop-shadow-md">RAPPER</p>
                      </div>
                    ) : person.name.includes('Bảo Ngọc') ? (
                      <div>
                        <h3 className="text-white font-bold text-2xl leading-tight drop-shadow-lg">BẢO NGỌC</h3>
                        <p className="text-white font-semibold text-lg drop-shadow-md">HOA HẬU</p>
                      </div>
                    ) : person.name.includes('Meichen') ? (
                      <div>
                        <h3 className="text-white font-bold text-2xl leading-tight drop-shadow-lg">MEICHEN</h3>
                        <p className="text-white font-semibold text-lg drop-shadow-md">KOL</p>
                      </div>
                    ) : (
                      <div>
                        <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-800">
                          {person.name.split('.')[0]}
                        </span>
                        <span className="block mt-1 text-white/90 text-xs font-medium">
                          {person.role}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Image placeholder */}
                  <div className="absolute inset-0 flex items-end justify-center">
                    {person.image ? (
                      <img
                        src={person.image}
                        alt={person.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        style={(() => {
                          if (person.name.includes('Khánh Vy')) return { transform: 'translateX(50px) translateY(20px) scale(0.9)' };
                          if (person.name.includes('Đen Vâu')) return { transform: 'translateX(30px) translateY(30px) scale(0.9)' };
                          if (person.name.includes('Bảo Ngọc')) return { transform: 'translateX(80px) translateY(-50px) scale(1.5)' };
                          if (person.name.includes('Meichen')) return { transform: 'translateX(70px) translateY(20px) scale(0.9)' };
                          return {};
                        })()}
                      />
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
                <div className="text-center">
                  <h3 className="font-bold text-gray-900 mb-1">{person.name}</h3>
                  <p className="text-sm text-gray-500 line-clamp-2">{person.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

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
                <div className="text-sm md:text-base text-black">
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
