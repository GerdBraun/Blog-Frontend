import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <div className="card card-compact bg-base-100 w-full shadow-xl">
      <figure className="h-40">
        <img
          src={post.cover || "https://placehold.co/800x450"}
          alt={post.title}
          className="cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {post.title}
          {new Date(post.date).toDateString() === new Date().toDateString() && (
            <div className="badge badge-secondary">NEW</div>
          )}
        </h2>
        <p className="text-xs">
          {new Date(post.date).toLocaleDateString()} / {post.author}
        </p>
        <div className="card-actions justify-end">
          <Link to={`/posts/${post.id}`} className="btn btn-primary">
            details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
