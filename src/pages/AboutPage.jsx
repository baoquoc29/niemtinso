import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const AboutPage = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('introduction');
  const [showModal, setShowModal] = useState(false);

  const tabs = [
    { id: 'introduction', label: 'Giới thiệu về liên minh' },
    { id: 'structure', label: 'Cơ cấu tổ chức' },
    { id: 'management', label: 'Ban chấp hành' },
    { id: 'regulations', label: 'Điều lệ, quy ước chung' },
  ];

  const tabContent = {
    introduction: {
      title: 'Giới thiệu liên minh',
      content: (
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Main Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kiến tạo, dẫn dắt niềm tin số thông qua hành động và trách nhiệm.
            </h2>
          </div>

          {/* Layout với Logo ở giữa và 4 phần theo đường cong - Desktop only */}
          <div className="hidden lg:block">
            <div className="relative flex justify-center items-center min-h-[700px]">
              
              {/* Đường cong SVG */}
              <svg width="900" height="700" viewBox="0 0 900 700" className="absolute inset-0 opacity-15">
                <ellipse cx="450" cy="350" rx="380" ry="280" stroke="#3B82F6" strokeWidth="2" fill="none" strokeDasharray="8,8" />
              </svg>

              {/* Logo ở giữa */}
              <div className="absolute z-20 text-center bg-white p-8 rounded-lg shadow-lg">
                <img 
                  src="/images/DTA_Logo_Final_Color.png" 
                  alt="DTA Logo" 
                  className="w-56 h-56 object-contain mx-auto mb-4"
                />
                <h3 className="text-3xl font-bold text-blue-900">LOGO DTA</h3>
              </div>

              {/* 1. TÊN GỌI - Góc trái trên (thụt vào) */}
              <div className="absolute top-12 left-12 w-72 bg-white p-5 rounded-lg shadow-md z-10">
                <h3 className="text-lg font-bold text-blue-600 mb-3">TÊN GỌI</h3>
                <div className="space-y-2 text-sm">
                  <div><span className="font-semibold">Tên tiếng Việt:</span> Liên minh Niềm tin Số.</div>
                  <div><span className="font-semibold">Tên tiếng Anh:</span> Digital Trust Alliance (DTA).</div>
                  <div><span className="font-semibold">Tên viết tắt tiếng Anh:</span> DTA</div>
                  <div><span className="font-semibold">Biểu tượng:</span> Liên minh có biểu tượng (logo) riêng do Hội đồng lãnh đạo quyết định và được đăng ký bảo hộ theo quy định của pháp luật.</div>
                </div>
              </div>

              {/* 2. TÍNH CHẤT VÀ ĐỊA VỊ PHÁP LÝ - Phải trên (đẳy ra xa) */}
              <div className="absolute top-0 right-0 w-72 bg-white p-5 rounded-lg shadow-md z-10">
                <h3 className="text-lg font-bold text-blue-600 mb-3">TÍNH CHẤT VÀ ĐỊA VỊ PHÁP LÝ</h3>
                <div className="space-y-2 text-sm">
                  <div>• Liên minh Niềm tin Số là mạng lưới hợp tác tự nguyện, phi lợi nhuận, không có tư cách pháp nhân.</div>
                  <div>• Liên minh hoạt động trong khuôn khổ pháp luật Việt Nam, dưới sự bảo trợ của Cục An ninh mạng và Phòng, chống tội phạm sử dụng công nghệ cao, Bộ Công an.</div>
                </div>
              </div>

              {/* 3. PHẠM VI HOẠT ĐỘNG - Phải dưới (đẩy ra xa) */}
              <div className="absolute bottom-0 right-0 w-72 bg-white p-5 rounded-lg shadow-md z-10">
                <h3 className="text-lg font-bold text-blue-600 mb-3">PHẠM VI HOẠT ĐỘNG</h3>
                <div className="space-y-2 text-sm">
                  <div>• Liên minh hoạt động trên phạm vi toàn quốc, đồng thời mở rộng hợp tác khu vực và quốc tế.</div>
                  <div>• <span className="font-semibold">Lĩnh vực hoạt động gồm:</span> truyền thông, báo chí, nội dung số, thương mại điện tử, công nghệ, an ninh mạng, giáo dục, văn hóa, xã hội.</div>
                  <div>• <span className="font-semibold">Hình thức hoạt động:</span> tọa đàm, hội nghị, đào tạo, tập huấn, chiến dịch truyền thông, chương trình đồng hành, phản biện chính sách và hợp tác quốc tế.</div>
                </div>
              </div>

              {/* 4. NGUYÊN TẮC HOẠT ĐỘNG - Trái dưới (thụt vào, thẳng hàng với 1) */}
              <div className="absolute bottom-12 left-12 w-72 bg-white p-5 rounded-lg shadow-md z-10">
                <h3 className="text-lg font-bold text-blue-600 mb-3">NGUYÊN TẮC HOẠT ĐỘNG</h3>
                <div className="space-y-2 text-sm">
                  <div>• <span className="font-semibold">Tự nguyện – Tự quản:</span> Thành viên tham gia trên cơ sở tự nguyện, cùng nhau quản trị, không bị áp đặt.</div>
                  <div>• <span className="font-semibold">Dân chủ – Bình đẳng – Minh bạch:</span> Thành viên có quyền ngang nhau trong thảo luận, biểu quyết và được tiếp cận thông tin công khai, minh bạch.</div>
                  <div>• <span className="font-semibold">Phi lợi nhuận:</span> Liên minh không hoạt động vì mục tiêu sinh lợi; mọi nguồn lực huy động nhằm phục vụ lợi ích cộng đồng.</div>
                  <div>• <span className="font-semibold">Tuân thủ pháp luật Việt Nam:</span> Mọi hoạt động phải phù hợp với Hiến pháp, pháp luật và các quy định hiện hành.</div>
                  <div>• <span className="font-semibold">Trách nhiệm xã hội – Lan tỏa tích cực:</span> Thành viên hành động có trách nhiệm với cộng đồng, lan tỏa các giá trị tốt đẹp, chống lại tin giả và các hành vi tiêu cực.</div>
                </div>
              </div>

            </div>
          </div>

          {/* Mobile responsive - Stack layout */}
          <div className="lg:hidden space-y-8">
            <div className="text-center mb-8">
              <img 
                src="/images/DTA_Logo_Final_Color.png" 
                alt="DTA Logo" 
                className="w-32 h-32 object-contain mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-blue-900">LOGO DTA</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-blue-600 mb-3">TÊN GỌI</h3>
                <div className="space-y-2 text-sm">
                  <div><span className="font-semibold">Tên tiếng Việt:</span> Liên minh Niềm tin Số.</div>
                  <div><span className="font-semibold">Tên tiếng Anh:</span> Digital Trust Alliance (DTA).</div>
                  <div><span className="font-semibold">Tên viết tắt tiếng Anh:</span> DTA</div>
                  <div><span className="font-semibold">Biểu tượng:</span> Liên minh có biểu tượng (logo) riêng do Hội đồng lãnh đạo quyết định và được đăng ký bảo hộ theo quy định của pháp luật.</div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-blue-600 mb-3">TÍNH CHẤT VÀ ĐỊA VỊ PHÁP LÝ</h3>
                <div className="space-y-2 text-sm">
                  <div>• Liên minh Niềm tin Số là mạng lưới hợp tác tự nguyện, phi lợi nhuận, không có tư cách pháp nhân.</div>
                  <div>• Liên minh hoạt động trong khuôn khổ pháp luật Việt Nam, dưới sự bảo trợ của Cục An ninh mạng và Phòng, chống tội phạm sử dụng công nghệ cao, Bộ Công an.</div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-blue-600 mb-3">PHẠM VI HOẠT ĐỘNG</h3>
                <div className="space-y-2 text-sm">
                  <div>• Liên minh hoạt động trên phạm vi toàn quốc, đồng thời mở rộng hợp tác khu vực và quốc tế.</div>
                  <div>• <span className="font-semibold">Lĩnh vực hoạt động gồm:</span> truyền thông, báo chí, nội dung số, thương mại điện tử, công nghệ, an ninh mạng, giáo dục, văn hóa, xã hội.</div>
                  <div>• <span className="font-semibold">Hình thức hoạt động:</span> tọa đàm, hội nghị, đào tạo, tập huấn, chiến dịch truyền thông, chương trình đồng hành, phản biện chính sách và hợp tác quốc tế.</div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-blue-600 mb-3">NGUYÊN TẮC HOẠT ĐỘNG</h3>
                <div className="space-y-2 text-sm">
                  <div>• <span className="font-semibold">Tự nguyện – Tự quản:</span> Thành viên tham gia trên cơ sở tự nguyện, cùng nhau quản trị, không bị áp đặt.</div>
                  <div>• <span className="font-semibold">Dân chủ – Bình đẳng – Minh bạch:</span> Thành viên có quyền ngang nhau trong thảo luận, biểu quyết và được tiếp cận thông tin công khai, minh bạch.</div>
                  <div>• <span className="font-semibold">Phi lợi nhuận:</span> Liên minh không hoạt động vì mục tiêu sinh lợi; mọi nguồn lực huy động nhằm phục vụ lợi ích cộng đồng.</div>
                  <div>• <span className="font-semibold">Tuân thủ pháp luật Việt Nam:</span> Mọi hoạt động phải phù hợp với Hiến pháp, pháp luật và các quy định hiện hành.</div>
                  <div>• <span className="font-semibold">Trách nhiệm xã hội – Lan tỏa tích cực:</span> Thành viên hành động có trách nhiệm với cộng đồng, lan tỏa các giá trị tốt đẹp, chống lại tin giả và các hành vi tiêu cực.</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      )
    },
    structure: {
      title: '',
      content: (
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-2xl border border-gray-200">
            <div className="text-center mb-6">
              <img 
                src="/images/DHLM.webp" 
                alt="Cơ cấu tổ chức" 
                className="max-w-full h-auto mx-auto rounded-lg cursor-pointer hover:shadow-lg transition-shadow duration-300"
                onClick={() => setShowModal(true)}
              />
              <p className="text-sm text-gray-500 mt-4">
                <span className="italic">Click vào hình ảnh để xem chi tiết</span>
              </p>
            </div>
          </div>
        </div>
      )
    },
    management: {
      title: '',
      content: (
        <div className="space-y-12">
          {/* Executive Board Table */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mt-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-blue-600 w-20">STT</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-blue-600">Họ và tên</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-blue-600 w-48">Chức vụ</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-blue-600 w-64">Vai trò trong liên minh</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors bg-white">
                    <td className="px-6 py-4 text-sm text-gray-600 text-center">1</td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">Nguyễn Văn A</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Chủ tịch</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Lãnh đạo chung, định hướng chiến lược</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors bg-gray-50/50">
                    <td className="px-6 py-4 text-sm text-gray-600 text-center">2</td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">Trần Thị B</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Phó Chủ tịch</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Hỗ trợ lãnh đạo, phụ trách chuyển đổi số</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors bg-white">
                    <td className="px-6 py-4 text-sm text-gray-600 text-center">3</td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">Lê Văn C</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Tổng Thư ký</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Điều phối hoạt động, quản lý vận hành</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors bg-gray-50/50">
                    <td className="px-6 py-4 text-sm text-gray-600 text-center">4</td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">Phạm Thị D</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Phó Tổng Thư ký</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Hỗ trợ điều phối, phụ trách an ninh mạng</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors bg-white">
                    <td className="px-6 py-4 text-sm text-gray-600 text-center">5</td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">Hoàng Văn E</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Thủ quỹ</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Quản lý tài chính, ngân sách liên minh</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors bg-gray-50/50">
                    <td className="px-6 py-4 text-sm text-gray-600 text-center">6</td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">Võ Thị F</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Ủy viên</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Tư vấn chuyên môn, phát triển công nghệ</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )
    },
    regulations: {
      title: '',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <p className="text-lg text-gray-700">
              Nội dung đang được cập nhật...
            </p>
          </div>
        </div>
      )
    }
  };

  const currentContent = tabContent[activeTab];

  return (
    <>
      <main className="pt-16">
      <section className="py-8 md:py-10 bg-white min-h-screen">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header with Filter Tabs */}
          <div className="flex flex-col items-center mb-8 gap-4">
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
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

          {/* Title */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12 mt-8">
            {currentContent.title}
          </h1>

          {/* Content */}
          <div className="prose max-w-none mt-8">
            {currentContent.content}
          </div>
        </div>
      </section>
      </main>

      {/* Structure Image Modal */}
      {showModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <div className="relative max-w-7xl max-h-[95vh] w-full h-full flex items-center justify-center">
            <div className="relative">
              <img 
                src="/images/DHLM.webp" 
                alt="Cơ cấu tổ chức - DHLM" 
                className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            
            {/* Navigation hint */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-60 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
                Click bên ngoài để đóng
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutPage;
