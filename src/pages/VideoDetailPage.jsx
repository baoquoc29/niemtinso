import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function VideoDetailPage() {
    const { t } = useLanguage();
    const { id } = useParams();

    // Dữ liệu video (Giả lập giống trong LibraryPage)
    const videos = [
        {
            id: 1,
            title: "Recap Hành trình Không Một Mình 2025",
            embedUrl: "https://www.youtube.com/embed/4gEob-oGu6g?si=KIUnfYbxR-SBo-Kq&modestbranding=1&rel=0&iv_load_policy=3",
            thumbnail: "https://img.youtube.com/vi/4gEob-oGu6g/maxresdefault.jpg",
            date: "16/01/2026",
            description: "Video recap hành trình đầy cảm xúc của chiến dịch Không Một Mình 2025."
        },
        {
            id: 2,
            title: "Recap Đêm Gala âm nhạc Không Một Mình 2025",
            embedUrl: "https://www.youtube.com/embed/4oVttisgsyc?si=OTGh-EAcbAPH7pkz&modestbranding=1&rel=0&iv_load_policy=3",
            thumbnail: "https://img.youtube.com/vi/4oVttisgsyc/maxresdefault.jpg",
            date: "15/01/2026",
            description: "Những khoảnh khắc đáng nhớ tại đêm Gala âm nhạc Không Một Mình 2025 với sự góp mặt của nhiều nghệ sĩ nổi tiếng."
        }
    ];

    const video = videos.find(v => v.id === Number(id));

    // Video liên quan (loại trừ video hiện tại)
    const relatedVideos = videos.filter(v => v.id !== Number(id));

    // Tự động cuộn lên đầu trang khi id thay đổi
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!video) return <div className="pt-32 text-center text-gray-500">Video không tồn tại hoặc đã bị xóa.</div>;

    return (
        <main className="pt-16">
            <section className="py-8 md:py-12 bg-gray-50/30 min-h-screen">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                        {/* Main Content (70%) */}
                        <div className="w-full lg:w-[70%]">
                            {/* Breadcrumb */}
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
                                <nav className="flex items-center gap-2 text-xs md:text-sm font-bold text-gray-500 flex-wrap uppercase tracking-widest px-1">
                                    <Link to="/" className="hover:text-blue-600 transition-colors uppercase tracking-wider">Trang chủ</Link>
                                    <span className="text-gray-300">/</span>
                                    <Link to="/library" className="hover:text-blue-600 transition-colors uppercase tracking-wider">Thư viện</Link>
                                    <span className="text-gray-300">/</span>
                                    <span className="text-[#3000d9] uppercase tracking-wider">Video</span>
                                </nav>
                                <div className="flex items-center text-[#3000d9] font-semibold px-1">
                                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0h6m-6 0a2 2 0 00-2 2v6a2 2 0 002 2h8a2 2 0 002-2V9a2 2 0 00-2-2" />
                                    </svg>
                                    {video.date}
                                </div>
                            </div>

                            {/* Video Player & Info */}
                            <article className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 p-6 md:p-8 mb-8">
                                {/* Iframe Container */}
                                <div className="w-full aspect-video bg-black rounded-xl overflow-hidden mb-6 md:mb-8 shadow-lg relative cursor-pointer">
                                    <iframe
                                        src={video.embedUrl}
                                        title={video.title}
                                        className="w-full h-full"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    ></iframe>
                                </div>

                                <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#3000d9] mb-4 leading-tight tracking-tight">
                                    {video.title}
                                </h1>

                                <div className="text-gray-700 leading-relaxed text-base md:text-lg border-t border-gray-100 pt-6 mt-4">
                                    {video.description}
                                </div>
                            </article>
                        </div>

                        {/* Sidebar: Video liên quan (30%) */}
                        <aside className="w-full lg:w-[30%]">
                            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden sticky top-20 z-10">
                                {/* Header */}
                                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4">
                                    <div className="flex items-center">
                                        <div className="bg-white bg-opacity-20 rounded-lg p-2 mr-3">
                                            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-white font-bold text-lg uppercase">Video liên quan</h3>
                                    </div>
                                </div>

                                {/* Video List */}
                                <div className="p-4 space-y-5">
                                    {relatedVideos.map((v) => (
                                        <Link
                                            key={v.id}
                                            to={`/library/video/${v.id}`}
                                            className="group block"
                                        >
                                            <div className="flex flex-col gap-3">
                                                {/* Thumbnail wrapper */}
                                                <div className="w-full aspect-video rounded-lg overflow-hidden relative shadow-sm group-hover:shadow-md transition-shadow bg-black">
                                                    <img
                                                        src={v.thumbnail}
                                                        alt={v.title}
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
                                                    />
                                                    {/* Play icon overlay */}
                                                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                                                        <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform backdrop-blur-sm">
                                                            <svg className="w-5 h-5 text-[#3000d9] ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M8 5v14l11-7z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Info - Style giống card grid */}
                                                <div>
                                                    <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#3000d9] transition-colors line-clamp-2 leading-snug">
                                                        {v.title}
                                                    </h4>
                                                    <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                                                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0h6m-6 0a2 2 0 00-2 2v6a2 2 0 002 2h8a2 2 0 002-2V9a2 2 0 00-2-2" />
                                                        </svg>
                                                        {v.date}
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}

                                    {relatedVideos.length === 0 && (
                                        <p className="text-gray-500 text-sm text-center py-4">Không có video liên quan.</p>
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
