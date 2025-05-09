"use client";

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/button';

const HeaderLanding = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-2 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className='flex items-center'>
          <Image src="/logo.jpg" alt="Logo" width={100} height={100}  className="rounded"/>
          <div className="text-xl font-bold text-blue-600">
            Travel Agency
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          {/* <a href="#" className="hover:text-blue-600">Home</a> */}
          <a href="#" className="hover:text-blue-600">About</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
          <a href="#" className="hover:text-blue-600">Support</a>
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button className="text-sm px-4 py-1 border border-blue-600 text-blue-600 rounded hover:bg-blue-50">Login</Button>
          <Button className="text-sm px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">Sign Up</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <Button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2 text-sm text-gray-700">
          <a href="#" className="block hover:text-blue-600">Home</a>
          <a href="#" className="block hover:text-blue-600">About</a>
          <a href="#" className="block hover:text-blue-600">Contact</a>
          <a href="#" className="block hover:text-blue-600">Support</a>
          <div className="pt-2 border-t mt-2">
            <Button className="block w-full text-left px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 mb-2">Login</Button>
            <Button className="block w-full text-left px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Sign Up</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderLanding;
