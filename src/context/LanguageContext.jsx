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
      sectionTitle: 'CHƯƠNG TRÌNH HÀNH ĐỘNG NĂM 2026',
      sectionDescription: 'Các chương trình trọng tâm nhằm xây dựng hệ sinh thái số an toàn, minh bạch và bền vững.',
      ctaButton: 'Xem Lộ trình hành động 2026',
      viewDetails: 'Xem chi tiết',
      badge: 'CHƯƠNG TRÌNH',
      action2026: 'HÀNH ĐỘNG 2026',
      program1: {
        title: 'Hạ tầng Niềm tin số\n& Định danh tin cậy',
        items: ['eID, eKYC, Trust Framework', 'Ngân hàng, nền tảng số']
      },
      program2: {
        title: 'Chuẩn mực Dữ liệu &\nBảo vệ quyền riêng tư',
        items: ['Data Governance, Privacy', 'Doanh nghiệp, cơ quan quản lý']
      },
      program3: {
        title: 'AI có trách nhiệm &\nMinh bạch thuật toán',
        items: ['Responsible AI, Explainable AI', 'Tổ chức ứng dụng AI']
      },
      program4: {
        title: 'Niềm tin số trong\nTài chính - Ngân hàng',
        items: ['Chống gian lận, An ninh mạng', 'Ngân hàng, Fintech']
      },
      program5: {
        title: 'Nâng cao năng lực &\nNhân thực Niềm tin số',
        items: ['Đào tạo, Truyền thông', 'Nhân sự, Cộng đồng']
      },
      program6: {
        title: 'Hợp tác - Thí điểm -\nLan tỏa quốc tế',
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
        hint: 'Click vào hình ảnh để xem chi tiết',
        closeHint: 'Click bên ngoài để đóng',
      },
      management: {
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
        ],
      },
      regulations: {
        viewDetail: 'Xem thông tin chi tiết tại đây',
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
            image: '/images/event-main-2.jpg',
            date: '01 tháng 11 năm 2025',
            summary: 'Chiều 01/11/2025, tại phố đi bộ hồ Hoàn Kiếm, Hà Nội, Ngày hội An toàn trực tuyến “Không Một Mình” chính thức được khai mạc, chung tay hướng tới một không gian mạng an toàn, lành mạnh cho trẻ em và thanh thiếu niên.',
            content: `
              <div class="article-content">
                <p class="mb-6 leading-relaxed">
                  Ngày hội An toàn trực tuyến nằm trong khuôn khổ Chiến dịch "Không Một Mình" do Liên minh Niềm Tin Số khởi xướng, dưới sự bảo trợ của Cơ quan Phòng chống Ma túy và Tội phạm của Liên Hợp Quốc (UNODC), Quỹ Nhi đồng Liên Hợp Quốc (UNICEF) cùng Bộ Công an, Bộ Giáo dục và Đào tạo, Bộ Y tế, phối hợp với Cục An ninh mạng và phòng chống tội phạm sử dụng công nghệ cao, Hiệp hội An ninh mạng quốc gia, UBND thành phố Hà Nội đồng tổ chức.
                </p>

                <div class="my-8">
                  <img src="/images/event-2-delegates.jpg" alt="Các đại biểu dự Lễ khai mạc" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Các đại biểu dự Lễ khai mạc.</p>
                </div>

                <p class="mb-4 leading-relaxed">
                  Phát biểu tại Lễ khai mạc, Thiếu tướng Lê Xuân Minh, Cục trưởng Cục An ninh mạng và phòng chống tội phạm sử dụng công nghệ cao - Bộ Công an nhấn mạnh: Xâm hại, lạm dụng trẻ em trực tuyến đã và đang gia tăng trên toàn cầu. Tại Việt Nam, từ đầu năm 2025 đến nay, lực lượng Công an đã tiếp nhận và xử lý hơn 50 vụ bắt cóc trực tuyến – 100% nạn nhận từ 18-22 tuổi, 90% là nữ. Những con số này là lời nhắc nhở mạnh mẽ về sự cần thiết của các hành động phối hợp và cam kết tập thể để bảo vệ trẻ em và thanh thiếu niên trên không gian mạng.
                </p>

                <blockquote class="border-l-4 border-blue-600 pl-4 my-6 italic text-gray-700">
                  "Không một cá nhân, một cơ quan nào có thể đơn độc đối mặt với thách thức này. Chúng ta cần sự chung tay của toàn xã hội: từ gia đình, nhà trường, doanh nghiệp công nghệ, đến các tổ chức quốc tế và cộng đồng" - Thiếu tướng Lê Xuân Minh nhấn mạnh.
                </blockquote>

                <div class="my-8">
                  <img src="/images/event-2-speech.jpg" alt="Thiếu tướng Lê Xuân Minh phát biểu" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Thiếu tướng Lê Xuân Minh, Cục trưởng Cục An ninh mạng và phòng chống tội phạm sử dụng công nghệ cao phát biểu khai mạc.</p>
                </div>

                <p class="mb-4 leading-relaxed">
                  Thế giới cũng đang nỗ lực hành động tập thể để bảo vệ nhóm yếu thế, trong đó có trẻ em và thanh thiếu niên trên không gian mạng. Công ước Hà Nội về chống tội phạm mạng mà Việt Nam góp phần xây dựng, là một trong những minh chứng mạnh mẽ cho cam kết và quyết tâm bảo vệ trẻ em và thanh thiếu niên. Việt Nam cam kết bảo vệ đầy đủ các quyền trẻ em trên không gian mạng và cùng với cộng đồng quốc tế xây dựng không gian mạng an toàn và nhân văn, vì con người.
                </p>

                <p class="mb-6 leading-relaxed">
                  Thiếu tướng Lê Xuân Minh nhấn mạnh: Chiến dịch Không Một Mình do Liên minh Niềm Tin Số đề xuất và dẫn dắt là một nỗ lực kịp thời thúc đẩy hành động tập thể trong bảo vệ trẻ em và thanh thiếu niên trước "bắt cóc trực tuyến". Chiến dịch đã triển khai trên phạm vi toàn quốc, hơn 1.500 trường đã tổ chức hoạt động hưởng ứng và hơn 100 triệu lượt tiếp cận trên không gian mạng với những thông điệp của chiến dịch. Chiến dịch đã có nhiều đổi mới, sáng tạo về cách thức truyền tải thông tin đến từng lứa tuổi trẻ em và thanh thiếu niên. Bài hát và điệu nhảy của Chiến dịch đã được các em và xã hội đón nhận một cách tự nhiên và gần gũi.
                </p>

                <div class="my-8">
                  <img src="/images/event-2-ceremony.jpg" alt="Nghi thức khai mạc" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Các đại biểu thực hiện nghi thức khai mạc Ngày hội.</p>
                </div>

                <div class="my-8">
                  <img src="/images/event-2-flowers.jpg" alt="Tặng hoa tri ân" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Ban Tổ chức tặng hoa tri ân các đơn vị đồng hành và KOL đại sứ.</p>
                </div>

                <blockquote class="border-l-4 border-blue-600 pl-4 my-6 italic text-gray-700">
                  "Chiến dịch là minh chứng sống động cho tinh thần hợp tác, lan tỏa thông điệp nhân văn: Không một trẻ em nào bị bỏ lại một mình trước những rủi ro trên mạng" – Thiếu tướng Lê Xuân Minh khẳng định.
                </blockquote>

                <div class="my-8">
                  <img src="/images/event-2-attendees.jpg" alt="Các đại biểu tại lễ khai mạc" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Các đại biểu tại Lễ khai mạc.</p>
                </div>

                <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Trải nghiệm số - biến thông điệp thành hành động</h3>

                <p class="mb-6 leading-relaxed">
                  Diễn ra trong hai ngày 01 - 02/11 tại không gian phố đi bộ Hoàn Kiếm, Hà Nội, Ngày hội An toàn trực tuyến "Không Một Mình" mang đến chuỗi hoạt động phong phú, kết hợp giữa giáo dục, công nghệ và nghệ thuật, giúp người tham gia "chạm" vào thông điệp an toàn trực tuyến một cách gần gũi và trực quan.
                </p>

                <div class="my-8">
                  <img src="/images/event-2-denvau.jpg" alt="Đen Vâu biểu diễn" class="w-full rounded-lg shadow-md" />
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
                    <img src="/images/event-2-exhibition-1.jpg" alt="Không gian triển lãm" class="w-full rounded-lg shadow-md" />
                  </div>
                  <div>
                    <img src="/images/event-2-exhibition-2.jpg" alt="Trải nghiệm công nghệ" class="w-full rounded-lg shadow-md" />
                  </div>
                </div>
                <p class="text-sm text-gray-600 italic mt-2 text-center mb-8">Tại không gian triển lãm số đa giác quan, khách tham quan sẽ được trải nghiệm hệ thống tương tác ánh sáng, âm thanh và công nghệ ấn tượng.</p>

                <p class="mb-6 leading-relaxed">
                  Khép lại hành trình, Gala âm nhạc "Không Một Mình" tối ngày 2/11 quy tụ dàn nghệ sĩ nổi tiếng như Đen, Mono, tlinh, Low G, Quang Hùng MasterD, Lâm Bảo Ngọc, Hà Myo, Quang Đăng..., truyền tải thông điệp kết nối và lan tỏa năng lượng tích cực về niềm tin và an toàn trong thế giới số.
                </p>

                <div class="my-8">
                  <img src="/images/event-2-students.jpg" alt="Học sinh biểu diễn" class="w-full rounded-lg shadow-md" />
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
            image: '/images/event-main-3.jpg',
            date: '18 tháng 08 năm 2025',
            summary: 'Sáng 18/8/2025, Hội nghị KOL toàn quốc đã diễn ra thành công với sự tham gia của gần 300 KOL tiêu biểu, đại diện 34 tỉnh, thành trên cả nước.',
            content: `
              <div class="article-content">
                <p class="mb-6 leading-relaxed">
                  Sáng 18/8/2025, Hội nghị "KOL với kỷ nguyên vươn mình của dân tộc" do Hiệp hội An ninh mạng quốc gia phối hợp Cục An ninh mạng và Phòng, chống tội phạm sử dụng công nghệ cao, Bộ Công an tổ chức đã diễn ra thành công với sự tham gia của gần 300 KOL (Key Opinion Leader - người có sức ảnh hưởng) tiêu biểu, đại diện 34 tỉnh, thành trên cả nước cùng hơn 150 đại diện cơ quan quản lý, doanh nghiệp, nền tảng công nghệ và cơ quan báo chí truyền thông. Hội nghị không chỉ là diễn đàn đối thoại mà còn đặt nền móng cho nhiều sáng kiến lâu dài, mở ra cơ hội để cộng đồng KOL đồng hành cùng sự phát triển của đất nước.
                </p>

                <div class="my-8">
                  <img src="/images/event-3-opening.jpg" alt="Thiếu tướng Lê Xuân Minh phát biểu khai mạc" class="w-full rounded-lg shadow-md" />
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
                  <img src="/images/event-3-khanh-vy.jpg" alt="MC Khánh Vy chia sẻ" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">MC Khánh Vy chia sẻ về hành trình trở thành "người nổi tiếng" cũng như trách nhiệm đối với cộng đồng của các KOL.</p>
                </div>

                <div class="my-8">
                  <img src="/images/event-3-quang-vinh.jpg" alt="Doanh nhân Đỗ Quang Vinh chia sẻ" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Doanh nhân Đỗ Quang Vinh (Tập đoàn T&T) chia sẻ tại Hội nghị. Anh cũng được xem là một người nổi tiếng trên mạng xã hội với trang cá nhân có hàng trăm nghìn người theo dõi.</p>
                </div>

                <p class="mb-6 leading-relaxed">
                  Tại phiên tham luận với chủ đề "Hành trình và những giá trị", 06 tham luận được trình bày tại Hội nghị đã tập trung vào nhiều nội dung thiết thực nhằm nâng cao trách nhiệm xã hội của KOL, xây dựng môi trường mạng an toàn, lành mạnh, thúc đẩy sáng tạo gắn liền với giá trị nhân văn và tăng cường hợp tác giữa cơ quan quản lý, nền tảng số và cộng đồng KOL. Nhiều nghệ sĩ, gương mặt có ảnh hưởng lớn trong cộng đồng như Khánh Vy, Hoa hậu Bảo Ngọc… đã chia sẻ quan điểm và hành trình trải nghiệm, nhấn mạnh mong muốn đóng góp vào sự phát triển của xã hội số văn minh. Ngoài ra, gần 20 tham luận từ các KOL, doanh nghiệp, nền tảng và cơ quan quản lý được đăng trong kỷ yếu số Hội nghị cũng phản ánh những góc nhìn đa dạng và gợi mở nhiều giải pháp cho sự phát triển bền vững của cộng đồng KOL trong kỷ nguyên số.
                </p>

                <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Niềm tin và Kỳ vọng</h3>

                <div class="my-8">
                  <img src="/images/event-3-xuan-bac.jpg" alt="NSND Xuân Bắc chia sẻ" class="w-full rounded-lg shadow-md" />
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
                  <img src="/images/event-3-alliance.jpg" alt="Ra mắt Liên minh Niềm tin số" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Các đại biểu tại Hội nghị cùng ấn nút ra mắt Liên minh "Niềm tin số". Liên minh là nơi tập hợp các KOL/KOC uy tín, doanh nghiệp, cơ quan báo chí và nền tảng nhằm lan tỏa giá trị tích cực, dẫn dắt niềm tin, xây dựng chuẩn mực.</p>
                </div>

                <p class="mb-6 leading-relaxed">
                  Cùng với đó, Hội nghị cũng công bố Chương trình "Tín nhiệm Người có ảnh hưởng", hướng đến việc thiết lập hệ thống đánh giá uy tín và trách nhiệm xã hội của KOL/KOC. Đây sẽ là công cụ quan trọng giúp công chúng, doanh nghiệp và các nền tảng có cơ sở để nhận diện, hợp tác với những cá nhân thực sự lan tỏa giá trị tích cực và đáng tin cậy.
                </p>

                <p class="mb-6 leading-relaxed">
                  Phát biểu tại sự kiện, Trung tướng Nguyễn Minh Chính, Phó Chủ tịch Thường trực Hiệp hội An ninh mạng quốc gia khẳng định: "Hội nghị đánh dấu bước khởi đầu cho mạng lưới hợp tác chiến lược giữa KOL, cơ quan quản lý, doanh nghiệp, nền tảng số và báo chí, hướng tới chuẩn mực ứng xử và môi trường mạng an toàn, lành mạnh. Sự ra đời của Liên minh Niềm tin số sẽ quy tụ KOL uy tín, giúp công chúng nhận diện thông tin tích cực, bảo vệ niềm tin số và tăng cường sức mạnh mềm quốc gia".
                </p>

                <div class="my-8">
                  <img src="/images/event-3-attendees.jpg" alt="Hội nghị thu hút nhiều người có sức ảnh hưởng" class="w-full rounded-lg shadow-md" />
                  <p class="text-sm text-gray-600 italic mt-2 text-center">Hội nghị thu hút nhiều người có sức ảnh hưởng tham gia.</p>
                </div>

                <p class="mb-6 leading-relaxed">
                  Hội nghị "KOL với kỷ nguyên vươn mình của dân tộc" khép lại đã để lại dấu ấn sâu đậm, không chỉ ở quy mô và sự góp mặt của nhiều gương mặt tiêu biểu mà còn ở thông điệp nhân văn, chung tay kiến tạo niềm tin, khẳng định sức mạnh ảnh hưởng tích cực và đồng hành cùng dân tộc trong kỷ nguyên vươn mình. Với thành công đạt được, Hội nghị được kỳ vọng sẽ trở thành sự kiện thường niên, là cầu nối để KOL, doanh nghiệp, nền tảng và cơ quan quản lý cùng nhau hợp tác, chia sẻ và định hướng phát triển không gian mạng lành mạnh, bền vững.
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
            title: 'Dự án xây dựng Trung tâm Giám sát An ninh mạng quốc gia (National Cybersecurity Monitoring Center - NCMC)',
            image: '/images/project-main-1.jpg',
            date: '15 tháng 12 năm 2025',
            summary: 'Xây dựng trung tâm điều hành tập trung nhằm giám sát, phát hiện và ứng cứu sự cố an toàn thông tin trên quy mô quốc gia.',
            content: `
              <div class="article-content">
                <p class="mb-6 leading-relaxed">
                  Dự án xây dựng Trung tâm Giám sát An ninh mạng quốc gia (National Cybersecurity Monitoring Center - NCMC) là một trong những nhiệm vụ trọng tâm nhằm bảo đảm an toàn, an ninh mạng cho hệ thống thông tin của các cơ quan Đảng, Nhà nước và các hạ tầng thông tin quan trọng quốc gia.
                </p>
                <div class="my-8">
                  <img src="/images/project-main-1.jpg" alt="Trung tâm NCMC" class="w-full rounded-lg shadow-md" />
                </div>
                <p class="mb-6 leading-relaxed">
                  Trung tâm NCMC có chức năng giám sát tập trung, phân tích dữ liệu và đưa ra các cảnh báo sớm về các nguy cơ, cuộc tấn công mạng. Đồng thời, đây là đầu mối điều phối, ứng cứu và khắc phục sự cố an toàn thông tin mạng trên phạm vi toàn quốc.
                </p>
                <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Mục tiêu chiến lược</h3>
                <ul class="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                  <li>Xây dựng hệ thống giám sát thời gian thực cho các hạ tầng số trọng yếu.</li>
                  <li>Phát triển các công cụ phân tích dữ liệu lớn (Big Data) và trí tuệ nhân tạo (AI) để phát hiện mã độc và hành vi bất thường.</li>
                  <li>Nâng cao năng lực phản ứng nhanh trước các chiến dịch tấn công mạng quy mô lớn.</li>
                </ul>
              </div>
            `
          }
        ]
      },
      featured: 'Nổi bật',
      viewMore: 'XEM THÊM',
      noContent: 'Chưa có nội dung',
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
      button: 'Learn More',
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
      structure: { hint: 'Click on the image to see details', closeHint: 'Click outside to close' },
      management: {
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
        ],
      },
      regulations: {
        viewDetail: 'View details here',
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
            image: '/images/event-main-2.jpg',
            date: 'November 01, 2025',
            summary: 'On the afternoon of November 1, 2025, the "Not Alone" Online Safety Festival was officially opened, working together towards a safe and healthy cyberspace for children and adolescents.',
            content: `
              <div class="article-content">
                <p class="mb-6 leading-relaxed">
                  The Online Safety Festival is part of the "Not Alone" Campaign initiated by the Digital Trust Alliance, under the auspices of UNODC, UNICEF, and various Vietnamese ministries.
                </p>
                <div class="my-8">
                  <img src="/images/event-2-delegates.jpg" alt="Opening Ceremony Delegates" class="w-full rounded-lg shadow-md" />
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
            image: '/images/event-main-3.jpg',
            date: 'August 18, 2025',
            summary: 'The National KOL Conference took place successfully with the participation of nearly 300 typical KOLs.',
            content: `
              <div class="article-content">
                <p class="mb-6 leading-relaxed">
                  The conference "KOL with the Era of the Nation's Rise" brought together 300 influencers to discuss their role in building a healthy digital environment.
                </p>
                <div class="my-8">
                  <img src="/images/event-3-opening.jpg" alt="Keynote Speech" class="w-full rounded-lg shadow-md" />
                </div>
                <p class="mb-6 leading-relaxed">
                  Influencers are encouraged to use their impact to spread positive values and combat fake news.
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
            title: 'National Cybersecurity Monitoring Center (NCMC) Construction Project',
            image: '/images/project-main-1.jpg',
            date: 'December 15, 2025',
            summary: 'Building a centralized operation center to monitor, detect, and respond to information security incidents on a national scale.',
            content: `
              <div class="article-content">
                <p class="mb-6 leading-relaxed">
                  The project to build the National Cybersecurity Monitoring Center (NCMC) is one of the key tasks to ensure the cybersecurity of the Party and State systems.
                </p>
                <div class="my-8">
                  <img src="/images/project-main-1.jpg" alt="NCMC Center" class="w-full rounded-lg shadow-md" />
                </div>
                <p class="mb-6 leading-relaxed">
                  The NCMC center functions as a centralized monitoring unit, analyzing data and providing early warnings of cyber threats and attacks.
                </p>
              </div>
            `
          }
        ]
      },
      featured: 'Featured',
      viewMore: 'VIEW MORE',
      noContent: 'No content available',
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
