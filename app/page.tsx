'use client' ;
import React, { useState } from 'react';
import BeCommunity from './beCommunity2/page';
import AcademicsPage from './academicspage/page';

const HomePage = () => {
  const [activePage, setActivePage] = useState<'community' | 'academics'>('community');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md p-4 flex justify-center gap-4">
        <button
          className={`px-4 py-2 rounded ${
            activePage === 'community' ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-800'
          }`}
          onClick={() => setActivePage('community')}
        >
          BeCommunity
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activePage === 'academics' ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-800'
          }`}
          onClick={() => setActivePage('academics')}
        >
          Academics
        </button>
      </nav>

      {/* Page Content */}
      <main className="p-6">
        {activePage === 'community' && <BeCommunity/>}
        {activePage === 'academics' && <AcademicsPage />}
      </main>
    </div>
  );
};

export default HomePage;
