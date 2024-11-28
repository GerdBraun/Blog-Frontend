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
        {bscp.ShopProduct.price} €
      </div>
      <div className="flex items-center flex-row-reverse">{bscp.amount}</div>
      <div className="flex items-center flex-row-reverse">
        {Math.round(bscp.amount * bscp.ShopProduct.price *100)/100} €
      </div>
    </div>
  );
};

export default ProductLine;
