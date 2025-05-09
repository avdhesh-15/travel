"use client" ;

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import HeaderLanding from '@/components/HeaderLanding';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const LandingPage = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [showDialog, setShowDialog] = useState(false);
  const router = useRouter();

  const handleSearch = () => {
    // If not logged in, show dialog
    setShowDialog(true);
  };

  const goToSignin = () => {
    router.push('/signin');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <HeaderLanding />

      <main className="flex-grow p-6 flex flex-col items-center justify-center bg-gray-50">
        <div className="flex gap-2 items-center w-full max-w-md">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="flex-1 border border-gray-300 rounded-md py-2 px-4 text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <Button
            onClick={handleSearch}
            className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer">
            <Search className="w-5 h-5" />
          </Button>
        </div>

        {/* Dialog Box */}
        {showDialog && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center space-y-4">
              <h2 className="text-lg font-semibold text-gray-800">You are not logged in</h2>
              <p className="text-sm text-gray-600">Please log in or sign up to continue.</p>
              <div className="flex gap-4 justify-center">
                <button onClick={goToSignin} className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
                  Log In
                </button>
                <button onClick={goToSignin} className="px-4 py-2 text-sm border border-blue-600 text-blue-600 rounded hover:bg-blue-50">
                  Sign Up
                </button>
              </div>
              <button onClick={() => setShowDialog(false)} className="text-xs text-gray-500 hover:underline">Close</button>
            </div>
          </div>
        )}
      </main>


      <Footer />
    </div>
  );
};

export default LandingPage;
