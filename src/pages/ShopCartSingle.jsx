import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ProductLine from "../partials/ProductLine";
import axios from "axios";
import { useApp } from "../context/AppContext";

const ShopCartSingle = () => {
  const { appUser, loadUserById } = useApp();

  const { id } = useParams();
  const [cart, setCart] = useState(null);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    fetch(`${import.meta.env.VITE_API_SERVER}/shop/carts/${id}`, {
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
        setCart(data);
        const temp = data.BridgeShopCartProducts.reduce(
          (sum, bscp) => (sum = sum + bscp.amount * bscp.ShopProduct.price),
          0
        );

        setTotal(Math.round(temp * 100) / 100);
      })
      .catch((error) => {
        toast.error(`ERROR: ${error}`);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const updateCart = async (productId, amount) => {
    try {
      await axios.put(
        `${import.meta.env.VITE_API_SERVER}/shop/carts`,
        {
          cartId: cart.id,
          productId: productId,
          amount: amount,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      toast.success("Cart updated");
      fetchData();
      loadUserById(appUser.id);
    } catch (error) {
      toast.error("Error: " + error.message);
    }
  };
  return (
    <div
      className={`max-w-screen-lg mx-auto p-4 my-8 ${loading ? "hidden" : ""}`}
    >
      {cart && (
        <div className="card card-compact bg-base-100 w-full shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Cart {cart.id}</h2>
            <div className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <Link to={`/users/${cart.User.id}`}>
                  <img
                    alt={`${cart.User.firstName} ${cart.User.lastName}`}
                    src={cart.User.avatar || "https://placehold.co/200x200"}
                  />
                </Link>
              </div>
            </div>
            <p>
              Owner: {cart.User.firstName} {cart.User.lastName}
            </p>
            <h3 className="text-lg">Orders</h3>
            <ul>
              {cart.BridgeShopCartProducts.map((bscp) => (
                <li key={`${bscp.ShopCartId}_${bscp.ShopProductId}`}>
                  <ProductLine
                    cart={cart}
                    bscp={bscp}
                    updateCart={updateCart}
                  />
                </li>
              ))}
            </ul>
            <p className="font-bold text-right p-2 mb-2">
              Sum Total:{" "}
              {new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR",
              }).format(total)}
            </p>
            <div className="card-actions justify-end">
              <Link to={-1} className="btn">
                back
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopCartSingle;
