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
      button: 'Đăng ký',
    },
    // Programs
    programs: {
      sectionSubtitle: 'CHƯƠNG TRÌNH CỦA CHÚNG TÔI',
      sectionTitle: 'CHƯƠNG TRÌNH HÀNH ĐỘNG NĂM 2026',
      sectionDescription: 'Các chương trình trọng tâm nhằm xây dựng hệ sinh thái số an toàn, minh bạch và bền vững.',
      ctaButton: 'Xem Lộ trình hành động 2026',
      viewDetails: 'Xem chi tiết',
      badge: 'CHƯƠNG TRÌNH',
      action2026: 'HÀNH ĐỘNG 2026',
      program1: {
        title: 'Xây dựng Đại sứ Niềm Tin Số\n(Đại sứ AI)',
        items: ['eID, eKYC, Trust Framework', 'Ngân hàng, nền tảng số']
      },
      program2: {
        title: 'Chương trình Tín nhiệm\nNgười có Ảnh hưởng',
        items: ['Data Governance, Privacy', 'Doanh nghiệp, cơ quan quản lý']
      },
      program3: {
        title: 'Chương trình\nKiểm chứng Tin giả',
        items: ['Responsible AI, Explainable AI', 'Tổ chức ứng dụng AI']
      },
      program4: {
        title: 'Không Một Mình – Cùng nhau\nAn toàn Trực tuyến 2026',
        items: ['Chống gian lận, An ninh mạng', 'Ngân hàng, Fintech']
      },
      program5: {
        title: 'Hội nghị KOL Toàn quốc lần thứ 2\n(KOLs Summit 2026)',
        items: ['Đào tạo, Truyền thông', 'Nhân sự, Cộng đồng']
      },
      program6: {
        title: 'Digital Trust Awards\nGiải thưởng Niềm Tin Số',
        items: ['Sandbox, Đối tác toàn cầu', 'Trong & ngoài nước']
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
        title: 'KOL với kỷ nguyên vươn mình của dân tộc',
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
    // About Page
    aboutPage: {
      tabs: {
        introduction: 'Giới thiệu về liên minh',
        structure: 'Cơ cấu tổ chức',
        management: 'Ban chấp hành',
        regulations: 'Điều lệ, quy ước chung',
      },
      introduction: {
        title: 'GIỚI THIỆU VỀ LIÊN MINH',
        name: {
          title: 'TÊN GỌI',
          vietnamese: 'Liên minh Niềm tin Số.',
          english: 'Digital Trust Alliance (DTA).',
          short: 'DTA',
        },
        legal: {
          title: 'TÍNH CHẤT & ĐỊA VỊ PHÁP LÝ',
          desc1: 'Liên minh Niềm tin Số là mạng lưới hợp tác tự nguyện, phi lợi nhuận, không có tư cách pháp nhân.',
          desc2: 'Liên minh hoạt động trong khuôn khổ pháp luật Việt Nam, dưới sự bảo trợ của Cục An ninh mạng và Phòng, chống tội phạm sử dụng công nghệ cao, Bộ Công an.',
        },
        scope: {
          title: 'PHẠM VI HOẠT ĐỘNG',
          desc1: 'Liên minh hoạt động trên phạm vi toàn quốc, đồng thời mở rộng hợp tác khu vực và quốc tế.',
          fields: 'Lĩnh vực hoạt động gồm: truyền thông, báo chí, nội dung số, thương mại điện tử, công nghệ, an ninh mạng, giáo dục, văn hóa, xã hội.',
          forms: 'Hình thức hoạt động: tọa đàm, hội nghị, đào tạo, tập huấn, chiến dịch truyền thông, chương trình đồng hành, phản biện chính sách và hợp tác quốc tế.',
        },
        principles: {
          title: 'NGUYÊN TẮC HOẠT ĐỘNG',
          p1: 'Tự nguyện – Tự quản: Thành viên tham gia trên cơ sở tự nguyện, cùng nhau quản trị, không bị áp đặt.',
          p2: 'Dân chủ – Bình đẳng – Minh bạch: Thành viên có quyền ngang nhau trong thảo luận, biểu quyết và được tiếp cận thông tin công khai, minh bạch.',
          p3: 'Phi lợi nhuận: Liên minh không hoạt động vì mục tiêu sinh lợi; mọi nguồn lực huy động nhằm phục vụ lợi ích cộng đồng.',
          p4: 'Tuân thủ pháp luật Việt Nam: Mọi hoạt động phải phù hợp với Hiến pháp, pháp luật và các quy định hiện hành.',
          p5: 'Trách nhiệm xã hội – Lan tỏa tích cực: Thành viên hành động có trách nhiệm với cộng đồng, lan tỏa các giá trị tốt đẹp, chống lại tin giả và các hành vi tiêu cực.',
        },
      },
      structure: {
        title: 'CẤU TRÚC VẬN HÀNH LIÊN MINH NIỀM TIN SỐ',
        hint: 'Click vào hình ảnh để xem chi tiết',
        closeHint: 'Click bên ngoài để đóng',
      },
      management: {
        title: 'DANH SÁCH HỘI ĐỒNG LÃNH ĐẠO LIÊN MINH NIỀM TIN SỐ',
        table: {
          no: 'STT',
          name: 'Họ và tên',
          position: 'Chức vụ',
          role: 'Vai trò trong liên minh',
        },
        members: [
          { id: 1, name: 'Trung tướng Lê Xuân Minh', position: 'Cục trưởng Cục An ninh mạng và PCTP sử dụng công nghệ cao, Bộ Công an. Phó Chủ tịch Hiệp hội An ninh mạng quốc gia', role: 'Chủ tịch' },
          { id: 2, name: 'Đại tá Hà Văn Bắc', position: 'Phó Cục trưởng Cục An ninh mạng và PCTP sử dụng công nghệ cao, Bộ Công an', role: 'Phó Chủ tịch' },
          { id: 3, name: 'Đại tá Nguyễn Hồng Quân', position: 'Phó cục trưởng Cục an ninh mạng và phòng chống tội phạm sử dụng công nghệ cao', role: 'Phó Chủ tịch (Thành viên tiên phong)' },
          { id: 4, name: 'Trung tướng Nguyễn Minh Chính', position: 'Phó Chủ tịch thường trực Hiệp hội An ninh mạng quốc gia', role: 'Phó Chủ tịch (Thành viên tiên phong)' },
          { id: 5, name: 'NSND Nguyễn Xuân Bắc', position: 'Cục trưởng Cục Nghệ thuật biểu diễn, Bộ Văn hóa, Thể thao & Du lịch', role: 'Phó Chủ tịch (Thành viên tiên phong)' },
          { id: 6, name: 'Ông Đỗ Đức Hoàng', position: 'Phó Tổng Giám đốc Đài THVN', role: 'Phó Chủ tịch (Thành viên tiên phong)' },
          { id: 7, name: 'Thiếu tướng Ngô Hoài Thu', position: 'Phó Cục trưởng Cục Công tác Đảng và công tác chính trị, Bộ Công an; Trưởng ban Phụ nữ CAND', role: 'Phó Chủ tịch; Chủ nhiệm Ủy ban Liêm chính' },
          { id: 8, name: 'Đại tá Nguyễn Anh Tuấn', position: 'Phó Cục trưởng Cục Truyền thông Công an nhân dân, Bộ Công an; Giám đốc Truyền hình CAND - ANTV', role: 'Phó Chủ tịch (Thành viên tiên phong)' },
          { id: 9, name: 'Trung tá Nguyễn Tiến Cường', position: 'Trưởng phòng Cục An ninh mạng và PCTP sử dụng công nghệ cao, Bộ Công an', role: 'Tổng thư ký; Ủy viên thường trực' },
          { id: 10, name: 'Ông Nguyễn Vũ Hoàng An', position: 'Tổng Thư ký Hiệp hội An ninh mạng quốc gia', role: 'Ủy viên thường trực' },
          { id: 11, name: 'Ông Vũ Hoài Nam', position: 'Tổng biên tập Báo Pháp luật Việt Nam', role: 'Ủy viên thường trực (Thành viên tiên phong)' },
          { id: 12, name: 'Ông Nguyễn Lâm Thanh', position: 'Đại diện Nền tảng Tiktok tại Việt Nam', role: 'Ủy viên thường trực (Thành viên tiên phong)' },
          { id: 13, name: 'Ông Chu Hải Công', position: 'Giám đốc Quan hệ công chúng, Ngân hàng TMCP Quân đội (MB Bank)', role: 'Ủy viên thường trực (Thành viên tiên phong)' },
          { id: 14, name: 'Ông Đỗ Quang Vinh', position: 'Phó Chủ tịch HĐQT, Ngân hàng TMCP Sài Gòn - Hà Nội (SHB)', role: 'Ủy viên thường trực (Thành viên tiên phong)' },
          { id: 15, name: 'Ông Đinh Hoài Nam', position: 'Thành viên độc lập HĐQT, Công ty CP Tập đoàn Yeah1', role: 'Ủy viên thường trực (Thành viên tiên phong)' },
          { id: 16, name: 'Bà Lê Thị Kim Tuyến', position: 'Phó Tổng Giám đốc Công ty TNHH ZEIT Media', role: 'Ủy viên thường trực (Thành viên tiên phong)' },
          { id: 17, name: 'Bà Nguyễn Thị Khánh Vân', position: 'Phó Giám đốc, Công ty CP Cyber Trust', role: 'Ủy viên thường trực (Thành viên tiên phong)' },
          { id: 18, name: 'Ông Nguyễn Tùng Dương', position: 'Ca sĩ Tùng Dương', role: 'Ủy viên thường trực (Thành viên tiên phong)' },
          { id: 19, name: 'Ông Nguyễn Đức Cường', position: 'Rapper Đen', role: 'Ủy viên thường trực (Thành viên tiên phong)' },
          { id: 20, name: 'Bà Lê Nguyễn Bảo Ngọc', position: 'Miss Intercontinental 2022', role: 'Ủy viên thường trực (Thành viên tiên phong)' },
        ],
      },
      regulations: {
        viewDetail: 'Xem chi tiết tại đây',
        doc1: 'BẢN TUYÊN BỐ CHUNG',
        doc2: 'QUY ƯỚC ĐỒNG HÀNH',
      },
    },
    // Activities Page
    activitiesPage: {
      tabs: {
        events: 'Sự kiện',
        projects: 'Dự án',
      },
      events: {
        title: 'Sự Kiện Nổi Bật',
        articles: [
          {
            id: 1,
            title: 'Hội nghị Toàn thể Liên minh Niềm Tin Số (DTA) lần thứ I',
            image: '/images/Su_kien_moi_nhat.jpg',
            date: '10 tháng 01 năm 2026',
            summary: 'Chiều 10/1 tại Hà Nội, Hội nghị Toàn thể Liên minh Niềm Tin Số (Digital Trust Alliance – DTA) lần thứ I đã chính thức diễn ra, đánh dấu cột mốc quan trọng trong tiến trình xây dựng và củng cố niềm tin trên không gian mạng tại Việt Nam. ',
            content: `
              <div class="article-content">
                <p class="mb-6 leading-relaxed">
                  Chiều 10/1 tại Hà Nội, Hội nghị Toàn thể Liên minh Niềm Tin Số (Digital Trust Alliance - DTA) lần thứ I đã chính thức diễn ra, đánh dấu cột mốc quan trọng trong tiến trình xây dựng và củng cố niềm tin trên không gian mạng tại Việt Nam. Hội nghị quy tụ gần 200 đại biểu là đại diện các cơ quan quản lý nhà nước, doanh nghiệp, nền tảng số, tổ chức xã hội, cùng đông đảo nghệ sĩ, người có ảnh hưởng (KOL) và cộng đồng sáng tạo nội dung số.
                </p>

                <p class="mb-6 leading-relaxed">
                  Là hội nghị toàn thể đầu tiên kể từ khi Liên minh Niềm Tin Số được thành lập, sự kiện mang ý nghĩa tổng kết các hoạt động trọng tâm trong giai đoạn hình thành, đồng thời là diễn đàn để các thành viên cùng trao đổi, thống nhất định hướng chiến lược và chương trình hành động cho giai đoạn phát triển tiếp theo.
                </p>

                <p class="mb-6 leading-relaxed">
                  Phát biểu tại Hội nghị, Đại tá Nguyễn Hồng Quân - Phó Cục trưởng Cục An ninh mạng và phòng, chống tội phạm sử dụng công nghệ cao (A05, Bộ Công an) nhấn mạnh, niềm tin số chính là nền tảng của xã hội số. Trong bối cảnh công nghệ phát triển nhanh chóng, chỉ trong vài giây, một thông tin sai lệch có thể lan truyền tới hàng triệu người, kéo theo những hệ lụy nghiêm trọng về an ninh, an toàn và trật tự xã hội. Theo ông, không có niềm tin thì không thể phát triển kinh tế số, văn hóa số, chuyển đổi số, cũng như bảo đảm an ninh mạng và thành công trong kỷ nguyên khoa học - công nghệ.
                </p>

                <p class="mb-6 leading-relaxed">
                  Hội nghị đã nhìn lại những kết quả nổi bật của Liên minh trong thời gian qua, đặc biệt là các hoạt động truyền thông, giáo dục và kết nối cộng đồng nhằm nâng cao nhận thức, thúc đẩy hành vi có trách nhiệm và lan tỏa các giá trị tích cực trên không gian mạng. Tiêu biểu là Chiến dịch "Không Một Mình" triển khai từ tháng 10 đến hết tháng 11/2025, thu hút hơn 1.000 nghệ sĩ, KOL và tổ chức xã hội tham gia, đạt trên 1,5 tỷ lượt xem, tiếp cận hơn 40 triệu người và lan tỏa tới hơn 6.100 điểm trường tại 34 tỉnh, thành phố.
                </p>

                <p class="mb-6 leading-relaxed">
                  Tại Hội nghị, các thành viên đã biểu quyết, thống nhất thông qua chương trình hành động của Liên minh, đồng thời chính thức ra mắt Hội đồng Lãnh đạo Liên minh Niềm Tin Số do Trung tướng Lê Xuân Minh - Cục trưởng Cục A05 (Bộ Công an) làm Chủ tịch. Hội đồng Lãnh đạo có vai trò định hướng chiến lược, điều phối hoạt động chung và bảo đảm tính minh bạch, liêm chính trong quá trình triển khai các chương trình của Liên minh.
                </p>

                <p class="mb-6 leading-relaxed">
                  Với tinh thần "kết nối để hành động", Hội nghị Toàn thể Liên minh Niềm Tin Số lần thứ I được kỳ vọng sẽ tạo nền tảng cho việc hình thành một hệ sinh thái niềm tin số bền vững, nơi các cơ quan quản lý, doanh nghiệp, nền tảng, nghệ sĩ, KOL và cộng đồng cùng chung tay kiến tạo một không gian mạng an toàn, lành mạnh và nhân văn tại Việt Nam.
                </p>
              </div>
            `
          },
          {
            id: 2,
            title: 'Khai mạc Ngày hội An toàn trực tuyến “Không Một Mình”',
            image: '/images/Images_id_2/image_1.jpg',
            date: '01 tháng 11 năm 2025',
            summary: 'Chiều 01/11/2025, tại phố đi bộ hồ Hoàn Kiếm, Hà Nội, Ngày hội An toàn trực tuyến “Không Một Mình” chính thức được khai mạc, chung tay hướng tới một không gian mạng an toàn, lành mạnh cho trẻ em và thanh thiếu niên.',
            content: `
              <div class="article-content">
                <p class="mb-6 leading-relaxed">
                  Ngày hội An toàn trực tuyến nằm trong khuôn khổ Chiến dịch "Không Một Mình" do Liên minh Niềm Tin Số khởi xướng, dưới sự bảo trợ của Cơ quan Phòng chống Ma túy và Tội phạm của Liên Hợp Quốc (UNODC), Quỹ Nhi đồng Liên Hợp Quốc (UNICEF) cùng Bộ Công an, Bộ Giáo dục và Đào tạo, Bộ Y tế, phối hợp với Cục An ninh mạng và phòng chống tội phạm sử dụng công nghệ cao, Hiệp hội An ninh mạng quốc gia, UBND thành phố Hà Nội đồng tổ chức.
                </p>

                <div class="my-8">
                  <img src="/images/Images_id_2/image_1.jpg" alt="Các đại biểu dự Lễ khai mạc" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Các đại biểu dự Lễ khai mạc.</p>
                </div>

                <p class="mb-4 leading-relaxed">
                  Phát biểu tại Lễ khai mạc, Thiếu tướng Lê Xuân Minh, Cục trưởng Cục An ninh mạng và phòng chống tội phạm sử dụng công nghệ cao - Bộ Công an nhấn mạnh: Xâm hại, lạm dụng trẻ em trực tuyến đã và đang gia tăng trên toàn cầu. Tại Việt Nam, từ đầu năm 2025 đến nay, lực lượng Công an đã tiếp nhận và xử lý hơn 50 vụ bắt cóc trực tuyến – 100% nạn nhận từ 18-22 tuổi, 90% là nữ. Những con số này là lời nhắc nhở mạnh mẽ về sự cần thiết của các hành động phối hợp và cam kết tập thể để bảo vệ trẻ em và thanh thiếu niên trên không gian mạng.
                </p>

                <blockquote class="border-l-4 border-blue-600 pl-4 my-6 italic text-gray-700">
                  "Không một cá nhân, một cơ quan nào có thể đơn độc đối mặt với thách thức này. Chúng ta cần sự chung tay của toàn xã hội: từ gia đình, nhà trường, doanh nghiệp công nghệ, đến các tổ chức quốc tế và cộng đồng" - Thiếu tướng Lê Xuân Minh nhấn mạnh.
                </blockquote>

                <div class="my-8">
                  <img src="/images/Images_id_2/image_2.jpg" alt="Thiếu tướng Lê Xuân Minh phát biểu" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Thiếu tướng Lê Xuân Minh, Cục trưởng Cục An ninh mạng và phòng chống tội phạm sử dụng công nghệ cao phát biểu khai mạc.</p>
                </div>

                <p class="mb-4 leading-relaxed">
                  Thế giới cũng đang nỗ lực hành động tập thể để bảo vệ nhóm yếu thế, trong đó có trẻ em và thanh thiếu niên trên không gian mạng. Công ước Hà Nội về chống tội phạm mạng mà Việt Nam góp phần xây dựng, là một trong những minh chứng mạnh mẽ cho cam kết và quyết tâm bảo vệ trẻ em và thanh thiếu niên. Việt Nam cam kết bảo vệ đầy đủ các quyền trẻ em trên không gian mạng và cùng với cộng đồng quốc tế xây dựng không gian mạng an toàn và nhân văn, vì con người.
                </p>

                <p class="mb-6 leading-relaxed">
                  Thiếu tướng Lê Xuân Minh nhấn mạnh: Chiến dịch Không Một Mình do Liên minh Niềm Tin Số đề xuất và dẫn dắt là một nỗ lực kịp thời thúc đẩy hành động tập thể trong bảo vệ trẻ em và thanh thiếu niên trước "bắt cóc trực tuyến". Chiến dịch đã triển khai trên phạm vi toàn quốc, hơn 1.500 trường đã tổ chức hoạt động hưởng ứng và hơn 100 triệu lượt tiếp cận trên không gian mạng với những thông điệp của chiến dịch. Chiến dịch đã có nhiều đổi mới, sáng tạo về cách thức truyền tải thông tin đến từng lứa tuổi trẻ em và thanh thiếu niên. Bài hát và điệu nhảy của Chiến dịch đã được các em và xã hội đón nhận một cách tự nhiên và gần gũi.
                </p>

                <div class="my-8">
                  <img src="/images/Images_id_2/image_3.jpg" alt="Nghi thức khai mạc" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Các đại biểu thực hiện nghi thức khai mạc Ngày hội.</p>
                </div>

                <div class="my-8">
                  <img src="/images/Images_id_2/image_4.jpg" alt="Tặng hoa tri ân" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Ban Tổ chức tặng hoa tri ân các đơn vị đồng hành và KOL đại sứ.</p>
                </div>

                <blockquote class="border-l-4 border-blue-600 pl-4 my-6 italic text-gray-700">
                  "Chiến dịch là minh chứng sống động cho tinh thần hợp tác, lan tỏa thông điệp nhân văn: Không một trẻ em nào bị bỏ lại một mình trước những rủi ro trên mạng" – Thiếu tướng Lê Xuân Minh khẳng định.
                </blockquote>

                <div class="my-8">
                  <img src="/images/Images_id_2/image_5.jpg" alt="Các đại biểu tại lễ khai mạc" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Các đại biểu tại Lễ khai mạc.</p>
                </div>

                <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Trải nghiệm số - biến thông điệp thành hành động</h3>

                <p class="mb-6 leading-relaxed">
                  Diễn ra trong hai ngày 01 - 02/11 tại không gian phố đi bộ Hoàn Kiếm, Hà Nội, Ngày hội An toàn trực tuyến "Không Một Mình" mang đến chuỗi hoạt động phong phú, kết hợp giữa giáo dục, công nghệ và nghệ thuật, giúp người tham gia "chạm" vào thông điệp an toàn trực tuyến một cách gần gũi và trực quan.
                </p>

                <div class="my-8">
                  <img src="/images/Images_id_2/image_6.jpg" alt="Đen Vâu biểu diễn" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Đen Vâu biểu diễn tại Lễ khai mạc Ngày hội.</p>
                </div>

                <p class="mb-4 leading-relaxed">
                  Tại không gian triển lãm số đa giác quan, khách tham quan được trải nghiệm hệ thống tương tác ánh sáng, âm thanh và công nghệ ấn tượng, với các mô hình, trò chơi và công nghệ mô phỏng những tình huống nhận diện nguy cơ trực tuyến thường gặp. Bên cạnh đó, khu trải nghiệm công nghệ số giúp nâng cao nhận thức, kỹ năng, công cụ bảo vệ trẻ em và thanh thiếu niên trên không gian mạng một cách sáng tạo, gần gũi.
                </p>

                <p class="mb-6 leading-relaxed">
                  Không chỉ có trải nghiệm công nghệ, Ngày hội còn là nơi học sinh, sinh viên thể hiện sự sáng tạo qua âm nhạc, vũ đạo và nội dung số xoay quanh chủ đề "Không Một Mình" thông qua Minishow tài năng học đường diễn ra vào tối 1/11.
                </p>

                <div class="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <img src="/images/Images_id_2/image_7.jpg" alt="Không gian triển lãm" class="w-full rounded-lg shadow-md" />
                  </div>
                  <div>
                    <img src="/images/Images_id_2/image_8.jpg" alt="Trải nghiệm công nghệ" class="w-full rounded-lg shadow-md" />
                  </div>
                </div>
                <p class="text-sm text-gray-600 italic mt-2 text-center mb-8">Tại không gian triển lãm số đa giác quan, khách tham quan sẽ được trải nghiệm hệ thống tương tác ánh sáng, âm thanh và công nghệ ấn tượng.</p>

                <p class="mb-6 leading-relaxed">
                  Khép lại hành trình, Gala âm nhạc "Không Một Mình" tối ngày 2/11 quy tụ dàn nghệ sĩ nổi tiếng như Đen, Mono, tlinh, Low G, Quang Hùng MasterD, Lâm Bảo Ngọc, Hà Myo, Quang Đăng..., truyền tải thông điệp kết nối và lan tỏa năng lượng tích cực về niềm tin và an toàn trong thế giới số.
                </p>

                <div class="my-8">
                  <img src="/images/Images_id_2/image_9.jpg" alt="Học sinh biểu diễn" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Học sinh, sinh viên thể hiện sự sáng tạo qua âm nhạc, vũ đạo và nội dung số xoay quanh chủ đề "Không Một Mình".</p>
                </div>

                <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Lan tỏa giá trị nhân văn "Không Một Mình"</h3>

                <p class="mb-4 leading-relaxed">
                  Chưa đầy 1 tháng triển khai, chiến dịch "Không Một Mình" đã thu hút sự hưởng ứng của hơn 2.000 trường học trên toàn quốc, đạt hơn 500 triệu lượt tiếp cận trên không gian mạng. Các nội dung truyền thông, thử thách sáng tạo và bài hát chủ đề "Clicking" được lan tỏa tự nhiên, trở thành điểm chạm tích cực trong cộng đồng.
                </p>

                <p class="mb-4 leading-relaxed">
                  Theo đại diện Bộ Công an, từ những hành động nhỏ hôm nay, dù là một chia sẻ tích cực hay một lời cảnh báo đúng lúc, chúng ta cũng đang góp phần dựng xây bức tường an toàn cho hàng triệu trẻ em Việt Nam.
                </p>

                <p class="mb-4 leading-relaxed font-semibold text-gray-800">
                  Bài hát chủ đề "Clicking" được lan tỏa tự nhiên, trở thành điểm chạm tích cực trong cộng đồng.
                </p>

                <p class="mb-4 leading-relaxed">
                  Chiến dịch "Không Một Mình" cùng Ngày hội An toàn trực tuyến là hoạt động mang ý nghĩa thiết thực, góp phần thực hiện Công ước Hà Nội về chống tội phạm mạng, khẳng định vai trò tiên phong của Việt Nam trong nỗ lực toàn cầu bảo vệ trẻ em trên môi trường mạng.
                </p>

                <p class="mb-4 leading-relaxed">
                  Sự kiện không chỉ nâng cao nhận thức mà còn tạo nên phong trào xã hội rộng lớn, nơi mỗi cá nhân, tổ chức, doanh nghiệp và cộng đồng cùng chung tay xây dựng một không gian mạng an toàn, nhân văn, nơi mọi trẻ em đều được bảo vệ và không bao giờ đơn độc.
                </p>
              </div>
            `
          },
          {
            id: 3,
            title: 'Hội nghị KOL toàn quốc: Chung tay xây dựng niềm tin số, lan tỏa ảnh hưởng tích cực',
            image: '/images/images_id_3/image_1.png',
            date: '18 tháng 08 năm 2025',
            summary: 'Sáng 18/8/2025, Hội nghị KOL toàn quốc đã diễn ra thành công với sự tham gia của gần 300 KOL tiêu biểu, đại diện 34 tỉnh, thành trên cả nước.',
            content: `
              <div class="article-content">
                <p class="mb-6 leading-relaxed">
                  Sáng 18/8/2025, Hội nghị "KOL với kỷ nguyên vươn mình của dân tộc" do Hiệp hội An ninh mạng quốc gia phối hợp Cục An ninh mạng và Phòng, chống tội phạm sử dụng công nghệ cao, Bộ Công an tổ chức đã diễn ra thành công với sự tham gia của gần 300 KOL (Key Opinion Leader - người có sức ảnh hưởng) tiêu biểu, đại diện 34 tỉnh, thành trên cả nước cùng hơn 150 đại diện cơ quan quản lý, doanh nghiệp, nền tảng công nghệ và cơ quan báo chí truyền thông. Hội nghị không chỉ là diễn đàn đối thoại mà còn đặt nền móng cho nhiều sáng kiến lâu dài, mở ra cơ hội để cộng đồng KOL đồng hành cùng sự phát triển của đất nước.
                </p>

                <div class="my-8">
                  <img src="/images/images_id_3/image_1.png" alt="Thiếu tướng Lê Xuân Minh phát biểu khai mạc" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Thiếu tướng Lê Xuân Minh, Cục trưởng Cục An ninh mạng và phòng, chống tội phạm công nghệ cao phát biểu khai mạc.</p>
                </div>

                <p class="mb-4 leading-relaxed">
                  Thừa ủy quyền của Đại tướng Lương Tam Quang, Ủy viên Bộ Chính trị, Bộ trưởng Bộ Công an, Chủ tịch Hiệp hội An ninh mạng quốc gia phát biểu khai mạc, Thiếu tướng Lê Xuân Minh, Cục trưởng Cục An ninh mạng và phòng, chống tội phạm công nghệ cao, Phó Chủ tịch Hiệp hội nhấn mạnh: Trong kỷ nguyên số, nơi biên giới quốc gia được mở rộng tới từng điểm truy cập Internet, những người có ảnh hưởng trên không gian mạng đã và đang trở thành một lực lượng đặc biệt, góp phần định hình nhận thức xã hội, dẫn dắt xu hướng, thúc đẩy sáng tạo và quảng bá, lan tỏa bản sắc, giá trị Việt Nam ra thế giới.
                </p>

                <p class="mb-6 leading-relaxed">
                  Trong bối cảnh đất nước đang thực hiện những bước chuyển mình quan trọng, chiến lược, KOL chính là nguồn lực đồng hành cùng Đảng, Nhà nước và Nhân dân xây dựng nền kinh tế số, văn hóa số, xã hội số giàu bản sắc và bền vững. Đảng, Nhà nước luôn dành sự quan tâm đặc biệt, ban hành nhiều chủ trương, chính sách nhằm tạo môi trường phát triển lành mạnh cho KOL, nơi những giá trị chân – thiện – mỹ được lan tỏa mạnh mẽ hơn bao giờ hết.
                </p>

                <p class="mb-6 leading-relaxed">
                  Theo đồng chí Cục trưởng, ảnh hưởng càng lớn trách nhiệm càng cao, mỗi KOL cần ý thức sâu sắc tác động của từng phát ngôn, hình ảnh và hành động. Đồng thời, các cơ quan quản lý, các nền tảng công nghệ phải cùng chung tay định hướng, bảo vệ cộng đồng trước thông tin sai lệch, loại bỏ tác động tiêu cực, củng cố "lá chắn niềm tin" of xã hội, tạo môi trường số lành mạnh để KOL phát huy sức ảnh hưởng tích cực, thúc đẩy kinh tế, văn hóa, truyền thông quốc gia ngày một phát triển.
                </p>

                <blockquote class="border-l-4 border-blue-600 pl-4 my-6 italic text-gray-700">
                  "Chúng tôi hi vọng đây sẽ là thông điệp tích cực mà Hội nghị KOL toàn quốc, đại diện cho một thế hệ KOL Việt Nam mới gửi tới nhân dân Cuba. Đồng thời, chúng ta cũng hướng tới những đồng bào còn khó khăn. Tôi hi vọng lực lượng KOL sẽ tạo ra nhiều giá trị tích cực, nhân văn hơn nữa, dùng sức ảnh hưởng của mình để hướng tới đồng bào mình, cùng Đảng, Nhà nước và toàn xã hội xây dựng đất nước giàu mạnh" – Thiếu tướng Lê Xuân Minh bày tỏ.
                </blockquote>

                <p class="mb-6 leading-relaxed">
                  Thiếu tướng Lê Xuân Minh cũng cho biết, Hội nghị hôm nay là một hội nghị khá đặc biệt khi Ban Tổ chức quyết định sẽ là "hội nghị không hoa". Toàn bộ chi phí dự kiến dành cho việc trang trí hoa tại Hội nghị và gửi tặng khách mời, Ban Tổ chức đã dành để ủng hộ nhân dân Cuba theo lời kêu gọi của Ban Chấp hành Trung ương Hội Chữ thập đỏ Việt Nam.
                </p>

                <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Hành trình và những giá trị</h3>

                <div class="my-8">
                  <img src="/images/images_id_3/image_2.png" alt="MC Khánh Vy chia sẻ" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">MC Khánh Vy chia sẻ về hành trình trở thành "người nổi tiếng" cũng như trách nhiệm đối với cộng đồng của các KOL.</p>
                </div>

                <div class="my-8">
                  <img src="/images/images_id_3/image_3.png" alt="Doanh nhân Đỗ Quang Vinh chia sẻ" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Doanh nhân Đỗ Quang Vinh (Tập đoàn T&T) chia sẻ tại Hội nghị. Anh cũng được xem là một người nổi tiếng trên mạng xã hội với trang cá nhân có hàng trăm nghìn người theo dõi.</p>
                </div>

                <p class="mb-6 leading-relaxed">
                  Tại phiên tham luận với chủ đề "Hành trình và những giá trị", 06 tham luận được trình bày tại Hội nghị đã tập trung vào nhiều nội dung thiết thực nhằm nâng cao trách nhiệm xã hội của KOL, xây dựng môi trường mạng an toàn, lành mạnh, thúc đẩy sáng tạo gắn liền với giá trị nhân văn và tăng cường hợp tác giữa cơ quan quản lý, nền tảng số và cộng đồng KOL. Nhiều nghệ sĩ, gương mặt có ảnh hưởng lớn trong cộng đồng như Khánh Vy, Hoa hậu Bảo Ngọc… đã chia sẻ quan điểm và hành trình trải nghiệm, nhấn mạnh mong muốn đóng góp vào sự phát triển của xã hội số văn minh. Ngoài ra, gần 20 tham luận từ các KOL, doanh nghiệp, nền tảng và cơ quan quản lý được đăng trong kỷ yếu số Hội nghị cũng phản ánh những góc nhìn đa dạng và gợi mở nhiều giải pháp cho sự phát triển bền vững của cộng đồng KOL trong kỷ nguyên số.
                </p>

                <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Niềm tin và Kỳ vọng</h3>

                <div class="my-8">
                  <img src="/images/images_id_3/image_4.png" alt="NSND Xuân Bắc chia sẻ" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">NSND Xuân Bắc - Cục trưởng Cục Nghệ thuật biểu diễn chia sẻ tại Hội nghị.</p>
                </div>

                <p class="mb-6 leading-relaxed">
                  Cũng trong khuôn khổ Hội nghị, phiên Tọa đàm với chủ đề "Niềm tin và Kỳ vọng" đã diễn ra sôi nổi với sự điều phối của NSND Xuân Bắc - Cục trưởng Cục Nghệ thuật biểu diễn. Tọa đàm quy tụ các đại diện từ cơ quan quản lý nhà nước, doanh nghiệp, nền tảng số cùng một số KOL tiêu biểu, tập trung thảo luận về vai trò, trách nhiệm và cơ hội lan tỏa ảnh hưởng tích cực của người có sức ảnh hưởng trong xã hội số. Các ý kiến chia sẻ đã mở ra nhiều góc nhìn đa dạng, từ chính sách quản lý, giải pháp công nghệ, chiến lược truyền thông đến câu chuyện sáng tạo nội dung của KOL, góp phần định hình một môi trường số lành mạnh, bền vững.
                </p>

                <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Ra mắt Liên minh "Niềm tin số"</h3>

                <p class="mb-6 leading-relaxed">
                  Một trong những dấu ấn nổi bật tại sự kiện là việc ra mắt Liên minh "Niềm tin số", sáng kiến tập hợp KOL cùng cơ quan quản lý, nền tảng, doanh nghiệp và báo chí nhằm chung tay chống lại tin giả, hành vi lừa đảo trực tuyến, quảng cáo kém minh bạch và lan tỏa giá trị tích cực, nhân văn trong cộng đồng. Liên minh được kỳ vọng sẽ trở thành không gian kết nối, chia sẻ kinh nghiệm, đồng thời xây dựng cơ chế tự giám sát nhằm nâng cao tính minh bạch và trách nhiệm xã hội của người có ảnh hưởng.
                </p>

                <div class="my-8">
                  <img src="/images/images_id_3/image_5.png" alt="Ra mắt Liên minh Niệm tin số" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Các đại biểu tại Hội nghị cùng ấn nút ra mắt Liên minh "Niềm tin số". Liên minh là nơi tập hợp các KOL/KOC uy tín, doanh nghiệp, cơ quan báo chí và nền tảng nhằm lan tỏa giá trị tích cực, dẫn dắt niềm tin, xây dựng chuẩn mực.</p>
                </div>

                <p class="mb-6 leading-relaxed">
                  Cùng với đó, Hội nghị cũng công bố Chương trình "Tín nhiệm Người có ảnh hưởng", hướng đến việc thiết lập hệ thống đánh giá uy tín và trách nhiệm xã hội của KOL/KOC. Đây sẽ là công cụ quan trọng giúp công chúng, doanh nghiệp và các nền tảng có cơ sở để nhận diện, hợp tác với những cá nhân thực sự lan tỏa giá trị tích cực và đáng tin cậy.
                </p>

                <p class="mb-6 leading-relaxed">
                  Phát biểu tại sự kiện, Trung tướng Nguyễn Minh Chính, Phó Chủ tịch Thường trực Hiệp hội An ninh mạng quốc gia khẳng định: "Hội nghị đánh dấu bước khởi đầu cho mạng lưới hợp tác chiến lược giữa KOL, cơ quan quản lý, doanh nghiệp, nền tảng số và báo chí, hướng tới chuẩn mực ứng xử và môi trường mạng an toàn, lành mạnh. Sự ra đời của Liên minh Niềm tin số sẽ quy tụ KOL uy tín, giúp công chúng nhận diện thông tin tích cực, bảo vệ niềm tin số và tăng cường sức mạnh mềm quốc gia".
                </p>

                <div class="my-8">
                  <img src="/images/images_id_3/image_6.png" alt="Hội nghị thu hút nhiều người có sức ảnh hưởng" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Hội nghị thu hút nhiều người có sức ảnh hưởng tham gia.</p>
                </div>

                <p class="mb-6 leading-relaxed">
                  Hội nghị "KOL với kỷ nguyên vươn mình của dân tộc" khép lại đã để lại dấu ấn sâu đậm, không chỉ ở quy mô và sự góp mặt của nhiều gương mặt tiêu biểu mà còn ở thông điệp nhân văn, chung tay kiến tạo niềm tin, khẳng định sức mạnh ảnh hưởng tích cực và đồng hành cùng dân tộc trong kỷ nguyên vươn mình. Với thành công đạt được, Hội nghị được kỳ vọng sẽ trở thành sự kiện thường niên, là cầu nối để KOL, doanh nghiệp, nền tảng và cơ quan quản lý cùng nhau hợp tác, chia sẻ và định hướng phát triển không gian mạng lành mạnh, bền vững.
                </p>
              </div>
            `
          },
          {
            id: 4,
            title: 'Chính phủ - cộng đồng - KOL: “Liên minh số” chống tin giả',
            image: '/images/images_id_4.jpg',
            date: '25 tháng 08 năm 2025',
            summary: 'Trong kỷ nguyên số, một cú click, một đoạn video cắt ghép, hay một dòng trạng thái thiếu kiểm chứng cũng đủ để gây chao đảo dư luận. Trước nạn tin giả tràn lan, Singapore đã tìm thấy công thức kết hợp giữa sự cứng rắn của luật pháp, sự bền bỉ của giáo dục và sự mềm mại của KOL. Công thức ấy đang gợi mở cho nhiều nước khác một hướng đi mới: muốn thắng trong cuộc chiến thông tin giả, hãy để KOL tham gia bảo vệ niềm tin số.',
            content: `
              <div class="article-content">
                <p class="mb-6 leading-relaxed">
                  Trong kỷ nguyên số, một cú click, một đoạn video cắt ghép, hay một dòng trạng thái thiếu kiểm chứng cũng đủ để gây chao đảo dư luận. Trước nạn tin giả tràn lan, Singapore đã tìm thấy công thức kết hợp giữa sự cứng rắn của luật pháp, sự bền bỉ của giáo dục và sự mềm mại của KOL. Công thức ấy đang gợi mở cho nhiều nước khác một hướng đi mới: muốn thắng trong cuộc chiến thông tin giả, hãy để KOL tham gia bảo vệ niềm tin số.
                </p>

                <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Tiếp cận giới trẻ bằng cách “nói” ngôn ngữ của họ</h3>

                <p class="mb-6 leading-relaxed">
                  Từ năm 2013, Hội đồng Thư viện Quốc gia (NLB) đã khởi động chiến dịch S.U.R.E. (Source, Understand, Research, Evaluate), một khung giáo dục giúp người dân “lọc” thông tin trước khi tin tưởng và chia sẻ. Ban đầu, S.U.R.E. là những buổi ngoại khóa trong trường học, nhưng đến thời đại TikTok, chính phủ nhanh chóng nhận ra rằng, nếu muốn đến được với giới trẻ, cần những gương mặt trẻ và ngôn ngữ mạng xã hội.
                </p>

                <div class="my-8">
                  <img src="/images/images_id_4.jpg" alt="Chiến dịch Công nghệ số vì cuộc sống" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Chiến dịch Công nghệ số vì cuộc sống có sự tham gia của các KOL và sinh viên đại học. Ảnh: digitalforlife.gov.sg</p>
                </div>

                <p class="mb-6 leading-relaxed">
                  Vì thế, các KOL đã được mời tham gia. Thay vì những tờ rơi khô khan, thông điệp S.U.R.E. được gói gọn trong các clip ngắn, các trò chơi thử thách online, hay infographic bắt mắt. Một đoạn video 30 giây giải thích cách kiểm tra nguồn tin có thể thu hút hàng trăm nghìn lượt xem, điều mà bài báo chính thống khó đạt tới.
                </p>

                <p class="mb-6 leading-relaxed">
                  Không chỉ dừng ở trường học, chiến dịch còn lan ra cộng đồng: các câu lạc bộ thanh niên, gia đình và cả người cao tuổi. Thông điệp được “làm mới” liên tục để phù hợp với từng nhóm công chúng, nhờ sự sáng tạo của các nhà sáng tạo nội dung trẻ.
                </p>

                <p class="mb-6 leading-relaxed">
                  Singapore không chỉ chống tin giả, mà còn muốn nâng khả năng sử dụng công nghệ và phân tích thông tin cho người dân. Vì vậy, họ đã tung ra Chiến dịch Công nghệ số vì cuộc sống (Digital for Life - DfL). Trong khuôn khổ DfL, nhiều KOL cùng sinh viên từ Đại học Quốc gia Singapore (NUS) trở thành “huấn luyện viên số” cho học sinh tiểu học thuộc gia đình thu nhập thấp. Thay vì những bài giảng cứng nhắc, các em nhỏ được hướng dẫn cách tra cứu thông tin, tránh lừa đảo mạng qua trò chơi và video ngắn do chính những người có ảnh hưởng dẫn dắt.
                </p>

                <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Luật pháp không thể đứng một mình</h3>

                <p class="mb-6 leading-relaxed">
                  Singapore nổi tiếng với đạo luật Bảo vệ khỏi thông tin sai lệch và thao túng trực tuyến (POFMA), cho phép chính phủ yêu cầu chỉnh sửa hoặc gỡ bỏ nội dung sai sự thật. Nhưng các nhà hoạch định chính sách hiểu rõ rằng, luật không đủ nhanh để bắt kịp tốc độ lan truyền của tin giả. Thế nên, họ dựng thêm “lá chắn cộng đồng”. Nổi bật là nền tảng CheckMate, nơi tình nguyện viên, từ sinh viên, nhà báo đến chuyên gia công nghệ, cùng nhau kiểm chứng và gắn nhãn cảnh báo. Đặc biệt, nhiều người nổi tiếng, người có ảnh hưởng trong cộng đồng và mạng xã hội đã được huy động để chia sẻ lại nội dung của CheckMate, biến các thông tin kiểm chứng vốn khô khan thành những clip giải thích ngắn gọn, dễ hiểu và lan tỏa rộng rãi. Cách làm này giúp Singapore không chỉ “dập lửa” bằng pháp luật, mà còn “giữ an toàn” bằng sức mạnh cộng đồng.
                </p>

                <blockquote class="border-l-4 border-blue-600 pl-4 my-6 italic text-gray-700">
                  "Một trong những dấu ấn nổi bật tại Hội nghị “KOL với kỷ nguyên vươn mình của dân tộc” mới đây, là việc ra mắt Liên minh Niệm tin số (Digital Trust Alliance - DTA), sáng kiến tập hợp KOL cùng cơ quan quản lý, nền tảng, doanh nghiệp và báo chí nhằm chung tay chống lại tin giả, hành vi lừa đảo trực tuyến, quảng cáo kém minh bạch và lan tỏa giá trị tích cực, nhân văn trong cộng đồng."
                </blockquote>

                <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Dùng sức mạnh số để dẹp vùng xám số</h3>

                <p class="mb-6 leading-relaxed">
                  Tin giả được coi là vùng xám của kỷ nguyên số. Cuộc tổng tuyển cử năm 2025 chứng kiến sự bùng nổ của deepfake và video AI. Một gương mặt chính trị gia có thể bị gắn ghép vào những phát ngôn chưa từng tồn tại. Để ứng phó, Singapore ban hành Đạo luật Bầu cử sửa đổi về bảo đảm tính toàn vẹn của quảng cáo trực tuyến (ELIONA) với mục đích ngăn chặn việc sử dụng deepfakes hoặc các hình thức chỉnh sửa kỹ thuật số (video, ảnh, âm thanh) để tạo ra nội dung sai sự thật về ứng cử viên bầu cử, khiến cử tri nhầm lẫn rằng đó là cảnh hoặc phát ngôn thật.
                </p>

                <p class="mb-6 leading-relaxed">
                  Nhưng như Bộ trưởng phụ trách Thông tin số thừa nhận, “luật không thể đủ nhanh và đủ mạnh nếu thiếu cộng đồng”. Chính lúc này, các KOL trở thành “lá chắn mềm”: họ nhanh chóng đăng video phản bác, giải thích cơ chế deepfake, hướng dẫn người dân cách phát hiện dấu hiệu giả mạo. Bằng uy tín cá nhân và ngôn ngữ giản dị, những người có ảnh hưởng giúp thông tin chính xác đến tay người dân trước khi tin giả kịp gây hậu quả.
                </p>

                <p class="mb-6 leading-relaxed">
                  Ở Singapore, các KOL không còn đơn thuần là người quảng bá sản phẩm, mà đang nỗ lực hỗ trợ Chính phủ và Chính phủ cũng hiểu giá trị của họ trong lan tỏa chính sách công, làm những công việc có ích cho cộng đồng. Họ làm điều mà báo chí chính thống hay văn bản pháp luật khó làm, đó là khiến người trẻ lắng nghe, hiểu và hành động.
                </p>

                <p class="text-right font-bold mt-8 text-gray-900 italic">Tác giả: Đạt Quốc</p>
              </div>
            `
          },
          {
            id: 5,
            title: 'Không gian mạng - trận địa tư tưởng mới',
            image: '/images/image_id_5.png',
            date: '25 tháng 08 năm 2025',
            summary: 'Không gian mạng vốn là nơi giao lưu, chia sẻ thông tin, nhưng ngày nay đã trở thành trận địa tư tưởng nóng bỏng, nơi các thế lực thù địch lợi dụng để gieo rắc tin giả, xuyên tạc và tác động đến nhận thức xã hội.',
            content: `
              <div class="article-content">
                <p class="mb-6 leading-relaxed">
                  Không gian mạng vốn là nơi giao lưu, chia sẻ thông tin, nhưng ngày nay đã trở thành trận địa tư tưởng nóng bỏng, nơi các thế lực thù địch lợi dụng để gieo rắc tin giả, xuyên tạc và tác động đến nhận thức xã hội.
                </p>

                <div class="my-8">
                  <img src="/images/image_id_5.png" alt="Xử lý hình sự đối tượng vi phạm" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Công an tỉnh Lâm Đồng xử lý hình sự đối tượng D.T.N về tội “làm, tàng trữ, phát tán hoặc tuyên truyền thông tin tài liệu, vật phẩm, chống Nhà nước Cộng hòa xã hội chủ nghĩa Việt Nam”.</p>
                </div>

                <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Trận địa nóng của tư tưởng số</h3>
                <p class="mb-6 leading-relaxed">
                  Thống kê của ngành chức năng, tính đến tháng 3/2025, Việt Nam có 79,8 triệu người dùng internet, chiếm 78,8% tổng dân số cả nước, trong đó có 76,2 triệu người tham gia vào các nền tảng mạng xã hội, chiếm 75,2% tổng dân số cả nước. Điều đó cho thấy “xã hội số” đã dần trở thành một phần không thể thiếu trong đời sống của đại bộ phận người Việt Nam.
                </p>
                <p class="mb-6 leading-relaxed">
                  Theo Bộ Công an, mỗi năm, Việt Nam ghi nhận hàng ngàn vụ tấn công mạng, hàng triệu tin giả, tin sai sự thật lan truyền với tốc độ chóng mặt. Các hành vi chủ yếu gồm: lừa đảo chiếm đoạt tài sản qua mạng; tin giả, tin sai sự thật; tấn công xuyên biên giới; tấn công mạng; xâm phạm quyền riêng tư.
                </p>
                <p class="mb-6 leading-relaxed">
                  Tại tỉnh Lâm Đồng có không gian phát triển rộng lớn với quy mô diện tích tự nhiên lớn nhất cả nước (trên 24.000 km²), quy mô kinh tế nằm trong top 10 cả nước, hội tụ đủ các yếu tố biển - rừng - biên giới - hải đảo... Với hơn 3,8 triệu dân, Lâm Đồng có đông đồng bào dân tộc thiểu số sinh sống trên địa bàn rộng lớn, tỷ lệ người dân sử dụng mạng xã hội ngày càng cao, nhất là giới trẻ.
                </p>
                <p class="mb-6 leading-relaxed">
                  Do vậy, chỉ một tin thất thiệt về đất đai, tín ngưỡng hay môi trường cũng có thể lan nhanh, gây tâm lý hoang mang trong cộng đồng. Thực tế cho thấy, những status thiếu kiểm chứng hay một video xuyên tạc được chia sẻ có thể lập tức tạo ra hiệu ứng đám đông. Chính vì vậy, việc giữ vững nền tảng tư tưởng trên không gian mạng ở Lâm Đồng không chỉ là nhiệm vụ chung của cả nước, mà còn mang ý nghĩa đặc biệt quan trọng với sự ổn định, phát triển bền vững của tỉnh.
                </p>

                <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Quyết liệt bảo vệ nền tảng tư tưởng của Đảng</h3>
                <p class="mb-6 leading-relaxed">
                  Thượng tá Vũ Hoàng Anh - Trưởng Phòng An ninh mạng và phòng, chống tội phạm sử dụng công nghệ cao cho biết: Bám sát Nghị quyết 35 của Bộ Chính trị, các kế hoạch của Công an tỉnh Lâm Đồng, phòng đã chủ động triển khai đồng bộ nhiều biện pháp để bảo vệ nền tảng tư tưởng của Đảng trên không gian mạng.
                </p>
                <p class="mb-6 leading-relaxed">
                  Nhờ đó, chỉ trong 3 năm (2022 – 2024), phòng đã đấu tranh, xử lý hành chính hơn 200 trường hợp đăng tải thông tin sai sự thật. Đáng chú ý, trong hơn 200 trường hợp bị xử lý có 25 KOL vi phạm. Trong đó, cơ quan chức năng đã xử phạt vi phạm hành chính 22 trường hợp, điển hình như: H.N.M (sản xuất nội dung bẩn, phân biệt vùng miền, miệt thị, chia rẽ khối đoàn kết); N.T.T (tổ chức hoạt động mê tín dị đoan để trục lợi); N.T.T.L (thông qua hoạt động tuyển idol để lôi kéo người livestream quảng cáo đánh bạc…).
                </p>
                <p class="mb-6 leading-relaxed">
                  Ngoài ra, phòng đã phối hợp khởi tố 3 bị can về tội “làm, tàng trữ, phát tán hoặc tuyên truyền thông tin, tài liệu, vật phẩm chống Nhà nước Cộng hòa xã hội chủ nghĩa Việt Nam”... Những vụ việc này đã gióng lên hồi chuông cảnh báo về trách nhiệm pháp lý của người dùng mạng xã hội, nhất là những cá nhân có sức ảnh hưởng.
                </p>

                <div class="my-8">
                  <img src="/images/image_id_5(1).jpg" alt="Xử lý vi phạm KOL" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Công an tỉnh Lâm Đồng xử lý vi phạm của KOL H.N.M sản xuất nội dung bẩn, phân biệt vùng miền.</p>
                </div>

                <p class="mb-6 leading-relaxed italic">
                  Theo Thượng tá Vũ Hoàng Anh: “Hiện nay, địa bàn Lâm Đồng có nhiều đặc thù, vừa có lợi thế phát triển, vừa tiềm ẩn nguy cơ bị các thế lực xấu lợi dụng để lan truyền thông tin sai trái. Chúng tôi xác định bảo vệ nền tảng tư tưởng trên không gian mạng là nhiệm vụ chính trị quan trọng, lâu dài. Để giữ vững trận địa này, ngoài sự vào cuộc quyết liệt của lực lượng công an thì rất cần sự chung tay của KOL, quản trị viên fanpage và đặc biệt là ý thức trách nhiệm của từng công dân số.”
                </p>

                <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Lan tỏa trách nhiệm công dân số</h3>
                <p class="mb-6 leading-relaxed">
                  Đại tá Huỳnh Ngọc Liêm - Phó Giám đốc Công an tỉnh Lâm Đồng nhận định, không gian mạng với những thành tựu vượt bậc của khoa học - công nghệ đã trở thành một phần không thể tách rời trong đời sống hiện nay. Song song với những giá trị tích cực, môi trường số cũng đang bị các đối tượng xấu lợi dụng để phát tán thông tin sai sự thật, xuyên tạc chủ trương của Đảng.
                </p>
                <p class="mb-6 leading-relaxed">
                  Trong bối cảnh ấy, đội ngũ KOL và quản trị viên các trang, kênh, hội nhóm trên mạng xã hội nổi lên như lực lượng có vai trò đặc biệt quan trọng. Họ không chỉ là những người sáng tạo nội dung mà còn trực tiếp vận hành, quản lý các cộng đồng mạng lớn. Tầm ảnh hưởng này khiến họ trở thành nhân tố gắn liền với công tác bảo đảm an ninh trên không gian mạng ở địa phương.
                </p>
                <p class="mb-6 leading-relaxed">
                  Thực tế tại Lâm Đồng cho thấy nhiều tín hiệu đáng mừng. Ngày càng nhiều KOL, quản trị viên đã ý thức rõ trách nhiệm của mình, chủ động đồng hành cùng lực lượng chức năng, chia sẻ nguồn tin chính thống, tham gia các chiến dịch truyền thông cộng đồng.
                </p>

                <blockquote class="border-l-4 border-blue-600 pl-4 my-6 italic text-gray-700">
                  “Đội ngũ KOL và quản trị viên mạng xã hội đã trở thành lực lượng có ảnh hưởng sâu rộng, trực tiếp tác động đến nhận thức và thái độ của cộng đồng. Họ không chỉ tạo trào lưu, định hướng dư luận, mà còn là nhân tố quan trọng gắn với nhiệm vụ bảo đảm an ninh trên không gian mạng địa phương.” <br/>
                  <span class="font-bold">— Đại tá Huỳnh Ngọc Liêm, Phó Giám đốc Công an tỉnh Lâm Đồng</span>
                </blockquote>

                <p class="text-right font-bold mt-8 text-gray-900 italic">Tác giả: Thu Hà</p>
              </div>
            `
          },
          {
            id: 6,
            title: 'KOL và lối sống trách nhiệm trên mạng',
            image: '/images/image_id_6.webp',
            date: '24 tháng 08 năm 2025',
            summary: 'Hội nghị "KOL với kỷ nguyên vươn mình của dân tộc" vừa qua mở ra cơ hội mới để các KOL - những người có sức ảnh hưởng lớn - đồng hành với sự phát triển của đất nước, phát huy lợi thế của họ theo cách tích cực nhất.',
            content: `
              <div class="article-content">
                <p class="mb-6 leading-relaxed">
                  Hội nghị "KOL với kỷ nguyên vươn mình của dân tộc" vừa qua mở ra cơ hội mới để các KOL - những người có sức ảnh hưởng lớn - đồng hành với sự phát triển của đất nước, phát huy lợi thế của họ theo cách tích cực nhất.
                </p>

                <div class="my-8">
                  <img src="/images/image_id_6.webp" alt="KOL và trách nhiệm xã hội" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Minh họa: DAD</p>
                </div>

                <p class="mb-6 leading-relaxed">
                  Hội nghị do Hiệp hội An ninh mạng quốc gia phối hợp Cục An ninh mạng và phòng, chống tội phạm sử dụng công nghệ cao, Bộ Công an tổ chức với sự tham gia của lãnh đạo cơ quan quản lý, doanh nghiệp, nền tảng công nghệ cùng hàng trăm KOL trên cả nước. Hội nghị gửi thông điệp về việc đánh giá đúng vai trò, tiềm năng, điều kiện để KOL đóng góp tốt nhất.
                </p>

                <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Sức mạnh, quyền lực và giá trị từ KOL</h3>
                <p class="mb-6 leading-relaxed">
                  Thực tế cho thấy rõ sức hấp dẫn và "quyền lực" về thông tin từ những KOL trên không gian số. Một dòng trạng thái, một video, một phiên live của những người nổi tiếng, của những chủ kênh, chủ trang mạng có hàng trăm, hàng triệu người theo dõi sẽ tạo hiệu ứng lan tỏa thông tin mạnh mẽ và nhanh chóng. KOL trên mạng đang là một lực lượng đặc biệt, có thể định hướng thông tin, thay đổi nhận thức xã hội về một thông tin hay hiện tượng.
                </p>
                <p class="mb-6 leading-relaxed">
                  Những gương mặt KOL với hàng triệu lượt theo dõi lại đang trở thành "người dẫn đường" cho tâm thức đám đông. Nhưng câu hỏi đặt ra là: họ sẽ dẫn dắt cộng đồng đi đâu? Điều này tùy thuộc vào trình độ, ý thức và xu hướng chia sẻ thông tin của họ.
                </p>
                <p class="mb-6 leading-relaxed">
                  Bên cạnh một số KOL truyền cảm hứng sống đẹp, vẫn còn nhiều gương mặt sa vào lối sống hào nhoáng, thực dụng, phát ngôn gây sốc. Có những bức ảnh gieo vào tâm trí hàng triệu người xem những thước đo giá trị méo mó: đó là hào quang, ảo tưởng đến từ khoe khoang, nổi tiếng và nhiều lượt xem đặt lên trên trách nhiệm xã hội.
                </p>
                <p class="mb-6 leading-relaxed">
                  Chúng ta không thể đòi hỏi KOL phải trở thành thánh nhân. Nhưng điều có thể đòi hỏi sự chia sẻ có ý thức và tích cực bởi mỗi hành động của KOL đều tạo ra tác động xã hội. Phía sau những con số lượt thích, lượt chia sẻ là những tâm hồn đang học cách sống, cách nghĩ. Và ý thức rằng trong một đất nước đang vươn ra biển lớn, những gì đang diễn ra trên mạng cũng là một phần dân trí, một phần hình ảnh quốc gia.
                </p>

                <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">"Đại sứ" cho những điều tốt đẹp, tử tế</h3>
                <p class="mb-6 leading-relaxed">
                  Nếu KOL dùng sức ảnh hưởng để cổ vũ lối sống văn minh, tôn trọng pháp luật, bảo vệ môi trường, khơi dậy niềm tự hào dân tộc thì hàng triệu người trẻ sẽ được tiếp thêm động lực tích cực. Một bài đăng, một phiên lên sóng của họ có thể lan tỏa nhanh hơn những tờ rơi tuyên truyền, một lời kêu gọi của họ có thể gây quỹ cho cộng đồng góp tay làm việc tốt. Sức mạnh ấy, nếu được đặt đúng chỗ sẽ là nguồn lực vô giá cho quốc gia.
                </p>
                <p class="mb-6 leading-relaxed">
                  Ngược lại, sự buông thả, thiếu trách nhiệm của KOL không chỉ làm hoen ố hình ảnh cá nhân mà còn góp phần làm suy giảm niềm tin xã hội. Không phải ngẫu nhiên mà ở nhiều nước, KOL trở thành "đại sứ" lan tỏa giá trị văn hóa, quảng bá hình ảnh dân tộc ra thế giới. Việt Nam cũng đang cần những gương mặt như thế để góp thêm sức mạnh mềm trong hành trình hội nhập.
                </p>
                <p class="mb-6 leading-relaxed">
                  Kỷ nguyên vươn mình của dân tộc đòi hỏi mỗi người đều phải đóng góp, bằng cách này hay cách khác. Với KOL, đóng góp không chỉ là tham gia chiến dịch cộng đồng mà trước hết là sống có trách nhiệm với sức ảnh hưởng của mình.
                </p>

                <blockquote class="border-l-4 border-blue-600 pl-4 my-6 italic text-gray-700">
                  "Một KOL tử tế có thể góp phần cùng lan truyền năng lượng tích cực. Một KOL mưu lợi bất chấp có thể gây ra những vết xước khó lành."
                </blockquote>
              </div>
            `
          },
          {
            id: 7,
            title: 'KOL và trách nhiệm công dân trong kỷ nguyên số',
            image: '/images/image_id_7.webp',
            date: '23 tháng 08 năm 2025',
            summary: 'Trong kỷ nguyên số, những người có sức ảnh hưởng (KOL) - từ ca sĩ, diễn viên đến doanh nhân, nhà sáng tạo nội dung - đang sở hữu một quyền lực chưa từng có.',
            content: `
              <div class="article-content">
                <p class="mb-6 leading-relaxed">
                  Trong kỷ nguyên số, những người có sức ảnh hưởng (KOL) - từ ca sĩ, diễn viên đến doanh nhân, nhà sáng tạo nội dung - đang sở hữu một quyền lực chưa từng có. Với hàng trăm nghìn, thậm chí hàng triệu người theo dõi, mỗi phát ngôn, hành động của họ đều có thể tạo ra xu hướng và tác động mạnh mẽ đến cộng đồng. Sức ảnh hưởng rộng lớn và nhanh chóng này đặt ra một câu hỏi cấp thiết về trách nhiệm công dân của họ.
                </p>

                <div class="my-8">
                  <img src="/images/image_id_7.webp" alt="KOL và quyền lực thông tin" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Những người có sức ảnh hưởng (KOL) đang sở hữu lợi thế lớn.</p>
                </div>

                <p class="mb-6 leading-relaxed">
                  Ban đầu, KOL chỉ là người dẫn dắt dư luận, nhưng trong bối cảnh toàn cầu hóa, vai trò của họ đã vượt xa hơn thế. Họ dần trở thành những "người đại diện không chính thức" của quốc gia. Giới trẻ ngày nay tìm đến KOL không chỉ để giải trí mà còn để học hỏi phong cách sống, tư duy và nuôi dưỡng khát vọng. 
                </p>

                <p class="mb-6 leading-relaxed">
                  Vì vậy, sức ảnh hưởng của KOL mang tính hai mặt rõ rệt. Một mặt, nhiều KOL đã tận dụng vị thế của mình để lan tỏa những giá trị tốt đẹp như: họ kêu gọi bảo vệ môi trường, khuyến khích văn hóa đọc, truyền cảm hứng khởi nghiệp và chia sẻ những câu chuyện sống tử tế, nhân văn. Những hành động này gieo niềm tin và mở ra hướng đi tích cực cho cộng đồng.
                </p>

                <p class="mb-6 leading-relaxed">
                  Tuy nhiên, ở chiều ngược lại, không ít người đã chạy theo lợi ích ngắn hạn, gây ra những hệ lụy tiêu cực. Họ quảng cáo sản phẩm kém chất lượng, lan truyền thông tin sai lệch, hoặc dùng chiêu trò gây sốc để thu hút sự chú ý. Những "vạ miệng" hay hành vi phản cảm không chỉ làm hoen ố hình ảnh cá nhân mà còn bào mòn nghiêm trọng niềm tin của công chúng.
                </p>

                <p class="mb-6 leading-relaxed">
                  Trong bối cảnh đất nước đang vươn lên mạnh mẽ, KOL có thể trở thành một nguồn lực quan trọng, chuyển hóa khát vọng dân tộc thành hành động. Một lời kêu gọi ý nghĩa hay một hành động đẹp được lan tỏa có sức mạnh vượt xa nhiều chiến dịch tuyên truyền tốn kém. 
                </p>

                <p class="mb-6 leading-relaxed">
                  Cuối cùng, mỗi KOL đều đứng trước một lựa chọn hoặc chạy theo hào quang ngắn ngủi, hoặc trở thành ngọn đèn bền bỉ soi sáng cho cộng đồng. Lựa chọn đó chính là câu trả lời cho việc họ muốn trở thành một người nổi tiếng đơn thuần, hay một công dân có trách nhiệm với tương lai của đất nước.
                </p>

                <p class="text-right font-bold mt-8 text-gray-900 italic">Tác giả: Nguyễn Phong Châu (kỹ sư xây dựng)</p>
              </div>
            `
          },
          {
            id: 8,
            title: 'Kỳ vọng từ Liên minh niềm tin số',
            image: '/images/image_id_8.jpg',
            date: '23 tháng 08 năm 2025',
            summary: 'Không gian mạng hiện nay đã trở thành “thế giới thứ hai”, nơi thông tin thật-giả đan xen, tác động trực tiếp đến nhận thức, hành vi xã hội. Trong bối cảnh ấy, sự ra đời của Liên minh niềm tin số được kỳ vọng góp phần định hình văn hóa số trong sạch, lành mạnh, dựa trên niềm tin và trách nhiệm.',
            content: `
              <div class="article-content">
                <p class="mb-6 leading-relaxed">
                  Liên minh quy tụ người có sức ảnh hưởng (KOL), cơ quan quản lý, doanh nghiệp, báo chí để cùng xây dựng chuẩn mực ứng xử, định hướng hoạt động sáng tạo và lan tỏa giá trị tích cực của thông tin. Thực tế cho thấy, không ít KOL đã vì lợi nhuận mà “bán niềm tin” cho quảng cáo thiếu minh bạch.
                </p>

                <div class="my-8">
                  <img src="/images/image_id_8.jpg" alt="Lễ ra mắt Liên minh Niềm tin số" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Người có ảnh hưởng trên không gian mạng tại lễ ra mắt Liên minh Niềm tin số, ngày 18-8-2025. Ảnh: Vnexpress</p>
                </div>

                <p class="mb-6 leading-relaxed">
                  Bài học quốc tế đã rất rõ: Ngôi sao truyền hình Kim Kardashian từng bị phạt hơn 1 triệu USD vì quảng bá tiền ảo sai quy định tại Mỹ; nhiều nước như Trung Quốc, Hàn Quốc, Pháp đã siết chặt quản lý, buộc KOL minh bạch quảng cáo, đồng thời chịu trách nhiệm liên đới khi gây thiệt hại cho người tiêu dùng.
                </p>

                <p class="mb-6 leading-relaxed">
                  Để liên minh thực sự phát huy hiệu quả tại Việt Nam, cần sự vào cuộc đồng bộ. Cơ quan quản lý sớm ban hành quy tắc ứng xử và chế tài đủ mạnh, tham khảo kinh nghiệm quốc tế để vừa quản lý vừa khuyến khích sáng tạo. KOL phải nhận thức rằng uy tín chính là “vốn liếng” lâu dài, muốn bền vững thì sức ảnh hưởng phải gắn liền với trách nhiệm pháp lý và đạo đức.
                </p>

                <p class="mb-6 leading-relaxed">
                  Thành công của liên minh phụ thuộc vào sự chung tay từ chính sách, ý thức của KOL và thái độ của cộng đồng. Khi mỗi lời nói, mỗi chia sẻ đều có trách nhiệm và giá trị, không gian mạng mới thật sự trở thành môi trường trong sạch, văn minh.
                </p>

                <p class="text-right font-bold mt-8 text-gray-900 italic">Tác giả: Duy Thành</p>
              </div>
            `
          },
          {
            id: 9,
            title: 'Người nổi tiếng, KOL quảng cáo sai sự thật sẽ chịu trách nhiệm thế nào?',
            image: '/images/image_id_9.avif',
            date: '23 Tháng 8, 2025',
            summary: 'Trong bối cảnh xã hội hiện đại, việc quảng cáo sai sự thật và sử dụng người nổi tiếng, KOL (influencer) để quảng bá sản phẩm không rõ nguồn gốc đã trở thành một vấn đề đáng quan ngại. Để giải quyết vấn đề này, Luật Quảng cáo 2025 đã được ban hành, đặt ra những quy định mới nhằm tăng cường trách nhiệm của người nổi tiếng và doanh nghiệp trong việc quảng bá sản phẩm.',
            content: `
              <div class="article-content">
                <p class="mb-6 leading-relaxed">
                  Trong bối cảnh xã hội hiện đại, việc quảng cáo sai sự thật và sử dụng người nổi tiếng, KOL (influencer) để quảng bá sản phẩm không rõ nguồn gốc đã trở thành một vấn đề đáng quan ngại. Để giải quyết vấn đề này, Luật Quảng cáo 2025 đã được ban hành, đặt ra những quy định mới nhằm tăng cường trách nhiệm của người nổi tiếng và doanh nghiệp trong việc quảng bá sản phẩm.
                </p>

                <p class="mb-6 leading-relaxed">
                  Một trong điểm mới quan trọng của Luật Quảng cáo 2025 là việc yêu cầu người nổi tiếng và KOL phải chịu trách nhiệm liên đới nếu nội dung quảng cáo sai sự thật. Điều này giúp khắc phục khoảng trống pháp lý tồn tại suốt thời gian dài và tăng cường trách nhiệm của người nổi tiếng và doanh nghiệp trong việc quảng bá sản phẩm. Đồng thời, luật cũng cấm phát hành quảng cáo trên nền tảng vi phạm pháp luật, như trang web giả mạo, ứng dụng không phép, hoặc nền tảng chứa nội dung phản cảm, tin giả.
                </p>

                <div class="my-8">
                  <img src="/images/image_id_9(2).webp" alt="Giải pháp bảo vệ người tiêu dùng" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Cần nhiều giải pháp bảo vệ người tiêu dùng.</p>
                </div>

                <p class="mb-6 leading-relaxed">
                  Cơ quan lập pháp cũng trao quyền khởi kiện tập thể cho người tiêu dùng, thông qua các tổ chức đại diện. Đây là công cụ pháp lý mạnh mẽ nhằm gia tăng trách nhiệm doanh nghiệp, tạo ra sức ép công khai trước các hành vi quảng cáo gian dối. Theo các chuyên gia kinh tế, cơ chế khởi kiện tập thể này giúp giảm rào cản pháp lý, chi phí tố tụng cho từng cá nhân – vốn là lý do khiến nhiều người tiêu dùng Việt Nam chọn im lặng dù bị ảnh hưởng trực tiếp.
                </p>

                <p class="mb-6 leading-relaxed">
                  Không chỉ dừng lại ở quản lý nội dung và chủ thể, Luật Quảng cáo 2025 còn bổ sung cơ chế hậu kiểm mạnh, đặc biệt với nhóm sản phẩm có rủi ro cao như thực phẩm chức năng, mỹ phẩm, thuốc, thiết bị y tế. Tất cả nội dung quảng cáo liên quan các nhóm sản phẩm này đều phải được công bố hợp quy, cấp phép trước khi đăng tải, đồng thời không được dùng từ ngữ gây hiểu nhầm như ‘thần dược’, ‘đặc trị’, hay ‘có tác dụng ngay lập tức’.
                </p>

                <p class="mb-6 leading-relaxed">
                  Các nền tảng kỹ thuật số cũng sẽ phải xây dựng công cụ chặn, báo cáo quảng cáo sai sự thật, tăng khả năng phản hồi của người dùng và hỗ trợ cơ quan chức năng trong giám sát nội dung. Luật Quảng cáo 2025 là minh chứng cho sự chuyển dịch từ ‘quản lý truyền thống’ sang mô hình quản trị không gian số hiện đại, chủ động và minh bạch hơn. Không chỉ là hành lang pháp lý, đây còn là lời cảnh báo dành cho những ai còn mập mờ giữa thật – giả, tận dụng lòng tin để trục lợi.
                </p>

                <p class="mb-6 leading-relaxed">
                  Khi luật có hiệu lực, quảng cáo không thể là cuộc chơi đơn phương giữa doanh nghiệp và người nổi tiếng. Mỗi lời nói, mỗi hình ảnh, mỗi dòng mô tả… đều phải cân nhắc và chịu trách nhiệm. Đã đến lúc chấm dứt thời ‘ai muốn nói gì thì nói’ trong lĩnh vực quảng cáo. Việc thực hiện Luật Quảng cáo 2025 sẽ giúp tạo ra một môi trường quảng cáo lành mạnh và minh bạch hơn, bảo vệ quyền lợi của người tiêu dùng và tăng cường trách nhiệm của doanh nghiệp.
                </p>
              </div>
            `
          },
          {
            id: 10,
            title: 'Hội Nghị Kol Toàn Quốc 2025: Lan Tỏa Trách Nhiệm Xã Hội, Khẳng Định Ảnh Hưởng Tích Cực',
            image: '/images/image_id_10.png',
            date: '22 tháng 08 năm 2025',
            summary: 'Ngày 18/8/2025, tại Hà Nội, Hội nghị KOL toàn quốc 2025 lần đầu tiên quy tụ gần 300 gương mặt tiêu biểu từ 34 tỉnh, thành phố, khẳng định trách nhiệm của những người có sức ảnh hưởng đối với cộng đồng.',
            content: `
              <div class="article-content">
                <p class="mb-6 leading-relaxed">
                  Ngày 18/8/2025, tại Hà Nội, Hội nghị KOL toàn quốc 2025 lần đầu tiên được Bộ Công an tổ chức đã quy tụ gần 300 gương mặt tiêu biểu đến từ 34 tỉnh, thành phố trên cả nước. Với chủ đề “KOL với kỷ nguyên vươn mình của dân tộc”, sự kiện không chỉ là dịp tôn vinh vai trò của những người có sức ảnh hưởng (Key Opinion Leader – KOL), mà còn khẳng định ý nghĩa của việc sử dụng ảnh hưởng gắn liền với trách nhiệm xã hội và sự phát triển bền vững của cộng đồng.
                </p>

                <p class="mb-6 leading-relaxed">
                  Trong số những đại biểu tham dự, anh Phạm Đình Ngãi – Nhà sáng lập Mật hoa dừa Sokfarm (Trà Vinh) – mang đến câu chuyện khởi nghiệp từ những giọt mật hoa dừa bản địa, qua đó góp thêm góc nhìn về trách nhiệm của những cá nhân, thương hiệu có sức ảnh hưởng trong việc kiến tạo giá trị tốt đẹp cho đất nước.
                </p>

                <div class="my-8">
                  <img src="/images/image_id_10(1).png" alt="Anh Phạm Đình Ngãi chia sẻ" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Anh Phạm Đình Ngãi tại Hội nghị KOL toàn quốc 2025.</p>
                </div>

                <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">KOL và câu chuyện về trách nhiệm xã hội</h3>
                <p class="mb-6 leading-relaxed">
                  Sự bùng nổ của mạng xã hội và truyền thông số đã tạo điều kiện để bất kỳ ai cũng có thể trở thành một KOL theo cách riêng của mình. Tuy nhiên “Ảnh hưởng không nằm ở con số người theo dõi, mà ở chỗ mỗi cá nhân có thể lan tỏa những giá trị tích cực gì cho cộng đồng.”
                </p>

                <p class="mb-6 leading-relaxed">
                  Với Founder Sokfarm, hành trình khởi nghiệp từ Trà Vinh chính là minh chứng rõ nét. Từ những ngày đầu chia sẻ về nông dân, về mảnh đất miền Tây, đến khát vọng đưa nông sản Việt Nam vươn xa, anh Ngãi khẳng định rằng mỗi câu chuyện nhỏ đều có thể góp phần hình thành một niềm tin lớn. Sức ảnh hưởng, vì thế, chỉ thật sự có giá trị khi được gắn liền với sự chân thành và trách nhiệm.
                </p>

                <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Sokfarm: Từ giọt mật hoa dừa đến thương hiệu quốc tế</h3>
                <p class="mb-6 leading-relaxed">
                  Khởi đầu từ vùng nguyên liệu dừa bản địa Trà Vinh, Sokfarm tiên phong trong nghiên cứu và sản xuất các sản phẩm từ mật hoa dừa hữu cơ. Doanh nghiệp không chỉ tập trung vào chất lượng sản phẩm và tiêu chuẩn quốc tế, mà còn chú trọng đến trách nhiệm xã hội:
                </p>
                <ul class="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                  <li>Tạo việc làm ổn định cho người dân địa phương, đặc biệt là đồng bào Khmer và nữ giới.</li>
                  <li>Gìn giữ tri thức bản địa, kết hợp phương pháp truyền thống và công nghệ hiện đại.</li>
                  <li>Đầu tư cho giáo dục cộng đồng, thông qua dự án Sok School – lớp học tiếng Anh miễn phí cho con em công nhân, nông dân quanh nhà máy.</li>
                </ul>

                <div class="my-8">
                  <img src="/images/image_id_10(2).png" alt="Sản phẩm Sokfarm" class="w-full rounded-lg shadow-md" />
                </div>

                <p class="mb-6 leading-relaxed">
                  Theo anh Ngãi, mỗi hoạt động của Sokfarm đều xuất phát từ niềm tin rằng thương hiệu chỉ bền vững khi đi cùng lợi ích cộng đồng. Và chính những giá trị đó đã giúp Sokfarm đưa mật hoa dừa hữu cơ từ Trà Vinh đến các thị trường khó tính như Mỹ, EU hay Nhật Bản.
                </p>

                <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Hội nghị KOL toàn quốc – cột mốc quan trọng</h3>
                <p class="mb-6 leading-relaxed">
                  Việc Bộ Công an tổ chức Hội nghị KOL toàn quốc 2025 được xem là một cột mốc đặc biệt. Đây là lần đầu tiên những cá nhân, doanh nghiệp, thương hiệu và nhà sáng tạo nội dung cùng ngồi lại trong một diễn đàn chính thống để bàn về vai trò và trách nhiệm của sức ảnh hưởng trong xã hội hiện đại.
                </p>

                <p class="mb-6 leading-relaxed">
                  Chủ đề “KOL với kỷ nguyên vươn mình của dân tộc” nhấn mạnh rằng ảnh hưởng không chỉ dừng lại ở việc quảng bá thương hiệu hay mang lại giải trí, mà cần được định hướng để góp phần xây dựng một cộng đồng văn minh, lan tỏa các giá trị nhân văn và đóng góp cho sức mạnh mềm quốc gia.
                </p>

                <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Khi sức mạnh nhỏ tạo thành giá trị lớn</h3>
                <p class="mb-6 leading-relaxed">
                  Với anh Phạm Đình Ngãi, câu trả lời nằm ở sự kiên định: “Ảnh hưởng không nằm ở to hay nhỏ, mà nằm ở sự chân thành và trách nhiệm.” Sự kiên trì gieo mầm niềm tin qua từng giọt mật hoa dừa đã giúp chuyển hóa một dự án địa phương thành một câu chuyện truyền cảm hứng mang tầm quốc gia.
                </p>

                <div class="my-8">
                  <img src="/images/image_id_10(4).png" alt="Lan tỏa niềm tin" class="w-full rounded-lg shadow-md" />
                </div>

                <p class="mb-6 leading-relaxed">
                  Kết thúc hội nghị, Founder Sokfarm bày tỏ: “Đây là hành trình nơi những người làm ảnh hưởng cùng chung tay kiến tạo một Việt Nam vươn mình mạnh mẽ trong kỷ nguyên số. Khi mỗi người đều chọn cách chia sẻ có trách nhiệm, chúng ta sẽ tạo nên một sức bật chung cho cả dân tộc.”
                </p>
              </div>
            `
          }
        ]
      },
      projects: {
        title: 'Các Dự Án Nổi Bật',
        articles: [
          {
            id: 1,
            title: 'Dấu ấn Công ước Hà Nội và cuộc chiến toàn cầu chống tội phạm mạng',
            image: '/images/project_id_1.jpg',
            date: '28 tháng 12 năm 2025',
            summary: '(PLVN) - Năm 2025, Công ước Hà Nội được bình chọn là 1 trong 10 Sự kiện về khoa học - công nghệ. Trong kỷ nguyên số, an ninh mạng là một mặt trận, nơi dữ liệu, giao dịch và thông tin di chuyển với tốc độ ánh sáng, nơi lợi ích quốc gia, an ninh con người và niềm tin xã hội cùng tồn tại trong một không gian không biên giới.',
            content: `
              <div class="article-content">
                <p class="mb-6 leading-relaxed">
                  (PLVN) - Năm 2025, Công ước Hà Nội được bình chọn là 1 trong 10 Sự kiện về khoa học - công nghệ. Trong kỷ nguyên số, an ninh mạng là một mặt trận, nơi dữ liệu, giao dịch và thông tin di chuyển với tốc độ ánh sáng, nơi lợi ích quốc gia, an ninh con người và niềm tin xã hội cùng tồn tại trong một không gian không biên giới.
                </p>

                <div class="my-8">
                  <img src="/images/project_id_1.jpg" alt="Ngày hội an toàn trực tuyến Không Một Mình" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Ngày hội an toàn trực tuyến “Không Một Mình”.</p>
                </div>

                <h2 class="text-2xl font-bold mb-4 text-black">Công ước Hà Nội: Kiến tạo trật tự số bằng luật pháp và niềm tin</h2>

                <p class="mb-6 leading-relaxed">
                  Cũng chính tại đó, các mối đe dọa an ninh phi truyền thống đang gia tăng chưa từng có. Tội phạm mạng không còn là những hành vi đơn lẻ, mà đã trở thành một ngành công nghiệp ngầm xuyên quốc gia, khai thác triệt để công nghệ cao để đánh cắp dữ liệu, tấn công hạ tầng trọng yếu, thao túng nhận thức xã hội, lừa đảo tài chính và xâm hại nhóm yếu thế.
                </p>

                <p class="mb-6 leading-relaxed">
                  Hàng trăm nghìn cuộc tấn công mạng được ghi nhận mỗi ngày trên toàn cầu, gây thiệt hại kinh tế lên tới hàng nghìn tỷ USD mỗi năm, nhưng thiệt hại lớn hơn nằm ở sự xói mòn niềm tin số, nền tảng của mọi tiến trình chuyển đổi số. Trong bối cảnh đó, yêu cầu xây dựng một cơ chế hợp tác quốc tế mang tính thống nhất, ràng buộc và hiệu quả để phòng, chống tội phạm mạng đã trở thành mệnh lệnh của thời đại.
                </p>

                <p class="mb-6 leading-relaxed">
                  Sau nhiều năm đàm phán phức tạp, tháng 12/2024, Đại hội đồng Liên hợp quốc chính thức thông qua Công ước quốc tế về phòng, chống tội phạm mạng. Đặc biệt, Việt Nam được lựa chọn là quốc gia đăng cai Lễ mở ký và Hội nghị cấp cao, tổ chức tại Hà Nội vào ngày 25 - 26/10/2025.
                </p>

                <div class="my-8">
                  <img src="/images/project_id_1(1).avif" alt="Chương trình Diễn tập An ninh mạng quốc gia" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Chương trình Diễn tập An ninh mạng quốc gia năm 2025 góp phần cập nhật các quan điểm, chủ trương của Đảng, chính sách, pháp luật của Nhà nước trên lĩnh vực an ninh mạng, chia sẻ kinh nghiệm ứng cứu, khắc phục sự cố.</p>
                </div>

                <p class="mb-6 leading-relaxed">
                  Từ thời khắc ấy, Hà Nội không chỉ là nơi diễn ra một sự kiện đối ngoại đa phương, mà trở thành điểm hội tụ của niềm tin và trách nhiệm toàn cầu, nơi cộng đồng quốc tế cùng đặt bút ký cho một trật tự số dựa trên luật pháp, hợp tác và nhân văn.
                </p>

                <p class="mb-6 leading-relaxed">
                  Công ước Hà Nội gồm 9 chương, 71 điều, là văn kiện pháp lý quốc tế đầu tiên điều chỉnh một cách toàn diện các hành vi phạm tội trên không gian mạng. Điểm đặc biệt của Công ước không chỉ nằm ở phạm vi điều chỉnh rộng, mà ở triết lý cân bằng giữa hai trụ cột: bảo đảm an ninh mạng và bảo vệ quyền con người.
                </p>

                <p class="mb-6 leading-relaxed">
                  Lần đầu tiên, cộng đồng quốc tế thống nhất cách tiếp cận đối với các hành vi như truy cập trái phép hệ thống dữ liệu, tấn công từ chối dịch vụ, phát tán mã độc, gian lận điện tử, rửa tiền qua mạng, xâm hại trẻ em trực tuyến… Việc hình sự hóa rõ ràng các hành vi này giúp xóa bỏ những “vùng xám” pháp lý, tạo sự nhất quán trong truy tố và hợp tác điều tra xuyên biên giới.
                </p>

                <p class="mb-6 leading-relaxed">
                  Một bước tiến mang tính đột phá của Công ước là cơ chế xử lý chứng cứ điện tử xuyên biên giới. Trong bối cảnh dữ liệu phân tán toàn cầu, dấu vết tội phạm có thể nằm trên các máy chủ thuộc nhiều quốc gia khác nhau, khiến điều tra dễ rơi vào bế tắc. Công ước Hà Nội tạo hành lang pháp lý cho việc bảo toàn, thu thập và chia sẻ dữ liệu điện tử, đồng thời ràng buộc chặt chẽ các nguyên tắc về quyền riêng tư, bảo vệ dữ liệu cá nhân và sự giám sát của cơ quan tư pháp độc lập.
                </p>

                <p class="mb-6 leading-relaxed">
                  Hợp tác quốc tế được xác lập là trụ cột trung tâm, với mạng lưới liên lạc 24/7 giữa các quốc gia nhằm bảo đảm phản ứng nhanh khi phát hiện, điều tra hoặc ngăn chặn tội phạm mạng. Công ước khuyến khích sự phối hợp đa tầng giữa cơ quan thực thi pháp luật, tổ chức quốc tế và doanh nghiệp công nghệ - những chủ thể đang nắm giữ phần lớn dữ liệu và hạ tầng số toàn cầu.
                </p>

                <h3 class="text-xl font-bold mb-4 text-black">Số vụ lừa đảo trực tuyến ở Việt Nam tăng 65%</h3>

                <p class="mb-6 leading-relaxed">
                  Tại Lễ công bố Chiến dịch truyền thông “Toàn dân chống lừa đảo”, chuyên gia an ninh mạng Ngô Minh Hiếu (Hiếu PC) cho biết, các đường dây lừa đảo hiện hoạt động có tổ chức, không còn là những nhóm nhỏ lẻ. Đồng thời, việc trở thành tội phạm mạng giờ đây dễ dàng hơn bao giờ hết. “Trước đây, muốn phạm tội trên mạng phải biết nhiều thứ như kỹ thuật, cách rửa tiền hay đánh cắp thông tin. Còn ngày nay, bất kỳ ai có điện thoại kết nối được mạng đều có thể trở thành tội phạm mạng, bởi dữ liệu cá nhân và tài khoản ngân hàng được mua bán tràn lan trên mạng”, ông nói.
                </p>

                <p class="mb-6 leading-relaxed">
                  Ông Hiếu cho biết, tội phạm mạng đang mở rộng kênh tấn công qua nhiều nền tảng như Facebook, TikTok hay Instagram... Sự xuất hiện của công nghệ trí tuệ nhân tạo (AI) khiến chiêu thức lừa đảo ngày càng tinh vi, khó nhận diện.
                </p>

                <p class="mb-6 leading-relaxed">
                  Không chỉ dừng ở việc chiếm đoạt tài sản, nhiều vụ việc còn liên quan đến nạn buôn người, khi kẻ xấu lợi dụng các lời mời tuyển dụng hoặc học bổng giả để dụ dỗ nạn nhân. Theo ông, khó khăn kinh tế và mức lương thấp là những yếu tố khiến không ít bạn trẻ dễ sa bẫy.
                </p>

                <div class="my-8">
                  <img src="/images/project_id_1(2).avif" alt="Đại tá Hà Văn Bắc" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Đại tá Hà Văn Bắc, Phó Cục trưởng Cục A05 - Bộ Công an. (Ảnh trong bài: NCA)</p>
                </div>

                <p class="mb-6 leading-relaxed">
                  Để thực hiện lừa đảo, kẻ xấu thường khai thác dữ liệu cá nhân công khai trên mạng, chẳng hạn như hình ảnh, bằng khen hoặc thông tin trường học. Từ đó, chúng tạo dựng kịch bản lừa đảo nhằm thao túng tâm lý nạn nhân, điển hình là giả danh công an hoặc mạo danh học bổng toàn phần danh giá.
                </p>

                <p class="mb-6 leading-relaxed">
                  Thực tế, theo thống kê của Cục An ninh mạng và Phòng, chống tội phạm sử dụng công nghệ cao (A05) thuộc Bộ Công an, trong 8 tháng đầu năm, Việt Nam ghi nhận hơn 1.500 vụ lừa đảo qua mạng, tăng 65% so với cùng kỳ năm 2024, với thiệt hại ước tính hơn 1.660 tỷ đồng.
                </p>

                <p class="mb-6 leading-relaxed">
                  Cùng thời gian này, lực lượng chức năng phát hiện hơn 4.532 tên miền độc hại, tăng khoảng 90%, với các thủ đoạn ngày càng tinh vi như deepfake, lừa đảo tiền ảo, chiếm đoạt OTP, giả danh cơ quan công an hoặc ngân hàng. Những hành vi này không chỉ gây thiệt hại về tài chính mà còn làm xói mòn niềm tin số, ảnh hưởng đến tiến trình chuyển đổi số quốc gia.
                </p>

                <p class="mb-6 leading-relaxed">
                  Theo ông Hiếu, người dân Việt Nam hiện phản ứng quá nhanh trước các thông tin và hành động trên môi trường trực tuyến, đặc biệt là khi chuyển tiền hoặc nhấp vào các đường link lạ. Ông khuyến nghị nên “sống chậm lại một chút”, dành thời gian kiểm chứng thông tin trước khi thực hiện bất kỳ giao dịch nào.
                </p>

                <p class="mb-6 leading-relaxed">
                  “Không có công an nào làm việc qua điện thoại hay trực tuyến, tất cả đều phải làm việc trực tiếp tại trụ sở”, ông nhấn mạnh. Đối với các tổ chức, doanh nghiệp, ông cho rằng điểm yếu đầu tiên nằm ở nhận thức của cán bộ và nhân viên. “Khi người có quyền truy cập cao không được đào tạo bài bản về an ninh mạng, kẻ xấu có thể dễ dàng mua thông tin tài khoản quản trị để xâm nhập và đánh cắp dữ liệu”, ông nói.
                </p>

                <p class="mb-6 leading-relaxed">
                  Bên cạnh đó, ông cho rằng lỗ hổng thứ hai đến từ hệ thống hạ tầng công nghệ đã quá cũ, không còn đáp ứng được yêu cầu của quá trình chuyển đổi số. Theo ông, an ninh mạng chỉ được bảo đảm khi có sự kết hợp đồng bộ giữa quy trình, công nghệ và con người. “Chỉ cần thiếu một trong ba yếu tố đó, hệ thống sẽ bị hổng và có thể chịu tổn thất lớn”, ông nói.
                </p>

                <p class="mb-6 leading-relaxed">
                  Từ thực tế này, ông Hiếu khuyến nghị các tổ chức nên làm việc với tư duy phòng ngừa, luôn chuẩn bị cho tình huống “rồi một ngày sẽ bị hack”. Doanh nghiệp cần chủ động “phòng bệnh hơn chữa bệnh”, bằng cách đào tạo nhân viên, áp dụng công nghệ bảo mật hiện đại và đầu tư đồng thời vào phần cứng lẫn phần mềm, nhằm gia cố hệ thống trước khi sự cố xảy ra.
                </p>

                <p class="mb-6 leading-relaxed">
                  Ông Trịnh Hoài Nam, Giám đốc Trung tâm sản phẩm Công ty an ninh mạng Viettel cho rằng, lừa đảo trực tuyến đang trở thành một trong những vấn đề “nóng” nhất hiện nay. Tập đoàn Viettel cũng đang triển khai nhiều chiến lược cụ thể để giảm thiểu tối đa tình trạng này.
                </p>

                <p class="mb-6 leading-relaxed">
                  “Trong thời gian gần đây, người dùng có thể nhận thấy số lượng cuộc gọi spam và scam xuất phát từ mạng Viettel đã giảm đáng kể. Chúng tôi đã triển khai nhiều chiến dịch đồng bộ nhằm hạn chế các cuộc gọi lừa đảo và làm phiền, tận dụng lợi thế công nghệ và dữ liệu của nhà mạng để bảo vệ người dùng”, ông bổ sung.
                </p>

                <p class="mb-6 leading-relaxed">
                  Tập đoàn cũng đang mở rộng hoạt động nghiên cứu, xây dựng các giải pháp toàn diện nhằm hỗ trợ cộng đồng trong việc phát hiện và ngăn chặn lừa đảo. Khi nghiên cứu kinh nghiệm quốc tế, ông Nam nhận thấy chiến dịch “Toàn dân chống lừa đảo” của Việt Nam có nhiều điểm tương đồng với mô hình tại Singapore. Quốc gia này đã xây dựng một khuôn khổ hợp tác chặt chẽ giữa cơ quan nhà nước, ngân hàng và nhà mạng, nhằm chia sẻ trách nhiệm và phối hợp hiệu quả trong việc xử lý lừa đảo.
                </p>

                <p class="mb-6 leading-relaxed">
                  Ông Nam cho rằng Việt Nam có thể đi chậm hơn một bước, nhưng chiến dịch đang đi đúng hướng. “Nếu có sự chung tay của lực lượng công an, các nhà mạng và hệ thống tài chính, tôi tin chiến dịch này sẽ đạt kết quả rất tốt”, ông nói.
                </p>

                <p class="mb-6 leading-relaxed">
                  Thực tế, chiến dịch “Toàn dân chống lừa đảo” ghi dấu sự hợp lực chưa từng có giữa nhiều lực lượng, bao gồm Hiệp hội An ninh mạng quốc gia và Công an các tỉnh, thành phố như TP HCM, Đồng Nai, Tây Ninh, Khánh Hòa, Lâm Đồng, với vai trò là thành viên Ban Chỉ đạo. Bên cạnh đó còn có sự tham gia của các cơ quan quản lý, doanh nghiệp trong lĩnh vực tài chính, chứng khoán và các đối tác truyền thông.
                </p>

                <p class="mb-6 leading-relaxed">
                  Cùng đó, trong bối cảnh hơn 77% trẻ em Việt Nam sử dụng Internet hằng ngày, Liên minh Niềm Tin Số đã phát động chiến dịch “Không Một Mình” với thông điệp “Cùng nhau an toàn trực tuyến”, nhằm bảo vệ hơn 12 triệu thanh, thiếu niên Việt Nam trước các nguy cơ trên không gian mạng.
                </p>

                <p class="mb-6 leading-relaxed">
                  Chiến dịch do UNODC, UNICEF, Bộ Công an, Bộ Giáo dục và Đào tạo, Bộ Y tế bảo trợ, được triển khai trong chuỗi hoạt động chào mừng Lễ mở ký Công ước Hà Nội. Hàng nghìn KOL, KOC, nhà sáng tạo nội dung cùng các nền tảng lớn như Google, Meta, TikTok tham gia lan tỏa thông điệp bằng ngôn ngữ gần gũi với giới trẻ. Song song đó, các lớp tập huấn trực tiếp tại 34 tỉnh, thành phố, cùng “Cẩm nang an toàn trực tuyến cho thanh, thiếu niên” giúp chuyển hóa nhận thức thành kỹ năng cụ thể. Chỉ trong chưa đầy một tháng, chiến dịch đã tiếp cận hơn 500 triệu lượt người, thu hút hơn 2.000 trường học tham gia, cho thấy bảo vệ trẻ em trên không gian mạng đã thực sự trở thành mối quan tâm xã hội rộng lớn, không còn là khẩu hiệu.
                </p>

                <p class="mb-6 leading-relaxed">
                  Đại tá Hà Văn Bắc, Phó Cục trưởng Cục A05 nhấn mạnh: “Khi người dân hiểu và hành động đúng, chúng ta đã thắng một nửa trong cuộc chiến với tội phạm mạng". Cùng quan điểm, ông Vũ Duy Hiền, Phó Tổng Thư ký Hiệp hội An ninh mạng Quốc gia khẳng định: “Không ai có thể an toàn nếu người khác bị tổn thương”.
                </p>

                <p class="mb-6 leading-relaxed">
                  Việt Nam đăng cai Lễ mở ký Công ước Hà Nội không chỉ là dấu mốc ngoại giao, mà còn thể hiện vai trò kiến tạo niềm tin số. Từ mỗi hành động nhỏ, “chậm lại để kiểm chứng”, “chia sẻ đúng, cảnh báo sớm”, đến sự phối hợp giữa Nhà nước, doanh nghiệp, nền tảng và người dân, một thông điệp mạnh mẽ được khẳng định: Không ai bị bỏ lại phía sau trên không gian mạng.
                </p>

                <p class="text-right italic font-semibold mt-8 text-gray-600">tác giả Uyên Na</p>
              </div>
            `
          },
          {
            id: 2,
            title: "'Không một mình' trên không gian số",
            image: '/images/project_id_2.jpg',
            date: '16 tháng 12 năm 2025',
            summary: 'GD&TĐ - Trên 120.000 học sinh, sinh viên tỉnh Lâm Đồng đã được trang bị kỹ năng phòng vệ số.',
            content: `
              <div class="article-content">
                <p class="mb-6 font-bold">GD&TĐ - Trên 120.000 học sinh, sinh viên tỉnh Lâm Đồng đã được trang bị kỹ năng phòng vệ số.</p>

                <div class="my-8">
                  <img src="/images/project_id_2.jpg" alt="Học sinh hưởng dẫn" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Học sinh hưởng ứng chương trình "Không một mình – Cùng nhau an toàn trực tuyến".</p>
                </div>

                <h2 class="text-2xl font-bold mb-4 text-black">“Bắt cóc online” thủ đoạn mới nhắm vào học sinh, sinh viên</h2>

                <p class="mb-6 leading-relaxed">
                  Trưa 10/10, ông L.X.T (trú phường Xuân Hương - Đà Lạt) bất ngờ nhận được cuộc gọi cầu cứu từ con trai là L.X.G.B (SN 2007), tân sinh viên Trường Đại học Yersin Đà Lạt. Ở đầu dây bên kia, giọng nam sinh run rẩy, hoảng loạn, yêu cầu gia đình chuyển gấp 150 triệu đồng vào một tài khoản lạ để “hợp tác điều tra với Công an TP Hà Nội”.
                </p>

                <p class="mb-6 leading-relaxed">
                  Nhận thấy nhiều dấu hiệu bất thường, nghi con trai rơi vào bẫy lừa đảo, ông T lập tức đến trình báo Công an. Ngay sau đó, lực lượng Cảnh sát hình sự Công an tỉnh Lâm Đồng khẩn trương vào cuộc. Chỉ sau khoảng 30 phút triển khai các biện pháp nghiệp vụ, cơ quan chức năng xác định được vị trí và giải cứu thành công anh B tại một nhà nghỉ trên đường Xô Viết Nghệ Tĩnh, nơi nạn nhân bị các đối tượng chỉ đạo thuê phòng riêng, tự cô lập hoàn toàn với bên ngoài.
                </p>

                <p class="mb-6 leading-relaxed">
                  Theo lời kể của anh B, sáng cùng ngày, anh đến chơi tại phòng trọ của hai người bạn là P và K, đều là sinh viên Trường Đại học Yersin. Khi cả ba đang trò chuyện, một người đàn ông mặc sắc phục Công an gọi video qua ứng dụng Zoom, tự xưng là cán bộ điều tra Công an TP Hà Nội. Người này liên tục chất vấn, cáo buộc nhóm sinh viên “liên quan đến đường dây rửa tiền, ma túy xuyên quốc gia”.
                </p>

                <div class="my-8">
                  <img src="/images/project_id_2(1).jpg" alt="Nguy cơ Internet" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Học sinh, sinh viên đang đối mặt với nhiều nguy cơ khi sử dụng Internet.</p>
                </div>

                <p class="mb-6 leading-relaxed">
                  Ban đầu được xác định là “nhân chứng”, nhưng chỉ sau ít phút, anh B bị các đối tượng quay ngoắt vu khống là đồng phạm. Để “chứng minh vô tội”, nam sinh bị yêu cầu cung cấp toàn bộ thông tin cá nhân, cài đặt ứng dụng “Zoom camera”, đồng thời buộc phải thuê phòng riêng, tuyệt đối không được liên lạc với gia đình, bạn bè hay bất kỳ ai khác với lý do “bảo mật điều tra”.
                </p>

                <p class="mb-6 leading-relaxed">
                  Từ manh mối này, Công an tỉnh Lâm Đồng tiếp tục mở rộng điều tra, triển khai đồng bộ các biện pháp nghiệp vụ, kịp thời giải cứu hai sinh viên còn lại là P và K tại các cơ sở lưu trú trên đường Xô Viết Nghệ Tĩnh và Trần Khánh Dư (phường Lâm Viên - Đà Lạt).
                </p>

                <p class="mb-6 leading-relaxed">
                  Tình huống tương tự xảy ra trước đó vào chiều 5/10, bà Lê Thị Hường (trú tại phường Lâm Viên - Đà Lạt) hốt hoảng khi con gái là L.T.M.N, sinh viên năm cuối Khoa Toán - Tin, Trường Đại học Đà Lạt gọi điện khẩn cầu gia đình chuyển hơn 100 triệu đồng vào tài khoản do một nhóm cung cấp.
                </p>

                <p class="mb-6 leading-relaxed">
                  May mắn, bà Hường kịp thời trấn tĩnh và đến trình báo Công an phường Lâm Viên – Đà Lạt. Chỉ trong thời gian ngắn, lực lượng chức năng xác định được nơi chị N bị khống chế online tại một khách sạn, giải cứu thành công nạn nhân trong trạng thái tinh thần hoảng loạn, bị theo dõi, đe dọa chuyển tiền.
                </p>

                <h2 class="text-2xl font-bold mb-4 text-black">Chung tay dựng lá chắn số</h2>

                <p class="mb-6 leading-relaxed">
                  Theo thống kê bước đầu của Bộ Công an, từ giữa năm 2024 đến nay, cả nước ghi nhận khoảng 50 vụ việc trẻ em, thanh thiếu niên, chủ yếu trong độ tuổi từ 18 đến 22 rơi vào tình trạng bị lừa đảo, thao túng tâm lý, thậm chí “bắt cóc online”. Điểm chung của vụ việc này đều bắt đầu từ những tương tác tưởng chừng vô hại: một tin nhắn lạ, cuộc gọi video bất thường, một đường link trúng thưởng, hay lời đề nghị “kết bạn” trên mạng xã hội.
                </p>

                <div class="my-8">
                  <img src="/images/project_id_2(2).jpg" alt="Hành trang số" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Học sinh được trang bị các kỹ năng thiết yếu về “Hành trang số an toàn”.</p>
                </div>

                <p class="mb-6 leading-relaxed">
                  Riêng tại Lâm Đồng, thời gian qua xuất hiện nhiều vụ việc lừa đảo, tống tiền, xâm hại trẻ em trên môi trường mạng. Các đối tượng thường tiếp cận, dụ dỗ thanh thiếu niên thực hiện hành vi khiêu dâm trực tuyến, ghi hình lại, sau đó sử dụng những hình ảnh này để uy hiếp, cưỡng đoạt tài sản. Đa số nạn nhân là học sinh, sinh viên, những người sử dụng Internet thường xuyên nhưng chưa được trang bị đầy đủ kỹ năng phòng vệ số, đồng thời có tâm lý e ngại, xấu hổ nên không dám chia sẻ khi gặp nguy hiểm.
                </p>

                <p class="mb-6 leading-relaxed">
                  Trước thực trạng trên, chiến dịch “Không một mình – Cùng nhau an toàn trực tuyến” được phát động tại Lâm Đồng như một lời cảnh báo và cũng là lời kêu gọi hành động từ toàn xã hội.
                </p>

                <div class="my-8">
                  <img src="/images/project_id_2(3).jpg" alt="Phó Giám đốc Sở GD&ĐT" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Bà Nguyễn Thị Thu, Phó Giám đốc Sở GD&ĐT Lâm Đồng phát biểu tại chương trình “Hành trang số an toàn”.</p>
                </div>

                <p class="mb-6 leading-relaxed">
                  Bà Nguyễn Thị Thu, Phó Giám đốc Sở GD&ĐT tỉnh Lâm Đồng, cho biết: “Trong kỷ nguyên số, bên cạnh những lợi ích to lớn của Internet, học sinh phải đối mặt với nhiều nguy cơ lừa đảo, "bắt cóc trực tuyến" ngày càng tinh vi. Ngành giáo dục xác định bảo vệ học sinh trên không gian mạng là nhiệm vụ cấp bách, không thể chậm trễ”.
                </p>

                <p class="mb-6 leading-relaxed">
                  Sau hơn hai tháng triển khai, chiến dịch tạo sức lan tỏa rõ nét. Trên không gian mạng, hơn 35.000 người dân trong tỉnh đồng loạt thay đổi ảnh đại diện hưởng ứng; hơn 1.000 bài viết được đăng tải trên các kênh truyền thông, thu hút trên 4 triệu lượt tương tác.
                </p>

                <p class="mb-6 leading-relaxed">
                  Ở hoạt động trực tiếp, công tác tuyên truyền được tổ chức tại hơn 220 trường học và khu dân cư, tiếp cận trên 120.000 học sinh, sinh viên, giáo viên và phụ huynh. Nhiều hình thức giáo dục sinh động được áp dụng như sân khấu hóa các tình huống lừa đảo, mô phỏng thủ đoạn “bắt cóc online”, tổ chức đối thoại, hỏi – đáp trực tiếp với chuyên gia an ninh mạng.
                </p>

                <div class="my-8">
                  <img src="/images/project_id_2(4).jpg" alt="Lan toả chiến dịch" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Lan toả Chiến dịch “Không một mình – Cùng nhau an toàn trực tuyến” trên địa bàn tỉnh Lâm Đồng.</p>
                </div>

                <p class="mb-6 leading-relaxed">
                  Đáng chú ý, chương trình còn được đưa đến các khu vực vùng sâu, vùng xa, vùng đồng bào dân tộc thiểu số, góp phần bảo đảm mọi học sinh đều có cơ hội tiếp cận kiến thức an toàn số. Qua đó, từng bước xây dựng môi trường học tập số an toàn, lành mạnh, giúp học sinh tự tin học tập, sáng tạo và phát triển toàn diện.
                </p>

                <p class="mb-6 leading-relaxed">
                  “Thông qua chiến dịch, chúng tôi mong muốn trang bị cho các em kỹ năng nhận diện rủi ro, cách ứng phó an toàn và khả năng chủ động tự bảo vệ mình trong môi trường số”, bà Thu nhấn mạnh.
                </p>

                <h2 class="text-2xl font-bold mb-4 text-black">Không ai bị bỏ lại một mình</h2>

                <p class="mb-6 leading-relaxed">
                  Với Lê Anh Thư, học sinh chuyên Văn, Trường THPT chuyên Trần Hưng Đạo, điều quan trọng nhất khi tham gia chiến dịch là học cách bảo vệ bản thân và giúp bạn bè không bị bỏ lại một mình. “Em từng nhận được vài cuộc gọi lừa đảo, nhưng được gia đình và thầy cô trang bị kỹ năng phòng tránh nên em đã không mắc bẫy. Khi tham gia chiến dịch, em muốn gửi thông điệp đến các bạn rằng: “Không một mình” nghĩa là luôn có những người xung quanh bảo vệ bạn. Khi có dấu hiệu bị lừa đảo, cần thông báo ngay cho người thân, bạn bè, những người bạn tin tưởng để trợ giúp”.
                </p>

                <p class="mb-6 leading-relaxed">
                  Cùng chung cảm nhận, em Huỳnh Gia Bảo, học sinh Trường THPT Phan Thiết, chia sẻ: “Chiến dịch "Không một mình" giúp chúng em nhận biết và phòng tránh các dạng lừa đảo trực tuyến. Giờ đây, em luôn chủ động hơn, không sợ hãi mà biết cách tự bảo vệ mình”.
                </p>

                <div class="my-8">
                  <img src="/images/project_id_2(6).jpg" alt="Giao lưu tuyên truyền" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Học sinh tham gia giao lưu trong buổi tuyên truyền "hành trang số an toàn".</p>
                </div>

                <p class="mb-6 leading-relaxed">
                  Chia sẻ của Thượng tá Vũ Hoàng Anh, Trưởng phòng An ninh mạng và phòng, chống tội phạm sử dụng công nghệ cao (Công an tỉnh Lâm Đồng), chiến dịch “Không một mình” là lời cam kết của toàn xã hội rằng mỗi trẻ em đều có quyền được an toàn, yêu thương và đồng hành trong thế giới số. Đó cũng là bước khởi đầu xây dựng niềm tin số quốc gia, nơi mọi công dân, nhất là thế hệ trẻ, có thể lớn lên tự tin, bản lĩnh và được bảo vệ khỏi những góc khuất của không gian mạng.
                </p>

                <p class="mb-6 leading-relaxed">
                  Bên cạnh chiến dịch tuyên truyền, Sở GD&ĐT tỉnh Lâm Đồng sẽ thiết lập kênh thông tin nóng với Phòng An ninh mạng và phòng, chống tội phạm sử dụng công nghệ cao. Bất cứ khi nào nhà trường, thầy cô phát hiện học sinh có dấu hiệu bị đe dọa, dụ dỗ trực tuyến, sở sẽ phối hợp với công an xử lý ngay lập tức, quyết không để các em phải đối mặt với nguy hiểm một mình.
                </p>
                <p class="text-right italic font-semibold mt-8 text-gray-600">Tác giả: Lê Trang - 16 tháng 12 năm 2025</p>
              </div>
            `
          },
          {
            id: 10,
            title: 'Công bố chương trình "Tín nhiệm người có ảnh hưởng"',
            image: '/images/project/project_1.jpg',
            date: '18 tháng 8 năm 2025',
            summary: 'Liên minh Niềm Tin Số công bố chương trình “Tín nhiệm người có ảnh hưởng”, hướng đến việc thiết lập hệ thống đánh giá uy tín và trách nhiệm xã hội của KOL/KOC. Đây sẽ là công cụ quan trọng giúp công chúng, doanh nghiệp và các nền tảng có cơ sở để nhận diện, hợp tác với những cá nhân thực sự lan tỏa giá trị tích cực và đáng tin cậy.',
            content: `
              <div class="article-content">
                <p class="mb-6 leading-relaxed">
                  Chương trình “Tín nhiệm người có ảnh hưởng” hướng đến thiết lập hệ thống đánh giá uy tín và trách nhiệm xã hội của KOL/KOC. Hội nghị “KOL với kỷ nguyên vươn mình của dân tộc”, do Cục An ninh mạng và phòng, chống tội phạm sử dụng công nghệ cao (Bộ Công an) và Hiệp hội An ninh mạng quốc gia phối hợp tổ chức, đã diễn ra sáng 18-8, tại Hà Nội.
                </p>
                <p class="mb-6 leading-relaxed">
                  Theo Thiếu tướng Lê Xuân Minh, Cục trưởng Cục An ninh mạng và phòng, chống tội phạm công nghệ cao (A05), KOL trên không gian mạng góp phần định hình nhận thức xã hội, dẫn dắt xu hướng, thúc đẩy sáng tạo và quảng bá, lan tỏa bản sắc giá trị Việt Nam.
                </p>
                <div class="my-8">
                  <img src="/images/project/project_1.jpg" alt="Thiếu tướng Lê Xuân Minh" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Thiếu tướng Lê Xuân Minh, Cục trưởng Cục An ninh mạng và phòng, chống tội phạm công nghệ cao phát biểu khai mạc.</p>
                </div>

                <p class="mb-6 leading-relaxed">
                  KOL cần ý thức sâu sắc tác động của mình trong từng phát ngôn, hình ảnh, hành động. Cùng với đó, các cơ quan quản lý, các nền tảng công nghệ... cũng cần chung tay định hướng, đồng hành, hỗ trợ kiến tạo môi trường lành mạnh để KOL nêu cao lòng yêu nước, phát huy sức ảnh hưởng tích cực.
                </p>
                <div class="my-8">
                  <img src="/images/project/project_2.jpg" alt="Ca sỹ Tùng Dương" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Ca sỹ Tùng Dương chia sẻ về vai trò của KOL trên mạng xã hội. Ảnh: BTC</p>
                </div>

                <p class="mb-6 leading-relaxed">
                  Trung tướng Nguyễn Minh Chính, Phó Chủ tịch thường trực Hiệp hội An ninh mạng quốc gia cho hay, hội nghị là bước khởi đầu cho mạng lưới hợp tác giữa KOL, cơ quan quản lý, doanh nghiệp, nền tảng số và báo chí, hướng tới chuẩn mực ứng xử và môi trường mạng an toàn, lành mạnh. Sự ra đời của Liên minh niềm tin số, quy tụ KOL uy tín, giúp công chúng nhận diện thông tin tích cực, bảo vệ niềm tin số và tăng cường sức mạnh mềm quốc gia.
                </p>
                <div class="my-8">
                  <img src="/images/project/project_3.jpg" alt="Đại biểu hội nghị" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Các đại biểu tham dự hội nghị. Ảnh: T.H</p>
                </div>

                <p class="mb-6 leading-relaxed">
                  Phần thảo luận của các diễn giả tập trung vào vấn đề nâng cao trách nhiệm xã hội của KOL, xây dựng môi trường mạng an toàn, lành mạnh, thúc đẩy sáng tạo gắn liền với giá trị nhân văn và tăng cường hợp tác giữa cơ quan quản lý, nền tảng số và cộng đồng KOL. Nhiều nghệ sĩ, gương mặt có ảnh hưởng trong cộng đồng, như MC Khánh Vy, hoa hậu Bảo Ngọc,… đã chia sẻ quan điểm và hành trình trải nghiệm, mong muốn đóng góp vào sự phát triển của xã hội số văn minh.
                </p>
                <div class="my-8">
                  <img src="/images/project/project_4.jpg" alt="MC Trần Khánh Vy" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">MC Trần Khánh Vy, người có ảnh hưởng trên mạng xã hội chia sẻ tại hội nghị. Ảnh: BTC</p>
                </div>

                <p class="mb-6 leading-relaxed">
                  Tại phiên tọa đàm với chủ đề “Niềm tin và kỳ vọng”, các đại biểu cũng đã chia sẻ về vai trò, trách nhiệm và cơ hội lan tỏa ảnh hưởng tích cực trong xã hội số; mở ra nhiều góc nhìn đa dạng, từ chính sách quản lý, giải pháp công nghệ, chiến lược truyền thông đến câu chuyện sáng tạo nội dung.
                </p>
                <div class="my-8">
                  <img src="/images/project/project_5.jpg" alt="Ca sỹ Đen Vâu" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Ca sỹ, rapper Đen Vâu tham dự sự kiện. Ảnh: BTC</p>
                </div>

                <p class="mb-6 leading-relaxed">
                  Cũng tại hội nghị, Liên minh niềm tin số đã ra mắt. Liên minh tập hợp KOL, cơ quan quản lý, nền tảng, doanh nghiệp và báo chí nhằm chung tay chống lại tin giả, hành vi lừa đảo trực tuyến, quảng cáo kém minh bạch và lan tỏa giá trị tích cực, nhân văn trong cộng đồng. Liên minh được kỳ vọng sẽ trở thành không gian kết nối, chia sẻ kinh nghiệm, đồng thời xây dựng cơ chế tự giám sát nhằm nâng cao tính minh bạch và trách nhiệm xã hội của người có ảnh hưởng.
                </p>
                <div class="my-8">
                  <img src="/images/project/project_6.jpg" alt="Hoa hậu Tiểu Vy" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Hoa hậu Việt Nam 2018 Trần Tiểu Vy tham dự hội nghị. Ảnh: BTC</p>
                </div>

                <div class="my-8">
                  <img src="/images/project/project_7.jpg" alt="Rapper nhí" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Rapper nhí tham dự hội nghị sáng nay. Ảnh: T.H</p>
                </div>

                <p class="mb-6 leading-relaxed">
                  Cùng với đó, hội nghị cũng công bố chương trình “Tín nhiệm người có ảnh hưởng”, hướng đến việc thiết lập hệ thống đánh giá uy tín và trách nhiệm xã hội của KOL/KOC. Đây sẽ là công cụ quan trọng giúp công chúng, doanh nghiệp và các nền tảng có cơ sở để nhận diện, hợp tác với những cá nhân thực sự lan tỏa giá trị tích cực và đáng tin cậy.
                </p>
              </div>
            `
          }
        ]
      },
      featured: 'Nổi bật',
      viewMore: 'XEM THÊM',
      noContent: 'Chưa có nội dung',
      viewLess: 'Thu gọn',
      breadcrumb: {
        home: 'Trang chủ',
        activities: 'Hoạt động',
        events: 'Sự kiện',
        projects: 'Dự án',
      }
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
      button: 'Register',
    },
    // Programs
    programs: {
      sectionSubtitle: 'OUR PROGRAMS',
      sectionTitle: 'ACTION PROGRAMS FOR 2026',
      sectionDescription: 'Key programs aimed at building a safe, transparent, and sustainable digital ecosystem.',
      ctaButton: 'View 2026 Action Roadmap',
      viewDetails: 'View details',
      badge: 'PROGRAM',
      action2026: 'ACTION 2026',
      program1: {
        title: 'Digital Trust Infrastructure\n& Trusted Identity',
        items: ['eID, eKYC, Trust Framework', 'Banking, digital platforms']
      },
      program2: {
        title: 'Data Standards &\nPrivacy Protection',
        items: ['Data Governance, Privacy', 'Enterprises, regulatory agencies']
      },
      program3: {
        title: 'Responsible AI &\nAlgorithm Transparency',
        items: ['Responsible AI, Explainable AI', 'Organizations using AI']
      },
      program4: {
        title: 'Digital Trust in\nFinance - Banking',
        items: ['Fraud prevention, Cybersecurity', 'Banks, Fintech']
      },
      program5: {
        title: 'Capacity Building &\nDigital Trust Personnel',
        items: ['Training, Communication', 'Personnel, Community']
      },
      program6: {
        title: 'Cooperation - Pilot -\nInternational Outreach',
        items: ['Sandbox, Global partners', 'Domestic & international']
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
      individual1: { role: 'MC', description: 'Creating sustainable value' },
      individual2: { role: 'RAPPER', description: 'Source of positive inspiration' },
      individual3: { role: 'MISS', description: 'Representative of the young generation' },
      individual4: { role: 'KOL', description: 'Quality creative content' },
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
      item1: { title: 'Digital Trust Summit 2024', subtitle: 'DTA - Digital Trust Alliance', event: 'Event' },
      item2: { title: 'Cybersecurity Workshop', subtitle: 'DTA - Digital Trust Alliance', event: 'Event' },
      item3: { title: 'Vietnam KOL Gala', subtitle: 'DTA - Digital Trust Alliance', event: 'Event' },
      item4: { title: 'Digital Technology Conference', subtitle: 'DTA - Digital Trust Alliance', event: 'Event' },
      item5: { title: 'Digital Transformation Forum', subtitle: 'DTA - Digital Trust Alliance', event: 'Event' },
    },
    // Contact
    contact: {
      title: 'Contact Information',
    },
    // About Page
    aboutPage: {
      tabs: {
        introduction: 'About the Alliance',
        structure: 'Organizational Structure',
        management: 'Executive Board',
        regulations: 'Regulations & Conventions',
      },
      introduction: {
        title: 'ABOUT THE ALLIANCE',
        name: {
          title: 'NAME',
          vietnamese: 'Digital Trust Alliance.',
          english: 'Digital Trust Alliance (DTA).',
          short: 'DTA',
        },
        legal: {
          title: 'NATURE & LEGAL STATUS',
          desc1: 'Digital Trust Alliance is a voluntary, non-profit cooperation network without legal status.',
          desc2: 'The Alliance operates within the legal framework of Vietnam, under the auspices of the Department of Cybersecurity and High-Tech Crime Prevention (A05), Ministry of Public Security.',
        },
        scope: {
          title: 'SCOPE OF ACTIVITIES',
          desc1: 'The Alliance operates nationwide, while expanding regional and international cooperation.',
          fields: 'Fields of activity include: media, press, digital content, e-commerce, technology, cybersecurity, education, culture, social.',
          forms: 'Forms of activity: seminars, conferences, training, coaching, communication campaigns, companion programs, policy criticism and international cooperation.',
        },
        principles: {
          title: 'PRINCIPLES OF OPERATION',
          p1: 'Voluntary – Self-governing: Members participate voluntarily, manage together, not imposed.',
          p2: 'Democracy – Equality – Transparency: Members have equal rights in discussion, voting and access to public and transparent information.',
          p3: 'Non-profit: The Alliance does not operate for profit; all resources are mobilized to serve the interests of the community.',
          p4: 'Compliance with Vietnamese Law: All activities must comply with the Constitution, laws and current regulations.',
          p5: 'Social Responsibility – Positive Spreading: Members act responsibly towards the community, spread good values, oppose fake news and negative behaviors.',
        },
      },
      structure: { title: 'OPERATIONAL STRUCTURE OF DIGITAL TRUST ALLIANCE', hint: 'Click on the image to see details', closeHint: 'Click outside to close' },
      management: {
        title: 'LIST OF LEADERSHIP BOARD OF DIGITAL TRUST ALLIANCE',
        table: { no: 'No.', name: 'Full Name', position: 'Position', role: 'Role in the Alliance' },
        members: [
          { id: 1, name: 'Lieutenant General Le Xuan Minh', position: 'Director of Department of Cybersecurity and High-Tech Crime Prevention, Ministry of Public Security. Vice President of National Cyber Security Association', role: 'President' },
          { id: 2, name: 'Colonel Ha Van Bac', position: 'Deputy Director of Department of Cybersecurity and High-Tech Crime Prevention, Ministry of Public Security', role: 'Vice President' },
          { id: 3, name: 'Colonel Nguyen Hong Quân', position: 'Deputy Director of Department of Cybersecurity and High-Tech Crime Prevention, Ministry of Public Security', role: 'Vice President (Pioneer Member)' },
          { id: 4, name: 'Lieutenant General Nguyen Minh Chinh', position: 'Standing Vice President of National Cyber Security Association', role: 'Vice President (Pioneer Member)' },
          { id: 5, name: 'People\'s Artist Nguyen Xuan Bac', position: 'Director of Department of Performing Arts, Ministry of Culture, Sports & Tourism', role: 'Vice President (Pioneer Member)' },
          { id: 6, name: 'Mr. Do Duc Hoang', position: 'Deputy General Director of Vietnam Television (VTV)', role: 'Vice President (Pioneer Member)' },
          { id: 7, name: 'Major General Ngo Hoai Thu', position: 'Deputy Director of Department of Party and Political Work, Ministry of Public Security; Head of Public Security Women\'s Union', role: 'Vice President; Chairman of Integrity Commission' },
          { id: 8, name: 'Colonel Nguyen Anh Tuấn', position: 'Deputy Director of Ministry of Public Security Communications Department; Director of Public Security Television - ANTV', role: 'Vice President (Pioneer Member)' },
          { id: 9, name: 'Lieutenant Colonel Nguyen Tien Cuong', position: 'Head of Division, Department of Cybersecurity and High-Tech Crime Prevention, Ministry of Public Security', role: 'Secretary General; Standing Commissioner' },
          { id: 10, name: 'Mr. Nguyen Vu Hoang An', position: 'Secretary General of National Cyber Security Association', role: 'Standing Commissioner' },
          { id: 11, name: 'Mr. Vu Hoai Nam', position: 'Editor-in-Chief of Vietnam Law Newspaper', role: 'Standing Commissioner (Pioneer Member)' },
          { id: 12, name: 'Mr. Nguyen Lam Thanh', position: 'TikTok Representative in Vietnam', role: 'Standing Commissioner (Pioneer Member)' },
          { id: 13, name: 'Mr. Chu Hai Cong', position: 'Public Relations Director, Military Commercial Joint Stock Bank (MB Bank)', role: 'Standing Commissioner (Pioneer Member)' },
          { id: 14, name: 'Mr. Do Quang Vinh', position: 'Vice Chairman, Sai Gon - Hanoi Commercial Joint Stock Bank (SHB)', role: 'Standing Commissioner (Pioneer Member)' },
          { id: 15, name: 'Mr. Dinh Hoai Nam', position: 'Independent Member of the Board, Yeah1 Group Corporation', role: 'Standing Commissioner (Pioneer Member)' },
          { id: 16, name: 'Ms. Le Thi Kim Tuyến', position: 'Deputy General Director, ZEIT Media Co., Ltd', role: 'Standing Commissioner (Pioneer Member)' },
          { id: 17, name: 'Ms. Nguyen Thi Khanh Van', position: 'Deputy Director, Cyber Trust JSC', role: 'Standing Commissioner (Pioneer Member)' },
          { id: 18, name: 'Mr. Nguyen Tung Duong', position: 'Singer Tung Duong', role: 'Standing Commissioner (Pioneer Member)' },
          { id: 19, name: 'Mr. Nguyen Duc Cuong', position: 'Rapper Den', role: 'Standing Commissioner (Pioneer Member)' },
          { id: 20, name: 'Ms. Le Nguyen Bảo Ngọc', position: 'Miss Intercontinental 2022', role: 'Standing Commissioner (Pioneer Member)' },
        ],
      },
      regulations: {
        viewDetail: 'View details here',
        doc1: 'JOINT DECLARATION',
        doc2: 'COMPANION CONVENTION',
      },
    },
    // Activities Page
    activitiesPage: {
      tabs: {
        events: 'Events',
        projects: 'Projects',
      },
      events: {
        title: 'Featured Events',
        articles: [
          {
            id: 1,
            title: '1st Digital Trust Alliance (DTA) General Conference',
            image: '/images/Su_kien_moi_nhat.jpg',
            date: 'January 10, 2026',
            summary: 'On the afternoon of January 10 in Hanoi, the 1st Digital Trust Alliance (DTA) General Conference officially took place, marking an important milestone in the process of building and consolidating trust in cyberspace in Vietnam.',
            content: `
              <div class="article-content">
                <p class="mb-6 leading-relaxed">
                  On the afternoon of January 10 in Hanoi, the 1st Digital Trust Alliance (DTA) General Conference officially took place, marking an important milestone in the process of building and consolidating trust in cyberspace in Vietnam. The conference gathered nearly 200 delegates representing state management agencies, businesses, digital platforms, social organizations, along with many artists, influencers (KOLs), and the digital content creative community.
                </p>
                <p class="mb-6 leading-relaxed">
                  As the first general assembly since its inception, the event served as a forum for members to discuss strategic directions and action programs for the next development phase.
                </p>
              </div>
            `
          },
          {
            id: 2,
            title: 'Opening Ceremony of "Not Alone" Online Safety Festival',
            image: '/images/Images_id_2/image_1.jpg',
            date: 'November 01, 2025',
            summary: 'On the afternoon of November 1, 2025, the "Not Alone" Online Safety Festival was officially opened, working together towards a safe and healthy cyberspace for children and adolescents.',
            content: `
              <div class="article-content">
                <p class="mb-6 leading-relaxed">
                  The Online Safety Festival is part of the "Not Alone" Campaign initiated by the Digital Trust Alliance, under the auspices of UNODC, UNICEF, and various Vietnamese ministries.
                </p>
                <div class="my-8">
                  <img src="/images/Images_id_2/image_1.jpg" alt="Opening Ceremony Delegates" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Delegates attending the Opening Ceremony.</p>
                </div>
                <p class="mb-6 leading-relaxed">
                  The event features interactive digital exhibitions, technology experiences, and music shows to raise awareness about online safety for youth.
                </p>
              </div>
            `
          },
          {
            id: 3,
            title: 'National KOL Conference: Together for Digital Trust and Positive Impact',
            image: '/images/images_id_3/image_1.png',
            date: 'August 18, 2025',
            summary: 'The National KOL Conference took place successfully with the participation of nearly 300 typical KOLs.',
            content: `
              <div class="article-content">
                <p class="mb-6 leading-relaxed">
                  The conference "KOL with the Era of the Nation's Rise" brought together 300 influencers to discuss their role in building a healthy digital environment.
                </p>
                <div class="my-8">
                  <img src="/images/images_id_3/image_1.png" alt="Keynote Speech" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Major General Nguyen Hong Quan delivering the opening speech.</p>
                </div>
                <p class="mb-6 leading-relaxed">
                  Influencers are encouraged to use their impact to spread positive values and combat fake news.
                </p>
                <div class="my-8">
                  <img src="/images/images_id_3/image_2.png" alt="MC Khanh Vy sharing" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">MC Khanh Vy sharing her journey as an influencer.</p>
                </div>
                <div class="my-8">
                  <img src="/images/images_id_3/image_3.png" alt="Businessman Do Quang Vinh sharing" class="w-full rounded-lg shadow-md" />
                </div>
                <div class="my-8">
                  <img src="/images/images_id_3/image_4.png" alt="Artist Xuan Bac sharing" class="w-full rounded-lg shadow-md" />
                </div>
                <div class="my-8">
                  <img src="/images/images_id_3/image_5.png" alt="Digital Trust Alliance Launch" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Delegates launching the Digital Trust Alliance.</p>
                </div>
                <div class="my-8">
                  <img src="/images/images_id_3/image_6.png" alt="Conference Attendees" class="w-full rounded-lg shadow-md" />
                </div>
              </div>
            `
          },
          {
            id: 4,
            title: 'Government - Community - KOL: "Digital Alliance" Against Fake News',
            image: '/images/images_id_4.jpg',
            date: 'August 25, 2025',
            summary: 'In the digital age, a single click, a manipulated video, or an unverified status is enough to sway public opinion. Faced with the proliferation of fake news, Singapore has found a formula that combines legal toughness, educational persistence, and the "soft" influence of KOLs.',
            content: `
              <div class="article-content">
                <p class="mb-6 leading-relaxed">
                  In the digital age, a single click, a manipulated video, or an unverified status is enough to sway public opinion. Faced with the proliferation of fake news, Singapore has found a formula that combines legal toughness, educational persistence, and the "soft" influence of KOLs. This formula is opening a new direction for other countries: to win the war against fake news, let KOLs participate in protecting digital trust.
                </p>

                <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Reaching Youth by "Speaking" Their Language</h3>

                <p class="mb-6 leading-relaxed">
                  Since 2013, the National Library Board (NLB) has launched the S.U.R.E. campaign (Source, Understand, Research, Evaluate), an educational framework that helps people "filter" information. Initially, S.U.R.E. consisted of extracurricular school sessions, but in the TikTok era, the government quickly realized that to reach youth, they needed young faces and social media language.
                </p>

                <div class="my-8">
                  <img src="/images/images_id_4.jpg" alt="Digital for Life Campaign" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Digital for Life Campaign featuring KOLs and university students. Photo: digitalforlife.gov.sg</p>
                </div>

                <p class="mb-6 leading-relaxed">
                  Thus, KOLs were invited to participate. Instead of dry flyers, S.U.R.E. messages were packed into short clips, online challenges, or eye-catching infographics. A 30-second video explaining how to check a news source can attract hundreds of thousands of views, something a mainstream newspaper rarely achieves.
                </p>

                <p class="mb-6 leading-relaxed">
                  Singapore is not just fighting fake news; it also wants to enhance digital literacy and information analysis for its citizens. Therefore, they launched the Digital for Life (DfL) Campaign. Under DfL, many KOLs along with students from the National University of Singapore (NUS) became "digital coaches" for primary students from low-income families.
                </p>

                <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Law Alone is Not Enough</h3>

                <p class="mb-6 leading-relaxed">
                  Singapore is famous for the Protection from Online Falsehoods and Manipulation Act (POFMA). But policymakers know that laws are not fast enough to catch up with the spread of fake news. So, they built a "community shield," such as the CheckMate platform, where volunteers verify information.
                </p>

                <blockquote class="border-l-4 border-blue-600 pl-4 my-6 italic text-gray-700">
                  "One of the highlights at the recent 'KOL with the Era of the Nation's Rise' conference was the launch of the Digital Trust Alliance (DTA), an initiative gathering KOLs, regulators, platforms, and journalists to joint hands against fake news."
                </blockquote>

                <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Using Digital Power to Clear the Gray Zones</h3>

                <p class="mb-6 leading-relaxed">
                  Fake news is considered the gray zone of the digital age. The 2025 general election saw an explosion of deepfakes. To respond, Singapore enacted the Electoral Elections (Integrity of Online Advertising) Act (ELIONA) to prevent the use of deepfakes in elections.
                </p>

                <p class="mb-6 leading-relaxed">
                  In Singapore, KOLs are no longer just product promoters, but are actively supporting the Government in spreading public policy and doing meaningful work for the community. They do what mainstream media or legal documents find difficult: making young people listen, understand, and act.
                </p>

                <p class="text-right font-bold mt-8 text-gray-900 italic">Author: Dat Quoc</p>
              </div>
            `
          },
          {
            id: 5,
            title: 'Cyberspace - A New Ideological Battlefield',
            image: '/images/image_id_5.png',
            date: 'August 25, 2025',
            summary: 'Cyberspace, originally a place for exchange and information sharing, has now become a heated ideological battlefield where hostile forces exploit to spread fake news and impact social perception.',
            content: `
              <div class="article-content">
                <p class="mb-6 leading-relaxed">
                  Cyberspace, originally a place for exchange and information sharing, has now become a heated ideological battlefield where hostile forces exploit to spread fake news and impact social perception.
                </p>

                <div class="my-8">
                  <img src="/images/image_id_5.png" alt="Criminal processing" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Lam Dong Provincial Police taking criminal action against individual D.T.N for spreading anti-state materials.</p>
                </div>

                <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">A Hot Battlefield of Digital Ideology</h3>
                <p class="mb-6 leading-relaxed">
                  As of March 2025, Vietnam has 79.8 million internet users, accounting for 78.8% of the population. This shows that "digital society" has become an indispensable part of life for the majority of Vietnamese people.
                </p>

                <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Firmly Protecting Ideological Foundations</h3>
                <p class="mb-6 leading-relaxed">
                  The Cyber Security Department has proactively implemented synchronized measures to protect ideological foundations in cyberspace. In just 3 years (2022-2024), the department has handled more than 200 cases of posting false information, including 25 KOLs.
                </p>

                <div class="my-8">
                  <img src="/images/image_id_5(1).jpg" alt="KOL violation processing" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Police handling violations by KOL H.N.M for toxic content and regional discrimination.</p>
                </div>

                <blockquote class="border-l-4 border-blue-600 pl-4 my-6 italic text-gray-700">
                  "KOLs and social media administrators have become forces with wide-reaching influence, directly impacting the perceptions and attitudes of the community." <br/>
                  <span class="font-bold">— Colonel Huynh Ngoc Liem, Deputy Director of Lam Dong Provincial Police</span>
                </blockquote>

                <p class="text-right font-bold mt-8 text-gray-900 italic">Author: Thu Ha</p>
              </div>
            `
          },
          {
            id: 6,
            title: 'KOLs and Responsible Online Lifestyle',
            image: '/images/image_id_6.webp',
            date: 'August 24, 2025',
            summary: 'The recent "KOL with the Era of the Nation\'s Rise" conference has opened new opportunities for KOLs to accompany national development and leverage their influence positively.',
            content: `
              <div class="article-content">
                <p class="mb-6 leading-relaxed">
                  The recent "KOL with the Era of the Nation's Rise" conference has opened new opportunities for KOLs to accompany national development and leverage their influence positively.
                </p>

                <div class="my-8">
                  <img src="/images/image_id_6.webp" alt="KOL and Social Responsibility" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Illustration: DAD</p>
                </div>

                <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">The Power and Value of KOLs</h3>
                <p class="mb-6 leading-relaxed">
                  The "power" of information from KOLs in digital space is undeniable. A post, a video, or a livestream from famous people with millions of followers can spread information strongly and rapidly.
                </p>

                <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Ambassadors for Goodness and Kindness</h3>
                <p class="mb-6 leading-relaxed">
                  If KOLs use their influence to promote a civilized lifestyle, respect for the law, environmental protection, and national pride, millions of young people will be motivated positively.
                </p>
                <p class="mb-6 leading-relaxed">
                  The era of national rise requires everyone to contribute. For KOLs, contribution is not just about participating in community campaigns, but first and foremost living responsibly with their influence.
                </p>

                <blockquote class="border-l-4 border-blue-600 pl-4 my-6 italic text-gray-700">
                  "A kind KOL can contribute to spreading positive energy. A profit-driven KOL at any cost can cause deep scars."
                </blockquote>
              </div>
            `
          },
          {
            id: 7,
            title: 'KOLs and Civic Responsibility in the Digital Era',
            image: '/images/image_id_7.webp',
            date: 'August 23, 2025',
            summary: 'In the digital age, influencers (KOLs) - from singers and actors to entrepreneurs and content creators - possess unprecedented power.',
            content: `
              <div class="article-content">
                <p class="mb-6 leading-relaxed">
                  In the digital age, influencers (KOLs) - from singers and actors to entrepreneurs and content creators - possess unprecedented power. With hundreds of thousands, even millions of followers, every statement and action they take can create trends and strongly impact the community.
                </p>

                <div class="my-8">
                  <img src="/images/image_id_7.webp" alt="KOL and information power" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Influencers (KOLs) possess major advantages.</p>
                </div>

                <p class="mb-6 leading-relaxed">
                  KOL influence is clearly double-edged. On one hand, many KOLs have utilized their position to spread positive values: calling for environmental protection, encouraging reading culture, inspiring entrepreneurship, and sharing stories of kindness.
                </p>

                <p class="mb-6 leading-relaxed">
                  Ultimately, every KOL stands before a choice: to chase short-term glory or to become a steady light illuminating the community. This choice is the answer to whether they want to be a mere celebrity or a responsible citizen for the country's future.
                </p>

                <p class="text-right font-bold mt-8 text-gray-900 italic">Author: Nguyen Phong Chau (Construction Engineer)</p>
              </div>
            `
          },
          {
            id: 8,
            title: 'Expectations for the Digital Trust Alliance',
            image: '/images/image_id_8.jpg',
            date: 'August 23, 2025',
            summary: 'Cyberspace has now become a "second world" where true and false information intertwine, directly impacting social awareness and behavior. In this context, the birth of the Digital Trust Alliance is expected to contribute to shaping a clean and healthy digital culture based on trust and responsibility.',
            content: `
              <div class="article-content">
                <p class="mb-6 leading-relaxed">
                  The alliance brings together influencers (KOLs), regulators, businesses, and the press to jointly build standards of conduct, direct creative activities, and spread the positive value of information.
                </p>

                <div class="my-8">
                  <img src="/images/image_id_8.jpg" alt="Digital Trust Alliance Launch" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Influencers at the Digital Trust Alliance launch ceremony, August 18, 2025. Photo: Vnexpress</p>
                </div>

                <p class="mb-6 leading-relaxed">
                  International lessons are clear: TV star Kim Kardashian was once fined over $1 million for promoting cryptocurrencies against regulations in the US; many countries have tightened management, forcing KOLs to be transparent about advertising.
                </p>

                <p class="mb-6 leading-relaxed">
                  The success of the alliance depends on the joint efforts of policies, KOL awareness, and community attitude. When every word and every share is responsible and valuable, cyberspace will truly become a clean and civilized environment.
                </p>

                <p class="text-right font-bold mt-8 text-gray-900 italic">Author: Duy Thanh</p>
              </div>
            `
          },
          {
            id: 9,
            title: 'How will celebrities and KOLs be held responsible for false advertising?',
            image: '/images/image_id_9.avif',
            date: 'August 23, 2025',
            summary: 'In modern society, false advertising and using celebrities and KOLs (influencers) to promote products of unknown origin has become a concerning issue. To resolve this, the 2025 Advertising Law set new regulations to enhance responsibility for both influencers and businesses.',
            content: `
              <div class="article-content">
                <p class="mb-6 leading-relaxed">
                  In modern society, false advertising and using celebrities and KOLs (influencers) to promote products of unknown origin has become a concerning issue. To resolve this, the 2025 Advertising Law set new regulations to enhance responsibility for both influencers and businesses.
                </p>

                <div class="my-8">
                  <img src="/images/image_id_9(1).webp" alt="KOL and advertising" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Celebrities and false advertising (Illustration).</p>
                </div>

                <p class="mb-6 leading-relaxed">
                  One of the key updates of the 2025 Advertising Law is the requirement for celebrities and KOLs to be held jointly liable for false advertising content. This fills a long-standing legal gap and increases the accountability of both influencers and businesses.
                </p>

                <div class="my-8">
                  <img src="/images/image_id_9(2).webp" alt="Consumer protection solutions" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">More solutions are needed to protect consumers.</p>
                </div>

                <p class="mb-6 leading-relaxed">
                  The law also empowers consumers to file class-action lawsuits through representative organizations. This is a powerful legal tool to increase corporate responsibility and create public pressure against fraudulent advertising practices.
                </p>
              </div>
            `
          },
          {
            id: 10,
            title: 'National KOL Conference 2025: Spreading Social Responsibility, Confirming Positive Influence',
            image: '/images/image_id_10.png',
            date: 'August 22, 2025',
            summary: 'On August 18, 2025, in Hanoi, the first National KOL Conference organized by the Ministry of Public Security brought together nearly 300 typical faces, emphasizing the role of influencers in social responsibility.',
            content: `
              <div class="article-content">
                <p class="mb-6 leading-relaxed">
                  On August 18, 2025, in Hanoi, the first National KOL Conference organized by the Ministry of Public Security brought together nearly 300 typical faces from 34 provinces across the country. Under the theme "KOL with the era of the nation's rise", the event affirmed the importance of influence linked with social responsibility.
                </p>

                <p class="mb-6 leading-relaxed">
                  Among the delegates, Mr. Pham Dinh Ngai – Founder of Sokfarm (Tra Vinh) – brought the story of starting up from local coconut nectar, contributing a perspective on the responsibility of influencers in creating good values for the country.
                </p>

                <div class="my-8">
                  <img src="/images/image_id_10(1).png" alt="Mr. Pham Dinh Ngai sharing" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Mr. Pham Dinh Ngai at the National KOL Conference 2025.</p>
                </div>

                <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">KOLs and the Story of Social Responsibility</h3>
                <p class="mb-6 leading-relaxed">
                  "Influence is not about followers, but about the positive values each individual can spread to the community." For the Sokfarm Founder, the startup journey from Tra Vinh is clear evidence.
                </p>

                <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Sokfarm: From Coconut Nectar to International Brand</h3>
                <p class="mb-6 leading-relaxed">
                  Sokfarm focuses on international standards and social responsibility: creating stable jobs for local people, preserving indigenous knowledge, and investing in community education through the Sok School project.
                </p>

                <div class="my-8">
                  <img src="/images/image_id_10(2).png" alt="Sokfarm Products" class="w-full rounded-lg shadow-md" />
                </div>

                <p class="mb-6 leading-relaxed">
                  According to Mr. Ngai, Sokfarm's activities stem from the belief that a brand is only sustainable when accompanied by community benefits. Those values helped Sokfarm reach demanding markets like the US, EU, and Japan.
                </p>

                <div class="my-8">
                  <img src="/images/image_id_10(4).png" alt="Spreading Trust" class="w-full rounded-lg shadow-md" />
                </div>

                <p class="mb-6 leading-relaxed">
                  The National KOL Conference 2025 marks a special milestone where individuals, businesses, and content creators discuss the role of influence in building a civilized community and national soft power.
                </p>
              </div>
            `
          }
        ]
      },
      projects: {
        title: 'Featured Projects',
        articles: [
          {
            id: 1,
            title: 'The Legacy of the Hanoi Convention and the Global Fight Against Cybercrime',
            image: '/images/project_id_1.jpg',
            date: 'December 28, 2025',
            summary: '(PLVN) - In 2025, the Hanoi Convention was voted as one of the top 10 science and technology events. In the digital age, cybersecurity is a front line where data, transactions, and information move at the speed of light, where national interests, human security, and social trust coexist in a borderless space.',
            content: `
              <div class="article-content">
                <p class="mb-6 leading-relaxed">
                  (PLVN) - In 2025, the Hanoi Convention was voted as one of the top 10 science and technology events. In the digital age, cybersecurity is a front line where data, transactions, and information move at the speed of light, where national interests, human security, and social trust coexist in a borderless space.
                </p>

                <div class="my-8">
                  <img src="/images/project_id_1.jpg" alt="Not Alone Day" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Online Safety Festival "Not Alone".</p>
                </div>

                <h2 class="text-2xl font-bold mb-4 text-black">Hanoi Convention: Creating Digital Order through Law and Trust</h2>

                <p class="mb-6 leading-relaxed">
                  Right there, non-traditional security threats are increasing unprecedentedly. Cybercrime is no longer individual acts but has become a transnational underground industry, fully exploiting high technology to steal data, attack critical infrastructure, manipulate social awareness, commit financial fraud, and harm vulnerable groups.
                </p>

                <p class="mb-6 leading-relaxed">
                  Hundreds of thousands of cyberattacks are recorded every day globally, causing economic damage of up to trillions of USD annually, but the greater damage lies in the erosion of digital trust, the foundation of all digital transformation processes. In that context, the requirement to build a unified, binding, and effective international cooperation mechanism for preventing and combating cybercrime has become an imperative of the times.
                </p>

                <p class="mb-6 leading-relaxed">
                  After many years of complex negotiations, in December 2024, the United Nations General Assembly officially adopted the International Convention on Combating Cybercrime. In particular, Vietnam was selected as the host country for the Opening for Signature and High-level Conference, held in Hanoi on October 25 - 26, 2025.
                </p>

                <div class="my-8">
                  <img src="/images/project_id_1(1).avif" alt="National Cybersecurity Drill" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">The 2025 National Cybersecurity Drill program contributes to updating the Party's perspectives and policies, the State's laws in the field of cybersecurity, and sharing experiences in emergency response and incident recovery.</p>
                </div>

                <p class="mb-6 leading-relaxed">
                  From that moment, Hanoi was not only the venue for a multilateral diplomatic event but became a focal point of global trust and responsibility, where the international community together signed for a digital order based on law, cooperation, and humanity.
                </p>

                <p class="mb-6 leading-relaxed">
                  The Hanoi Convention consists of 9 chapters and 71 articles, as the first international legal document to comprehensively adjust criminal acts in cyberspace. The special feature of the Convention lies not only in its wide range of regulation but also in the philosophy of balance between two pillars: ensuring cybersecurity and protecting human rights.
                </p>

                <p class="mb-6 leading-relaxed">
                   Global cooperation is established as the central pillar, with a 24/7 communication network between countries to ensure rapid response when detecting, investigating, or preventing cybercrime.
                </p>

                <h3 class="text-xl font-bold mb-4 text-black">Online Fraud Cases in Vietnam Increase by 65%</h3>

                <p class="mb-6 leading-relaxed">
                  At the launch of the "All People Against Fraud" communication campaign, cybersecurity expert Ngo Minh Hieu (Hieu PC) said that fraud rings are currently operating in an organized manner.
                </p>

                <div class="my-8">
                  <img src="/images/project_id_1(2).avif" alt="Colonel Ha Van Bac" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Colonel Ha Van Bac, Deputy Director of A05 Department - Ministry of Public Security. (Photo: NCA)</p>
                </div>

                <p class="mb-6 leading-relaxed">
                  Statistics from the Cyber Security and High-Tech Crime Prevention Department (A05) under the Ministry of Public Security show that in the first 8 months of the year, Vietnam recorded more than 1,500 online fraud cases, a 65% increase over the same period in 2024.
                </p>
                
                <p class="mb-6 leading-relaxed">
                  The Digital Trust Alliance launched the "Not Alone" campaign with the message "Safe Together Online" to protect more than 12 million Vietnamese adolescents from threats in cyberspace.
                </p>

                <p class="text-right italic font-semibold mt-8 text-gray-600">Author: Uyên Na</p>
              </div>
            `
          },
          {
            id: 2,
            title: "'Not Alone' in Cyberspace",
            image: '/images/project_id_2.jpg',
            date: 'December 16, 2025',
            summary: 'GD&TĐ - Over 120,000 students in Lam Dong province have been equipped with digital defense skills.',
            content: `
              <div class="article-content">
                <p class="mb-6 font-bold">GD&TĐ - Over 120,000 students in Lam Dong province have been equipped with digital defense skills.</p>

                <div class="my-8">
                  <img src="/images/project_id_2.jpg" alt="Students Participating" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Students participating in the "Not Alone - Safe Together Online" program.</p>
                </div>

                <h2 class="text-2xl font-bold mb-4 text-black">'Online Kidnapping' - A new tactic targeting students</h2>

                <p class="mb-6 leading-relaxed">
                  At noon on October 10, Mr. L.X.T (residing in Xuan Huong Ward - Dalat) suddenly received a distress call from his son L.X.G.B (born 2007), a freshman at Yersin Dalat University. On the other end of the line, the male student's voice was trembling and panicked, requesting the family to urgently transfer 150 million VND to a strange account to 'cooperate in an investigation with the Hanoi City Police'.
                </p>

                <p class="mb-6 leading-relaxed">
                  Recognizing many unusual signs and suspecting his son had fallen into a fraud trap, Mr. T immediately reported to the Police. Shortly after, the Criminal Police force of Lam Dong Provincial Police urgently intervened. After about 30 minutes of deploying professional measures, the authorities determined the location and successfully rescued B at a motel on Xo Viet Nghe Tinh Street, where the victim was directed by the subjects to rent a private room and completely isolate himself from the outside.
                </p>

                <p class="mb-6 leading-relaxed">
                  According to B's account, on the morning of the same day, he visited the boarding room of two friends, P and K, both students at Yersin University. While the three were chatting, a man wearing a police uniform made a video call via the Zoom application, claiming to be an investigative officer from the Hanoi City Police. This person continuously questioned and accused the group of students of 'being involved in a transnational money laundering and drug ring'.
                </p>

                <div class="my-8">
                  <img src="/images/project_id_2(1).jpg" alt="Internet Risks" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Students are facing many risks when using the Internet.</p>
                </div>

                <p class="mb-6 leading-relaxed">
                  Initially identified as 'witnesses', but after only a few minutes, B was suddenly falsely accused as an accomplice. To 'prove innocence', the male student was required to provide all personal information, install the 'Zoom camera' application, and was forced to rent a private room, absolutely forbidden from contacting family, friends, or anyone else for the reason of 'investigative security'.
                </p>

                <p class="mb-6 leading-relaxed">
                  From this clue, Lam Dong Provincial Police continued to expand the investigation, deploying professional measures synchronously, and promptly rescued the remaining two students, P and K, at accommodation establishments on Xo Viet Nghe Tinh and Tran Khanh Du streets (Lam Vien Ward - Dalat).
                </p>

                <p class="mb-6 leading-relaxed">
                  A similar situation occurred earlier on the afternoon of October 5, Mrs. Le Thi Huong (residing in Lam Vien Ward - Dalat) was panicked when her daughter L.T.M.N, a final-year student in the Faculty of Mathematics and Informatics at Da Lat University, called and pleaded for the family to transfer more than 100 million VND to an account provided by a group.
                </p>

                <p class="mb-6 leading-relaxed">
                  Fortunately, Mrs. Huong calmed down in time and reported to the Lam Vien Ward Police - Dalat. In a short time, authorities identified where N was being controlled online at a hotel, successfully rescuing the victim in a state of panic, being monitored and threatened to transfer money.
                </p>

                <h2 class="text-2xl font-bold mb-4 text-black">Joining hands to build a digital shield</h2>

                <p class="mb-6 leading-relaxed">
                  According to initial statistics from the Ministry of Public Security, from mid-2024 to now, the whole country has recorded about 50 cases of children and adolescents, mainly aged 18 to 22, falling into situations of being defrauded, psychologically manipulated, and even 'online kidnapped'. The common point of these cases all start from interactions that seem harmless: a strange message, an unusual video call, a prize link, or a 'friend request' on social networks.
                </p>

                <div class="my-8">
                  <img src="/images/project_id_2(2).jpg" alt="Digital Gear" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Students are equipped with essential skills on 'Safe Digital Gear'.</p>
                </div>

                <p class="mb-6 leading-relaxed">
                  In Lam Dong specifically, there have been many cases of fraud, extortion, and child abuse in the cyber environment. The subjects often approach and entice adolescents to perform online pornographic acts, record them, and then use these images to threaten and extort property. Most victims are students who use the Internet frequently but have not been fully equipped with digital defense skills, and have a mentality of apprehension and shame, so they do not dare to share when in danger.
                </p>

                <p class="mb-6 leading-relaxed">
                  In view of the above situation, the 'Not Alone - Safe Together Online' campaign was launched in Lam Dong as a warning and also a call for action from the whole society.
                </p>

                <div class="my-8">
                  <img src="/images/project_id_2(3).jpg" alt="Deputy Director" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Mrs. Nguyen Thi Thu, Deputy Director of Lam Dong Department of Education and Training, speaking at the 'Safe Digital Gear' program.</p>
                </div>

                <p class="mb-6 leading-relaxed">
                  Mrs. Nguyen Thi Thu, Deputy Director of the Department of Education and Training of Lam Dong province, stated: "In the digital age, alongside the enormous benefits of the Internet, students face increasingly sophisticated risks of fraud and 'online kidnapping'. The education sector identifies protecting students in cyberspace as an urgent and non-delayable task."
                </p>

                <p class="mb-6 leading-relaxed">
                  After more than two months of implementation, the campaign has created a clear spreading effect. In cyberspace, more than 35,000 residents in the province simultaneously changed their profile pictures in support; more than 1,000 articles were posted on media channels, attracting over 4 million interactions.
                </p>

                <p class="mb-6 leading-relaxed">
                  In direct activities, propaganda work was organized at more than 220 schools and residential areas, reaching over 120,000 students, teachers, and parents. Many vivid educational forms were applied, such as dramatizing fraud situations, simulating 'online kidnapping' tactics, and organizing direct dialogues and Q&A sessions with cybersecurity experts.
                </p>

                <div class="my-8">
                  <img src="/images/project_id_2(4).jpg" alt="Spreading the Campaign" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Spreading the "Not Alone - Safe Together Online" Campaign in Lam Dong province.</p>
                </div>

                <p class="mb-6 leading-relaxed">
                  Notably, the program was also brought to remote and mountainous areas, contributing to ensuring that all students have the opportunity to access digital safety knowledge. Thereby, step by step building a safe and healthy digital learning environment, helping students study, create, and develop comprehensively with confidence.
                </p>

                <p class="mb-6 leading-relaxed">
                  "Through the campaign, we hope to equip them with skills to identify risks, safe response methods, and the ability to proactively protect themselves in the digital environment," Mrs. Thu emphasized.
                </p>

                <h2 class="text-2xl font-bold mb-4 text-black">No One Is Left Alone</h2>

                <p class="mb-6 leading-relaxed">
                  For Le Anh Thu, a literature major at Tran Hung Dao Gifted High School, the most important thing when participating in the campaign is learning how to protect herself and helping friends not be left alone. "I once received several fraudulent calls, but being equipped with prevention skills by my family and teachers, I did not fall into the trap. When participating in the campaign, I want to send a message to you that: 'Not Alone' means there are always people around to protect you. When there are signs of being defrauded, you need to immediately notify relatives, friends, or people you trust for help."
                </p>

                <p class="mb-6 leading-relaxed">
                  Sharing the same feeling, Huynh Gia Bao, a student at Phan Thiet High School, said: "The 'Not Alone' campaign helps us recognize and avoid types of online fraud. Now, I am always more proactive, not afraid, and know how to protect myself."
                </p>

                <div class="my-8">
                  <img src="/images/project_id_2(6).jpg" alt="Educational Session" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Students participate in an exchange during a "Safe Digital Gear" propaganda session.</p>
                </div>

                <p class="mb-6 leading-relaxed">
                  According to Senior Colonel Vu Hoang Anh, Head of the Department of Cybersecurity and High-Tech Crime Prevention (Lam Dong Provincial Police), the "Not Alone" campaign is a commitment of the whole society that every child has the right to be safe, loved, and accompanied in the digital world. It is also the beginning of building national digital trust, where every citizen, especially the younger generation, can grow up confident, resilient, and protected from the shadows of cyberspace.
                </p>

                <p class="mb-6 leading-relaxed">
                  In addition to the propaganda campaign, the Lam Dong Department of Education and Training will establish a hotline with the Department of Cybersecurity and High-Tech Crime Prevention. Whenever schools or teachers detect students showing signs of being threatened or enticed online, the department will coordinate with the police to handle it immediately, determined not to let them face danger alone.
                </p>
                <p class="text-right italic font-semibold mt-8 text-gray-600">Author: Le Trang - December 16, 2025</p>
              </div>
            `
          },
          {
            id: 10,
            title: 'Announcing the "Influencer Trust" Program',
            image: '/images/project/project_1.jpg',
            date: 'August 18, 2025',
            summary: 'The Digital Trust Alliance announces the "Influencer Trust" program, aiming to establish a reputation and social responsibility assessment system for KOLs/KOCs. This will be an important tool for the public, businesses, and platforms to identify and collaborate with individuals who truly spread positive and reliable values.',
            content: `
              <div class="article-content">
                <p class="mb-6 leading-relaxed">
                  The "Influencer Trust" program aims to establish an assessment system for the reputation and social responsibility of KOLs/KOCs. The conference "KOLs with the era of the nation's rise", organized by the Cybersecurity Bureau (Ministry of Public Security) and the National Cyber Security Association, took place on the morning of August 18 in Hanoi.
                </p>
                <div class="my-8">
                  <img src="/images/project/project_1.jpg" alt="Major General Le Xuan Minh" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Major General Le Xuan Minh, Director of the Cybersecurity Bureau, gave the opening speech.</p>
                </div>

                <p class="mb-6 leading-relaxed">
                  KOLs need to be deeply aware of the impact of their every statement, image, and action. At the same time, management agencies and technology platforms need to join hands to orient and support the creation of a healthy environment for KOLs to promote positive influence.
                </p>
                <div class="my-8">
                  <img src="/images/project/project_2.jpg" alt="Singer Tung Duong" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Singer Tung Duong shares the role of KOLs on social networks. Photo: BTC</p>
                </div>

                <p class="mb-6 leading-relaxed">
                  The birth of the Digital Trust Alliance, bringing together prestigious KOLs, helps the public identify positive information and strengthen national soft power.
                </p>
                <div class="my-8">
                  <img src="/images/project/project_3.jpg" alt="Conference delegates" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Delegates attending the conference. Photo: T.H</p>
                </div>

                <p class="mb-6 leading-relaxed">
                  Speakers' discussions focused on themes such as improving the social responsibility of KOLs and building a safe and healthy online environment.
                </p>
                <div class="my-8">
                  <img src="/images/project/project_4.jpg" alt="MC Khanh Vy" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">MC Khanh Vy, an influencer sharing at the conference. Photo: BTC</p>
                </div>

                <p class="mb-6 leading-relaxed">
                  The launch of the Digital Trust Alliance aims to combat fake news, online fraud, and opaque advertising while spreading humanitarian values.
                </p>
                <div class="my-8">
                  <img src="/images/project/project_6.jpg" alt="Miss Tieu Vy" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Miss Vietnam 2018 Tran Tieu Vy attending the conference. Photo: BTC</p>
                </div>

                <div class="my-8">
                  <img src="/images/project/project_7.jpg" alt="Child rapper" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">A child rapper attending this morning's conference. Photo: T.H</p>
                </div>

                <p class="mb-6 leading-relaxed">
                  Along with that, the conference also announced the "Influencer Trust" program, aiming to establish a reputation and social responsibility assessment system for KOLs/KOCs. This will be an important tool for the public, businesses, and platforms to have a basis for identifying and collaborating with individuals who truly spread positive and reliable values.
                </p>
              </div>
            `
          }
        ]
      },
      featured: 'Featured',
      viewMore: 'VIEW MORE',
      noContent: 'No content available',
      viewLess: 'View Less',
      breadcrumb: {
        home: 'Home',
        activities: 'Activities',
        events: 'Events',
        projects: 'Projects',
      }
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
