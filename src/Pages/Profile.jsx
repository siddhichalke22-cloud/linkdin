import React from 'react';
import Sidebar from '../components/Sidebar.jsx';

const Profile = () => {
  return (
    <div className="home-layout">
      <div className="left-sidebar">
        <Sidebar />
      </div>
      <div className="feed" style={{ backgroundColor: 'white', padding: '24px', borderRadius: '8px', border: '1px solid #e0dfdc' }}>
        <h2>User Profile</h2>
        <p style={{ marginTop: '16px', color: '#666' }}>
          This is the expanded profile view. In a full implementation, this section would display the user's detailed experience, education, skills, and activities.
        </p>
      </div>
      <div className="right-sidebar">
        <div className="card news-card">
          <h3>Similar Profiles</h3>
          <ul>
            <li><strong>John Doe</strong> - Software Engineer</li>
            <li><strong>Jane Smith</strong> - Product Manager</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
