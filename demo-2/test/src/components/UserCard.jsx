import React from "react";
import "./UserCard.css";

function UserCard({ user }) {
  return (
    <div className="card">
      <img
        src={`https://i.pravatar.cc/150?u=${user.id}`}
        alt="avatar"
        className="avatar"
      />
      <h2>Name: {user.name}</h2>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Company:</strong> {user.company.name}</p>
    </div>
  );
}

export default UserCard;