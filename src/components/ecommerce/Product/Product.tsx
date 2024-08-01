import { IProduct } from "@interfaces/interfaces";
import { Button } from "flowbite-react";
const Product = ({ title, price, img }: IProduct) => {
  return (
    <>
      <div className={`flex flex-col justify-between`}>
        <div className={`w-full h-56  bg-gray-300`}>
          <img
            className="w-full h-full"
            src={img}
            alt={`${title} product image`}
          />
        </div>
        <h2
          title={title}
          className={`my-3 text-md w-full whitespace-nowrap overflow-hidden text-ellipsis`}
        >
          {title}
        </h2>
        <h3 className={`text-sm`}>{price} EGP</h3>
        <Button>Add to cart</Button>
      </div>
    </>
  );
};

export default Product;
