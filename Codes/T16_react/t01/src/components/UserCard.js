export default function UserCard({ user, deleteUser }) {
  return (
    <div className="card" onClick={() => deleteUser(user.id)}>
      <div>
        {user.first_name} {user.last_name}
      </div>
      <div>{user.age}</div>
    </div>
  );
}
