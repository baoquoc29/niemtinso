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

const AboutPage = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('introduction');
  const [showModal, setShowModal] = useState(false);
  const [headerRef, headerVisible] = useScrollAnimation();
  const [contentRef, contentVisible] = useScrollAnimation();
  const [scale, setScale] = useState(1);

  const tabs = [
    { id: 'introduction', label: 'Giới thiệu về liên minh' },
    { id: 'structure', label: 'Cơ cấu tổ chức' },
    { id: 'management', label: 'Ban chấp hành' },
    { id: 'regulations', label: 'Điều lệ, quy ước chung' },
  ];

  const tabContent = {
    introduction: {
      content: (
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto py-4 md:py-8 space-y-6 md:space-y-8">
            {/* Block 1: TÊN GỌI */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 py-4 md:py-6">
              <img src="/images/Thiet_ke_chua_co_ten.png" alt="Tên gọi" className="w-full max-w-[280px] md:max-w-[320px] h-auto mx-auto md:mx-0 flex-shrink-0 object-contain" />
              <div className="h-full flex items-stretch">
                <div className="hidden md:block w-px bg-gray-300 mx-6" style={{ minHeight: '100%' }}></div>
                <div>
                  <h2 className="text-base md:text-lg lg:text-xl font-bold text-blue-900 mb-2">TÊN GỌI</h2>
                  <div className="space-y-1 text-xs md:text-sm">
                    <div><span className="font-semibold">Tên tiếng Việt:</span> Liên minh Niềm tin Số.</div>
                    <div><span className="font-semibold">Tên tiếng Anh:</span> Digital Trust Alliance (DTA).</div>
                    <div><span className="font-semibold">Tên viết tắt:</span> DTA</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Block 2: TÍNH CHẤT & ĐỊA VỊ PHÁP LÝ */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 py-4 md:py-6">
              <img src="/images/Phap_li-compressed.jpg" alt="Tính chất & Địa vị pháp lý" className="w-full max-w-[280px] md:max-w-[320px] h-auto mx-auto md:mx-0 flex-shrink-0 object-contain" />
              <div className="h-full flex items-stretch">
                <div className="hidden md:block w-px bg-gray-300 mx-6" style={{ minHeight: '100%' }}></div>
                <div>
                  <h2 className="text-base md:text-lg lg:text-xl font-bold text-blue-900 mb-2">TÍNH CHẤT & ĐỊA VỊ PHÁP LÝ</h2>
                  <div className="space-y-1 text-xs md:text-sm">
                    <div>Liên minh Niềm tin Số là mạng lưới hợp tác tự nguyện, phi lợi nhuận, không có tư cách pháp nhân.</div>
                    <div>Liên minh hoạt động trong khuôn khổ pháp luật Việt Nam, dưới sự bảo trợ của Cục An ninh mạng và Phòng, chống tội phạm sử dụng công nghệ cao, Bộ Công an.</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Block 3: PHẠM VI HOẠT ĐỘNG */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 py-4 md:py-6">
              <img src="/images/Muc_tieu.jpg" alt="Phạm vi hoạt động" className="w-full max-w-[280px] md:max-w-[320px] h-auto mx-auto md:mx-0 flex-shrink-0 object-contain" />
              <div className="h-full flex items-stretch">
                <div className="hidden md:block w-px bg-gray-300 mx-6" style={{ minHeight: '100%' }}></div>
                <div>
                  <h2 className="text-base md:text-lg lg:text-xl font-bold text-blue-900 mb-2">PHẠM VI HOẠT ĐỘNG</h2>
                  <div className="space-y-1 text-xs md:text-sm">
                    <div>Liên minh hoạt động trên phạm vi toàn quốc, đồng thời mở rộng hợp tác khu vực và quốc tế.</div>
                    <div><span className="font-semibold">Lĩnh vực hoạt động gồm:</span> truyền thông, báo chí, nội dung số, thương mại điện tử, công nghệ, an ninh mạng, giáo dục, văn hóa, xã hội.</div>
                    <div><span className="font-semibold">Hình thức hoạt động:</span> tọa đàm, hội nghị, đào tạo, tập huấn, chiến dịch truyền thông, chương trình đồng hành, phản biện chính sách và hợp tác quốc tế.</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Block 4: NGUYÊN TẮC HOẠT ĐỘNG */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 py-4 md:py-6">
              <img src="/images/Nguyen_Tac.jpg" alt="Nguyên tắc hoạt động" className="w-full max-w-[280px] md:max-w-[320px] h-auto mx-auto md:mx-0 flex-shrink-0 object-contain" />
              <div className="h-full flex items-stretch">
                <div className="hidden md:block w-px bg-gray-300 mx-6" style={{ minHeight: '100%' }}></div>
                <div>
                  <h2 className="text-base md:text-lg lg:text-xl font-bold text-blue-900 mb-2">NGUYÊN TẮC HOẠT ĐỘNG</h2>
                  <div className="space-y-1 text-xs md:text-sm">
                    <div><span className="font-semibold">Tự nguyện – Tự quản:</span> Thành viên tham gia trên cơ sở tự nguyện, cùng nhau quản trị, không bị áp đặt.</div>
                    <div><span className="font-semibold">Dân chủ – Bình đẳng – Minh bạch:</span> Thành viên có quyền ngang nhau trong thảo luận, biểu quyết và được tiếp cận thông tin công khai, minh bạch.</div>
                    <div><span className="font-semibold">Phi lợi nhuận:</span> Liên minh không hoạt động vì mục tiêu sinh lợi; mọi nguồn lực huy động nhằm phục vụ lợi ích cộng đồng.</div>
                    <div><span className="font-semibold">Tuân thủ pháp luật Việt Nam:</span> Mọi hoạt động phải phù hợp với Hiến pháp, pháp luật và các quy định hiện hành.</div>
                    <div><span className="font-semibold">Trách nhiệm xã hội – Lan tỏa tích cực:</span> Thành viên hành động có trách nhiệm với cộng đồng, lan tỏa các giá trị tốt đẹp, chống lại tin giả và các hành vi tiêu cực.</div>
                  </div>
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
              <table className="w-full min-w-[640px]">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="px-3 py-3 md:px-6 md:py-4 text-left text-xs md:text-sm font-semibold text-blue-600 w-12 md:w-20">STT</th>
                    <th className="px-3 py-3 md:px-6 md:py-4 text-left text-xs md:text-sm font-semibold text-blue-600">Họ và tên</th>
                    <th className="px-3 py-3 md:px-6 md:py-4 text-left text-xs md:text-sm font-semibold text-blue-600 w-32 md:w-48">Chức vụ</th>
                    <th className="px-3 py-3 md:px-6 md:py-4 text-left text-xs md:text-sm font-semibold text-blue-600 w-48 md:w-64">Vai trò trong liên minh</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors bg-white">
                    <td className="px-3 py-3 md:px-6 md:py-4 text-xs md:text-sm text-gray-600 text-center">1</td>
                    <td className="px-3 py-3 md:px-6 md:py-4 text-xs md:text-sm text-gray-900 font-medium">Trung tướng Lê Xuân Minh</td>
                    <td className="px-3 py-3 md:px-6 md:py-4 text-xs md:text-sm text-gray-600">Cục trưởng Cục An ninh mạng và PCTP sử dụng
                      công nghệ cao, Bộ Công an
                      Phó Chủ tịch Hiệp hội An ninh mạng quốc gia
                    </td>
                    <td className="px-3 py-3 md:px-6 md:py-4 text-xs md:text-sm text-gray-600">Chủ tịch</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors bg-gray-50/50">
                    <td className="px-3 py-3 md:px-6 md:py-4 text-xs md:text-sm text-gray-600 text-center">2</td>
                    <td className="px-3 py-3 md:px-6 md:py-4 text-xs md:text-sm text-gray-900 font-medium">Trần Thị B</td>
                    <td className="px-3 py-3 md:px-6 md:py-4 text-xs md:text-sm text-gray-600">Phó Chủ tịch</td>
                    <td className="px-3 py-3 md:px-6 md:py-4 text-xs md:text-sm text-gray-600">Hỗ trợ lãnh đạo, phụ trách chuyển đổi số</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors bg-white">
                    <td className="px-3 py-3 md:px-6 md:py-4 text-xs md:text-sm text-gray-600 text-center">3</td>
                    <td className="px-3 py-3 md:px-6 md:py-4 text-xs md:text-sm text-gray-900 font-medium">Lê Văn C</td>
                    <td className="px-3 py-3 md:px-6 md:py-4 text-xs md:text-sm text-gray-600">Tổng Thư ký</td>
                    <td className="px-3 py-3 md:px-6 md:py-4 text-xs md:text-sm text-gray-600">Điều phối hoạt động, quản lý vận hành</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors bg-gray-50/50">
                    <td className="px-3 py-3 md:px-6 md:py-4 text-xs md:text-sm text-gray-600 text-center">4</td>
                    <td className="px-3 py-3 md:px-6 md:py-4 text-xs md:text-sm text-gray-900 font-medium">Phạm Thị D</td>
                    <td className="px-3 py-3 md:px-6 md:py-4 text-xs md:text-sm text-gray-600">Phó Tổng Thư ký</td>
                    <td className="px-3 py-3 md:px-6 md:py-4 text-xs md:text-sm text-gray-600">Hỗ trợ điều phối, phụ trách an ninh mạng</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors bg-white">
                    <td className="px-3 py-3 md:px-6 md:py-4 text-xs md:text-sm text-gray-600 text-center">5</td>
                    <td className="px-3 py-3 md:px-6 md:py-4 text-xs md:text-sm text-gray-900 font-medium">Hoàng Văn E</td>
                    <td className="px-3 py-3 md:px-6 md:py-4 text-xs md:text-sm text-gray-600">Thủ quỹ</td>
                    <td className="px-3 py-3 md:px-6 md:py-4 text-xs md:text-sm text-gray-600">Quản lý tài chính, ngân sách liên minh</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors bg-gray-50/50">
                    <td className="px-3 py-3 md:px-6 md:py-4 text-xs md:text-sm text-gray-600 text-center">6</td>
                    <td className="px-3 py-3 md:px-6 md:py-4 text-xs md:text-sm text-gray-900 font-medium">Võ Thị F</td>
                    <td className="px-3 py-3 md:px-6 md:py-4 text-xs md:text-sm text-gray-600">Ủy viên</td>
                    <td className="px-3 py-3 md:px-6 md:py-4 text-xs md:text-sm text-gray-600">Tư vấn chuyên môn, phát triển công nghệ</td>
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
          <div className="text-center mb-8 px-4">
          </div>
          <div className="w-full bg-[#eeeeee] py-8 md:py-12 lg:py-16 flex flex-col items-center">
            <div className='cursor-zoom-in hover:scale-[1.02] transition-transform px-4'>
              <img src="/images/dieu-le-NCA.png" alt="Điều lệ NCA" className="w-full max-w-[320px] md:max-w-[420px] object-contain" />
              <a
                href="#"
                className="block text-center text-blue-600 text-sm mt-6 hover:underline"
              >
                Xem thông tin chi tiết tại đây
              </a>
            </div>
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
            <div
              ref={headerRef}
              className={`flex flex-col items-center mb-8 gap-4 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
            >
              {/* Filter Tabs */}
              <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 md:px-6 md:py-2.5 rounded-full font-medium text-xs md:text-sm transition-all duration-300 btn-animate ${activeTab === tab.id
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
            <h1 className={`text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12 mt-8 transition-all duration-700 delay-200 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {currentContent.title}
            </h1>

            {/* Content */}
            <div
              ref={contentRef}
              className={`prose max-w-none mt-8 transition-all duration-700 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              {currentContent.content}
            </div>
          </div>
        </section>
      </main>

      {/* Structure Image Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-2 md:p-4 animate-fade-in"
          onClick={() => setShowModal(false)}
        >
          <div className="relative max-w-7xl max-h-[95vh] w-full h-full flex items-center justify-center">
            <div className="relative">
              <img
                src="/images/DHLM.webp"
                alt="Cơ cấu tổ chức - DHLM"
                className="max-w-full max-h-[85vh] md:max-h-[90vh] w-auto h-auto object-contain rounded-lg"
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
      )
      }
    </>
  );
};

export default AboutPage;
