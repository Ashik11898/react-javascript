import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

let data= {"email":"xyz@email.com","password":"qwerty@123"}

    let url = "http://localhost:5000"
    fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Specifies that you're sending JSON data
        },
        body: JSON.stringify(data), // Converts the data object to JSON
      })
        .then(response => response.json()) // Parse the response JSON
        .then(data => {
          console.log('Success:', data); // Handle the response data
        })
        .catch(error => {
          console.error('Error:', error); // Handle any errors
        });

  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '2rem' }}>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit} autoComplete="off">
        <div style={{ marginBottom: '1rem' }}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
            required
            autoComplete="off"  // Prevents autocomplete
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
            required
            autoComplete="off"  // Prevents autocomplete
          />
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
