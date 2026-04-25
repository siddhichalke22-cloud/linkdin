import React, { useState } from 'react';
import { messageThreads } from '../data/mockData.js';

const Messaging = () => {
  const [threads] = useState(messageThreads);
  const [activeId, setActiveId] = useState(1);
  const [activeTab, setActiveTab] = useState('focused');
  const [msgInput, setMsgInput] = useState('');
  const [localMessages, setLocalMessages] = useState({});

  const activeThread = threads.find(t => t.id === activeId);
  const messages = [...(activeThread?.messages || []), ...(localMessages[activeId] || [])];

  const handleSend = (e) => {
    e.preventDefault();
    if (!msgInput.trim()) return;
    const newMsg = { id: Date.now(), sender: 'You', text: msgInput, timestamp: 'Just now', isOwn: true };
    setLocalMessages(prev => ({ ...prev, [activeId]: [...(prev[activeId] || []), newMsg] }));
    setMsgInput('');
  };

  return (
    <div className="messaging-layout">
      <div className="msg-sidebar">
        <div className="msg-sidebar-header">
          <h3>Messaging</h3>
          <div className="msg-search"><input type="text" placeholder="Search messages" /></div>
        </div>
        <div className="msg-tabs">
          <button className={activeTab === 'focused' ? 'active' : ''} onClick={() => setActiveTab('focused')}>Focused</button>
          <button className={activeTab === 'other' ? 'active' : ''} onClick={() => setActiveTab('other')}>Other</button>
        </div>
        <div className="msg-list">
          {threads.map(thread => (
            <div key={thread.id} className={`msg-thread ${activeId === thread.id ? 'active' : ''}`} onClick={() => setActiveId(thread.id)}>
              <img src={thread.avatar} alt={thread.name} className="msg-thread-avatar" />
              <div className="msg-thread-info">
                <h4>{thread.name}</h4>
                <p>{thread.messages[thread.messages.length - 1]?.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="msg-main">
        <div className="msg-main-header">
          <img src={activeThread?.avatar} alt={activeThread?.name} />
          <h4>{activeThread?.name}</h4>
        </div>
        <div className="msg-messages">
          {messages.map(msg => (
            <div key={msg.id} className={`msg-bubble ${msg.isOwn ? 'own' : ''}`}>
              {!msg.isOwn && <img src={activeThread.avatar} alt="" className="msg-bubble-avatar" />}
              <div>
                <div className="msg-bubble-content">{msg.text}</div>
                <div className="msg-bubble-time">{msg.timestamp}</div>
              </div>
            </div>
          ))}
        </div>
        <form className="msg-input-area" onSubmit={handleSend}>
          <button type="button">📎</button>
          <input type="text" placeholder="Write a message..." value={msgInput} onChange={(e) => setMsgInput(e.target.value)} />
          <button type="button">😊</button>
          <button type="submit">📤</button>
        </form>
      </div>

      <div className="msg-right-sidebar">
        <div className="promoted-card" style={{ border:'none', padding:0 }}>
          <div className="promo-label">Ad · Promoted</div>
          <img src="https://i.pravatar.cc/150?img=60" alt="Company" />
          <h4>Newton School of Technology</h4>
          <p>Admissions open for 2026 batch.</p>
          <button className="promoted-follow-btn">+ Follow</button>
        </div>
      </div>
    </div>
  );
};

export default Messaging;
