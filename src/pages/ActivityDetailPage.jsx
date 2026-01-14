import React from 'react';
import { Link } from 'react-router-dom';

// Mock featured articles giống ActivitiesPage
const featuredArticles = [
  {
    id: 4,
    title: 'Trao giải Khảo sát An ninh mạng 2025: Hơn 60.000 người dùng chứng...',
    image: '/images/featured-1.jpg',
  },
  {
    id: 5,
    title: 'An ninh mạng người dùng cá nhân 2025: Giảm tần suất lừa đảo, tăng thách thức',
    image: '/images/featured-2.jpg',
  },
  {
    id: 6,
    title: 'Hiệp hội An ninh mạng Quốc gia tổ chức Tọa đàm: Bảo vệ dữ liệu cá...',
    image: '/images/featured-3.jpg',
  }
];


export default function ActivityDetailPage() {
  return (
    <main className="pt-16">
      <section className="py-8 md:py-10 bg-white min-h-screen">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content: Empty for now */}
            <div className="w-full lg:w-[70%] min-h-[400px] flex flex-col order-2 lg:order-1">
              {/* Breadcrumb + Time, căn đều 2 bên, thẳng hàng với tiêu đề, responsive */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-2">
                <nav className="flex items-center gap-2 text-base md:text-lg font-semibold text-gray-700 flex-wrap">
                  <Link to="/" className="hover:underline text-blue-600">Trang chủ</Link>
                  <span className="mx-1 text-gray-400">&gt;</span>
                  <Link to="/activities" className="hover:underline text-blue-600">Hoạt động</Link>
                  <span className="mx-1 text-gray-400">&gt;</span>
                  <Link to="/activities?tab=events" className="hover:underline text-blue-600">Sự kiện</Link>
                </nav>
                <div className="flex items-center text-blue-600 text-sm mt-1 md:mt-0">
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0h6m-6 0a2 2 0 00-2 2v6a2 2 0 002 2h8a2 2 0 002-2V9a2 2 0 00-2-2" />
                  </svg>
                  23 tháng 12 năm 2025
                </div>
              </div>
              {/* Nội dung chi tiết bài viết (mockup) */}
              <article className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Tiêu đề bài viết sự kiện</h1>
                <img src="/images/event-main-1.jpg" alt="Tiêu đề bài viết" className="w-full h-64 object-cover rounded-lg mb-6" />
                <div className="text-gray-700 leading-relaxed text-base md:text-lg">
                  Đây là nội dung chi tiết của bài viết sự kiện. Bạn có thể thay thế bằng dữ liệu động sau.
                </div>
              </article>
            </div>
            {/* Sidebar: Featured Articles - layout giống tab hoạt động, đặt bên phải */}
            <aside className="w-full lg:w-[30%] flex flex-col order-1 lg:order-2">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden sticky top-20 z-10">
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
                <div className="p-4 space-y-4">
                  {featuredArticles.map((article, index) => (
                    <div key={article.id} className={`flex gap-3 ${index !== featuredArticles.length - 1 ? 'pb-4 border-b border-gray-100' : ''}`}>
                      <div className="w-20 h-16 flex-shrink-0">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover rounded-lg"
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
                <div className="p-4 pt-0">
                  <button className="w-full bg-white hover:bg-gray-50 border border-[#3000d9] text-[#3000d9] font-semibold py-2 px-4 rounded-lg transition-colors text-sm btn-animate">
                    XEM THÊM
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
