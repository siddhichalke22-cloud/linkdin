import React, { useState } from 'react';

const Navbar = ({ setCurrentPage, currentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', action: 'Home' },
    { name: 'My Network', action: 'Home' },
    { name: 'Jobs', action: 'Jobs' },
    { name: 'Messaging', action: 'Messaging' },
    { name: 'Notifications', action: 'Home' },
    { name: 'Me', action: 'Me' },
  ];

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <h1 id="logo" onClick={() => handleNavClick('Home')}>LinkedIn</h1>
          <div className="search-box">
            <input type="text" placeholder="Search" />
          </div>
        </div>
        
        <div className="nav-right">
          <button 
            className="hamburger" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
          <ul className={isMobileMenuOpen ? 'mobile-open' : ''}>
            {navItems.map((item) => (
              <li 
                key={item.name}
                className={currentPage === item.action && item.name === currentPage ? 'active' : ''}
                onClick={() => handleNavClick(item.action)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
