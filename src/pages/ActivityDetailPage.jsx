import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function ActivityDetailPage() {
  const { t } = useLanguage();
  const { id } = useParams();

  const allArticles = t.activitiesPage.events.articles || [];
  const [visibleFeaturedCount, setVisibleFeaturedCount] = useState(3);

  // Featured articles (excluding current one)
  const featuredArticles = allArticles.filter(a => a.id !== Number(id));
  const displayedFeatured = featuredArticles.slice(0, visibleFeaturedCount);

  const article = allArticles.find(a => a.id === Number(id));

  // Breadcrumb labels
  const breadcrumb = t.activitiesPage.breadcrumb;

  // Luôn render layout với placeholder nếu không có dữ liệu
  const displayArticle = article || {
    id,
    title: t.activitiesPage.noContent,
    image: '/images/event-main-1.jpg',
    date: '',
    content: t.activitiesPage.noContent
  };

  return (
    <main className="pt-16">
      <section className="py-8 md:py-12 bg-gray-50/30 min-h-screen">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="w-full lg:w-[70%]">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
                <nav className="flex items-center gap-2 text-xs md:text-sm font-bold text-gray-500 flex-wrap uppercase tracking-widest px-1">
                  <Link to="/" className="hover:text-blue-600 transition-colors uppercase tracking-wider">{breadcrumb.home}</Link>
                  <span className="text-gray-300">/</span>
                  <Link to="/activities" className="hover:text-blue-600 transition-colors uppercase tracking-wider">{breadcrumb.activities}</Link>
                  <span className="text-gray-300">/</span>
                  <Link to="/activities?tab=events" className="hover:text-blue-600 transition-colors uppercase tracking-wider">{breadcrumb.events}</Link>
                </nav>
                <div className="flex items-center text-blue-600 font-semibold px-1">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0h6m-6 0a2 2 0 00-2 2v6a2 2 0 002 2h8a2 2 0 002-2V9a2 2 0 00-2-2" />
                  </svg>
                  {displayArticle.date}
                </div>
              </div>

              {/* Nội dung chi tiết bài viết */}
              <article className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 p-6 md:p-10 mb-8">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-8 leading-tight tracking-tight">
                  {displayArticle.title}
                </h1>

                <div
                  className="text-gray-700 leading-relaxed text-lg md:text-xl prose prose-blue prose-lg max-w-none article-body"
                  dangerouslySetInnerHTML={{ __html: displayArticle.content }}
                />
              </article>
            </div>

            {/* Sidebar: Featured Articles */}
            <aside className="w-full lg:w-[30%]">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden sticky top-20 z-10">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4">
                  <div className="flex items-center">
                    <div className="bg-white bg-opacity-20 rounded-lg p-2 mr-3">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="text-white font-bold text-lg">{t.activitiesPage.featured}</h3>
                  </div>
                </div>

                {/* Featured Articles List */}
                <div className="p-4 space-y-4">
                  {displayedFeatured.map((article, index) => (
                    <Link
                      key={`${article.id}-${index}`}
                      to={`/activities/${article.id}`}
                      className={`flex gap-3 cursor-pointer group ${index !== displayedFeatured.length - 1 ? 'pb-4 border-b border-gray-100' : ''}`}
                    >
                      <div className="w-20 h-16 flex-shrink-0">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            e.target.src = `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="80" height="64" viewBox="0 0 80 64"%3E%3Crect width="80" height="64" fill="%23e5e7eb"/%3E%3Ctext x="40" y="32" text-anchor="middle" dy=".3em" font-family="Arial, sans-serif" font-size="10" fill="%236b7280"%3E${article.id}%3C/text%3E%3C/svg%3E`;
                          }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors mb-1">
                          {article.title}
                        </h4>
                        <p className="text-xs text-gray-500">
                          {article.date}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* View More Button */}
                <div className="p-4 pt-0">
                  <button
                    onClick={() => {
                      if (visibleFeaturedCount >= featuredArticles.length) {
                        setVisibleFeaturedCount(3);
                      } else {
                        setVisibleFeaturedCount(prev => prev + 3);
                      }
                    }}
                    className="w-full bg-white hover:bg-gray-50 border border-[#3000d9] text-[#3000d9] font-semibold py-2 px-4 rounded-lg transition-colors text-sm btn-animate"
                  >
                    {visibleFeaturedCount >= featuredArticles.length ? (t.activitiesPage.viewLess || 'Thu gọn') : t.activitiesPage.viewMore}
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
