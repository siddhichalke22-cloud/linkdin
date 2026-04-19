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
    <div style={{ display: 'flex', maxWidth: '1128px', margin: '20px auto', gap: '24px', padding: '0 16px' }}>
      <div style={{ flex: '0 0 225px' }}>
        <Sidebar />
      </div>
      <div style={{ flex: '0 0 555px' }}>
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
      <div style={{ flex: '0 0 300px' }}>
        <div style={{ backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e0dfdc', padding: '12px' }}>
          <h3 style={{ margin: '0 0 12px 0', fontSize: '16px' }}>LinkedIn News</h3>
          <ul style={{ margin: 0, paddingLeft: '20px', color: 'gray', fontSize: '14px' }}>
            <li style={{ marginBottom: '8px' }}>Tech hiring on the rise</li>
            <li style={{ marginBottom: '8px' }}>The future of AI in 2026</li>
            <li style={{ marginBottom: '8px' }}>Remote work trends</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;