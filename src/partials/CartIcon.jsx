import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CartIcon = ({ cart }) => {
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setAmount(
      cart.BridgeShopCartProducts.reduce(
        (sum, bscp) => (sum = sum + bscp.amount),
        0
      )
    );
    setTotal(
      cart.BridgeShopCartProducts.reduce(
        (sum, bscp) => (sum = sum + bscp.amount * bscp.ShopProduct.price),
        0
      )
    );
  }, [cart]);

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span className="badge badge-sm indicator-item">{amount}</span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-10 mt-3 w-52 shadow"
      >
        <div className="card-body">
          <span className="text-md">{amount} Item(s) in cart</span>
          <span className="text-info">Subtotal: {new Intl.NumberFormat('de-DE',{style:'currency',currency:'EUR'}).format(total)}</span>
          <div className="card-actions">
            <Link to={`/shop/carts/${cart.id}`} className="btn">
              View cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartIcon;
