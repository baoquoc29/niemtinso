import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
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

const MembersPage = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('organization');
  const [headerRef, headerVisible] = useScrollAnimation();
  const [orgTableRef, orgTableVisible] = useScrollAnimation();
  const [indTableRef, indTableVisible] = useScrollAnimation();
  const [visibleOrgCount, setVisibleOrgCount] = useState(9);
  const [visibleIndCount, setVisibleIndCount] = useState(9);
  const [forceVisible, setForceVisible] = useState(false);

  // Nếu có state từ điều hướng, tự động chuyển tab
  useEffect(() => {
    if (location.state && location.state.tab === 'individual') {
      setActiveTab('individual');
    }
  }, [location.state]);

  // Force visibility after a short delay when tab changes
  useEffect(() => {
    const timer = setTimeout(() => {
      setForceVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const tabs = [
    { id: 'organization', label: t.membersPage.tabOrganization },
    { id: 'individual', label: t.membersPage.tabIndividual }
  ];

  const organizationMembers = [
    {
      id: 1,
      name: 'Công ty Cổ phần Wind Eco',
      logo: '/images/company/1.Công ty CP Wind Eco.webp',
    },
    {
      id: 2,
      name: 'Công ty Cổ phần Gió Media (Wind Media)',
      logo: '/images/company/Công ty CP Gió Media (Wind Media).png',
    },
    {
      id: 3,
      name: 'Công ty Cổ phần IEC Consulting',
      logo: '/images/company/Công ty CP IEC Consulting.png',
    },
    {
      id: 4,
      name: 'Công ty Cổ phần Kênh 28 Entertainment',
      logo: '/images/company/Công ty CP Kênh 28 Entertainment.webp',
    },
    {
      id: 5,
      name: 'Công ty Cổ phần Metub Việt Nam',
      logo: '/images/company/Công ty CP Metub Việt Nam.jpg',
    },
    {
      id: 6,
      name: 'Công ty Cổ phần Tập đoàn MCV (MCV Group)',
      logo: '/images/company/Công ty CP Tập đoàn MCV (MCV Group).jpg',
    },
    {
      id: 7,
      name: 'Công ty Cổ phần Tập đoàn Đất Việt (DatViet VAC)',
      logo: '/images/company/Công ty CP Tập đoàn Đất Việt (DatViet VAC).png',
    },
    {
      id: 8,
      name: 'Công ty Cổ phần VCCorp',
      logo: '/images/company/Công ty CP VCCorp.png',
    },
    {
      id: 9,
      name: 'Công ty Cổ phần dịch vụ quảng cáo & truyền thông SChannel',
      logo: '/images/company/Công ty CP dịch vụ quảng cáo & truyền thông SChannel.png',
    },
    {
      id: 10,
      name: 'Công ty TNHH Orange Agency & Biết Thế Network',
      logo: '/images/company/Công ty TNHH Orange Agency & Biết Thế Network.jpg',
    },
    {
      id: 11,
      name: 'Công ty TNHH Shopee',
      logo: '/images/company/Công ty TNHH Shopee.png',
    },
    {
      id: 12,
      name: 'Công ty TNHH Thư viện Pháp luật',
      logo: '/images/company/Công ty TNHH Thư viện Pháp luật.png',
    },
    {
      id: 13,
      name: 'Công ty TNHH Truyền thông & Giải trí TVH Media',
      logo: '/images/company/Công ty TNHH Truyền thông & Giải trí TVH Media.jpg',
    },
    {
      id: 14,
      name: 'Công ty TNHH Truyền thông iSocial Việt Nam',
      logo: '/images/company/Công ty TNHH Truyền thông iSocial Việt Nam.png',
    },
    {
      id: 15,
      name: 'Công ty TNHH truyền thông Vitamin Network',
      logo: '/images/company/Công ty TNHH truyền thông Vitamin Network.jpg',
    },
    {
      id: 16,
      name: 'Trường TH, THCS & THPT B.School',
      logo: '/images/company/Trường TH, THCS & THPT B.School.png',
    },
    {
      id: 17,
      name: 'CyberTrust',
      logo: '/images/BỔ SUNG THÀNH VIÊN DOANH NGHIỆP/CyberTrust.jpg',
    },
    {
      id: 18,
      name: 'Ngân hàng Agribank',
      logo: '/images/BỔ SUNG THÀNH VIÊN DOANH NGHIỆP/Logo-Agribank-2.png',
    },
    {
      id: 19,
      name: 'Công ty Tài chính CP Điện lực (EVN Finance)',
      logo: '/images/BỔ SUNG THÀNH VIÊN DOANH NGHIỆP/Logo-Cong-Ty-Tai-Chinh-Cp-Dien-Luc.webp',
    },
    {
      id: 20,
      name: 'Ngân hàng MB Bank',
      logo: '/images/BỔ SUNG THÀNH VIÊN DOANH NGHIỆP/Logo_MB_new.png',
    },
    {
      id: 21,
      name: 'Ngân hàng PVcombank',
      logo: '/images/BỔ SUNG THÀNH VIÊN DOANH NGHIỆP/Logo_PVcombank.png',
    },
    {
      id: 22,
      name: 'Ngân hàng SHB',
      logo: '/images/BỔ SUNG THÀNH VIÊN DOANH NGHIỆP/Logo_SHB.jpeg',
    },
    {
      id: 23,
      name: 'Báo Pháp luật Việt Nam',
      logo: '/images/BỔ SUNG THÀNH VIÊN DOANH NGHIỆP/Logo_báo_pháp_luật_Việt_Nam.png',
    },
    {
      id: 24,
      name: 'Báo Người quan sát',
      logo: '/images/BỔ SUNG THÀNH VIÊN DOANH NGHIỆP/Người quan sát.jpg',
    },
    {
      id: 25,
      name: 'Nền tảng TikTok Việt Nam',
      logo: '/images/BỔ SUNG THÀNH VIÊN DOANH NGHIỆP/Tiktok-logo-icon-vector-PNG.avif',
    },
    {
      id: 26,
      name: 'Tập đoàn Yeah1',
      logo: '/images/BỔ SUNG THÀNH VIÊN DOANH NGHIỆP/Yeah1_2022.webp',
    },
    {
      id: 27,
      name: 'Zeit Media',
      logo: '/images/BỔ SUNG THÀNH VIÊN DOANH NGHIỆP/Zeit Media.webp',
    },
    {
      id: 28,
      name: 'Đài Truyền hình Việt Nam (VTV)',
      logo: '/images/BỔ SUNG THÀNH VIÊN DOANH NGHIỆP/Đài truyền hình VN.svg',
    },
  ];

  const individualMembers = [
    {
      id: 1,
      name: 'MC Khánh Vy',
      avatar: '/images/members/khanh-vy.jpg',
      avatarStyle: { objectPosition: 'center ', width: '70px', height: '60px', borderRadius: '12px' },
    },
    {
      id: 2,
      name: 'Bảo Ngọc',
      avatar: '/images/members/bao-ngoc.webp',
      avatarStyle: { objectPosition: 'center', width: '60px', height: '80px', borderRadius: '16px' },
    },
    {
      id: 3,
      name: 'Đỗ Quang Đăng',
      avatar: '/images/members/do-quang-dang.jpg',
      avatarStyle: { objectPosition: 'center', width: '80px', height: '60px', borderRadius: '8px' },
    },
    {
      id: 4,
      name: 'Nguyễn Sỹ Tuấn',
      avatar: '/images/members/nguyen-sy-tuan.jpg',
      avatarStyle: { objectPosition: 'center', width: '70px', height: '70px', borderRadius: '50%', transition: 'transform 0.4s' },
      zoom: true,
    },
    {
      id: 5,
      name: 'Nguyễn Việt Hoàng',
      avatar: '/images/members/nguyen-viet-hoang.jpg',
      avatarStyle: { objectPosition: 'center top', width: '70px', height: '70px', borderRadius: '16px', transition: 'transform 0.4s' },
      zoom: true,
    },
    {
      id: 6,
      name: 'Tiểu Vy',
      avatar: '/images/members/tieu-vy.jpg',
      avatarStyle: { objectPosition: 'center', width: '70px', height: '70px', borderRadius: '12px' },
    },
    {
      id: 7,
      name: 'Đen Vâu',
      avatar: '/images/members/den-vau.jpg',
      avatarStyle: { objectPosition: 'center', width: '80px', height: '60px', borderRadius: '8px' },
    },
  ];

  return (
    <main className="pt-16">
      <section className="py-8 md:py-10 bg-white min-h-screen">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Tabs */}
          <div
            ref={headerRef}
            className={`flex justify-center mb-8 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
          >
            <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-2.5 font-medium text-sm rounded-full transition-all duration-300 btn-animate ${activeTab === tab.id
                    ? 'bg-[#3000d9] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-[#3000d9]/10'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* <div className="inline-flex rounded-lg overflow-hidden shadow-md">
              <button
                onClick={() => setActiveTab('organization')}
                className={`flex items-center gap-2 px-6 py-3 font-medium text-sm transition-all duration-300 ${
                  activeTab === 'organization'
                    ? 'bg-[#3000d9] text-white'
                    : 'bg-white text-gray-600 hover:bg-[#3000d9]/10'
                }`}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {t.membersPage?.tabOrganization || 'HỘI VIÊN TỔ CHỨC/DOANH NGHIỆP'}
              </button>
              <button
                onClick={() => setActiveTab('individual')}
                className={`flex items-center gap-2 px-6 py-3 font-medium text-sm transition-all duration-300 ${
                  activeTab === 'individual'
                    ? 'bg-[#3000d9] text-white'
                    : 'bg-white text-gray-600 hover:bg-[#3000d9]/10'
                }`}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                {t.membersPage?.tabIndividual || 'HỘI VIÊN CÁ NHÂN'}
              </button>
            </div> */}
          </div>

          {/*/!* Title *!/*/}
          {/*<h1 className={`text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[#3000d9] mb-10 transition-all duration-700 delay-200 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>*/}
          {/*  {activeTab === 'organization' */}
          {/*    ? (t.membersPage?.titleOrganization || 'Danh sách Hội viên tổ chức/doanh nghiệp')*/}
          {/*    : (t.membersPage?.titleIndividual || 'Danh sách Hội viên cá nhân')*/}
          {/*  }*/}
          {/*</h1>*/}

          {/* Organization Members */}
          {activeTab === 'organization' && (
            <>
              <div
                ref={orgTableRef}
                className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${(orgTableVisible || forceVisible) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                {organizationMembers.slice(0, visibleOrgCount).map((member, index) => (
                  <div
                    key={member.id}
                    className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 card-animate hover:scale-105"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <div className="flex flex-col items-center gap-4 text-center">
                      <div className="w-20 h-20 bg-gray-50 rounded-xl flex items-center justify-center overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        {member.logo ? (
                          <img src={member.logo} alt={member.name} className="w-full h-full object-contain p-2" />
                        ) : (
                          <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        )}
                      </div>
                      <h3 className="text-base font-semibold text-gray-900 leading-tight">
                        {member.name}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More Button */}
              {visibleOrgCount < organizationMembers.length && (
                <div className="flex justify-end mt-8">
                  <button
                    onClick={() => setVisibleOrgCount(prev => prev + 10)}
                    className="px-8 py-3 bg-[#3000d9] text-white font-medium rounded-full hover:bg-[#2400b3] transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 flex items-center gap-2"
                  >
                    <span>{t.activitiesPage.viewMore}</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              )}
            </>
          )}

          {/* Individual Members */}
          {activeTab === 'individual' && (
            <>
              <div
                ref={indTableRef}
                className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition-all duration-700 ${(indTableVisible || forceVisible) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                {individualMembers.slice(0, visibleIndCount).map((member, index) => (
                  <div
                    key={member.id}
                    className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex flex-col items-center gap-4 text-center">
                      <div className="w-24 h-24 bg-gray-50 rounded-2xl flex items-center justify-center overflow-hidden shadow-sm">
                        {member.avatar ? (
                          <img
                            src={member.avatar}
                            alt={member.name}
                            className={
                              'object-cover w-full h-full' +
                              (member.zoom ? ' hover:scale-110 active:scale-95 cursor-pointer transition-transform duration-300' : '')
                            }
                            style={{
                              ...member.avatarStyle,
                              width: '100%',
                              height: '100%',
                            }}
                          />
                        ) : (
                          <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        )}
                      </div>
                      <h3 className="text-base font-semibold text-gray-900 leading-tight">
                        {member.name}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More Button */}
              {visibleIndCount < individualMembers.length && (
                <div className="flex justify-end mt-8">
                  <button
                    onClick={() => setVisibleIndCount(prev => prev + 10)}
                    className="px-8 py-3 bg-[#3000d9] text-white font-medium rounded-full hover:bg-[#2400b3] transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 flex items-center gap-2"
                  >
                    <span>{t.activitiesPage.viewMore}</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </main>
  );
};

export default MembersPage;
