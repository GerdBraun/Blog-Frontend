import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const PostEdit = () => {
  const { id } = useParams();
  const [post, setPost] = useState({
    title: "",
    content: "",
    author: "",
    cover: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (!validateForm()) {
      toast.warning("Please check your form");
      return;
    }

    const { title, content, cover, author } = post;

    fetch(`${import.meta.env.VITE_API_SERVER}/posts/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content, cover, author }),
    })
      .then((response) => {
        if (!response.ok) throw new Error(response.status);
        return response.json();
      })
      .then((data) => {
        toast.success("Post saved successfully");
        navigate(`/posts/${id}`);
      })
      .catch((error) => {
        toast.error("Error: " + error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear error on change
  };

  const validateForm = () => {
    const newErrors = {};
    if (!post.title) newErrors.title = "Title is required";
    if (!post.content) newErrors.content = "Content is required";
    if (!post.author) newErrors.author = "Author is required";
    if (!post.cover) newErrors.cover = "Cover is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className="max-w-screen-lg mx-auto p-4 my-8">
      <h1 className="text-3xl mb-8">Edit Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-control mb-4">
          <label>
            Title
            <input
              name="title"
              type="text"
              className="input input-bordered w-full"
              placeholder="post title"
              value={post.title}
              onChange={handleChange}
              required
            />
          </label>
          {errors.title && <p className="text-red-500">{errors.title}</p>}{" "}
        </div>
        <div className="form-control mb-4">
          <label>Content</label>
          <textarea
            name="content"
            type="text"
            className="textarea textarea-bordered  w-full"
            placeholder="post content"
            value={post.content}
            onChange={handleChange}
            required
          />
          {errors.content && <p className="text-red-500">{errors.content}</p>}{" "}
        </div>
        <div className="form-control mb-4">
          <label>Author</label>
          <input
            name="author"
            type="text"
            className="input input-bordered w-full"
            placeholder="post author"
            value={post.author}
            onChange={handleChange}
            required
          />
          {errors.author && <p className="text-red-500">{errors.author}</p>}{" "}
        </div>
        <div className="form-control mb-4">
          <label>Cover</label>
          <input
            name="cover"
            type="url"
            className="input input-bordered w-full"
            placeholder="post cover"
            value={post.cover}
            onChange={handleChange}
            required
          />
          {errors.cover && <p className="text-red-500">{errors.cover}</p>}{" "}
        </div>
        <div>
          <button className="btn" disabled={loading}>
            send
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostEdit;