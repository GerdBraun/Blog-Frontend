import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <div className="card card-compact bg-base-100 w-full h-full shadow-xl">
      <figure className="h-40">
        <img
          src={post.cover || "https://placehold.co/800x450"}
          alt={post.title}
          className="cover"
        />
      </figure>
      <div className="card-body justify-between">
        <div>
        <h2 className="card-title">
          {post.title}
          {new Date(post.updatedAt).toDateString() ===
            new Date().toDateString() && (
            <div className="badge badge-secondary">NEW</div>
          )}
        </h2>
        <Link
          to={`/users/${post.User.id}`}
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              alt={`${post.User.firstName} ${post.User.lastName}`}
              src={post.User.avatar || "https://placehold.co/200x200"}
            />
          </div>
        </Link>
        <p className="text-xs">
          {new Date(post.updatedAt).toLocaleDateString()} / {post.author} /{" "}
          {post.User.firstName} {post.User.lastName}
        </p>
        <h3 className="text-md">Categories:</h3>
        <ul className="text-xs">
          {post.Categories.map((category) => (
            <li key={category.id}>
              <Link to={`/categories/${category.id}`}>{category.label}</Link>
            </li>
          ))}
        </ul>
        </div>
        <div className="card-actions justify-end">
          <Link to={`/posts/${post.id}`} className="btn">
            details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
