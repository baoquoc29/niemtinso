import React from 'react';
import { Link, useParams } from 'react-router-dom';

// Mock data - Bạn có thể fill nội dung chi tiết vào đây
const allProjects = [
  {
    id: 1,
    title: 'Dự án xây dựng Trung tâm Giám sát An ninh mạng quốc gia (National Cybersecurity Monitoring Center - NCMC)',
    image: '/images/project-main-1.jpg',
    date: '15 tháng 12 năm 2025',
    content: '[NỘI DUNG CHI TIẾT DỰ ÁN ID 1 - Bạn điền vào đây]'
  },
  {
    id: 2,
    title: 'Chương trình đào tạo chuyên gia An ninh mạng cấp cao phối hợp với các trường đại học hàng đầu',
    image: '/images/project-main-2.jpg',
    date: '08 tháng 12 năm 2025',
    content: '[NỘI DUNG CHI TIẾT DỰ ÁN ID 2 - Bạn điền vào đây]'
  },
  {
    id: 3,
    title: 'Phát triển nền tảng bảo mật thông tin doanh nghiệp Việt Nam (VietSecure Platform)',
    image: '/images/project-main-3.jpg',
    date: '01 tháng 12 năm 2025',
    content: '[NỘI DUNG CHI TIẾT DỰ ÁN ID 3 - Bạn điền vào đây]'
  },
  {
    id: 4,
    title: 'Khởi động Dự án Mạng lưới Ứng cứu sự cố An ninh mạng Việt Nam...',
    image: '/images/project-featured-1.jpg',
    date: '05 tháng 1 năm 2026',
    content: '[NỘI DUNG CHI TIẾT DỰ ÁN ID 4 - Bạn điền vào đây]'
  },
  {
    id: 5,
    title: 'Triển khai Hệ thống xác thực sinh học quốc gia: Bảo vệ danh tính số',
    image: '/images/project-featured-2.jpg',
    date: '02 tháng 1 năm 2026',
    content: '[NỘI DUNG CHI TIẾT DỰ ÁN ID 5 - Bạn điền vào đây]'
  },
  {
    id: 6,
    title: 'Dự án Smart City An toàn: Tích hợp An ninh mạng vào đô thị thông minh...',
    image: '/images/project-featured-3.jpg',
    date: '28 tháng 12 năm 2025',
    content: '[NỘI DUNG CHI TIẾT DỰ ÁN ID 6 - Bạn điền vào đây]'
  }
];

const featuredArticles = [
  {
    id: 4,
    title: 'Khởi động Dự án Mạng lưới Ứng cứu sự cố An ninh mạng Việt Nam...',
    image: '/images/project-featured-1.jpg',
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
];

export default function ProjectDetailPage() {
  const { id } = useParams();
  const project = allProjects.find(p => p.id === Number(id));

  // Luôn render layout với placeholder nếu không có dữ liệu
  const displayProject = project || {
    id,
    title: 'Tiêu đề dự án',
    image: '/images/project-main-1.jpg',
    date: 'Ngày tháng năm',
    content: 'Nội dung chi tiết dự án. Bạn có thể thay thế bằng dữ liệu động sau.'
  };

  return (
    <main className="pt-16">
      <section className="py-8 md:py-10 bg-white min-h-screen">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="w-full lg:w-[70%] min-h-[400px] flex flex-col order-2 lg:order-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-2">
                <nav className="flex items-center gap-2 text-base md:text-lg font-semibold text-gray-700 flex-wrap">
                  <Link to="/" className="hover:underline text-blue-600">Trang chủ</Link>
                  <span className="mx-1 text-gray-400">&gt;</span>
                  <Link to="/activities" className="hover:underline text-blue-600">Hoạt động</Link>
                  <span className="mx-1 text-gray-400">&gt;</span>
                  <Link to="/activities?tab=projects" className="hover:underline text-blue-600">Dự án</Link>
                </nav>
                <div className="flex items-center text-blue-600 text-sm mt-1 md:mt-0">
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0h6m-6 0a2 2 0 00-2 2v6a2 2 0 002 2h8a2 2 0 002-2V9a2 2 0 00-2-2" />
                  </svg>
                  {displayProject.date}
                </div>
              </div>
              {/* Nội dung chi tiết dự án */}
              <article className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{displayProject.title}</h1>
                <img src={displayProject.image} alt={displayProject.title} className="w-full h-64 object-cover rounded-lg mb-6" />
                <div className="text-gray-700 leading-relaxed text-base md:text-lg">
                  {displayProject.content}
                </div>
              </article>
            </div>
            {/* Sidebar: Featured Articles */}
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
