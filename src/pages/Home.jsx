import { useState } from "react";
import PostCard from "../partials/PostCard";

const Home = () => {
  const [posts, setPosts] = useState([]);

  return (
    <div>
      <ul>
        <>
          {posts &&
            posts.map((post) => (
              <li key={post.id}>
                <PostCard post={post} />
              </li>
            ))}
        </>{" "}
      </ul>
    </div>
  );
};

export default Home;
