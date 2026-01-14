import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function RegisterPage() {
    const language = useLanguage();
    const t = (language && (language.t || language)) || {};
    const tfn = typeof t === "function" ? t : (k) => (t && t[k]) || k;

    const [activeTab, setActiveTab] = useState("personal");
    const navigate = useNavigate();


    const personalMembers = [
        {
            id: 1,
            title: 'Khánh Vy',
            meta: 'MC',
            img: '/images/members/khanh-vy.jpg',
            imgStyle: { objectPosition: 'center top', width: '70px', height: '60px', borderRadius: '50%' },
        },
        {
            id: 3,
            title: 'Đỗ Quang Đăng',
            meta: 'Biên đạo',
            img: '/images/members/do-quang-dang.jpg',
            imgStyle: { objectPosition: 'center', width: '70px', height: '60px', borderRadius: '50%' },
        },
        {
            id: 4,
            title: 'Nguyễn Sỹ Tuấn',
            meta: 'Nghệ sĩ',
            img: '/images/members/nguyen-sy-tuan.jpg',
            imgStyle: { objectPosition: 'center top', width: '70px', height: '70px', borderRadius: '50%', transition: 'transform 0.3s' },
            zoom: true,
        },
        {
            id: 5,
            title: 'Nguyễn Việt Hoàng',
            meta: 'Ca sĩ',
            img: '/images/members/nguyen-viet-hoang.jpg',
            imgStyle: { objectPosition: 'center top', width: '70px', height: '70px', borderRadius: '50%', transition: 'transform 0.1s' },
            zoom: true,
        },
        {
            id: 6,
            title: 'Tiểu Vy',
            meta: 'Hoa hậu',
            img: '/images/members/tieu-vy.jpg',
            imgStyle: { objectPosition: 'center', width: '70px', height: '60px', borderRadius: '50%' },
        },
        {
            id: 7,
            title: 'Đen Vâu',
            meta: 'Rapper',
            img: '/images/members/den-vau.jpg',
            imgStyle: { objectPosition: 'center', width: '70px', height: '60px', borderRadius: '50%' },
        },
    ];

    const orgMembers = [
        {
            id: 1,
            title: "Wind Eco",
            meta: "Hội viên tổ chức",
            img: "/images/company/1.Công ty CP Wind Eco.webp",
            imgStyle: { objectPosition: 'center', width: '70px', height: '60px', objectFit: 'contain' }
        },
        {
            id: 2,
            title: "Wind Media",
            meta: "Hội viên tổ chức",
            img: "/images/company/Công ty CP Gió Media (Wind Media).png",
            imgStyle: { objectPosition: 'center', width: '70px', height: '60px', objectFit: 'contain' }
        },
        {
            id: 3,
            title: "IEC Consulting",
            meta: "Hội viên tổ chức",
            img: "/images/company/Công ty CP IEC Consulting.png",
            imgStyle: { objectPosition: 'center', width: '70px', height: '60px', objectFit: 'contain' }
        },
        {
            id: 4,
            title: "Kênh 28",
            meta: "Hội viên tổ chức",
            img: "/images/company/Công ty CP Kênh 28 Entertainment.webp",
            imgStyle: { objectPosition: 'center', width: '70px', height: '60px', objectFit: 'contain' }
        },
        {
            id: 5,
            title: "Metub Việt Nam",
            meta: "Hội viên tổ chức",
            img: "/images/company/Công ty CP Metub Việt Nam.jpg",
            imgStyle: { objectPosition: 'center', width: '70px', height: '60px', objectFit: 'contain' }
        },
        {
            id: 6,
            title: "MCV Group",
            meta: "Hội viên tổ chức",
            img: "/images/company/Công ty CP Tập đoàn MCV (MCV Group).jpg",
            imgStyle: { objectPosition: 'center', width: '70px', height: '60px', objectFit: 'contain' }
        },
        {
            id: 7,
            title: "Đất Việt VAC",
            meta: "Hội viên tổ chức",
            img: "/images/company/Công ty CP Tập đoàn Đất Việt (DatViet VAC).png",
            imgStyle: { objectPosition: 'center', width: '70px', height: '60px', objectFit: 'contain' }
        },
        {
            id: 8,
            title: "VCCorp",
            meta: "Hội viên tổ chức",
            img: "/images/company/Công ty CP VCCorp.png",
            imgStyle: { objectPosition: 'center', width: '70px', height: '60px', objectFit: 'contain' }
        },
        {
            id: 9,
            title: "SChannel",
            meta: "Hội viên tổ chức",
            img: "/images/company/Công ty CP dịch vụ quảng cáo & truyền thông SChannel.png",
            imgStyle: { objectPosition: 'center', width: '70px', height: '60px', objectFit: 'contain' }
        },
        {
            id: 10,
            title: "Orange Agency",
            meta: "Hội viên tổ chức",
            img: "/images/company/Công ty TNHH Orange Agency & Biết Thế Network.jpg",
            imgStyle: { objectPosition: 'center', width: '70px', height: '60px', objectFit: 'contain' }
        },
        {
            id: 11,
            title: "Shopee",
            meta: "Hội viên tổ chức",
            img: "/images/company/Công ty TNHH Shopee.png",
            imgStyle: { objectPosition: 'center', width: '70px', height: '60px', objectFit: 'contain' }
        },
        {
            id: 12,
            title: "Thư viện Pháp luật",
            meta: "Hội viên tổ chức",
            img: "/images/company/Công ty TNHH Thư viện Pháp luật.png",
            imgStyle: { objectPosition: 'center', width: '70px', height: '60px', objectFit: 'contain' }
        },
        {
            id: 13,
            title: "TVH Media",
            meta: "Hội viên tổ chức",
            img: "/images/company/Công ty TNHH Truyền thông & Giải trí TVH Media.jpg",
            imgStyle: { objectPosition: 'center', width: '70px', height: '60px', objectFit: 'contain' }
        },
        {
            id: 14,
            title: "iSocial Việt Nam",
            meta: "Hội viên tổ chức",
            img: "/images/company/Công ty TNHH Truyền thông iSocial Việt Nam.png",
            imgStyle: { objectPosition: 'center', width: '70px', height: '60px', objectFit: 'contain' }
        },
        {
            id: 15,
            title: "Vitamin Network",
            meta: "Hội viên tổ chức",
            img: "/images/company/Công ty TNHH truyền thông Vitamin Network.jpg",
            imgStyle: { objectPosition: 'center', width: '70px', height: '60px', objectFit: 'contain' }
        },
        {
            id: 16,
            title: "B.School",
            meta: "Hội viên tổ chức",
            img: "/images/company/Trường TH, THCS & THPT B.School.png",
            imgStyle: { objectPosition: 'center', width: '70px', height: '60px', objectFit: 'contain' }
        },
    ];

    // --- Slider config ---
    const visibleCount = 3;
    const itemHeight = 76;
    const [scrollIndex, setScrollIndex] = useState(0);
    const [withTransition, setWithTransition] = useState(true);
    const intervalRef = useRef(null);

    // current items depend on active tab
    const currentItems = activeTab === "personal" ? personalMembers : orgMembers;
    const duplicated = [...currentItems, ...currentItems];

    // start/stop interval; restart when activeTab changes
    useEffect(() => {
        setScrollIndex(0);
        setWithTransition(true);
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setScrollIndex((prev) => prev + 1);
        }, 3000);
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [activeTab]);

    // reset when reach duplicated midpoint (loop)
    useEffect(() => {
        if (!currentItems.length) return;
        if (scrollIndex >= currentItems.length) {
            const timer = setTimeout(() => {
                setWithTransition(false);
                setScrollIndex(0);
                setTimeout(() => setWithTransition(true), 50);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [scrollIndex, currentItems.length]);

    const googleForm = {
        personal: "https://docs.google.com/forms/d/e/1FAIpQLSfAbOKwWXjt1e5Uz03tZkrWkwpP5P_VSVCGuOXRfiijM4udVQ/viewform",
        organization: "https://docs.google.com/forms/d/e/1FAIpQLSfES9PYJZqtH-cjAjSkTcjmy4lo8h1lZp6rvUJ8VZvPKeSXpA/viewform",
    };

    const renderMain = (type) => {
        const isOrg = type === "organization";
        return (
            <>
                <div className="inline-flex rounded-lg overflow-hidden mb-6">
                    <button
                        onClick={() => setActiveTab("personal")}
                        className={`px-6 py-2 ${!isOrg ? "bg-cyan-400" : "bg-slate-900"} text-white font-medium text-sm`}
                    >
                        CÁ NHÂN
                    </button>
                    <button
                        onClick={() => setActiveTab("organization")}
                        className={`px-6 py-2 ${isOrg ? "bg-cyan-400" : "bg-slate-900"} text-white font-medium text-sm`}
                    >
                        TỔ CHỨC/DOANH NGHIỆP
                    </button>
                </div>

                <h1 className="text-2xl md:text-3xl font-bold mb-6">
                    {isOrg ? "Đăng ký hội viên tổ chức/doanh nghiệp" : "Đăng ký hội viên cá nhân"}
                </h1>

                <p className="text-gray-700 mb-4">
                    Form đăng ký Hội viên NCA (
                    <a
                        href={isOrg ? googleForm.organization : googleForm.personal}
                        target="_blank"
                        rel="noreferrer"
                        className="text-cyan-600 hover:underline"
                    >
                        Tại đây
                    </a>
                    )
                </p>

                <p className="text-gray-700 mb-4">
                    Chúng tôi sẽ kiểm tra, thẩm định thông tin hội viên và gửi Email thông báo đăng ký hội viên, kèm theo
                    Đơn đăng ký theo mẫu. Quý hội viên vui lòng chuẩn bị hồ sơ chứng thực (bản cứng) bao gồm:
                </p>

                <ol className="space-y-4 list-none pl-0 mb-6">
                    <li className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-cyan-500 text-white flex items-center justify-center font-semibold">1</div>
                        <div className="text-gray-700">
                            {isOrg ? "Đơn đăng ký hội viên tổ chức (BM-02-ĐKTC) (Quý hội viên in ra và ký tên)" : "Đơn đăng ký hội viên cá nhân (BM-01-ĐKCN) (Quý hội viên in ra và ký tên)"}
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-cyan-500 text-white flex items-center justify-center font-semibold">2</div>
                        <div className="text-gray-700">
                            {isOrg ? "01 Bản chứng thực Giấy chứng nhận đăng ký doanh nghiệp, hoặc Quyết định thành lập; (Đối với hội viên tổ chức)" : "01 Bản chứng thực CMND/CCCD/Hộ chiếu còn thời hạn; (Đối với hội viên cá nhân)"}
                        </div>
                    </li>
                </ol>

                <div className="text-gray-700 space-y-2 mb-6">
                    <p>Hồ sơ trên được gửi về Văn phòng Hiệp hội An ninh mạng quốc gia</p>
                    <p>Địa chỉ: E2, Phố Dương Đình Nghệ, Yên Hoà, Cầu Giấy, Hà Nội</p>
                    <p>Điện thoại: 09182.18825</p>
                    <p>
                        Email Văn phòng:{" "}
                        <a href="banthuky@niemtinso.vn" className="text-cyan-600 hover:underline">
                            banthuky@niemtinso.vn
                        </a>
                    </p>
                </div>

                <hr className="my-6" />

                <p className="text-sm text-gray-500">Lưu ý: Sau khi gửi, Ban Thư ký sẽ liên hệ xác nhận trong vòng 3-5 ngày làm việc.</p>
            </>
        );
    };

    return (
        <main className="pt-16">
            <section className="py-8 md:py-10 bg-gray-50 min-h-screen">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main content */}
                        <div className="lg:col-span-2 bg-white rounded-lg p-8 shadow-sm animate-fade-in-up">{renderMain(activeTab)}</div>

                        {/* Sidebar with vertical auto-scroller */}
                        <aside className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            <div className="bg-white rounded-lg p-4 shadow-sm">
                                <h3 className="text-cyan-600 font-semibold mb-4">
                                    {activeTab === "personal" ? "Hội viên cá nhân" : "Hội viên tổ chức/doanh nghiệp"}
                                </h3>

                                <div className="overflow-hidden" style={{ height: `${visibleCount * itemHeight}px` }}>
                                    <ul
                                        style={{
                                            transform: `translateY(-${scrollIndex * itemHeight}px)`,
                                            transition: withTransition ? "transform 0.5s ease" : "none",
                                            margin: 0,
                                            padding: 0,
                                        }}
                                    >
                                        {duplicated.map((item, idx) => (
                                            <li
                                                key={idx}
                                                className="flex gap-4 items-start border-b last:border-b-0 pb-3"
                                                style={{ height: `${itemHeight}px`, listStyle: "none" }}
                                            >
                                                <img
                                                    src={item.img}
                                                    alt=""
                                                    className={
                                                        `object-cover flex-shrink-0 mt-1` +
                                                        (item.zoom ? ' hover:scale-110 active:scale-95 cursor-pointer' : '')
                                                    }
                                                    style={item.imgStyle}
                                                />
                                                <div className="flex-1">
                                                    <a href="#" className="text-sm font-medium text-gray-900 hover:underline">{item.title}</a>
                                                    <div className="text-xs text-gray-400 mt-1">{item.meta || item.date}</div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="text-center mt-4">
                                    {activeTab === "personal" && (
                                        <button
                                            onClick={() => {
                                                navigate("/members", { state: { tab: "individual" } });
                                            }}
                                            className="bg-white border border-[#3000d9] text-[#3000d9] px-4 py-2 rounded text-sm hover:bg-gray-50 btn-animate"
                                        >
                                            XEM THÊM
                                        </button>
                                    )}
                                    {activeTab === "organization" && (
                                        <button
                                            onClick={() => {
                                                navigate("/members", { state: { tab: "organization" } });
                                            }}
                                            className="bg-white border border-[#3000d9] text-[#3000d9] px-4 py-2 rounded text-sm hover:bg-gray-50 btn-animate"
                                        >
                                            XEM THÊM
                                        </button>
                                    )}
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
}