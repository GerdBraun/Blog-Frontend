import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const PostSingle = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_SERVER}/posts/${id}`, {
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
        setPost(data);
      })
      .catch((error) => {
        toast.error(`ERROR: ${error}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  const handleDelete = () => {
    fetch(`${import.meta.env.VITE_API_SERVER}/posts/${id}`, {
      method: "DELETE",
      headers: {
        accept: "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) throw new Error(response.status);
        else return response;
      })
      .then(() => {
        toast.success(`Post deleted`);
        navigate("/");
      })
      .catch((error) => {
        toast.error(`ERROR: ${error}`);
      });
  };

  return (
    <>
      <div
        className={`max-w-screen-lg mx-auto p-4 my-8 ${
          loading ? "hidden" : ""
        }`}
      >
        {post ? (
          <div className="card card-compact bg-base-100 w-full shadow-xl">
            <figure className="h-96">
              <img
                src={post.cover || "https://placehold.co/800x450"}
                alt={post.title}
                className="cover w-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {post.title}
                {new Date(post.updatedAt).toDateString() ===
                  new Date().toDateString() && (
                  <div className="badge badge-secondary">NEW</div>
                )}
              </h2>
              <div
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt={`${post.User.firstName} ${post.User.lastName}`}
                    src={post.User.avatar || "https://placehold.co/200x200"}
                    />
                </div>
              </div>
              <p className="text-xs">
                {new Date(post.updatedAt).toLocaleDateString()} / {post.author}
                / {post.User.firstName} {post.User.lastName}
              </p>
              <p>{post.content}</p>
              <div className="card-actions justify-between">
                <Link to="/" className="btn">
                  back
                </Link>
                <div>
                  <Link to={`/posts/edit/${post.id}`} className="btn">
                    edit
                  </Link>
                  <button className="btn" onClick={handleDelete}>
                    delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div role="alert" className="alert alert-warning">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span>Warning: Post not found!</span>
          </div>
        )}
      </div>

      <div
        className={`max-w-screen-lg mx-auto p-4 my-8 flex flex-col gap-4 ${
          loading ? "" : "hidden"
        }`}
      >
        <div className="skeleton h-96 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    </>
  );
};

export default PostSingle;
