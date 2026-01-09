import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const LibraryPage = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('photos');

  const tabs = [
    { id: 'photos', label: t.library?.filterPhotos || 'Ảnh' },
    { id: 'videos', label: t.library?.filterVideos || 'Video' },
    { id: 'infographics', label: t.library?.filterInfographics || 'Infographic' },
    { id: 'longform', label: t.library?.filterLongform || 'Longform' },
  ];

  const libraryItems = {
    photos: [
      { id: 1, title: 'Hội nghị KOL Toàn quốc 2025', image: null },
      { id: 2, title: 'Lễ ký kết hợp tác DTA', image: null },
      { id: 3, title: 'Workshop An toàn mạng', image: null },
      { id: 4, title: 'Gala Niềm Tin Số 2025', image: null },
      { id: 5, title: 'Hội thảo Chuyển đổi số', image: null },
      { id: 6, title: 'Tập huấn KOL miền Bắc', image: null },
      { id: 7, title: 'Diễn đàn Công nghệ', image: null },
      { id: 8, title: 'Lễ trao giải DTA Awards', image: null },
    ],
    videos: [
      { id: 1, title: 'Giới thiệu về DTA', image: null },
      { id: 2, title: 'Phỏng vấn Chủ tịch Liên minh', image: null },
      { id: 3, title: 'Highlight Hội nghị KOL 2025', image: null },
      { id: 4, title: 'Talkshow Niềm Tin Số', image: null },
    ],
    infographics: [
      { id: 1, title: 'Infographic An toàn mạng', image: null },
      { id: 2, title: 'Thống kê KOL Việt Nam 2025', image: null },
      { id: 3, title: 'Quy trình xác minh tin giả', image: null },
      { id: 4, title: 'Hướng dẫn bảo mật tài khoản', image: null },
    ],
    longform: [
      { id: 1, title: 'Câu chuyện thành lập DTA', image: null },
      { id: 2, title: 'Hành trình 5 năm Niềm Tin Số', image: null },
      { id: 3, title: 'Phỏng vấn độc quyền các KOL', image: null },
      { id: 4, title: 'Báo cáo thường niên 2025', image: null },
    ],
  };

  const currentItems = libraryItems[activeTab] || [];

  return (
    <main className="pt-16">
      <section className="py-8 md:py-10 bg-white min-h-screen">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header with Tabs and Button */}
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

            {/* View More Button */}
            <button className="bg-[#3000d8] hover:bg-[#3000d8] text-white px-6 py-2.5 text-sm font-medium transition-all duration-300 flex items-center gap-2 self-start md:self-auto">
              <span>{t.library?.viewMore || 'XEM THÊM'}</span>
            </button>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1 mb-1">
            {currentItems.slice(0, 8).map((item, index) => (
              <div
                key={item.id}
                className="relative aspect-[4/3] bg-black overflow-hidden group cursor-pointer"
              >
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-black flex items-center justify-center">
                    <span className="text-white text-xl md:text-2xl font-bold">
                      ẢNH {index + 1}
                    </span>
                  </div>
                )}
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm font-medium">{item.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Large Feature Area */}
          <div className="aspect-[16/9] md:aspect-[21/9] bg-black relative overflow-hidden group cursor-pointer">
            <div className="w-full h-full flex items-center justify-center">
              {activeTab === 'videos' ? (
                <div className="text-center">
                  <svg className="w-16 h-16 md:w-24 md:h-24 text-white/80 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  <p className="text-white text-lg md:text-xl font-medium">Video nổi bật</p>
                </div>
              ) : (
                <div className="text-center">
                  <svg className="w-16 h-16 md:w-24 md:h-24 text-white/80 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-white text-lg md:text-xl font-medium">Ảnh/Nội dung nổi bật</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LibraryPage;
