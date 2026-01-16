import React, { useState, useEffect, useRef, useMemo } from 'react';
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
    { id: 17, name: 'CyberTrust', logo: '/images/BỔ SUNG THÀNH VIÊN DOANH NGHIỆP/CyberTrust.jpg' },
    { id: 18, name: 'Agribank', logo: '/images/BỔ SUNG THÀNH VIÊN DOANH NGHIỆP/Logo-Agribank-2.png' },
    { id: 19, name: 'EVN Finance', logo: '/images/BỔ SUNG THÀNH VIÊN DOANH NGHIỆP/Logo-Cong-Ty-Tai-Chinh-Cp-Dien-Luc.webp' },
    { id: 20, name: 'MB Bank', logo: '/images/BỔ SUNG THÀNH VIÊN DOANH NGHIỆP/Logo_MB_new.png' },
    { id: 21, name: 'PVcombank', logo: '/images/BỔ SUNG THÀNH VIÊN DOANH NGHIỆP/Logo_PVcombank.png' },
    { id: 22, name: 'SHB', logo: '/images/BỔ SUNG THÀNH VIÊN DOANH NGHIỆP/Logo_SHB.jpeg' },
    { id: 23, name: 'Báo Pháp luật Việt Nam', logo: '/images/BỔ SUNG THÀNH VIÊN DOANH NGHIỆP/Logo_báo_pháp_luật_Việt_Nam.png' },
    { id: 24, name: 'Người quan sát', logo: '/images/BỔ SUNG THÀNH VIÊN DOANH NGHIỆP/Nguoi_quan_sat.jpg' },
    { id: 25, name: 'TikTok', logo: '/images/BỔ SUNG THÀNH VIÊN DOANH NGHIỆP/Tiktok-logo-icon-vector-PNG.avif' },
    { id: 26, name: 'Yeah1', logo: '/images/BỔ SUNG THÀNH VIÊN DOANH NGHIỆP/Yeah1_2022.webp' },
    { id: 27, name: 'Zeit Media', logo: '/images/BỔ SUNG THÀNH VIÊN DOANH NGHIỆP/Zeit_Media.webp' },
    { id: 28, name: 'VTV', logo: '/images/BỔ SUNG THÀNH VIÊN DOANH NGHIỆP/Dai_truyen_hinhVTV.svg' },
  ];

  const allIndividuals = [
    {
      id: 1,
      name: 'KHÁNH VY',
      role: t.members.individual1.role,
      description: 'Tạo nội dung giá trị bền vững',
      gradient: 'from-yellow-400 via-yellow-500 to-orange-400',
      image: '/images/MC_KHANH_VY.png',
    },
    {
      id: 2,
      name: 'ĐEN VÂU',
      role: t.members.individual2.role,
      description: 'Người truyền cảm hứng tích cực',
      gradient: 'from-yellow-400 via-yellow-500 to-orange-400',
      image: '/images/RP_DEN_VAU.png',
    },
    {
      id: 3,
      name: 'BẢO NGỌC',
      role: t.members.individual3.role,
      description: t.members.individual3.description,
      gradient: 'from-yellow-400 via-yellow-500 to-orange-400',
      image: '/images/HH_BAO_NGOC.png',
    },

    {
      id: 5,
      name: 'MONO',
      role: 'CA SĨ',
      description: 'Ca sĩ trẻ nổi bật với phong cách hiện đại.',
      gradient: 'from-yellow-400 via-yellow-500 to-orange-400',
      image: '/images/Mono.png',
      imageStyle: { transform: 'translateX(60px) translateY(20px) scale(1.2)' },
    },
    {
      id: 6,
      name: 'TIỂU VY',
      role: 'HOA HẬU',
      description: 'Nhan sắc Việt, trí tuệ trẻ',
      gradient: 'from-yellow-400 via-yellow-500 to-orange-400',
      image: '/images/Tieu_Vy.png',
      imageStyle: { transform: 'translateX(60px) translateY(30px) scale(0.9)' },
    },
    {
      id: 7,
      name: 'NGUYỄN SĨ TUẤN',
      role: 'KOL',
      description: 'Nghệ sĩ kết nối cộng đồng',
      gradient: 'from-yellow-400 via-yellow-500 to-orange-400',
      image: '/images/Nguyen_Si_Tuan.png',
      imageStyle: { transform: 'translateX(50px) translateY(25px) scale(0.9)' },
    },
    {
      id: 8,
      name: 'ĐỖ ĐĂNG QUANG',
      role: 'BIÊN ĐẠO',
      description: 'Biên đạo trẻ đầy cảm hứng',
      gradient: 'from-yellow-400 via-yellow-500 to-orange-400',
      image: '/images/Do_Dang_Quang.png',
      imageStyle: { transform: 'translateX(50px) translateY(-75px) scale(1.6)' },
    },
  ];


  const trackOrg = useMemo(() => [...organizations, ...organizations], [organizations]);
  const trackIndividuals = useMemo(() => [...allIndividuals, ...allIndividuals], [allIndividuals]);


  const hasAnimatedStats = useRef(false);


  const useCountAnimation = (end, duration = 2000) => {
    const [count, setCount] = useState(() => (hasAnimatedStats.current ? end : 0));

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

        if (progress < 1) requestAnimationFrame(animate);
        else {
          setCount(end);
          hasAnimatedStats.current = true;
        }
      };

      requestAnimationFrame(animate);
    }, [statsVisible, end, duration]);

    return count;
  };

  const stats = [
    { value: '200+', label: t.members.stats.kols },
    { value: '34', label: t.members.stats.provinces },
    { value: '400+', label: t.members.stats.delegates },
    { value: '100%', label: t.members.stats.free },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 lg:px-8">

        <style>{`
          @keyframes marqueeRight {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes marqueeLeft {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }

          .animate-marquee-right {
            animation: marqueeRight 32s linear infinite; /* nhanh hơn chút */
            display: inline-flex;
          }
          .animate-marquee-left {
            animation: marqueeLeft 45s linear infinite; /* nhanh hơn chút */
            display: inline-flex;
          }

          .animate-marquee-right:hover,
          .animate-marquee-left:hover {
            animation-play-state: paused;
          }
        `}</style>


        <div
          ref={headerRef}
          className={`text-center mb-8 md:mb-12 transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0 scale-100 blur-0' : 'opacity-0 translate-y-12 scale-95 blur-sm'
            }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3000d9] mb-6">
            {t.members.title}
          </h2>
        </div>


        <div
          ref={orgRef}
          className={`mb-16 transition-all duration-1000 ${orgVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#3000d9] text-center mb-8">
            {t.members.tabOrganizations}
          </h3>


          <div className="w-full relative overflow-hidden">
            <div className="flex animate-marquee-right whitespace-nowrap py-2">
              {trackOrg.map((org, index) => (
                <div
                  key={`org-${org.id}-${index}`}
                  className="flex-shrink-0 w-[200px] mx-3 group cursor-pointer pb-4 hover:shadow-lg transition-all duration-300 shadow-md rounded-xl bg-white"
                >
                  <div className="rounded-t-xl p-6 flex items-center justify-center h-32 bg-gradient-to-br from-gray-50 to-gray-100">
                    {org.logo ? (
                      <div className="flex items-center justify-center h-full w-full">
                        <img
                          src={org.logo}
                          alt={org.name}
                          loading="lazy"
                          className="w-auto max-h-20 object-contain group-hover:scale-110 transition-transform duration-300 pointer-events-none"
                        />
                      </div>
                    ) : (
                      <span className="text-gray-600 font-semibold text-lg">{org.name}</span>
                    )}
                  </div>

                  <div className="text-center py-3 px-2">
                    <h4 className="font-semibold text-gray-900 text-sm line-clamp-2">{org.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


        <div
          ref={individualRef}
          className={`mb-12 transition-all duration-1000 ${individualVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#3000d9] text-center mb-8">
            {t.members.tabIndividuals}
          </h3>

          {/* ✅ giống KOL: wrapper mask + track inline-flex + duplicate */}
          <div className="w-full relative overflow-hidden">
            <div className="flex animate-marquee-left whitespace-nowrap py-2">
              {trackIndividuals.map((person, index) => {
                const isSpecialCard = [
                  'Khánh Vy',
                  'Đen Vâu',
                  'Bảo Ngọc',

                  'MONO',
                  'TIỂU VY',
                  'NGUYỄN SĨ TUẤN',
                  'ĐỖ ĐĂNG QUANG',
                ].some((name) => person.name.includes(name));

                const displayName = person.name.includes('.') ? person.name.split('.')[1].trim().toUpperCase() : person.name.toUpperCase();
                const displayRole = person.role.toUpperCase();

                return (
                  <div
                    key={`person-${person.id}-${index}`}
                    className="flex-shrink-0 w-[280px] mx-3 group cursor-pointer hover:shadow-lg transition-all duration-300 shadow-lg rounded-xl bg-white flex flex-col"
                  >
                    <div
                      className={`relative overflow-hidden rounded-t-xl bg-gradient-to-br ${person.gradient} h-[220px]`}
                      style={
                        isSpecialCard
                          ? {
                            backgroundImage: 'url(/images/background_kol_card.png)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                          }
                          : {}
                      }
                    >
                      <div className="absolute z-10" style={{ top: '20px', left: '20px', width: '260px', height: '24px' }}>
                        <div>
                          <h3 className="text-white font-bold text-2xl leading-tight drop-shadow-lg">{displayName}</h3>
                          <p className="text-white font-semibold text-lg drop-shadow-md">{displayRole}</p>
                        </div>
                      </div>

                      <div className="absolute inset-0 flex items-end justify-center">
                        {person.image ? (
                          <>
                            <img
                              src={person.image}
                              alt={person.name}
                              loading="lazy"
                              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                              style={
                                person.imageStyle ||
                                (() => {
                                  if (person.name.includes('KHÁNH VY')) return { transform: 'translateX(40px) translateY(20px) scale(0.9)' };
                                  if (person.name.includes('ĐEN VÂU')) return { transform: 'translateX(30px) translateY(30px) scale(0.9)' };
                                  if (person.name.includes('BẢO NGỌC')) return { transform: 'translateX(80px) translateY(-50px) scale(1.5)' };

                                  return {};
                                })()
                              }
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

                    <div className="text-center py-4 px-2 flex-1 flex flex-col justify-start">
                      <h3 className="font-bold text-gray-900 mb-2">{person.name}</h3>
                      <p className="text-sm text-gray-500 line-clamp-2">{person.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>


        <div
          ref={statsRef}
          className={`bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12 transition-all duration-1000 ${statsVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'
            }`}
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

              const statAnimations = [
                statsVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-8 scale-75',
                statsVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-8 scale-75',
                statsVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-8 scale-75',
                statsVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-75',
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
                  <div className="text-sm md:text-base text-black font-bold">{stat.label}</div>
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
