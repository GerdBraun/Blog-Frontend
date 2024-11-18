import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const PostSingle = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_SERVER}/posts/${id}`, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) throw new Error(response.status);
        else return response.json();
      })
      .then((data) => {
        console.log(data);
        setPost(data);
      })
      .catch((error) => {
        toast.error(`ERROR: ${error}`)
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      <div className={`max-w-screen-lg mx-auto p-4 my-8 ${loading ? 'hidden' : ''}`}>
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
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p className="text-xs">
                {new Date(post.date).toLocaleDateString()} / {post.author}
              </p>
              <p>{post.content}</p>
              <div className="card-actions justify-end">
                <Link to="/" className="btn btn-primary">
                  back
                </Link>
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
    </>
  );
};

export default PostSingle;
