import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            <span className="text-2xl font-bold text-white">
              <span className="text-purple-500">Port</span>folio
            </span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-500">
              &copy; {currentYear} Janvi Gorajiya. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer