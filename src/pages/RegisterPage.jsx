import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function RegisterPage() {
    const language = useLanguage();
    const t = (language && (language.t || language)) || {};
    const tfn = typeof t === "function" ? t : (k) => (t && t[k]) || k;

    const [activeTab, setActiveTab] = useState("personal");

    // --- Members for personal and organization (separate slides) ---
    const personalMembers = [
        { id: 1, title: "Nguyễn Văn A", meta: "Chuyên gia CNTT", img: "/src/assets/member-personal1.jpg" },
        { id: 2, title: "Trần Thị B", meta: "An ninh mạng", img: "/src/assets/member-personal2.jpg" },
        { id: 3, title: "Lê Văn C", meta: "Chuyên viên bảo mật", img: "/src/assets/member-personal3.jpg" },
        { id: 4, title: "Phạm Thị D", meta: "Nghiên cứu viên", img: "/src/assets/member-personal4.jpg" },
    ];

    const orgMembers = [
        { id: 1, title: "Công ty Cổ phần VNG", meta: "Hội viên tổ chức", img: "/src/assets/member-org1.jpg" },
        { id: 2, title: "Tập đoàn Viettel", meta: "Hội viên tổ chức", img: "/src/assets/member-org2.jpg" },
        { id: 3, title: "Ngân hàng HLBVN", meta: "Hội viên tổ chức", img: "/src/assets/member-org3.jpg" },
        { id: 4, title: "Tổng công ty MobiFone", meta: "Hội viên tổ chức", img: "/src/assets/member-org4.jpg" },
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
                        <div className="lg:col-span-2 bg-white rounded-lg p-8 shadow-sm">{renderMain(activeTab)}</div>

                        {/* Sidebar with vertical auto-scroller */}
                        <aside className="space-y-6">
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
                                                <img src={item.img} alt="" className="w-20 h-12 object-cover rounded-sm flex-shrink-0 mt-1" />
                                                <div className="flex-1">
                                                    <a href="#" className="text-sm font-medium text-gray-900 hover:underline">{item.title}</a>
                                                    <div className="text-xs text-gray-400 mt-1">{item.meta || item.date}</div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="text-center mt-4">
                                    <button onClick={() => setScrollIndex((s) => s + 1)} className="bg-cyan-400 text-white px-4 py-2 rounded text-sm">
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