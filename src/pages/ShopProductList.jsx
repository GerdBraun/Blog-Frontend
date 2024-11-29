import { useEffect, useState } from "react";
import PostCard from "../partials/PostCard";
import { toast } from "react-toastify";
import ProductCard from "../partials/ProductCard";

const ShopProductList = () => {
  const [products, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_SERVER}/shop/products`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) throw new Error(response.status);
        else return response.json();
      })
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        toast.error("Error: " + error.message)
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <ul
        className={`max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 my-8 ${
          loading ? "hidden" : ""
        }`}
      >
        <>
          {products &&
            products.map((product) => (
              <li key={product.id}>
                <ProductCard product={product} />
              </li>
            ))}
        </>{" "}
      </ul>
      <div
        className={`max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 my-8 ${
          loading ? "" : "hidden"
        }`}
      >
        <div className="max-w-screen-lg mx-auto flex flex-col gap-4 w-full">
          <div className="skeleton h-40 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      </div>
    </>
  );
};

export default ShopProductList;
