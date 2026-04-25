import React, { useState } from 'react';

const Navbar = ({ setCurrentPage, currentPage, theme, toggleTheme, onLogout }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', icon: '🏠', badge: null },
    { name: 'My Network', icon: '👥', badge: null },
    { name: 'Jobs', icon: '💼', badge: null },
    { name: 'Messaging', icon: '💬', badge: '9+' },
    { name: 'Notifications', icon: '🔔', badge: '18' },
    { name: 'Me', icon: '👤', badge: null },
  ];

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <h1 onClick={() => handleNavClick('Home')}>LinkedIn</h1>
          <div className="search-box">
            <input type="text" placeholder="🔍 Search" />
          </div>
        </div>

        <div className="nav-right">
          <button className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>☰</button>
          <ul className={isMobileMenuOpen ? 'mobile-open' : ''}>
            {navItems.map((item) => (
              <li key={item.name}>
                {item.badge && <span className="nav-badge">{item.badge}</span>}
                <span
                  className={`nav-link ${currentPage === item.name ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.name)}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-text">{item.name}</span>
                </span>
              </li>
            ))}
          </ul>
          <button className="theme-toggle" onClick={toggleTheme} title="Toggle theme">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <button className="theme-toggle" onClick={onLogout} title="Logout" style={{marginLeft: '4px'}}>
            🚪
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
