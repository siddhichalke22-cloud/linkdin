import React from 'react';

const Post = ({ post, posts, setPosts }) => {
  const handleLike = () => {
    const updatedPosts = posts.map(p => {
      if (p.id === post.id) {
        return {
          ...p,
          liked: !p.liked,
          likes: p.liked ? p.likes - 1 : p.likes + 1
        };
      }
      return p;
    });
    setPosts(updatedPosts);
  };

  return (
    <div className="card post">
      <div className="post-padding">
        <div className="post-header">
          <img src="/profile.png" alt="Profile" className="post-header-img" onError={(e) => { e.target.src = 'https://via.placeholder.com/48'; }} />
          <div>
            <h4>{post.name}</h4>
            <p>Just now</p>
          </div>
        </div>
        
        <div className="post-content">
          <p>{post.content}</p>
        </div>
      </div>
      
      <div className="post-footer">
        <button 
          onClick={handleLike} 
          style={{ color: post.liked ? '#0a66c2' : '#666' }}
        >
          Like ({post.likes})
        </button>
        <button>Comment</button>
        <button>Share</button>
      </div>
    </div>
  );
};

export default Post;
