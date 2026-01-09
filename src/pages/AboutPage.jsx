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
      title: '',
      content: (
        <div className="max-w-4xl mx-auto px-8">
        <div className="space-y-12">
          {/* Tên gọi Section */}
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="flex-shrink-0 flex justify-start">
              <img 
                src="/images/DTA_Logo_Final_Color.png" 
                alt="DTA Logo" 
                className="h-40 w-40 object-contain"
              />
            </div>
            <div className="flex-1 space-y-6">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">TÊN GỌI</h3>
              
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                  <span className="font-semibold text-gray-800 min-w-[200px]">Tên tiếng Việt:</span>
                  <span className="text-gray-700">Liên minh Niềm tin Số.</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                  <span className="font-semibold text-gray-800 min-w-[200px]">Tên tiếng Anh:</span>
                  <span className="text-gray-700">Digital Trust Alliance (DTA).</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                  <span className="font-semibold text-gray-800 min-w-[200px]">Tên viết tắt tiếng Anh:</span>
                  <span className="text-gray-700">DTA</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                  <span className="font-semibold text-gray-800 min-w-[200px]">Biểu tượng:</span>
                  <span className="text-gray-700">Liên minh có biểu tượng (logo) riêng do Hội đồng lãnh đạo quyết định và được đăng ký bảo hộ theo quy định của pháp luật.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tính chất và địa vị pháp lý Section */}
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="flex-shrink-0 flex justify-start">
              <div className="w-40 h-40 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-20 h-20 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">TÍNH CHẤT VÀ ĐỊA VỊ PHÁP LÝ</h3>
              
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Liên minh Niềm tin Số là mạng lưới hợp tác tự nguyện, phi lợi nhuận, không có tư cách pháp nhân.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Liên minh hoạt động trong khuôn khổ pháp luật Việt Nam, dưới sự bảo trợ của Cục An ninh mạng và Phòng, chống tội phạm sử dụng công nghệ cao, Bộ Công an.
                </p>
              </div>
            </div>
          </div>

          {/* Phạm vi hoạt động Section */}
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="flex-shrink-0 flex justify-start">
              <div className="w-40 h-40 bg-purple-100 rounded-full flex items-center justify-center">
                <svg className="w-20 h-20 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">PHẠM VI HOẠT ĐỘNG</h3>
              
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Liên minh hoạt động trên phạm vi toàn quốc, đồng thời mở rộng hợp tác khu vực và quốc tế.
                </p>
                <div>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    <span className="font-semibold">Lĩnh vực hoạt động gồm:</span> truyền thông, báo chí, nội dung số, thương mại điện tử, công nghệ, an ninh mạng, giáo dục, văn hóa, xã hội.
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold">Hình thức hoạt động:</span> tọa đàm, hội nghị, đào tạo, tập huấn, chiến dịch truyền thông, chương trình đồng hành, phản biện chính sách và hợp tác quốc tế.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Nguyên tắc hoạt động Section */}
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="flex-shrink-0 flex justify-start">
              <div className="w-40 h-40 bg-orange-100 rounded-full flex items-center justify-center">
                <svg className="w-20 h-20 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">NGUYÊN TẮC HOẠT ĐỘNG</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-gray-800">Tự nguyện – Tự quản:</span> Thành viên tham gia trên cơ sở tự nguyện, cùng nhau quản trị, không bị áp đặt.
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-gray-800">Dân chủ – Bình đẳng – Minh bạch:</span> Thành viên có quyền ngang nhau trong thảo luận, biểu quyết và được tiếp cận thông tin công khai, minh bạch.
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-gray-800">Phi lợi nhuận:</span> Liên minh không hoạt động vì mục tiêu sinh lợi; mọi nguồn lực huy động nhằm phục vụ lợi ích cộng đồng.
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-gray-800">Tuân thủ pháp luật Việt Nam:</span> Mọi hoạt động phải phù hợp với Hiến pháp, pháp luật và các quy định hiện hành.
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-gray-800">Trách nhiệm xã hội – Lan tỏa tích cực:</span> Thành viên hành động có trách nhiệm với cộng đồng, lan tỏa các giá trị tốt đẹp, chống lại tin giả và các hành vi tiêu cực.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      )
    },
    structure: {
      title: 'Cơ Cấu Tổ Chức',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <p className="text-lg text-gray-700">
              Cơ cấu tổ chức của Liên minh Niềm tin Số được thiết kế để đảm bảo hoạt động hiệu quả và minh bạch.
            </p>
          </div>

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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <h4 className="font-bold text-blue-800 mb-2">Đại Hội Thành Viên</h4>
                <p className="text-sm text-gray-600">Cơ quan quyền lực cao nhất của Liên minh</p>
              </div>
              
              <div className="text-center p-4 bg-green-50 rounded-xl">
                <h4 className="font-bold text-green-800 mb-2">Ban Chấp Hành</h4>
                <p className="text-sm text-gray-600">Điều hành hoạt động hàng ngày</p>
              </div>
              
              <div className="text-center p-4 bg-purple-50 rounded-xl">
                <h4 className="font-bold text-purple-800 mb-2">Ban Kiểm Soát</h4>
                <p className="text-sm text-gray-600">Giám sát và kiểm tra hoạt động</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    management: {
      title: 'Ban Chấp Hành',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <p className="text-lg text-gray-700">
              Danh sách các thành viên Ban Chấp Hành Liên minh Niềm tin Số nhiệm kỳ 2024-2027.
            </p>
          </div>

          {/* Executive Board Table */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-blue-600 w-20">STT</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-blue-600">Họ và tên</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-blue-600 w-64">Chức vụ</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-blue-600">Đơn vị công tác</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-blue-600 w-64">Chuyên môn</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors bg-white">
                    <td className="px-6 py-4 text-sm text-gray-600 text-center">1</td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">Nguyễn Văn A</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Chủ tịch</td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">Tổng Giám đốc Công ty ABC</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Chuyên gia An ninh mạng</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors bg-gray-50/50">
                    <td className="px-6 py-4 text-sm text-gray-600 text-center">2</td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">Trần Thị B</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Phó Chủ tịch</td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">Phó TGĐ Tập đoàn XYZ</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Chuyên gia Chuyển đổi số</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors bg-white">
                    <td className="px-6 py-4 text-sm text-gray-600 text-center">3</td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">Lê Văn C</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Tổng Thư ký</td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">Giám đốc Viện DEF</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Tiến sĩ Công nghệ thông tin</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors bg-gray-50/50">
                    <td className="px-6 py-4 text-sm text-gray-600 text-center">4</td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">Phạm Thị D</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Phó Tổng Thư ký</td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">Trưởng phòng Công ty GHI</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Thạc sĩ Bảo mật thông tin</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors bg-white">
                    <td className="px-6 py-4 text-sm text-gray-600 text-center">5</td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">Hoàng Văn E</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Thủ quỹ</td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">CFO Doanh nghiệp JKL</td>
                    <td className="px-6 py-4 text-sm text-gray-600">CPA, Chuyên gia Tài chính</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors bg-gray-50/50">
                    <td className="px-6 py-4 text-sm text-gray-600 text-center">6</td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">Võ Thị F</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Ủy viên</td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">Giám đốc Startup MNO</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Chuyên gia AI & Big Data</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-blue-50 p-6 rounded-2xl">
            <h4 className="text-lg font-bold text-blue-800 mb-4 text-center">Thông Tin Bổ Sung</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Nhiệm kỳ: 2024 - 2027</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Tổng số thành viên BCH: 15 người</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Họp định kỳ: Hàng tháng</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Liên hệ: info@dta.org.vn</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    regulations: {
      title: 'Điều Lệ & Quy Ước Chung',
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
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 md:gap-3">
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

          {/* Title */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-10">
            {currentContent.title}
          </h1>

          {/* Content */}
          <div className="prose max-w-none">
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
