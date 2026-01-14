import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useNavigate } from 'react-router-dom';


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

const ActivitiesPage = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('events');
  const navigate = useNavigate();
  const [headerRef, headerVisible] = useScrollAnimation();
  const [contentRef, contentVisible] = useScrollAnimation();

  const tabs = [
    { id: 'events', label: t.activitiesPage.tabs.events },
    { id: 'projects', label: t.activitiesPage.tabs.projects },
  ];

  const currentContent = {
    title: activeTab === 'events' ? t.activitiesPage.events.title : t.activitiesPage.projects.title,
    mainArticles: activeTab === 'events' ? t.activitiesPage.events.articles : t.activitiesPage.projects.articles,
    featuredArticles: activeTab === 'events' ? t.activitiesPage.events.articles : t.activitiesPage.projects.articles, // Using same articles for featured for now
  };

  return (
    <main className="pt-16">
      <section className="py-8 md:py-10 bg-white min-h-screen">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header with Tabs */}
          <div
            ref={headerRef}
            className={`flex flex-col items-center mb-8 gap-4 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
          >
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 btn-animate ${activeTab === tab.id
                    ? 'bg-[#3000d9] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-[#3000d9]/10'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div
            ref={contentRef}
            className={`max-w-7xl mx-auto transition-all duration-700 delay-200 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {(activeTab === 'events' || activeTab === 'projects') && currentContent.mainArticles && currentContent.mainArticles.length > 0 ? (
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Main Content - 98% on mobile, ~70% on desktop */}
                <div className="w-full lg:w-[70%] space-y-8">
                  {currentContent.mainArticles.map((article, index) => (
                    <div
                      key={article.id}
                      className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 card-animate cursor-pointer"
                      style={{ transitionDelay: `${index * 100}ms` }}
                      onClick={() => {
                        if (activeTab === 'projects') {
                          navigate(`/projects/${article.id}`);
                        } else {
                          navigate(`/activities/${article.id}`);
                        }
                      }}
                    >
                      <div className="flex flex-col md:flex-row">
                        {/* Image */}
                        <div className="md:w-2/5 lg:w-2/5">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-48 md:h-full object-cover"
                            onError={(e) => {
                              e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23e5e7eb'/%3E%3Ctext x='200' y='150' text-anchor='middle' dy='.3em' font-family='Arial, sans-serif' font-size='16' fill='%236b7280'%3E${activeTab === 'events' ? t.activitiesPage.tabs.events : t.activitiesPage.tabs.projects} ${article.id}%3C/text%3E%3C/svg%3E`;
                            }}
                          />
                        </div>

                        {/* Content */}
                        <div className="md:w-3/5 lg:w-3/5 p-6">
                          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 line-clamp-3 hover:text-blue-600 transition-colors cursor-pointer">
                            {article.title}
                          </h2>

                          <div className="flex items-center text-blue-600 text-sm mb-4">
                            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0h6m-6 0a2 2 0 00-2 2v6a2 2 0 002 2h8a2 2 0 002-2V9a2 2 0 00-2-2" />
                            </svg>
                            {article.date}
                          </div>

                          <p className="text-gray-600 leading-relaxed line-clamp-4">
                            {article.summary || article.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Sidebar - Featured Articles */}
                <div className="w-full lg:w-[30%]">
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
                      {currentContent.featuredArticles.map((article, index) => (
                        <div
                          key={article.id}
                          className={`flex gap-3 cursor-pointer group ${index !== currentContent.featuredArticles.length - 1 ? 'pb-4 border-b border-gray-100' : ''}`}
                          onClick={() => {
                            if (activeTab === 'projects') {
                              navigate(`/projects/${article.id}`);
                            } else {
                              navigate(`/activities/${article.id}`);
                            }
                          }}
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
                        </div>
                      ))}
                    </div>

                    {/* View More Button */}
                    <div className="p-4 pt-0">
                      <button className="w-full bg-white hover:bg-gray-50 border border-[#3000d9] text-[#3000d9] font-semibold py-2 px-4 rounded-lg transition-colors text-sm btn-animate">
                        {t.activitiesPage.viewMore}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0h6m-6 0a2 2 0 00-2 2v6a2 2 0 002 2h8a2 2 0 002-2V9a2 2 0 00-2-2" />
                  </svg>
                </div>
                <p className="text-gray-500 text-lg">{t.activitiesPage.noContent}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ActivitiesPage;