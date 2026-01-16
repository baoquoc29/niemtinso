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
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState('introduction');
  const [showModal, setShowModal] = useState(false);
  const [headerRef, headerVisible] = useScrollAnimation();
  const [contentRef, contentVisible] = useScrollAnimation();
  const [scale, setScale] = useState(1);

  const tabs = [
    { id: 'introduction', label: t.aboutPage.tabs.introduction },
    { id: 'structure', label: t.aboutPage.tabs.structure },
    { id: 'management', label: t.aboutPage.tabs.management },
    { id: 'regulations', label: t.aboutPage.tabs.regulations },
  ];

  const tabContent = {
    introduction: {
      title: t.aboutPage.introduction.title,
      content: (
        <div className="max-w-7xl mx-auto px-4 md:px-0">
          <div className="w-full py-4 md:py-8 space-y-4 md:space-y-6 px-4 md:pl-[100px] md:pr-12">
            {/* Block 1: TÊN GỌI */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-4 md:py-6">
              <div className="w-full md:w-52 flex-shrink-0 flex justify-center mb-2 md:mb-0">
                <img src="/images/DTA_Logo_Final_Color.png" alt={t.aboutPage.introduction.name.title} className="w-24 md:w-44 h-auto object-contain" />
              </div>
              <div className="h-full flex items-stretch">
                <div className="hidden md:block w-px bg-gray-300 mx-10" style={{ minHeight: '100%' }}></div>
                <div>
                  <h2 className="text-base md:text-lg lg:text-xl font-bold text-[#4400ff] mb-2">{t.aboutPage.introduction.name.title}</h2>
                  <div className="space-y-1 text-xs md:text-sm">
                    <div><span className="font-semibold">{language === 'vi' ? 'Tên tiếng Việt:' : 'Vietnamese name:'}</span> {t.aboutPage.introduction.name.vietnamese}</div>
                    <div><span className="font-semibold">{language === 'vi' ? 'Tên tiếng Anh:' : 'English name:'}</span> {t.aboutPage.introduction.name.english}</div>
                    <div><span className="font-semibold">{language === 'vi' ? 'Tên viết tắt:' : 'Short name:'}</span> {t.aboutPage.introduction.name.short}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Block 2: TÍNH CHẤT & ĐỊA VỊ PHÁP LÝ */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-4 md:py-6">
              <div className="w-full md:w-52 flex-shrink-0 flex justify-center mb-2 md:mb-0">
                <img src="/images/Phap_li-compressed.jpg" alt={t.aboutPage.introduction.legal.title} className="w-20 md:w-32 h-auto object-contain" />
              </div>
              <div className="h-full flex items-stretch">
                <div className="hidden md:block w-px bg-gray-300 mx-10" style={{ minHeight: '100%' }}></div>
                <div>
                  <h2 className="text-base md:text-lg lg:text-xl font-bold text-[#4400ff] mb-2">{t.aboutPage.introduction.legal.title}</h2>
                  <div className="space-y-1 text-xs md:text-sm text-gray-700">
                    <div>{t.aboutPage.introduction.legal.desc1}</div>
                    <div>{t.aboutPage.introduction.legal.desc2}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Block 3: PHẠM VI HOẠT ĐỘNG */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-4 md:py-6">
              <div className="w-full md:w-52 flex-shrink-0 flex justify-center mb-2 md:mb-0">
                <img src="/images/Muc_tieu.jpg" alt={t.aboutPage.introduction.scope.title} className="w-24 md:w-44 h-auto object-contain" />
              </div>
              <div className="h-full flex items-stretch">
                <div className="hidden md:block w-px bg-gray-300 mx-10" style={{ minHeight: '100%' }}></div>
                <div>
                  <h2 className="text-base md:text-lg lg:text-xl font-bold text-[#4400ff] mb-2">{t.aboutPage.introduction.scope.title}</h2>
                  <div className="space-y-1 text-xs md:text-sm text-gray-700">
                    <div>{t.aboutPage.introduction.scope.desc1}</div>
                    <div>{t.aboutPage.introduction.scope.fields}</div>
                    <div>{t.aboutPage.introduction.scope.forms}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Block 4: NGUYÊN TẮC HOẠT ĐỘNG */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-4 md:py-6">
              <div className="w-full md:w-52 flex-shrink-0 flex justify-center mb-2 md:mb-0">
                <img src="/images/Nguyen_Tac.jpg" alt={t.aboutPage.introduction.principles.title} className="w-18 md:w-28 h-auto object-contain" />
              </div>
              <div className="h-full flex items-stretch">
                <div className="hidden md:block w-px bg-gray-300 mx-10" style={{ minHeight: '100%' }}></div>
                <div>
                  <h2 className="text-base md:text-lg lg:text-xl font-bold text-[#4400ff] mb-2">{t.aboutPage.introduction.principles.title}</h2>
                  <div className="space-y-1 text-xs md:text-sm text-gray-700">
                    <div>{t.aboutPage.introduction.principles.p1}</div>
                    <div>{t.aboutPage.introduction.principles.p2}</div>
                    <div>{t.aboutPage.introduction.principles.p3}</div>
                    <div>{t.aboutPage.introduction.principles.p4}</div>
                    <div>{t.aboutPage.introduction.principles.p5}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    structure: {
      title: t.aboutPage.structure.title,
      content: (
        <div className="space-y-8">
          <div className="bg-white p-6 md:p-10 rounded-2xl border border-gray-200">
            <div className="text-center">
              <img
                src={language === 'vi' ? "/images/co_cau_ban_to_chuc.png" : "/images/co_cau_ban_to_chuc.png"} // Assuming same image for now or use separate path if needed
                alt={t.aboutPage.tabs.structure}
                className="max-w-full md:max-w-6xl h-auto mx-auto rounded-lg cursor-pointer hover:shadow-xl transition-all duration-300"
                onClick={() => setShowModal(true)}
              />
              <p className="text-sm text-gray-500 mt-4">
                <span className="italic">{t.aboutPage.structure.hint}</span>
              </p>
            </div>
          </div>
        </div>
      )
    },
    management: {
      title: t.aboutPage.management.title,
      content: (
        <div className="space-y-6 md:space-y-12">
          {/* Desktop Table View */}
          <div className="hidden md:block bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden mt-8 animate-fade-in-up">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-50 to-white border-b border-gray-200">
                    <th className="px-6 py-5 text-left text-xs font-bold text-gray-500 uppercase tracking-wider w-20">{t.aboutPage.management.table.no}</th>
                    <th className="px-6 py-5 text-left text-xs font-bold text-gray-500 uppercase tracking-wider min-w-[200px]">{t.aboutPage.management.table.name}</th>
                    <th className="px-6 py-5 text-left text-xs font-bold text-gray-500 uppercase tracking-wider min-w-[300px]">{t.aboutPage.management.table.position}</th>
                    <th className="px-6 py-5 text-left text-xs font-bold text-gray-500 uppercase tracking-wider min-w-[200px]">{t.aboutPage.management.table.role}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {t.aboutPage.management.members.map((member, idx) => (
                    <tr key={member.id} className="hover:bg-blue-50/30 transition-colors group">
                      <td className="px-6 py-5">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-600 font-bold text-sm group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                          {member.id}
                        </span>
                      </td>
                      <td className="px-6 py-5">
                        <div className="text-sm font-bold text-gray-900 leading-tight">{member.name}</div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">{member.position}</div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-[#3000d9] text-xs font-semibold">
                          {member.role}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-4 mt-6 animate-fade-in-up">
            {t.aboutPage.management.members.map((member) => (
              <div key={member.id} className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-full bg-[#3000d9] text-white flex items-center justify-center font-bold">
                    {member.id}
                  </span>
                  <div className="px-3 py-1 rounded-full bg-blue-50 text-[#3000d9] text-[10px] font-bold uppercase tracking-wider">
                    {member.role}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed italic">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    regulations: {
      title: '',
      content: (
        <div className="space-y-8 max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Document 1: TUYÊN BỐ CHUNG */}
            <div className="flex flex-col items-center bg-gray-50 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all border border-gray-100">
              <div className="w-full aspect-[3/4] bg-white rounded-lg shadow-sm mb-6 overflow-hidden flex items-center justify-center border border-gray-200">
                <img
                  src="/images/tuyenbochungpreview.png"
                  alt={t.aboutPage.regulations.doc1}
                  className="w-full h-full object-contain p-2 hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#3000d9] mb-4 text-center h-14 flex items-center">
                {t.aboutPage.regulations.doc1}
              </h3>
              <a
                href="/documents/TUYÊN BỐ CHUNG.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#3000d9] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#3000d9]/90 transition-all btn-animate"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                {t.aboutPage.regulations.viewDetail}
              </a>
            </div>

            {/* Document 2: QUY ƯỚC ĐỒNG HÀNH */}
            <div className="flex flex-col items-center bg-gray-50 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all border border-gray-100">
              <div className="w-full aspect-[3/4] bg-white rounded-lg shadow-sm mb-6 overflow-hidden flex items-center justify-center border border-gray-200">
                <img
                  src="/images/quyuocchungpriview.png"
                  alt={t.aboutPage.regulations.doc2}
                  className="w-full h-full object-contain p-2 hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#3000d9] mb-4 text-center h-14 flex items-center">
                {t.aboutPage.regulations.doc2}
              </h3>
              <a
                href="/documents/QUY ƯỚC ĐỒNG HÀNH.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#3000d9] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#3000d9]/90 transition-all btn-animate"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                {t.aboutPage.regulations.viewDetail}
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
            <h1 className={`text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[#4400ff] mb-12 mt-8 whitespace-pre-line transition-all duration-700 delay-200 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center animate-fade-in"
          onClick={() => setShowModal(false)}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center p-2">
              <img
                src="/images/co_cau_ban_to_chuc.png"
                alt="Cơ cấu tổ chức - DTA"
                className="max-w-full max-h-full w-auto h-auto object-contain shadow-2xl transition-transform duration-300 scale-100"
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            {/* Navigation hint */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-60 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
                {t.aboutPage.structure.closeHint}
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
