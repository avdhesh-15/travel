import React from 'react';
import { FacebookIcon, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 px-8 py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        
        {/* Section 1: FOLLOW + VISIT */}
        <div>
          <div className="mb-4">
            <h2 className="font-bold text-lg mb-2 text-blue-600">FOLLOW US:</h2>
            <div className="flex gap-4 text-gray-700 text-2xl">
              <FacebookIcon />
              <Instagram />
              <Twitter />
            </div>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-2 text-blue-600">VISIT US:</h2>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>Maps & Directions</li>
              <li>Plan Your Visit</li>
              <li>Virtual Tour</li>
            </ul>
          </div>
        </div>

        {/* Section 2: WORK */}
        <div>
          <h2 className="font-bold text-lg mb-2 text-blue-600">WORK WITH US:</h2>
          <ul className="text-sm text-gray-600">
            <li>View Jobs</li>
          </ul>
        </div>

        {/* Section 3: RESOURCES */}
        <div>
          <h2 className="font-bold text-lg mb-2 text-blue-600">RESOURCES AND LINKS</h2>
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
            <div>Library</div>
            <div>Title IX</div>
            <div>Register</div>
            <div>Blackboard</div>
            <div>Emergency Info</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
