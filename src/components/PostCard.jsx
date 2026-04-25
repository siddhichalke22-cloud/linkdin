import React from 'react';

const PostCard = ({ post }) => {
  return (
    <div className="card post">
      <div className="post-padding">
        {post.suggested && <div className="post-suggested">Suggested</div>}
        <div className="post-header">
          <img src={post.user.avatar} alt={post.user.name} className="post-header-img" onError={(e) => { e.target.src = 'https://i.pravatar.cc/150?img=1'; }} />
          <div className="post-header-info">
            <h4>{post.user.name} <span className="degree">• {post.user.degree}</span></h4>
            <p>{post.user.headline}</p>
            <p>{post.timeAgo}</p>
          </div>
          {post.user.degree !== '1st' && <button className="follow-btn">+ Follow</button>}
        </div>
        <div className="post-content">{post.content}</div>
      </div>

      {post.type === 'image' && post.image && (
        <img src={post.image} alt="Post" className="post-img" onError={(e) => { e.target.style.display='none'; }} />
      )}

      {post.type === 'document' && post.document && (
        <div className="post-document">
          <div className="post-document-cover">
            <div className="doc-logo">🎓</div>
            <h2>{post.document.title}</h2>
          </div>
          <div className="post-document-footer">
            <span>{post.document.university}</span>
            <span>{post.document.pages} pages</span>
          </div>
        </div>
      )}

      {post.type === 'article' && post.article && (
        <div className="post-article">
          <img src={post.article.image} alt={post.article.title} onError={(e) => { e.target.style.display='none'; }} />
          <div className="post-article-info">
            <h4>{post.article.title}</h4>
            <p>{post.article.source}</p>
          </div>
        </div>
      )}

      <div className="post-social-counts">
        <span>👍 {post.likes.toLocaleString()}</span>
        <span>{post.comments} comments • {post.reposts} reposts</span>
      </div>
      <div className="post-footer">
        <button>👍 Like</button>
        <button>💬 Comment</button>
        <button>🔄 Repost</button>
        <button>📤 Send</button>
      </div>
    </div>
  );
};

export default PostCard;
