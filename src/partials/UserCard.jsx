import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";

const UserCard = ({ user }) => {
  const {setAppUserId } = useApp();
  const switchToUser = () => {
    setAppUserId(user.id);
  }

  return (
    <div className="card card-compact bg-base-100 w-full h-full shadow-xl">
      <div className="card-body">
        <h2 className="card-title">
          {user.firstName} {user.lastName}
          {user.isAdmin && <div className="badge badge-secondary">admin</div>}
        </h2>
        <div className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt={`${user.firstName} ${user.lastName}`}
              src={user.avatar || "https://placehold.co/200x200"}
            />
          </div>
        </div>
        <p>
          <a href={`mailto:${user.email}`}>{user.email}</a>
        </p>
        <div className="card-actions justify-end">
          <button className="btn" onClick={switchToUser}>
            switch to user
          </button>
          <Link to={`/users/${user.id}`} className="btn">
            details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
