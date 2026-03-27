import React, { useState, useEffect } from 'react';
import UserCard from '../components/UserCard';


/**
 * Home serves as a container component that manages the asynchronous data lifecycle
 * of the application. It handles API communication, tracks loading and error states 
 * via React hooks, and dynamically renders a grid of UserCard components once 
 * data is successfully retrieved, ensuring a reactive and resilient UI.
 */

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch users');
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">Loading Directory...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="container">
      <h1>Digital User Directory</h1>
      <div className="user-grid">
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Home;