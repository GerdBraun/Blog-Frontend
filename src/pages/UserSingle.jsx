import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useApp } from "../context/AppContext";

const UserSingle = () => {
  const { id } = useParams();
  const {setAppUser} = useApp();
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

  const switchToUser = () => {
    setAppUser(user);
  }
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
            <h3 className="text-lg">
              Categories by {user.firstName} {user.lastName}:
            </h3>
            <ul>
              {user.Categories.map((category) => (
                <li key={category.id}>
                  <Link to={`/categories/${category.id}`}>{category.label}</Link>
                </li>
              ))}
            </ul>
            <h3 className="text-lg">
              Carts by {user.firstName} {user.lastName}:
            </h3>
            <ul>{user.ShopCart && 
                <li key={user.ShopCart.id}>
                  <Link to={`/shop/carts/${user.ShopCart.id}`}>view</Link>
                </li>
                }
            </ul>
            <div className="card-actions justify-end">
              <button className="btn" onClick={switchToUser}>switch to user</button>
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
