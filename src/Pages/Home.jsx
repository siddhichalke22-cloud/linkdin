import React, { useState } from 'react';
import Sidebar from '../components/Sidebar.jsx';
import CreatePost from '../components/CreatePost.jsx';
import Post from '../components/Post.jsx';

const Home = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      name: 'Jane Smith',
      content: 'Excited to announce my new role!',
      likes: 0,
      liked: false,
      comments: [],
    }
  ]);

  const addPost = (text) => {
    const newPost = {
      id: Date.now(),
      name: "You",
      content: text,
      likes: 0,
      liked: false,
      comments: [],
    };

    setPosts([newPost, ...posts]);
  };

  return (
    <div className="home-layout">
      <div className="left-sidebar">
        <Sidebar />
      </div>
      
      <div className="feed">
        <CreatePost onAddPost={addPost} />
        {posts.map(post => (
          <Post
            key={post.id}
            post={post}
            posts={posts}
            setPosts={setPosts}
          />
        ))}
      </div>
      
      <div className="right-sidebar">
        <div className="card news-card">
          <h3>LinkedIn News</h3>
          <ul>
            <li><strong>Tech hiring on the rise</strong></li>
            <li><strong>The future of AI in 2026</strong></li>
            <li><strong>Remote work trends</strong></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;