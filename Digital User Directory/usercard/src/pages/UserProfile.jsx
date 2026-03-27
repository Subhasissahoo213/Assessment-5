import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const UserProfile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('User not found');
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="loading">Loading Profile...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="container">
      <Link to="/" className="back-btn">← Back to Directory</Link>
      {user && (
        <div className="profile-card">
          <h1>{user.name}</h1>
          <hr />
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> {user.website}</p>
          <div style={{ marginTop: '20px' }}>
            <h3>Address</h3>
            <p>{user.address.street}, {user.address.city}</p>
          </div>
          <div style={{ marginTop: '20px' }}>
            <h3>Company</h3>
            <p>{user.company.name}</p>
            <p><em>"{user.company.catchPhrase}"</em></p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;