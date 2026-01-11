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

const MembersPage = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('organization');
  const [headerRef, headerVisible] = useScrollAnimation();
  const [tableRef, tableVisible] = useScrollAnimation();

  const tabs = [
    { id: 'organization', label: 'Hội viên Tổ chức/Doanh nghiệp' },
    { id: 'individual', label: 'Hội viên cá nhân' }
  ];

  const organizationMembers = [
    {
      id: 1,
      name: 'Công ty Cổ phần VNG',
      logo: '/images/members/vng.png',
    },
    {
      id: 2,
      name: 'Ngân hàng TNHH MTV Hong Leong Việt Nam',
      logo: '/images/members/hongleong.png',
    },
    {
      id: 3,
      name: 'Cục Công nghệ thông tin, Ngân hàng Nhà nước',
      logo: '/images/members/sbv.png',
    },
    {
      id: 4,
      name: 'Công ty Cổ phần BKAV',
      logo: '/images/members/bkav.png',
    },
    {
      id: 5,
      name: 'Công ty Cổ phần thương mại Công nghệ Go Viet',
      logo: '/images/members/gojek.png',
    },
    {
      id: 6,
      name: 'Trường Đại học Kỹ thuật - Hậu cần Công an nhân dân',
      logo: '/images/members/dhkthc.png',
    },
    {
      id: 7,
      name: 'Tập đoàn Điện lực Việt Nam',
      logo: '/images/members/evn.png',
    },
    {
      id: 8,
      name: 'Tổng công ty Viễn thông MobiFone',
      logo: '/images/members/mobifone.png',
    },
    {
      id: 9,
      name: 'Công ty Cổ phần FPT',
      logo: '/images/members/fpt.png',
    },
    {
      id: 10,
      name: 'Tập đoàn Công nghiệp - Viễn thông Quân đội',
      logo: '/images/members/viettel.png',
    },
  ];

  const individualMembers = [
    {
      id: 1,
      name: 'MC Khánh Vy',
      avatar: '/images/members/khanh-vy.jpg',
    },
    {
      id: 2,
      name: 'Bảo Ngọc',
      avatar: '/images/members/bao-ngoc.webp',
    },
    {
      id: 3,
      name: 'Đỗ Quang Đăng',
      avatar: '/images/members/do-quang-dang.jpg',
    },
    {
      id: 4,
      name: 'Nguyễn Sỹ Tuấn',
      avatar: '/images/members/nguyen-sy-tuan.jpg',
    },
    {
      id: 5,
      name: 'Nguyễn Việt Hoàng',
      avatar: '/images/members/nguyen-viet-hoang.jpg',
    },
    {
      id: 6,
      name: 'Tiểu Vy',
      avatar: '/images/members/tieu-vy.jpg',
    },
    {
      id: 7,
      name: 'Đen Vâu',
      avatar: '/images/members/den-vau.jpg',
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
                  className={`px-6 py-2.5 font-medium text-sm rounded-full transition-all duration-300 btn-animate ${
                    activeTab === tab.id
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

          {/* Title */}
          <h1 className={`text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[#3000d9] mb-10 transition-all duration-700 delay-200 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {activeTab === 'organization' 
              ? (t.membersPage?.titleOrganization || 'Danh sách Hội viên tổ chức/doanh nghiệp')
              : (t.membersPage?.titleIndividual || 'Danh sách Hội viên cá nhân')
            }
          </h1>

          {/* Organization Members */}
          {activeTab === 'organization' && (
            <>
              {/* Mobile & Tablet View - Card Layout */}
              <div 
                ref={tableRef}
                className={`lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4 transition-all duration-700 ${tableVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                {organizationMembers.map((member, index) => (
                  <div 
                    key={member.id} 
                    className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-all duration-300 card-animate"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <div className="flex items-center gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-[#3000d9] text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        {member.id}
                      </span>
                      <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                        {member.logo ? (
                          <img src={member.logo} alt={member.name} className="w-full h-full object-contain p-1" />
                        ) : (
                          <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        )}
                      </div>
                      <h3 className="text-base font-semibold text-gray-900 leading-tight flex-1">
                        {member.name}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop View - Table Layout */}
              <div className="hidden lg:block bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="px-6 py-4 text-left text-sm font-semibold text-[#3000d9] w-20">
                          {t.membersPage?.columnNo || 'STT'}
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-[#3000d9] w-24">
                          {t.membersPage?.columnLogo || 'Logo'}
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-[#3000d9]">
                          {t.membersPage?.columnName || 'Tên tổ chức'}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {organizationMembers.map((member, index) => (
                        <tr 
                          key={member.id} 
                          className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                            index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                          }`}
                        >
                          <td className="px-6 py-4 text-sm text-gray-600 text-center">
                            {member.id}
                          </td>
                          <td className="px-6 py-4">
                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                              {member.logo ? (
                                <img src={member.logo} alt={member.name} className="w-full h-full object-contain p-1" />
                              ) : (
                                <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                            {member.name}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          {/* Individual Members */}
          {activeTab === 'individual' && (
            <>
              {/* Mobile & Tablet View - Card Layout */}
              <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4">
                {individualMembers.map((member) => (
                  <div 
                    key={member.id} 
                    className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-[#3000d9] text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        {member.id}
                      </span>
                      <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden">
                        {member.avatar ? (
                          <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
                        ) : (
                          <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        )}
                      </div>
                      <h3 className="text-base font-semibold text-gray-900 flex-1">
                        {member.name}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop View - Table Layout */}
              <div className="hidden lg:block bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="px-6 py-4 text-left text-sm font-semibold text-[#3000d9] w-20">
                          {t.membersPage?.columnNo || 'STT'}
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-[#3000d9] w-24">
                          {t.membersPage?.columnAvatar || 'Ảnh'}
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-[#3000d9]">
                          {t.membersPage?.columnMemberName || 'Họ và tên'}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {individualMembers.map((member, index) => (
                        <tr 
                          key={member.id} 
                          className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                            index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                          }`}
                        >
                          <td className="px-6 py-4 text-sm text-gray-600 text-center">
                            {member.id}
                          </td>
                          <td className="px-6 py-4">
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden">
                              {member.avatar ? (
                                <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
                              ) : (
                                <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                            {member.name}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
};

export default MembersPage;
