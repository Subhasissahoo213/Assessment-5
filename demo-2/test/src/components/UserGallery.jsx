import React, { use } from "react";
import UserCard from "./UserCard";
import "./UserGallery.css";

const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

const usersPromise = fetchUsers();

function UserGallery() {
  const users = use(usersPromise);

  return (
    <div>
      <h1 className="heading">User Card Gallery</h1>

      <div className="container">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default UserGallery;