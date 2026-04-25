import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Home from './Pages/Home.jsx';
import Profile from './Pages/Profile.jsx';
import Job from './Pages/Job.jsx';
import Network from './Pages/Network.jsx';
import Messaging from './Pages/Messaging.jsx';
import Notifications from './Pages/Notifications.jsx';
import Login from './Pages/Login.jsx';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('linkedin_user');
    return saved ? JSON.parse(saved) : null;
  });
  const [theme, setTheme] = useState(() => localStorage.getItem('linkedin_theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('linkedin_theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('linkedin_user', JSON.stringify(userData));
    setCurrentPage('Home');
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('linkedin_user');
    setCurrentPage('Home');
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'Home': return <Home />;
      case 'Me': return <Profile />;
      case 'Jobs': return <Job />;
      case 'My Network': return <Network />;
      case 'Messaging': return <Messaging />;
      case 'Notifications': return <Notifications />;
      default: return <Home />;
    }
  };

  return (
    <div className="App">
      <Navbar setCurrentPage={setCurrentPage} currentPage={currentPage} theme={theme} toggleTheme={toggleTheme} onLogout={handleLogout} />
      <div className="main-container">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
