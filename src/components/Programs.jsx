import { useEffect, useRef, useState } from 'react';
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

// Program Details Data
const programDetails = {
  '01': {
    subtitle: 'Đại sứ Niềm Tin Số',
    preview: 'Xây dựng nghệ sĩ thần tượng AI có sức hút với giới trẻ, đồng hành cùng các chương trình an toàn trực tuyến.',
    description: 'Chương trình tập trung xây dựng một nghệ sĩ thần tượng AI có sức hút với giới trẻ, sử dụng âm nhạc, hình ảnh và nội dung giải trí để tạo kết nối tự nhiên với cộng đồng người theo dõi. Nhân vật AI được định vị trở thành Đại sứ Niềm Tin Số, có khả năng đồng hành lâu dài cùng các chương trình, chiến dịch quốc gia, giúp đưa các thông điệp về an toàn trực tuyến đến gần hơn với giới trẻ.',
    roles: [
      { title: 'Người hướng dẫn', desc: 'Kiểm chứng tin giả, truyền tải kiến thức an toàn số' },
      { title: 'Người bạn an toàn', desc: 'Đồng hành cùng trẻ em và thanh thiếu niên' },
      { title: 'Cầu nối', desc: 'Kết nối giữa công nghệ, chuyên gia, cộng đồng' }
    ]
  },
  '02': {
    subtitle: 'Tín nhiệm Người có Ảnh hưởng',
    preview: 'Xây dựng Bộ tiêu chuẩn ứng xử trách nhiệm cho người có ảnh hưởng, làm nền tảng đào tạo và đánh giá tín nhiệm.',
    description: 'Chương trình tập trung xây dựng Bộ tiêu chuẩn ứng xử trách nhiệm dành cho người có ảnh hưởng trên không gian mạng, làm nền tảng cho đào tạo, cam kết và đánh giá tín nhiệm.',
    activities: [
      'Xây dựng và công bố Bộ tiêu chuẩn',
      'Đào tạo, nâng cao nhận thức pháp lý và kỹ năng quản trị rủi ro',
      'Triển khai đánh giá tín nhiệm KOL/KOC trên cơ sở tự nguyện',
      'Tạo giá trị gia tăng và lợi thế hợp tác cho các cá nhân, tổ chức đạt tín nhiệm'
    ]
  },
  '03': {
    subtitle: 'Kiểm chứng Tin giả',
    preview: 'Phòng chống tin giả do AI tạo ra, xây dựng năng lực "miễn dịch tin giả" cho cộng đồng.',
    description: 'Chương trình hướng tới phòng chống tin giả, tin sai lệch do AI tạo ra, xây dựng năng lực "miễn dịch tin giả" cho cộng đồng.',
    activities: [
      'Xây dựng nền tảng báo cáo, kiểm chứng và cảnh báo tin giả có ứng dụng AI',
      'Hình thành mạng lưới cộng đồng kiểm chứng tin giả toàn quốc',
      'Phát hành cẩm nang kiểm chứng tin giả',
      'Tổ chức gameshow, triển lãm công nghệ số và lớp học ảo về nhận diện tin giả'
    ]
  },
  '04': {
    subtitle: 'Không Một Mình – Cùng nhau An toàn Trực tuyến 2026',
    preview: 'Bảo vệ trẻ em và thanh thiếu niên trước vấn nạn xâm hại trực tuyến, xây dựng không gian mạng an toàn.',
    description: 'Chương trình triển khai trên phạm vi toàn quốc nhằm bảo vệ trẻ em và thanh thiếu niên trước vấn nạn xâm hại trực tuyến, xây dựng không gian mạng an toàn, lành mạnh và nhân văn.',
    activities: [
      'Phong trào "5 phút cùng em" với sự tham gia của KOL và người nổi tiếng',
      'Podcast, nội dung truyền thông chuyên sâu',
      'Xây dựng các "điểm trạm trực tuyến" hỗ trợ trẻ em',
      'Workshop tại trường học trên cả nước và Ngày hội An toàn Trực tuyến'
    ]
  },
  '05': {
    subtitle: 'KOLs Summit 2026',
    preview: 'Hội nghị KOL Toàn quốc lần thứ 2 với 500 đại biểu, thảo luận trách nhiệm và công bố các chương trình trọng điểm.',
    description: 'Hội nghị dự kiến diễn ra vào tháng 8/2026 với quy mô khoảng 500 đại biểu, khách mời bao gồm các KOL, tổ chức, doanh nghiệp, nền tảng số và các cơ quan báo chí, truyền thông.',
    activities: [
      'Thảo luận trách nhiệm KOL trước tin giả',
      'Công bố Bộ tiêu chuẩn và chương trình tín nhiệm',
      'Ra mắt mạng lưới kiểm chứng tin giả',
      'Công bố Giải thưởng Digital Trust Awards'
    ]
  },
  '06': {
    subtitle: 'Digital Trust Awards - Giải thưởng Niềm Tin Số',
    preview: 'Vinh danh các cá nhân, tổ chức, KOLs và giải pháp công nghệ đóng góp xây dựng môi trường số an toàn.',
    description: 'Giải thưởng nhằm vinh danh các cá nhân, tổ chức, KOLs và các giải pháp công nghệ đã có đóng góp xuất sắc trong việc xây dựng môi trường số an toàn, minh bạch.',
    categories: [
      'Tổ chức tiên phong',
      'Cá nhân/KOL truyền cảm hứng',
      'Giải pháp công nghệ tin cậy',
      'Sáng kiến cộng đồng'
    ]
  }
};

// Generic Popup Component
const ProgramPopup = ({ isOpen, onClose, programId, title }) => {
  if (!isOpen) return null;
  
  const details = programDetails[programId];
  if (!details) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl animate-fadeIn"
        style={{
          backgroundImage: `url('/background/Chuong trinh hanh dong 2026-${programId}_nen.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 text-white transition-all duration-300 cursor-pointer"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="relative z-10 p-6 md:p-10">
          <div className="flex items-center gap-4 mb-6 bg-white/90 backdrop-blur-sm rounded-xl p-4">
            <span className="text-5xl md:text-6xl font-bold text-[#3000d9]/30">{programId}</span>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#3000d9]">{title}</h2>
              <p className="text-blue-600 text-sm mt-1">{details.subtitle}</p>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-5 mb-6">
            <p className="text-gray-800 leading-relaxed">{details.description}</p>
          </div>

          {details.roles && (
            <>
              <h3 className="text-xl font-bold mb-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 text-[#3000d9]">
                Vai trò của Đại sứ AI
              </h3>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {details.roles.map((role, idx) => (
                  <div key={idx} className="bg-white/90 backdrop-blur-sm rounded-xl p-4 hover:bg-white transition-all duration-300">
                    <h4 className="font-semibold mb-2 text-[#3000d9]">{role.title}</h4>
                    <p className="text-sm text-gray-700">{role.desc}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {details.activities && (
            <>
              <h3 className="text-xl font-bold mb-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 text-[#3000d9]">
                Hoạt động chính
              </h3>
              <ul className="space-y-3">
                {details.activities.map((activity, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-white/90 backdrop-blur-sm rounded-lg p-3 hover:bg-white transition-all duration-300">
                    <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-gray-800">{activity}</span>
                  </li>
                ))}
              </ul>
            </>
          )}

          {details.categories && (
            <>
              <h3 className="text-xl font-bold mb-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 text-[#3000d9]">
                Các hạng mục chính
              </h3>
              <ul className="space-y-3">
                {details.categories.map((category, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-white/90 backdrop-blur-sm rounded-lg p-3 hover:bg-white transition-all duration-300">
                    <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-gray-800">{category}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const Programs = () => {
  const { t } = useLanguage();
  const [headerRef, headerVisible] = useScrollAnimation();
  const [gridRef, gridVisible] = useScrollAnimation();
  const [activePopup, setActivePopup] = useState(null);

  const programs = [
    {
      id: '01',
      title: t.programs.program1.title,
      preview: programDetails['01'].preview
    },
    {
      id: '02',
      title: t.programs.program2.title,
      preview: programDetails['02'].preview
    },
    {
      id: '03',
      title: t.programs.program3.title,
      preview: programDetails['03'].preview
    },
    {
      id: '04',
      title: t.programs.program4.title,
      preview: programDetails['04'].preview
    },
    {
      id: '05',
      title: t.programs.program5.title,
      preview: programDetails['05'].preview
    },
    {
      id: '06',
      title: t.programs.program6.title,
      preview: programDetails['06'].preview
    }
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-8 md:mb-12 transition-all duration-700 ease-out ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3000d9] mb-4">
            {t.programs.sectionTitle}
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
            {t.programs.sectionDescription}
          </p>
        </div>

        {/* Programs Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-10"
        >
          {programs.map((program, index) => (
            <div
              key={program.id}
              className={`relative rounded-xl shadow-md hover:shadow-xl transition-all duration-500 ease-out overflow-hidden group ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              {/* Card Background */}
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: `url('/background/Chuong trinh hanh dong 2026-${program.id}_nen.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />

              {/* Card Content */}
              <div className="relative p-6 h-full flex flex-col">
                {/* Number Badge */}
                <div className="text-4xl md:text-5xl font-bold text-white/80 mb-3">
                  {program.id}
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-white mb-4 whitespace-pre-line leading-tight drop-shadow-lg">
                  {program.title}
                </h3>

                {/* Preview Text */}
                <div className="mb-6 flex-grow">
                  <p className="text-sm text-white/90 drop-shadow-md">
                    {program.preview}
                  </p>
                </div>

                {/* View Details Button */}
                <button
                  onClick={() => setActivePopup(program.id)}
                  className="inline-flex items-center text-white hover:text-white/80 font-semibold text-sm transition-colors duration-300 group/link drop-shadow-lg"
                >
                  {t.programs.viewDetails}
                  <svg
                    className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Popups for all programs */}
        {programs.map((program) => (
          <ProgramPopup
            key={program.id}
            isOpen={activePopup === program.id}
            onClose={() => setActivePopup(null)}
            programId={program.id}
            title={program.title}
          />
        ))}
        
      </div>
    </section>
  );
};

export default Programs;

