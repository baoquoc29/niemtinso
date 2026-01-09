import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { label: t.footer.quickLinks.home, href: '#' },
    { label: t.footer.quickLinks.about, href: '#' },
    { label: t.footer.quickLinks.programs, href: '#' },
    { label: t.footer.quickLinks.members, href: '#' },
    { label: t.footer.quickLinks.news, href: '#' },
    { label: t.footer.quickLinks.contact, href: '#' },
  ];

  const programLinks = [
    { label: t.footer.programs.trustProgram, href: '#' },
    { label: t.footer.programs.hanoiConvention, href: '#' },
    { label: t.footer.programs.training, href: '#' },
    { label: t.footer.programs.childProtection, href: '#' },
    { label: t.footer.programs.events, href: '#' },
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      href: '#',
    },
    {
      name: 'Twitter',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      href: '#',
    },
    {
      name: 'YouTube',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      href: '#',
    },
    {
      name: 'Zalo',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 48 48" fill="currentColor">
          <circle cx="24" cy="24" r="20" fill="currentColor"/>
          <text x="50%" y="55%" textAnchor="middle" fill="#0C1B3A" fontSize="14" fontWeight="bold" fontFamily="Arial">Z</text>
        </svg>
      ),
      href: '#',
    },
  ];

  return (
    <footer className="bg-[#0C1B3A] text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Contact Info */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center">
                <span className="text-3xl font-bold tracking-wider">DTA</span>
                <div className="ml-2 flex flex-col items-start border-l border-white/30 pl-2">
                  <div className="flex gap-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-[8px] tracking-wider mt-1 leading-tight">DIGITAL<br/>TRUST<br/>ALLIANCE</span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-white mb-4">{t.footer.headquarters}</h3>
              <p className="text-sm text-gray-300">38 Phan Đình Phùng, Ba Đình</p>
              <p className="text-sm text-gray-300">Mail : banthuky@niemtinso.vn</p>
              <p className="text-sm text-gray-300">Hotline : 024.626.00.626</p>
              <p className="text-sm text-gray-300">FB.LN.YT.TW.</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-6">{t.footer.quickAccess}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-6">{t.footer.programsTitle}</h3>
            <ul className="space-y-3">
              {programLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Register & Social */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-6">{t.footer.registerMember}</h3>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-2.5 border border-white/50 rounded-full text-sm text-white hover:bg-white hover:text-[#0C1B3A] transition-all duration-300"
            >
              {t.footer.registerButton}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>

            {/* Social Links */}
            <div className="mt-8">
              <p className="text-sm text-gray-300 mb-4">{t.footer.connectWithUs}</p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white hover:text-[#0C1B3A] transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-5">
          <p className="text-center text-sm text-gray-400">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
