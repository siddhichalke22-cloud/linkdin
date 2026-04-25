import React from 'react';

const Sidebar = () => {
  return (
    <div className="card profile-card">
      <div className="profile-bg"></div>
      <img src="https://i.pravatar.cc/150?img=5" alt="Profile" className="profile-img" />
      <h3>Student Name</h3>
      <p>Student at Newton School of Technology 🎓</p>
      <div className="profile-stats">
        <p>Connections <span>120</span></p>
        <p>Who viewed your profile <span>45</span></p>
      </div>
      <div className="sidebar-links">
        <a href="#">📑 Saved items</a>
        <a href="#">👥 Groups</a>
        <a href="#">📅 Events</a>
      </div>
    </div>
  );
};

export default Sidebar;
