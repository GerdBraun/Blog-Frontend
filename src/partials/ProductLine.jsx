import { Link } from "react-router-dom";

const ProductLine = ({ bscp }) => {
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
        {bscp.amount} pcs
      </div>
      <div className="flex items-center flex-row-reverse">
        <button className="ml-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
        {new Intl.NumberFormat("de-DE", {
          style: "currency",
          currency: "EUR",
        }).format(bscp.amount * bscp.ShopProduct.price)}
      </div>
    </div>
  );
};

export default ProductLine;
