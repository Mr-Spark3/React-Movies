import React, { useState } from 'react';

function LoginPage({ onLogin }) {
  const [user, setUser] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(user); 
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter username"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;