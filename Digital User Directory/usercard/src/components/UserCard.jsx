import React from 'react';
import { Link } from 'react-router-dom';

/**
 * UserCard is a presentational component used to display a summary of user information 
 * in a consistent layout. It promotes code reusability by dynamically rendering props 
 * and utilizes React Router's Link for efficient, client-side navigation to detailed 
 * user profiles without triggering a full page reload.
 */

const UserCard = ({ user }) => {
  return (
    <div className="card">
      <h3>{user.name}</h3>
      <p>📧 {user.email}</p>
      <p>🏢 {user.company.name}</p>
      <Link to={`/user/${user.id}`} className="view-btn">
        View Full Profile
      </Link>
    </div>
  );
};

export default UserCard;