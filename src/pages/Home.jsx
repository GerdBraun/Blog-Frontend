import { useEffect, useState } from "react";
import PostCard from "../partials/PostCard";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_SERVER}/posts`, {
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
        setPosts(data);
      })
      .catch((error) => {
        console.error("ERROR: ", error);
      });
  }, []);

  return (
    <div>
      <ul className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 my-8">
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
