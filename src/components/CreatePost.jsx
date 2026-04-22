import React, { useState } from 'react';

const CreatePost = ({ onAddPost }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAddPost(text);
      setText('');
    }
  };

  return (
    <div className="card create-post">
      <img src="/profile.png" alt="Profile" className="create-post-img" onError={(e) => { e.target.src = 'https://via.placeholder.com/48'; }} />
      <form onSubmit={handleSubmit} style={{ flex: 1, display: 'flex' }}>
        <input 
          type="text" 
          placeholder="Start a post..." 
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
    </div>
  );
};

export default CreatePost;
