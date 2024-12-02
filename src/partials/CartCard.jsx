import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CartCard = ({ cart }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const temp = cart.BridgeShopCartProducts.reduce(
      (sum, bscp) => (sum = sum + bscp.amount * bscp.ShopProduct.price),
      0
    );

    setTotal(Math.round(temp * 100) / 100);
  }, [cart]);

  return (
    <div className="card card-compact bg-base-100 w-full h-full shadow-xl">
      <div className="card-body flex flex-col justify-between">
        <div>
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
          <p>
            Last updated at: {new Date(cart.updatedAt).toLocaleDateString()}
          </p>
          <h3 className="text-lg">Orders</h3>
          <ul>
            {cart.BridgeShopCartProducts.map((bscp) => (
              <li key={`${bscp.ShopCartId}_${bscp.ShopProductId}`}>
                {bscp.amount} x &quot;{bscp.ShopProduct.name}&quot; á €{" "}
                {bscp.ShopProduct.price}
              </li>
            ))}
          </ul>
          <p className="font-bold">Sum Total: € {total}</p>
        </div>
        <div className="card-actions justify-end">
          <Link to={`/shop/carts/${cart.id}`} className="btn">
            details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
