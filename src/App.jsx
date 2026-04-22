import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Home from './Pages/Home.jsx';
import Profile from './Pages/Profile.jsx';
import Job from './Pages/Job.jsx';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Home': return <Home />;
      case 'Me': return <Profile />;
      case 'Jobs': return <Job />; // Added missing routing to Jobs page as defined in html
      default: return <div style={{textAlign: 'center', marginTop: '50px'}}><h2>{currentPage} Page</h2><p>This page is currently under construction.</p></div>;
    }
  };

  return (
    <div className="App">
      <Navbar setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <div className="main-container">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
