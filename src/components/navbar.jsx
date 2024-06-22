import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <div className={`fixed top-0 left-0 h-screen bg-[#12192C] text-white p-4 transition-all duration-500 z-50 ${isExpanded ? 'w-64' : 'w-20'}`} id="navbar">
      <nav className="flex flex-col justify-between h-full">
        <div>
          <div className="flex justify-between items-center mb-6">
            <i className="fas fa-bars text-xl p-2 cursor-pointer" id="nav-toggle" onClick={toggleNavbar}></i>
            {isExpanded && <a href="#" className="text-white font-semibold">CooliWale</a>}
          </div>
          <div>
            <a href="#" className={`flex items-center space-x-2 p-2 mb-3 rounded-md transition-colors duration-300 ${activeLink === 'home' ? 'bg-[#EC1C24]' : 'hover:bg-[#EC1C24]'}`} onClick={() => handleLinkClick('home')}>
              <i className="fas fa-home text-xl"></i>
              {isExpanded && <span className="text-sm">Home</span>}
            </a>
            <div className="relative group">
              <div className="flex items-center space-x-2 p-2 mb-3 rounded-md cursor-pointer transition-colors duration-300 hover:bg-[#EC1C24]">
                <i className="fa fa-people-carry-box text-xl"></i>
                {isExpanded && <span className="text-sm">Book A Collie</span>}
                {isExpanded && <i className="fas fa-chevron-down ml-auto transition-transform duration-300 group-hover:rotate-180"></i>}
              </div>
              {isExpanded && (
                <ul className="max-h-0 group-hover:max-h-screen overflow-hidden transition-all duration-300 space-y-1 pl-6">
                  <a href="#" className="block text-sm text-[#B6CEFC] hover:text-white">Booking Received</a>
                  <a href="#" className="block text-sm text-[#B6CEFC] hover:text-white">Completed</a>
                  <a href="#" className="block text-sm text-[#B6CEFC] hover:text-white">Nearing Completion</a>
                  <a href="#" className="block text-sm text-[#B6CEFC] hover:text-white">Under Process</a>
                  <a href="#" className="block text-sm text-[#B6CEFC] hover:text-white">Cancelled</a>
                  <a href="#" className="block text-sm text-[#B6CEFC] hover:text-white">Disputed</a>
                </ul>
              )}
            </div>
            <a href="#" className={`flex items-center space-x-2 p-2 mb-3 rounded-md transition-colors duration-300 ${activeLink === 'status' ? 'bg-[#EC1C24]' : 'hover:bg-[#EC1C24]'}`} onClick={() => handleLinkClick('status')}>
              <i className="fas fa-chart-pie text-xl"></i>
              {isExpanded && <span className="text-sm">Status</span>}
            </a>
            <a href="#" className={`flex items-center space-x-2 p-2 mb-3 rounded-md transition-colors duration-300 ${activeLink === 'support' ? 'bg-[#EC1C24]' : 'hover:bg-[#EC1C24]'}`} onClick={() => handleLinkClick('support')}>
              <i className="fas fa-comments text-xl"></i>
              {isExpanded && <span className="text-sm">Support</span>}
            </a>
            <div className="relative group">
              <div className="flex items-center space-x-2 p-2 mb-3 rounded-md cursor-pointer transition-colors duration-300 hover:bg-[#EC1C24]">
                <i className="fa fa-user-lock text-xl"></i>
                {isExpanded && <span className="text-sm">Privacy Policy</span>}
                {isExpanded && <i className="fas fa-chevron-down ml-auto transition-transform duration-300 group-hover:rotate-180"></i>}
              </div>
            </div>
            <div className="relative group">
              <div className="flex items-center space-x-2 p-2 mb-3 rounded-md cursor-pointer transition-colors duration-300 hover:bg-[#EC1C24]">
                <i className="fa fa-file-contract text-xl"></i>
                {isExpanded && <span className="text-sm">Terms & Conditions</span>}
                {isExpanded && <i className="fas fa-chevron-down ml-auto transition-transform duration-300 group-hover:rotate-180"></i>}
              </div>
            </div>
            <div className="relative group">
              <div className="flex items-center space-x-2 p-2 mb-3 rounded-md cursor-pointer transition-colors duration-300 hover:bg-[#EC1C24]">
                <i className="fa fa-bank text-xl"></i>
                {isExpanded && <span className="text-sm">Payment</span>}
                {isExpanded && <i className="fas fa-chevron-down ml-auto transition-transform duration-300 group-hover:rotate-180"></i>}
              </div>
              <a href="#" className={`flex items-center space-x-2 p-2 mb-3 rounded-md transition-colors duration-300 ${activeLink === 'settings' ? 'bg-[#EC1C24]' : 'hover:bg-[#EC1C24]'}`} onClick={() => handleLinkClick('settings')}>
              <i className="fas fa-cogs text-xl"></i>
              {isExpanded && <span className="text-sm">Settings</span>}
            </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
