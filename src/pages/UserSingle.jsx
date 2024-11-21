import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UserSingle = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_SERVER}/users/${id}`, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) throw new Error(response.status);
        return response.json();
      })
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        toast.error(`ERROR: ${error}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);
  return (
    <div
      className={`max-w-screen-lg mx-auto p-4 my-8 ${loading ? "hidden" : ""}`}
    >
      {user && (
        <div className="card card-compact bg-base-100 w-full shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              {user.firstName} {user.lastName}
              {user.isAdmin && (
                <div className="badge badge-secondary">admin</div>
              )}
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
            <h3 className="text-lg">
              Posts by {user.firstName} {user.lastName}:
            </h3>
            <ul>
              {user.Posts.map((post) => (
                <li key={post.id}>
                  <Link to={`/posts/${post.id}`}>{post.title} ({new Date(post.updatedAt).toLocaleDateString()})</Link>
                </li>
              ))}
            </ul>
            <div className="card-actions justify-end">
              <Link to={`/users/list`} className="btn">
                back
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserSingle;
