import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const translations = {
  vi: {
    // Header
    menu: {
      home: 'TRANG CHỦ',
      about: 'GIỚI THIỆU',
      activities: 'HOẠT ĐỘNG',
      library: 'THƯ VIỆN',
      members: 'THÀNH VIÊN',
      contact: 'LIÊN HỆ',
    },
    registerButton: 'Đăng ký thành viên',
    // Hero
    hero: {
      title1: 'ẢNH HƯỞNG TRÁCH NHIỆM',
      title2: 'DẪN DẮT NIỀM TIN',
      subtitle: 'KIẾN TẠO NIỀM TIN CÙNG LIÊN MINH NIỀM TIN SỐ NGAY HÔM NAY!',
      button: 'Chi tiết',
    },
    // Programs
    programs: {
      sectionSubtitle: 'CHƯƠNG TRÌNH CỦA CHÚNG TÔI',
      sectionTitle: '6 Chương trình hành động năm 2026',
      sectionDescription: 'Các chương trình trọng tâm nhằm xây dựng hệ sinh thái số an toàn, minh bạch và bền vững.',
      ctaButton: 'Xem Lộ trình hành động 2026',
      viewDetails: 'Xem chi tiết',
      badge: 'CHƯƠNG TRÌNH',
      action2026: 'HÀNH ĐỘNG 2026',
      program1: {
        title: 'Hạ tầng Niềm tin số\n& Định danh tin cậy',
        items: [
          'eID, eKYC, Trust Framework',
          'Ngân hàng, nền tảng số'
        ]
      },
      program2: {
        title: 'Chuẩn mực Dữ liệu &\nBảo vệ quyền riêng tư',
        items: [
          'Data Governance, Privacy',
          'Doanh nghiệp, cơ quan quản lý'
        ]
      },
      program3: {
        title: 'AI có trách nhiệm &\nMinh bạch thuật toán',
        items: [
          'Responsible AI, Explainable AI',
          'Tổ chức ứng dụng AI'
        ]
      },
      program4: {
        title: 'Niềm tin số trong\nTài chính - Ngân hàng',
        items: [
          'Chống gian lận, An ninh mạng',
          'Ngân hàng, Fintech'
        ]
      },
      program5: {
        title: 'Nâng cao năng lực &\nNhân thực Niềm tin số',
        items: [
          'Đào tạo, Truyền thông',
          'Nhân sự, Cộng đồng'
        ]
      },
      program6: {
        title: 'Hợp tác - Thí điểm -\nLan tỏa quốc tế',
        items: [
          'Sandbox, Đối tác toàn cầu',
          'Trong & ngoài nước'
        ]
      },
      ambassador: {
        title: 'ĐẠI SỨ NIỀM TIN SỐ',
        subtitle: '',
        description: 'Chương trình: Tín nhiệm Người có Ảnh hưởng',
        event: 'Digital Trust Awards - Giải thưởng Niềm Tin Số',
      },
      trust: {
        title: 'TÍN NHIỆM',
        subtitle: 'NGUỒN CÓ ẢNH HƯỞNG',
        description: 'Giải thưởng vinh danh các cá nhân, tổ chức có ảnh hưởng tích cực đến cộng đồng số',
        event: 'Digital Trust Awards - Giải thưởng Niềm Tin Số',
      },
      verification: {
        title: 'KIỂM CHỨNG',
        subtitle: 'TÍN GIẢ',
        description: 'Hội nghị KOL Toàn cầu lần thứ 02',
        event: 'KOL-A Summit 2026',
      },
      notAlone: {
        title: 'KHÔNG MỘT MÌNH 2026',
        subtitle: 'PHÒNG CHỐNG TỰ TỬ CỦA NGƯỜI TRẺ',
        description: 'Chương trình hỗ trợ sức khỏe tinh thần cho giới trẻ',
        event: 'Chương trình: Không Một Mình 2026',
      },
      kol: {
        title: 'KOL',
        subtitle: 'TỔNG QUAN LĨNH VỰC',
        description: 'Diễn đàn thảo luận về vai trò và trách nhiệm của người có ảnh hưởng',
        event: 'Chương trình Kiểm chứng Tin giả',
      },
      awards: {
        title: 'DIGITAL TRUST AWARDS',
        subtitle: '',
        description: 'Giải thưởng thường niên vinh danh sự đóng góp cho niềm tin số',
        event: 'Chương trình Kiểm chứng Tin giả',
      },
    },
    // Featured Projects
    projects: {
      subtitle: 'CÂU CHUYỆN THÀNH CÔNG',
      title: 'DỰ ÁN NỔI BẬT',
      filterPosts: 'Do Liên minh khởi xướng',
      filterInitiatives: 'Do Thành viên khởi xướng',
      viewMore: 'Xem thêm',
      project1: {
        title: 'KOL với kỉ nguyên vươn mình của dân tộc',
        description: 'Sự kiện quy mô quốc gia đầu tiên tổ chức tại Việt Nam nhằm tạo diễn đàn kết nối cộng đồng KOL với cơ quan quản lý và doanh nghiệp.',
      },
      project2: {
        title: 'Không Một Mình - Cùng nhau an toàn trực tuyến.',
        description: 'Huy động sức mạnh cộng đồng chung tay bảo vệ trẻ em và thanh thiếu niên trước hành vi dụ dỗ, thao túng, lừa đảo và "bắt cóc online.',
      },
      project3: {
        title: 'Tham gia tổ chức Công Ước Hà Nội 2025.',
        description: 'Đồng hành cùng sự kiện lịch sử - Lễ mở ký Công ước Hà Nội về phòng chống tội phạm mạng, khẳng định Việt Nam là trung tâm kết nối niềm tin số toàn cầu.',
      },
    },
    // Members
    members: {
      subtitle: 'CÂU CHUYỆN THÀNH CÔNG',
      title: 'THÀNH VIÊN LIÊN MINH',
      tabOrganizations: 'Tổ chức/doanh nghiệp',
      tabIndividuals: 'Cá nhân',
      networkTitle: 'MẠNG LƯỚI HỢP TÁC TỰ NGUYỆN',
      individual1: {
        role: 'MC',
        description: 'Tạo độ căng giá trị bền vững',
      },
      individual2: {
        role: 'RAPPER',
        description: 'Nguồn truyền cảm hứng tích cực',
      },
      individual3: {
        role: 'HOA HẬU',
        description: 'Gương mặt đại diện thế hệ trẻ',
      },
      individual4: {
        role: 'KOL',
        description: 'Nội dung sáng tạo chất lượng',
      },
      stats: {
        kols: 'KOLs Tham Gia',
        provinces: 'Tỉnh Thành phố',
        delegates: 'Đại Biểu Tham Dự',
        free: 'Miễn Phí Tham Gia',
      },
    },
    // Members Page
    membersPage: {
      tabOrganization: 'HỘI VIÊN TỔ CHỨC/DOANH NGHIỆP',
      tabIndividual: 'HỘI VIÊN CÁ NHÂN',
      titleOrganization: 'Danh sách Hội viên tổ chức/doanh nghiệp',
      titleIndividual: 'Danh sách Hội viên cá nhân',
      columnNo: 'STT',
      columnLogo: 'Logo',
      columnName: 'Tên tổ chức',
      columnAvatar: 'Ảnh',
      columnMemberName: 'Họ và tên',
    },
    // Library
    library: {
      subtitle: 'CÂU CHUYỆN THÀNH CÔNG',
      title: 'THƯ VIỆN',
      filterPhotos: 'Ảnh',
      filterVideos: 'Video',
      filterInfographics: 'Infographic',
      filterLongform: 'Longform',
      viewMore: 'Xem thêm',
      featured: {
        title: 'Hội thảo Quốc Gia về KOL',
        subtitle: 'DTA - Liên Minh Niềm Tin Số',
        event: 'Sự kiện',
      },
      item1: {
        title: 'Đại hội Niềm Tin Số 2024',
        subtitle: 'DTA - Liên Minh Niềm Tin Số',
        event: 'Sự kiện',
      },
      item2: {
        title: 'Workshop An Toàn Mạng',
        subtitle: 'DTA - Liên Minh Niềm Tin Số',
        event: 'Sự kiện',
      },
      item3: {
        title: 'Gala KOL Việt Nam',
        subtitle: 'DTA - Liên Minh Niềm Tin Số',
        event: 'Sự kiện',
      },
      item4: {
        title: 'Hội nghị Công Nghệ Số',
        subtitle: 'DTA - Liên Minh Niềm Tin Số',
        event: 'Sự kiện',
      },
      item5: {
        title: 'Diễn đàn Chuyển đổi Số',
        subtitle: 'DTA - Liên Minh Niềm Tin Số',
        event: 'Sự kiện',
      },
    },
    // Contact
    contact: {
      title: 'Thông tin liên hệ',
    },
    // Footer
    footer: {
      headquarters: 'Trụ sở',
      quickAccess: 'Truy cập nhanh',
      programsTitle: 'Chương trình',
      registerMember: 'Đăng Ký Thành Viên',
      registerButton: 'Đăng ký ngay',
      connectWithUs: 'Kết nối với DTA nhiều hơn tại đây',
      copyright: '2025 LIÊN MINH NIỀM TIN SỐ',
      quickLinks: {
        home: 'Trang chủ',
        about: 'Về chúng tôi',
        programs: 'Chương trình',
        members: 'Thành viên',
        news: 'Tin tức',
        contact: 'Liên hệ',
      },
      programs: {
        trustProgram: 'Chương trình Tín nhiệm',
        hanoiConvention: 'Công ước Hà Nội',
        training: 'Đào tạo',
        childProtection: 'Bảo vệ trẻ em',
        events: 'Sự kiện',
      },
    },
  },
  en: {
    // Header
    menu: {
      home: 'HOME',
      about: 'ABOUT',
      activities: 'ACTIVITIES',
      library: 'LIBRARY',
      members: 'MEMBERS',
      contact: 'CONTACT',
    },
    registerButton: 'Register Member',
    // Hero
    hero: {
      title1: 'IMPACT RESPONSIBILITY',
      title2: 'LEADING TRUST',
      subtitle: 'BUILD TRUST TOGETHER WITH THE DIGITAL TRUST ALLIANCE TODAY!',
      button: 'Learn More',
    },
    // Programs
    programs: {
      sectionSubtitle: 'OUR PROGRAMS',
      sectionTitle: '6 Action Programs for 2026',
      sectionDescription: 'Key programs aimed at building a safe, transparent, and sustainable digital ecosystem.',
      ctaButton: 'View 2026 Action Roadmap',
      viewDetails: 'View details',
      badge: 'PROGRAM',
      action2026: 'ACTION 2026',
      program1: {
        title: 'Digital Trust Infrastructure\n& Trusted Identity',
        items: [
          'eID, eKYC, Trust Framework',
          'Banking, digital platforms'
        ]
      },
      program2: {
        title: 'Data Standards &\nPrivacy Protection',
        items: [
          'Data Governance, Privacy',
          'Enterprises, regulatory agencies'
        ]
      },
      program3: {
        title: 'Responsible AI &\nAlgorithm Transparency',
        items: [
          'Responsible AI, Explainable AI',
          'Organizations using AI'
        ]
      },
      program4: {
        title: 'Digital Trust in\nFinance - Banking',
        items: [
          'Fraud prevention, Cybersecurity',
          'Banks, Fintech'
        ]
      },
      program5: {
        title: 'Capacity Building &\nDigital Trust Personnel',
        items: [
          'Training, Communication',
          'Personnel, Community'
        ]
      },
      program6: {
        title: 'Cooperation - Pilot -\nInternational Outreach',
        items: [
          'Sandbox, Global partners',
          'Domestic & international'
        ]
      },
      ambassador: {
        title: 'DIGITAL TRUST AMBASSADOR',
        subtitle: '',
        description: 'Program: Trusted Influencer Recognition',
        event: 'Digital Trust Awards',
      },
      trust: {
        title: 'TRUST',
        subtitle: 'INFLUENCER SOURCE',
        description: 'Awards honoring individuals and organizations with positive impact on digital community',
        event: 'Digital Trust Awards',
      },
      verification: {
        title: 'FACT CHECK',
        subtitle: 'FAKE NEWS',
        description: '2nd Global KOL Conference',
        event: 'KOL-A Summit 2026',
      },
      notAlone: {
        title: 'NOT ALONE 2026',
        subtitle: 'YOUTH SUICIDE PREVENTION',
        description: 'Mental health support program for young people',
        event: 'Program: Not Alone 2026',
      },
      kol: {
        title: 'KOL',
        subtitle: 'INDUSTRY OVERVIEW',
        description: 'Forum discussing the role and responsibility of influencers',
        event: 'Fact Checking Program',
      },
      awards: {
        title: 'DIGITAL TRUST AWARDS',
        subtitle: '',
        description: 'Annual awards honoring contributions to digital trust',
        event: 'Fact Checking Program',
      },
    },
    // Featured Projects
    projects: {
      subtitle: 'SUCCESS STORIES',
      title: 'FEATURED PROJECTS',
      filterPosts: 'Initiated by Alliance',
      filterInitiatives: 'Initiated by Member',
      viewMore: 'View More',
      project1: {
        title: 'KOL in the Era of the Nation’s Rise',
        description: 'The first event organized in Vietnam bringing together KOLs to discuss their roles and responsibilities in the community.',
      },
      project2: {
        title: 'Not Alone - Together for online safety.',
        description: 'Mental health support and suicide prevention program for youth through digital platforms.',
      },
      project3: {
        title: 'Participating in organizing Hanoi Convention 2025.',
        description: 'International event focusing on building digital trust and sustainable development in the technology era.',
      },
    },
    // Members
    members: {
      subtitle: 'SUCCESS STORIES',
      title: 'ALLIANCE MEMBERS',
      tabOrganizations: 'Organizations/Enterprises',
      tabIndividuals: 'Individuals',
      networkTitle: 'VOLUNTARY COOPERATION NETWORK',
      individual1: {
        role: 'MC',
        description: 'Creating sustainable value',
      },
      individual2: {
        role: 'RAPPER',
        description: 'Source of positive inspiration',
      },
      individual3: {
        role: 'MISS',
        description: 'Representative of the young generation',
      },
      individual4: {
        role: 'KOL',
        description: 'Quality creative content',
      },
      stats: {
        kols: 'KOLs Participated',
        provinces: 'Provinces/Cities',
        delegates: 'Delegates Attended',
        free: 'Free Participation',
      },
    },
    // Members Page
    membersPage: {
      tabOrganization: 'ORGANIZATION/ENTERPRISE MEMBERS',
      tabIndividual: 'INDIVIDUAL MEMBERS',
      titleOrganization: 'List of Organization/Enterprise Members',
      titleIndividual: 'List of Individual Members',
      columnNo: 'No.',
      columnLogo: 'Logo',
      columnName: 'Organization Name',
      columnAvatar: 'Photo',
      columnMemberName: 'Full Name',
    },
    // Library
    library: {
      subtitle: 'SUCCESS STORIES',
      title: 'LIBRARY',
      filterPhotos: 'Photos',
      filterVideos: 'Videos',
      filterInfographics: 'Infographics',
      filterLongform: 'Longform',
      viewMore: 'View More',
      featured: {
        title: 'National KOL Conference',
        subtitle: 'DTA - Digital Trust Alliance',
        event: 'Event',
      },
      item1: {
        title: 'Digital Trust Summit 2024',
        subtitle: 'DTA - Digital Trust Alliance',
        event: 'Event',
      },
      item2: {
        title: 'Cybersecurity Workshop',
        subtitle: 'DTA - Digital Trust Alliance',
        event: 'Event',
      },
      item3: {
        title: 'Vietnam KOL Gala',
        subtitle: 'DTA - Digital Trust Alliance',
        event: 'Event',
      },
      item4: {
        title: 'Digital Technology Conference',
        subtitle: 'DTA - Digital Trust Alliance',
        event: 'Event',
      },
      item5: {
        title: 'Digital Transformation Forum',
        subtitle: 'DTA - Digital Trust Alliance',
        event: 'Event',
      },
    },
    // Contact
    contact: {
      title: 'Contact Information',
    },
    // Footer
    footer: {
      headquarters: 'Headquarters',
      quickAccess: 'Quick Access',
      programsTitle: 'Programs',
      registerMember: 'Register Member',
      registerButton: 'Register now',
      connectWithUs: 'Connect with DTA here',
      copyright: '2025 DIGITAL TRUST ALLIANCE © Copyright belongs to National Cyber Security Association',
      quickLinks: {
        home: 'Home',
        about: 'About Us',
        programs: 'Programs',
        members: 'Members',
        news: 'News',
        contact: 'Contact',
      },
      programs: {
        trustProgram: 'Trust Program',
        hanoiConvention: 'Hanoi Convention',
        training: 'Training',
        childProtection: 'Child Protection',
        events: 'Events',
      },
    },
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('vi');

  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
