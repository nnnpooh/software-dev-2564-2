export default function UserCard({ user, deleteUser }) {
  //   console.log(user);
  return (
    <div className='card' key={user.id} onClick={() => deleteUser(user.id)}>
      <div>
        {user.first_name} {user.last_name}
      </div>
      <div>{user.age}</div>
    </div>
  );
}
