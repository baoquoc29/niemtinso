import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const ActivitiesPage = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('programs');

  const tabs = [
    { id: 'programs', label: 'Chương trình' },
    { id: 'events', label: 'Sự kiện' },
    { id: 'news', label: 'Tin tức' },
    { id: 'reports', label: 'Báo cáo' },
  ];

  const tabContent = {
    programs: {
      title: 'Các Chương Trình Chính',
      items: [
        {
          id: 1,
          title: 'Digital Trust Awards',
          description: 'Giải thưởng thường niên vinh danh những đóng góp cho niềm tin số',
          status: 'Đang diễn ra',
          color: 'bg-blue-500'
        },
        {
          id: 2,
          title: 'Đại Sứ Niềm Tin Số',
          description: 'Chương trình đào tạo và phát triển đại sứ niềm tin số',
          status: 'Sắp diễn ra',
          color: 'bg-purple-500'
        },
        {
          id: 3,
          title: 'Kiểm Chứng Tin Giả',
          description: 'Hệ thống kiểm chứng và chống tin giả trên mạng xã hội',
          status: 'Đang triển khai',
          color: 'bg-green-500'
        },
        {
          id: 4,
          title: 'Không Một Mình 2026',
          description: 'Chương trình hỗ trợ sức khỏe tinh thần cho giới trẻ',
          status: 'Đang diễn ra',
          color: 'bg-orange-500'
        }
      ]
    },
    events: {
      title: 'Sự Kiện Nổi Bật',
      items: [
        {
          id: 1,
          title: 'Hội nghị KOL Toàn quốc 2025',
          description: 'Sự kiện quy tụ các KOL hàng đầu Việt Nam',
          status: 'Đã hoàn thành',
          color: 'bg-blue-500'
        },
        {
          id: 2,
          title: 'Workshop An toàn mạng',
          description: 'Tập huấn kỹ năng bảo mật cho cộng đồng',
          status: 'Hàng tháng',
          color: 'bg-purple-500'
        },
        {
          id: 3,
          title: 'Gala Niềm Tin Số 2026',
          description: 'Đêm vinh danh các cá nhân và tổ chức tiêu biểu',
          status: 'Sắp diễn ra',
          color: 'bg-green-500'
        }
      ]
    },
    news: {
      title: 'Tin Tức & Cập Nhật',
      items: [
        {
          id: 1,
          title: 'DTA ký kết hợp tác với 20 doanh nghiệp công nghệ',
          description: 'Mở rộng mạng lưới đối tác chiến lược...',
          status: '2 ngày trước',
          color: 'bg-blue-500'
        },
        {
          id: 2,
          title: 'Phát động chiến dịch "Niềm tin từ sự thật"',
          description: 'Khuyến khích cộng đồng chia sẻ thông tin chính xác...',
          status: '1 tuần trước',
          color: 'bg-purple-500'
        },
        {
          id: 3,
          title: 'Ra mắt ứng dụng kiểm tra tin giả tự động',
          description: 'Công nghệ AI giúp nhận diện tin giả nhanh chóng...',
          status: '2 tuần trước',
          color: 'bg-green-500'
        }
      ]
    },
    reports: {
      title: 'Báo Cáo & Nghiên Cứu',
      items: [
        {
          id: 1,
          title: 'Báo cáo thường niên DTA 2025',
          description: 'Tổng kết các hoạt động và thành tựu trong năm 2025',
          status: 'PDF - 2.5MB',
          color: 'bg-blue-500'
        },
        {
          id: 2,
          title: 'Nghiên cứu: Tác động của tin giả đến giới trẻ',
          description: 'Khảo sát 10,000 người dùng về ảnh hưởng của thông tin sai lệch',
          status: 'PDF - 1.8MB',
          color: 'bg-purple-500'
        },
        {
          id: 3,
          title: 'Thống kê KOL Việt Nam 2025',
          description: 'Phân tích xu hướng và tác động của người có ảnh hưởng',
          status: 'PDF - 3.2MB',
          color: 'bg-green-500'
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
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
            {/* Tabs */}
            <div className="flex flex-wrap gap-0">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-2.5 font-medium text-sm transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center">
              {currentContent.title}
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentContent.items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-3 h-3 ${item.color} rounded-full mt-2 flex-shrink-0`}></div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500 font-medium">
                          {item.status}
                        </span>
                        <svg 
                          className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors transform group-hover:translate-x-1 transition-transform" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ActivitiesPage;