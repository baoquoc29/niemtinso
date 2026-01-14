import React from 'react';
import { Link, useParams } from 'react-router-dom';

// Mock data - Bạn có thể fill nội dung chi tiết vào đây
const allArticles = [
  {
    id: 1,
    title: 'Hội nghị Toàn thể Liên minh Niềm Tin Số (DTA) lần thứ I',
    image: '/images/Su_kien_moi_nhat.jpg',
    date: '10 tháng 01 năm 2026',
    content: 'Chiều 10/1 tại Hà Nội, Hội nghị Toàn thể Liên minh Niềm Tin Số (Digital Trust Alliance – DTA) lần thứ I đã chính thức diễn ra, đánh dấu cột mốc quan trọng trong tiến trình xây dựng và củng cố niềm tin trên không gian mạng tại Việt Nam.'
  },
  {
    id: 2,
    title: 'Khai mạc Ngày hội An toàn trực tuyến "Không Một Mình"',
    image: '/images/event-main-2.jpg',
    date: '01 tháng 11 năm 2025',
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
    content: '[NỘI DUNG CHI TIẾT BÀI VIẾT ID 3 - Bạn điền vào đây]'
  },
  {
    id: 4,
    title: 'Trao giải Khảo sát An ninh mạng 2025: Hơn 60.000 người dùng chứng...',
    image: '/images/featured-1.jpg',
    date: '09 tháng 1 năm 2026',
    content: '[NỘI DUNG CHI TIẾT BÀI VIẾT ID 4 - Bạn điền vào đây]'
  },
  {
    id: 5,
    title: 'An ninh mạng người dùng cá nhân 2025: Giảm tần suất lừa đảo, tăng thách thức',
    image: '/images/featured-2.jpg',
    date: '07 tháng 1 năm 2026',
    content: '[NỘI DUNG CHI TIẾT BÀI VIẾT ID 5 - Bạn điền vào đây]'
  },
  {
    id: 6,
    title: 'Hiệp hội An ninh mạng Quốc gia tổ chức Tọa đàm: Bảo vệ dữ liệu cá...',
    image: '/images/featured-3.jpg',
    date: '01 tháng 1 năm 2026',
    content: '[NỘI DUNG CHI TIẾT BÀI VIẾT ID 6 - Bạn điền vào đây]'
  }
];

const featuredArticles = [
  {
    id: 4,
    title: 'Trao giải Khảo sát An ninh mạng 2025: Hơn 60.000 người dùng chứng...',
    image: '/images/featured-1.jpg',
    date: '09 tháng 1 năm 2026'
  },
  {
    id: 5,
    title: 'An ninh mạng người dùng cá nhân 2025: Giảm tần suất lừa đảo, tăng thách thức',
    image: '/images/featured-2.jpg',
    date: '07 tháng 1 năm 2026'
  },
  {
    id: 6,
    title: 'Hiệp hội An ninh mạng Quốc gia tổ chức Tọa đàm: Bảo vệ dữ liệu cá...',
    image: '/images/featured-3.jpg',
    date: '01 tháng 1 năm 2026'
  }
];

export default function ActivityDetailPage() {
  const { id } = useParams();
  const article = allArticles.find(a => a.id === Number(id));

  // Luôn render layout với placeholder nếu không có dữ liệu
  const displayArticle = article || {
    id,
    title: 'Tiêu đề bài viết sự kiện',
    image: '/images/event-main-1.jpg',
    date: 'Ngày tháng năm',
    content: 'Nội dung chi tiết bài viết. Bạn có thể thay thế bằng dữ liệu động sau.'
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
                  <Link to="/activities?tab=events" className="hover:underline text-blue-600">Sự kiện</Link>
                </nav>
                <div className="flex items-center text-blue-600 text-sm mt-1 md:mt-0">
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0h6m-6 0a2 2 0 00-2 2v6a2 2 0 002 2h8a2 2 0 002-2V9a2 2 0 00-2-2" />
                  </svg>
                  {displayArticle.date}
                </div>
              </div>
              {/* Nội dung chi tiết bài viết */}
              <article className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{displayArticle.title}</h1>
                <div
                  className="text-gray-700 leading-relaxed text-base md:text-lg prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: displayArticle.content }}
                />
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
