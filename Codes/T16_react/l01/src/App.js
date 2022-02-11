import { useState } from 'react';
import UserCard from './components/UserCard';

import logo from './logo.svg';
import './App.css';
import { usersData } from './data/users';

function App() {
  // console.log(usersData);

  const [users, setUsers] = useState(usersData.slice(0, 3));

  function deleteUser(id) {
    // console.log('Delete User id:', id);
    const usersNew = users.filter((user) => user.id !== id);
    setUsers(usersNew);
  }
  return (
    <div className='App'>
      <h1>Users 1</h1>
      <div className='card-wrapper'>
        <div className='card'>
          <div>
            {usersData[0].first_name} {usersData[0].last_name}
          </div>
          <div>{usersData[0].age}</div>
        </div>

        <div className='card'>
          <div>
            {usersData[1].first_name} {usersData[0].last_name}
          </div>
          <div>{usersData[1].age}</div>
        </div>
      </div>

      {/* ----------------------- */}

      <h1>Users 2</h1>
      <div className='card-wrapper'>
        {users.map((user) => {
          return (
            <div
              className='card'
              key={user.id}
              onClick={() => deleteUser(user.id)}
            >
              <div>
                {user.first_name} {user.last_name}
              </div>
              <div>{user.age}</div>
            </div>
          );
        })}
      </div>

      {/* ------------------------------------ */}

      <h1>Users 3</h1>
      <div className='card-wrapper'>
        {users.map((user) => {
          return <UserCard user={user} key={user.id} deleteUser={deleteUser} />;
        })}
      </div>
    </div>
  );
}

export default App;
