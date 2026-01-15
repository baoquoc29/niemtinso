import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function ProjectDetailPage() {
  const { t } = useLanguage();
  const { id } = useParams();

  const allProjects = t.activitiesPage.projects.articles;
  // Featured projects (excluding current one)
  const featuredArticles = allProjects.filter(a => a.id !== Number(id)).slice(0, 5);

  const project = allProjects.find(a => a.id === Number(id));

  // Breadcrumb labels
  const breadcrumb = t.activitiesPage.breadcrumb;

  // Luôn render layout với placeholder nếu không có dữ liệu
  const displayProject = project || {
    id,
    title: t.activitiesPage.noContent,
    image: '/images/project-main-1.jpg',
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
                  <Link to="/activities?tab=projects" className="hover:text-blue-600 transition-colors uppercase tracking-wider">{breadcrumb.projects}</Link>
                </nav>
                <div className="flex items-center text-blue-600 font-semibold px-1">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0h6m-6 0a2 2 0 00-2 2v6a2 2 0 002 2h8a2 2 0 002-2V9a2 2 0 00-2-2" />
                  </svg>
                  {displayProject.date}
                </div>
              </div>

              {/* Nội dung chi tiết dự án */}
              <article className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 p-6 md:p-10 mb-8">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-8 leading-tight tracking-tight">
                  {displayProject.title}
                </h1>

                <div
                  className="text-gray-700 leading-relaxed text-lg md:text-xl prose prose-blue prose-lg max-w-none article-body"
                  dangerouslySetInnerHTML={{ __html: displayProject.content }}
                />
              </article>
            </div>

            {/* Sidebar: Featured Projects */}
            <aside className="w-full lg:w-[30%]">
              <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden sticky top-24 z-10 transition-all">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-6">
                  <div className="flex items-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-2.5 mr-4 shadow-inner">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-white font-black text-xl tracking-tight">{t.activitiesPage.featured}</h3>
                  </div>
                </div>

                <div className="p-6 space-y-6">
                  {featuredArticles.map((article, index) => (
                    <Link
                      key={article.id}
                      to={`/projects/${article.id}`}
                      className={`flex gap-4 group transition-all transform hover:-translate-x-1 ${index !== featuredArticles.length - 1 ? 'pb-6 border-b border-gray-100' : ''}`}
                    >
                      <div className="w-24 h-20 flex-shrink-0 overflow-hidden rounded-xl shadow-sm">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex-1 min-w-0 flex flex-col justify-center">
                        <h4 className="text-[15px] font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors leading-snug mb-1.5">
                          {article.title}
                        </h4>
                        <p className="text-xs font-medium text-gray-400 flex items-center">
                          <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {article.date}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="p-6 pt-0">
                  <Link
                    to="/activities"
                    className="flex items-center justify-center w-full bg-gray-50 hover:bg-blue-600 hover:text-white border border-transparent text-gray-600 font-bold py-3.5 rounded-xl transition-all duration-300 text-sm group"
                  >
                    {t.activitiesPage.viewMore}
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
