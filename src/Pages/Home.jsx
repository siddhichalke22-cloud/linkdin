import React, { useState } from 'react';
import Sidebar from '../components/Sidebar.jsx';
import CreatePost from '../components/CreatePost.jsx';
import PostCard from '../components/PostCard.jsx';
import { feedPosts, newsItems } from '../data/mockData.js';

const Home = () => {
  const [posts, setPosts] = useState(feedPosts);

  const addPost = (text) => {
    const newPost = {
      id: Date.now(),
      type: 'text',
      suggested: false,
      user: { name: 'You', avatar: 'https://i.pravatar.cc/150?img=5', headline: 'Student at Newton School of Technology', degree: '1st' },
      content: text,
      likes: 0, comments: 0, reposts: 0, timeAgo: 'Just now',
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="home-layout">
      <div className="left-sidebar"><Sidebar /></div>
      <div className="feed">
        <CreatePost onAddPost={addPost} />
        {posts.map(post => <PostCard key={post.id} post={post} />)}
      </div>
      <div className="right-sidebar">
        <div className="card news-card">
          <h3>LinkedIn News</h3>
          <ul>
            {newsItems.map(item => (
              <li key={item.id}>
                <strong>{item.title}</strong>
                <span>{item.readers} readers</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="card promoted-card">
          <div className="promo-label">Ad · Promoted</div>
          <img src="https://i.pravatar.cc/150?img=60" alt="Company" />
          <h4>Newton School of Technology</h4>
          <p>Building the next generation of tech leaders.</p>
          <button className="promoted-follow-btn">+ Follow</button>
        </div>
      </div>
    </div>
  );
};

export default Home;