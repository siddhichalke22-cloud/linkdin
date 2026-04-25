import React, { useState } from 'react';

const ConnectionCard = ({ card, onDismiss }) => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  const handleDismiss = () => {
    setDismissed(true);
    if (onDismiss) onDismiss(card.id);
  };

  return (
    <div className="connection-card">
      <img src={card.banner} alt="" className="connection-banner" onError={(e) => { e.target.style.background = '#a0b4b7'; }} />
      <button className="connection-dismiss" onClick={handleDismiss}>✕</button>
      <img src={card.avatar} alt={card.name} className="connection-avatar" onError={(e) => { e.target.src = 'https://i.pravatar.cc/150?img=1'; }} />
      <div className="connection-info">
        <h4>{card.name}</h4>
        <p>{card.headline}</p>
        <div className="mutual">{card.mutualConnections} mutual connections</div>
      </div>
      <button className="connect-btn">+ Connect</button>
    </div>
  );
};

export default ConnectionCard;
