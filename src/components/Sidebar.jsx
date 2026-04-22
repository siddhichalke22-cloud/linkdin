import React from 'react';

const Sidebar = () => {
  return (
    <div className="card profile-card">
      <div className="profile-bg"></div>
      <img src="/profile.png" alt="Profile" className="profile-img" onError={(e) => { e.target.src = 'https://via.placeholder.com/72'; }} />
      <h3>Student Name</h3>
      <p>First Semester Student</p>
      
      <div className="profile-stats">
        <p>Connections <span>120</span></p>
        <p>Profile views <span>45</span></p>
      </div>
    </div>
  );
};

export default Sidebar;
