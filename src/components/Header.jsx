import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const menuItems = [
    { name: t.menu.home, href: '/' },
    { name: t.menu.about, href: '/#about' },
    { name: t.menu.activities, href: '/#activities' },
    { name: t.menu.library, href: '/library', isRoute: true },
    { name: t.menu.members, href: '/members', isRoute: true },
    { name: t.menu.contact, href: '/contact', isRoute: true },
    { name: t.menu.register, href: '/register', isRoute: true },
  ];

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img 
                src="/images/DTA_Logo_Final_Color.png" 
                alt="DTA Logo" 
                className="h-8 lg:h-10 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              item.isRoute ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-blue-600 text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 text-sm font-medium transition-colors"
                >
                  {item.name}
                </a>
              )
            ))}
          </nav>

          {/* Right Side - Button & Language */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/register"
              className="ml-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-full hover:opacity-90"
            >
              {t.registerButton}
            </Link>
            <div className="flex items-center space-x-2 text-sm">
              <button 
                onClick={() => toggleLanguage('vi')}
                className={`font-medium transition-colors ${language === 'vi' ? 'text-gray-700' : 'text-gray-400 hover:text-blue-600'}`}
              >
                VIE
              </button>
              <span className="text-gray-300">|</span>
              <button 
                onClick={() => toggleLanguage('en')}
                className={`transition-colors ${language === 'en' ? 'text-gray-700' : 'text-gray-400 hover:text-blue-600'}`}
              >
                ENG
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                item.isRoute ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-gray-700 hover:text-blue-600 text-sm font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 text-sm font-medium"
                  >
                    {item.name}
                  </a>
                )
              ))}
              <Link
                to="/register"
                className="ml-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-full hover:opacity-90 w-full text-center"
              >
                {t.registerButton}
              </Link>
              <div className="flex items-center space-x-2 text-sm justify-center">
                <button 
                  onClick={() => toggleLanguage('vi')}
                  className={`font-medium transition-colors ${language === 'vi' ? 'text-gray-700' : 'text-gray-400 hover:text-blue-600'}`}
                >
                  VIE
                </button>
                <span className="text-gray-300">|</span>
                <button 
                  onClick={() => toggleLanguage('en')}
                  className={`transition-colors ${language === 'en' ? 'text-gray-700' : 'text-gray-400 hover:text-blue-600'}`}
                >
                  ENG
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
