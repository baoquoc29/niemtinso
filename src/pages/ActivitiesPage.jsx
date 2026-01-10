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

const ActivitiesPage = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('events');
  const [headerRef, headerVisible] = useScrollAnimation();
  const [contentRef, contentVisible] = useScrollAnimation();

  const tabs = [
    { id: 'events', label: 'Sự kiện' },
    { id: 'projects', label: 'Dự án' },
  ];

  const tabContent = {
    events: {
      title: 'Sự Kiện Nổi Bật',
      mainArticles: [
        {
          id: 1,
          title: 'Hiệp hội An ninh mạng Quốc gia phối hợp với Ngân hàng Nhà nước tổ chức Hội thảo Bảo vệ An ninh tài chính quốc gia trong kỷ nguyên số',
          image: '/images/event-main-1.jpg',
          date: '23 tháng 12 năm 2025',
          content: 'Ngày 23/12/2025, Hiệp hội An ninh mạng Quốc gia chủ trì tổ chức Hội thảo Bảo vệ An ninh tài chính quốc gia trong kỷ nguyên số nhằm nâng cao năng lực bảo vệ an ninh tài chính quốc gia, đáp ứng yêu cầu phát triển nhanh, bền vững và hội nhập quốc tế.'
        },
        {
          id: 2,
          title: 'Hoàn thiện nền tảng văn hành, giảm sát thị trường tài sản số trong giai đoạn thí điểm',
          image: '/images/event-main-2.jpg',
          date: '18 tháng 12 năm 2025',
          content: 'Trong bối cảnh Việt Nam chính thức triển khai thí điểm thị trường tài sản mã hóa, hội thảo "Văn hành và giảm sát thị trường tài sản số" ngày 18/12/2025 tại Hà Nội đã tập trung làm rõ các yêu cầu cốt lõi về văn hành kỹ thuật, an ninh mạng và chế giải sát, nhằm bảo đảm thị trường tài sản số phát triển an toàn, minh bạch và bền vững.'
        },
        {
          id: 3,
          title: 'Hiệp hội An ninh mạng Quốc gia ra mắt Chi hội phía Nam: Là chân bảo vệ chủ quyền số và kinh tế số Việt Nam',
          image: '/images/event-main-3.jpg',
          date: '09 tháng 12 năm 2025',
          content: 'Chi hội An ninh mạng Quốc gia khu vực phía Nam chính thức được thành lập, đánh dấu bước phát triển mới trong việc bảo vệ chủ quyền số và thúc đẩy phát triển kinh tế số tại khu vực.'
        }
      ],
      featuredArticles: [
        {
          id: 4,
          title: 'Trao giải Khảo sát An ninh mạng 2025: Hơn 60.000 người dùng chứng...',
          image: '/images/featured-1.jpg',
          date: '09 tháng 1 năm 2026'
        },
        {
          id: 5,
          title: 'An ninh mạng người dùng cá nhân 2025: Giảm tần suất lừa đảo, tăng thách thức',
          image: '/images/featured-2.jpg',
          date: '07 tháng 1 năm 2026'
        },
        {
          id: 6,
          title: 'Hiệp hội An ninh mạng Quốc gia tổ chức Tọa đàm: Bảo vệ dữ liệu cá...',
          image: '/images/featured-3.jpg',
          date: '01 tháng 1 năm 2026'
        }
      ]
    },
    projects: {
      title: 'Các Dự Án Nổi Bật',
      mainArticles: [
        {
          id: 1,
          title: 'Dự án xây dựng Trung tâm Giám sát An ninh mạng quốc gia (National Cybersecurity Monitoring Center - NCMC)',
          image: '/images/project-main-1.jpg',
          date: '15 tháng 12 năm 2025',
          content: 'NCMC là dự án trọng điểm quốc gia nhằm xây dựng hệ thống giám sát, cảnh báo sớm và ứng phó với các mối đe dọa an ninh mạng. Trung tâm sẽ được trang bị công nghệ tiên tiến, tích hợp AI và machine learning để phát hiện và phản ứng tự động với các cuộc tấn công mạng.'
        },
        {
          id: 2,
          title: 'Chương trình đào tạo chuyên gia An ninh mạng cấp cao phối hợp với các trường đại học hàng đầu',
          image: '/images/project-main-2.jpg',
          date: '08 tháng 12 năm 2025',
          content: 'Chương trình hợp tác chiến lược với Đại học Bách khoa Hà Nội, Đại học FPT và các trường đại học uy tín nhằm đào tạo nguồn nhân lực chuyên sâu về an ninh mạng. Dự kiến đào tạo 1000 chuyên gia trong 3 năm với chương trình chuẩn quốc tế.'
        },
        {
          id: 3,
          title: 'Phát triển nền tảng bảo mật thông tin doanh nghiệp Việt Nam (VietSecure Platform)',
          image: '/images/project-main-3.jpg',
          date: '01 tháng 12 năm 2025',
          content: 'VietSecure Platform là giải pháp bảo mật tổng thể dành cho doanh nghiệp Việt Nam, tích hợp các tính năng phòng chống mã độc, quản lý danh tính, mã hóa dữ liệu và giám sát hệ thống theo thời gian thực.'
        }
      ],
      featuredArticles: [
        {
          id: 4,
          title: 'Khởi động Dự án Mạng lưới Ứng cứu sự cố An ninh mạng Việt Nam...',
          image: '/images/project-featured-1blob:vscode-file://vscode-app/8510d5ff-df11-4de3-a721-1e1586e68dff.jpg',
          date: '05 tháng 1 năm 2026'
        },
        {
          id: 5,
          title: 'Triển khai Hệ thống xác thực sinh học quốc gia: Bảo vệ danh tính số',
          image: '/images/project-featured-2.jpg',
          date: '02 tháng 1 năm 2026'
        },
        {
          id: 6,
          title: 'Dự án Smart City An toàn: Tích hợp An ninh mạng vào đô thị thông minh...',
          image: '/images/project-featured-3.jpg',
          date: '28 tháng 12 năm 2025'
        }
      ]
    }
  };

  const currentContent = tabContent[activeTab];

  return (
    <main className="pt-16">
      <section className="py-8 md:py-10 bg-white min-h-screen">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header with Tabs */}
          <div 
            ref={headerRef}
            className={`flex flex-col items-center mb-8 gap-4 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
          >
            {/* Tabs */}
            <div className="flex flex-wrap gap-0 justify-center">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-2.5 font-medium text-sm transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-[#3000d9] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-[#3000d9]/10'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div 
            ref={contentRef}
            className={`max-w-7xl mx-auto transition-all duration-700 delay-200 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {(activeTab === 'events' || activeTab === 'projects') && currentContent.mainArticles && currentContent.mainArticles.length > 0 ? (
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Main Content - 98% on mobile, ~70% on desktop */}
                <div className="w-full lg:w-[70%] space-y-8">
                  {currentContent.mainArticles.map((article, index) => (
                    <div 
                      key={article.id} 
                      className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 card-animate"
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="flex flex-col md:flex-row">
                        {/* Image */}
                        <div className="md:w-2/5 lg:w-2/5">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-48 md:h-full object-cover"
                            onError={(e) => {
                              e.target.src = `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"%3E%3Crect width="400" height="300" fill="%23e5e7eb"/%3E%3Ctext x="200" y="150" text-anchor="middle" dy=".3em" font-family="Arial, sans-serif" font-size="16" fill="%236b7280"%3E${activeTab === 'events' ? 'Sự kiện' : 'Dự án'} ${article.id}%3C/text%3E%3C/svg%3E`;
                            }}
                          />
                        </div>
                        
                        {/* Content */}
                        <div className="md:w-3/5 lg:w-3/5 p-6">
                          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 line-clamp-3 hover:text-blue-600 transition-colors cursor-pointer">
                            {article.title}
                          </h2>
                          
                          <div className="flex items-center text-blue-600 text-sm mb-4">
                            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0h6m-6 0a2 2 0 00-2 2v6a2 2 0 002 2h8a2 2 0 002-2V9a2 2 0 00-2-2" />
                            </svg>
                            {article.date}
                          </div>
                          
                          <p className="text-gray-600 leading-relaxed line-clamp-4">
                            {article.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Sidebar - Featured Articles */}
                <div className="w-full lg:w-[30%]">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden sticky top-20 z-10">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4">
                      <div className="flex items-center">
                        <div className="bg-white bg-opacity-20 rounded-lg p-2 mr-3">
                          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <h3 className="text-white font-bold text-lg">Nổi bật</h3>
                      </div>
                    </div>

                    {/* Featured Articles List */}
                    <div className="p-4 space-y-4">
                      {currentContent.featuredArticles.map((article, index) => (
                        <div key={article.id} className={`flex gap-3 ${index !== currentContent.featuredArticles.length - 1 ? 'pb-4 border-b border-gray-100' : ''}`}>
                          <div className="w-20 h-16 flex-shrink-0">
                            <img
                              src={article.image}
                              alt={article.title}
                              className="w-full h-full object-cover rounded-lg"
                              onError={(e) => {
                                e.target.src = `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="80" height="64" viewBox="0 0 80 64"%3E%3Crect width="80" height="64" fill="%23e5e7eb"/%3E%3Ctext x="40" y="32" text-anchor="middle" dy=".3em" font-family="Arial, sans-serif" font-size="10" fill="%236b7280"%3E${article.id}%3C/text%3E%3C/svg%3E`;
                              }}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 hover:text-blue-600 transition-colors cursor-pointer mb-1">
                              {article.title}
                            </h4>
                            <p className="text-xs text-gray-500">
                              {article.date}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* View More Button */}
                    <div className="p-4 pt-0">
                      <button className="w-full bg-white hover:bg-gray-50 border border-[#3000d9] text-[#3000d9] font-semibold py-2 px-4 rounded-lg transition-colors text-sm btn-animate">
                        XEM THÊM
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0h6m-6 0a2 2 0 00-2 2v6a2 2 0 002 2h8a2 2 0 002-2V9a2 2 0 00-2-2" />
                  </svg>
                </div>
                <p className="text-gray-500 text-lg">Chưa có nội dung</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ActivitiesPage;