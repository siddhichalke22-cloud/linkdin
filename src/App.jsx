import React, { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Home': return <Home />;
      case 'Me': return <Profile />;
      case 'Messaging': return <Login />;
      default: return <div style={{textAlign: 'center', marginTop: '50px'}}><h2>{currentPage} Page</h2><p>This page is currently under construction.</p></div>;
    }
  };

  return (
    <div className="App" style={{ backgroundColor: '#f3f2ef', minHeight: '100vh', fontFamily: '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif' }}>
      <Navbar setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <div style={{ paddingTop: '60px' }}>
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
