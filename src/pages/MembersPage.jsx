import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const MembersPage = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('organization');

  const organizationMembers = [
    {
      id: 1,
      name: 'Công ty Cổ phần VNG',
      website: 'vng.com.vn',
      email: 'start@vng.com.vn',
    },
    {
      id: 2,
      name: 'Ngân hàng TNHH MTV Hong Leong Việt Nam',
      website: 'hlbank.com.vn',
      email: 'ask@hlbvn.hongleong.com',
    },
    {
      id: 3,
      name: 'Cục Công nghệ thông tin, Ngân hàng Nhà nước',
      website: 'sbv.gov.vn',
      email: 'cntt@sbv.gov.vn',
    },
    {
      id: 4,
      name: 'Công ty Cổ phần BKAV',
      website: 'bkav.com',
      email: 'Bkav@bkav.com',
    },
    {
      id: 5,
      name: 'Công ty Cổ phần thương mại Công nghệ Go Viet',
      website: 'gojek.com',
      email: 'carevn@gojek.com',
    },
    {
      id: 6,
      name: 'Trường Đại học Kỹ thuật - Hậu cần Công an nhân dân',
      website: 'dhkthc.edu.vn',
      email: 'admin@dhkthc.edu.vn',
    },
    {
      id: 7,
      name: 'Tập đoàn Điện lực Việt Nam',
      website: 'evn.com.vn',
      email: 'hdpc@evn.com.vn',
    },
    {
      id: 8,
      name: 'Tổng công ty Viễn thông MobiFone',
      website: 'mobifone.vn',
      email: 'contact@mobifone.vn',
    },
    {
      id: 9,
      name: 'Công ty Cổ phần FPT',
      website: 'fpt.com.vn',
      email: 'contact@fpt.com.vn',
    },
    {
      id: 10,
      name: 'Tập đoàn Công nghiệp - Viễn thông Quân đội',
      website: 'viettel.com.vn',
      email: 'cskh@viettel.com.vn',
    },
  ];

  const individualMembers = [
    {
      id: 1,
      name: 'Nguyễn Văn A',
      position: 'Chuyên gia An ninh mạng',
      email: 'nguyenvana@email.com',
    },
    {
      id: 2,
      name: 'Trần Thị B',
      position: 'Nhà sáng tạo nội dung',
      email: 'tranthib@email.com',
    },
    {
      id: 3,
      name: 'Lê Văn C',
      position: 'KOL Công nghệ',
      email: 'levanc@email.com',
    },
    {
      id: 4,
      name: 'Phạm Thị D',
      position: 'Influencer',
      email: 'phamthid@email.com',
    },
    {
      id: 5,
      name: 'Hoàng Văn E',
      position: 'Blogger',
      email: 'hoangvane@email.com',
    },
  ];

  return (
    <main className="pt-16">
      <section className="py-8 md:py-10 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-lg overflow-hidden shadow-md">
              <button
                onClick={() => setActiveTab('organization')}
                className={`flex items-center gap-2 px-6 py-3 font-medium text-sm transition-all duration-300 ${
                  activeTab === 'organization'
                    ? 'bg-[#3000d9] text-white'
                    : 'bg-white text-gray-600 hover:bg-[#3000d9]/10'
                }`}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {t.membersPage?.tabOrganization || 'HỘI VIÊN TỔ CHỨC/DOANH NGHIỆP'}
              </button>
              <button
                onClick={() => setActiveTab('individual')}
                className={`flex items-center gap-2 px-6 py-3 font-medium text-sm transition-all duration-300 ${
                  activeTab === 'individual'
                    ? 'bg-[#3000d9] text-white'
                    : 'bg-white text-gray-600 hover:bg-[#3000d9]/10'
                }`}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                {t.membersPage?.tabIndividual || 'HỘI VIÊN CÁ NHÂN'}
              </button>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-10">
            {activeTab === 'organization' 
              ? (t.membersPage?.titleOrganization || 'Danh sách Hội viên tổ chức/doanh nghiệp')
              : (t.membersPage?.titleIndividual || 'Danh sách Hội viên cá nhân')
            }
          </h1>

          {/* Organization Members */}
          {activeTab === 'organization' && (
            <>
              {/* Mobile & Tablet View - Card Layout */}
              <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4">
                {organizationMembers.map((member) => (
                  <div 
                    key={member.id} 
                    className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        {member.id}
                      </span>
                      <h3 className="text-base font-semibold text-gray-900 leading-tight">
                        {member.name}
                      </h3>
                    </div>
                    <div className="space-y-3 pl-11">
                      <div className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                        <a 
                          href={`https://${member.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 hover:text-blue-800 hover:underline break-all"
                        >
                          {member.website}
                        </a>
                      </div>
                      <div className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-sm text-gray-600 break-all">{member.email}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop View - Table Layout */}
              <div className="hidden lg:block bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="px-6 py-4 text-left text-sm font-semibold text-blue-600 w-20">
                          {t.membersPage?.columnNo || 'STT'}
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-blue-600">
                          {t.membersPage?.columnName || 'Tên tổ chức'}
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-blue-600 w-48">
                          {t.membersPage?.columnWebsite || 'Website'}
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-blue-600 w-64">
                          {t.membersPage?.columnEmail || 'Email liên hệ'}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {organizationMembers.map((member, index) => (
                        <tr 
                          key={member.id} 
                          className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                            index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                          }`}
                        >
                          <td className="px-6 py-4 text-sm text-gray-600 text-center">
                            {member.id}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                            {member.name}
                          </td>
                          <td className="px-6 py-4 text-sm">
                            <a 
                              href={`https://${member.website}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 hover:underline"
                            >
                              {member.website}
                            </a>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">
                            {member.email}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          {/* Individual Members */}
          {activeTab === 'individual' && (
            <>
              {/* Mobile & Tablet View - Card Layout */}
              <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4">
                {individualMembers.map((member) => (
                  <div 
                    key={member.id} 
                    className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        {member.id}
                      </span>
                      <h3 className="text-base font-semibold text-gray-900">
                        {member.name}
                      </h3>
                    </div>
                    <div className="space-y-3 pl-11">
                      <div className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-sm text-gray-600">{member.position}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-sm text-gray-600 break-all">{member.email}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop View - Table Layout */}
              <div className="hidden lg:block bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="px-6 py-4 text-left text-sm font-semibold text-blue-600 w-20">
                          {t.membersPage?.columnNo || 'STT'}
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-blue-600">
                          {t.membersPage?.columnMemberName || 'Họ và tên'}
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-blue-600 w-64">
                          {t.membersPage?.columnPosition || 'Chức danh'}
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-blue-600 w-64">
                          {t.membersPage?.columnEmail || 'Email liên hệ'}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {individualMembers.map((member, index) => (
                        <tr 
                          key={member.id} 
                          className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                            index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                          }`}
                        >
                          <td className="px-6 py-4 text-sm text-gray-600 text-center">
                            {member.id}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                            {member.name}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">
                            {member.position}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">
                            {member.email}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
};

export default MembersPage;
