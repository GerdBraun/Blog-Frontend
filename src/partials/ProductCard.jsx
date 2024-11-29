import axios from "axios";
import { useApp } from "../context/AppContext";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const { appUser,loadUserById } = useApp();

  const handleAddToCart = async () => {
    console.log(product);
    console.log(appUser);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_SERVER}/shop/carts`,
        {
          userId: appUser.id,
          productId: product.id,
          amount:1
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success(`Product "${product.name}" added to ${appUser.firstName}'s cart`);
      loadUserById(appUser.id)
    } catch (error) {
      toast.error("Error: " + error.message);
    }
  };

  return (
    <div className="card card-compact bg-base-100 w-full h-full shadow-xl">
      <figure className="h-40">
        <img
          src={product.image || "https://placehold.co/800x450"}
          alt={product.name}
          className="cover"
        />
      </figure>
      <div className="card-body justify-between">
        <div>
          <h2 className="card-title">{product.name}</h2>
          <p className="text-xs">{product.description}</p>
        </div>
        <div className="card-actions justify-end">
          {/* <Link to={`/shop/products/${product.id}`} className="btn">
            details
          </Link> */}
          <button className="btn" onClick={handleAddToCart}>
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
