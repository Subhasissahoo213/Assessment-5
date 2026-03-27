import React from 'react';
import { Link } from 'react-router-dom';

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