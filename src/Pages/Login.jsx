import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError('Please fill in all fields.');
      return;
    }
    onLogin({ email, name: email.split('@')[0] });
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>LinkedIn</h1>
        <h2>Sign in</h2>
        <p>Stay updated on your professional world</p>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value); setError(''); }} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value); setError(''); }} />
          <button type="submit" className="auth-btn">Sign in</button>
        </form>
        <div className="auth-footer">
          <p>New to LinkedIn? <a href="#" onClick={(e) => e.preventDefault()}>Join now</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
