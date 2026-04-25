import React, { useState } from 'react';
import { connectionCards } from '../data/mockData.js';

const ConnectionCard = ({ card, onDismiss }) => {
  return (
    <div className="connection-card">
      <img src={card.banner} alt="" className="connection-banner" />
      <button className="connection-dismiss" onClick={() => onDismiss(card.id)}>✕</button>
      <img src={card.avatar} alt={card.name} className="connection-avatar" />
      <div className="connection-info">
        <h4>{card.name}</h4>
        <p>{card.headline}</p>
        <div className="mutual">{card.mutualConnections} mutual connections</div>
      </div>
      <button className="connect-btn">+ Connect</button>
    </div>
  );
};

const Network = () => {
  const [cards, setCards] = useState(connectionCards);

  const handleDismiss = (id) => {
    setCards(cards.filter(c => c.id !== id));
  };

  return (
    <div className="network-layout">
      <div className="left-sidebar">
        <div className="card network-overview">
          <h3>Manage my network</h3>
          <div className="network-overview-item">Invitations <span>0</span></div>
          <div className="network-overview-item">Connections <span>0</span></div>
          <div className="network-overview-item">Following <span>0</span></div>
          <div className="network-overview-item">Groups <span>3</span></div>
          <div className="network-overview-item">Events <span>1</span></div>
          <div className="network-overview-item">Pages <span>8</span></div>
        </div>
      </div>
      <div className="feed">
        <div className="people-section">
          <h3>People you may know</h3>
          <div className="people-grid">
            {cards.map(card => (
              <ConnectionCard key={card.id} card={card} onDismiss={handleDismiss} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Network;
