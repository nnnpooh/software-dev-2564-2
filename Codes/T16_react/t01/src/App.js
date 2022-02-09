import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import { usersData } from "./data/data";
import UserCard from "./components/UserCard";
function App() {
  const [users, setUsers] = useState(usersData);

  function deleteUser(id) {
    const usersNew = users.filter((user) => user.id !== id);
    setUsers(usersNew);
  }
  return (
    <div className="App">
      <h1>Users</h1>
      <div className="card-wrapper">
        {users.map((user) => (
          <div
            className="card"
            key={user.id}
            onClick={() => deleteUser(user.id)}
          >
            <div>
              {user.first_name} {user.last_name}
            </div>
            <div>{user.age}</div>
          </div>
        ))}
      </div>

      <h1>Users</h1>
      <div className="card-wrapper">
        {users.map((user) => (
          <UserCard user={user} key={user.id} deleteUser={deleteUser} />
        ))}
      </div>
    </div>
  );
}

export default App;
