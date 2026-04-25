import React from 'react';
import Sidebar from '../components/Sidebar.jsx';
import { notifications } from '../data/mockData.js';

const Notifications = () => {
  return (
    <div className="home-layout">
      <div className="left-sidebar"><Sidebar /></div>
      <div className="feed">
        <div className="card notifications-list">
          <h3 style={{ padding:'16px 16px 8px', fontSize:'16px', fontWeight:600 }}>Notifications</h3>
          {notifications.map(notif => (
            <div key={notif.id} className={`notification-item ${notif.unread ? 'unread' : ''}`}>
              <img src={notif.avatar} alt="" className="notification-img" />
              <div className="notification-content">
                <p>{notif.text}</p>
                <p className="detail">{notif.detail}</p>
                <span className="notification-time">{notif.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="right-sidebar">
        <div className="card news-card">
          <h3>Trending News</h3>
          <ul>
            <li><strong>AI reshaping hiring practices</strong><span>9,201 readers</span></li>
            <li><strong>Top skills for 2026</strong><span>7,543 readers</span></li>
            <li><strong>Remote work evolution</strong><span>5,120 readers</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
