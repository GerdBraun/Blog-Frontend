import { useState } from "react";
import { Link } from "react-router-dom";

const ProductLine = ({ bscp, updateCart }) => {
  const [amount, setAmount] = useState(bscp.amount);
  const handleUpdate = () => {
    updateCart(bscp.ShopProduct.id, amount);
  };
  return (
    <div className="grid grid-cols-4 p-2">
      <Link to={`/shop/products/${bscp.ShopProduct.id}`}>
        <div className="flex items-center">
          <img src={bscp.ShopProduct.image} className="w-20 mr-4"></img>
          {bscp.ShopProduct.name}
        </div>
      </Link>
      <div className="flex items-center flex-row-reverse">
        {new Intl.NumberFormat("de-DE", {
          style: "currency",
          currency: "EUR",
        }).format(bscp.ShopProduct.price)}
      </div>
      <div className="flex items-center flex-row-reverse">
        <button
          className="btn btn-sm"
          onClick={() =>
            setAmount((prev) => {
              return prev + 1;
            })
          }
        >
          +
        </button>
        <span className="mx-2 w-10 text-center">{amount}</span>
        <button
          className="btn btn-sm"
          onClick={() =>
            setAmount((prev) => {
              return prev > 0 ? prev - 1 : 0;
            })
          }
        >
          -
        </button>
      </div>
      <div className="flex items-center flex-row-reverse">
        <button className="btn btn-sm ml-2" onClick={handleUpdate}>
          ok
        </button>
        {new Intl.NumberFormat("de-DE", {
          style: "currency",
          currency: "EUR",
        }).format(amount * bscp.ShopProduct.price)}
      </div>
    </div>
  );
};

export default ProductLine;
