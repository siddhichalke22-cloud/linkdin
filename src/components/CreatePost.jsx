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
    <div className="card">
      <div className="create-post">
        <img src="https://i.pravatar.cc/150?img=5" alt="Profile" className="create-post-img" />
        <form onSubmit={handleSubmit} style={{ flex: 1, display: 'flex' }}>
          <input
            type="text"
            placeholder="Start a post..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </form>
      </div>
      <div className="create-post-actions">
        <button><span style={{color:'#5f9b41'}}>🎥</span> Video</button>
        <button><span style={{color:'#378fe9'}}>🖼️</span> Photo</button>
        <button><span style={{color:'#e16745'}}>📝</span> Write article</button>
      </div>
    </div>
  );
};

export default CreatePost;
