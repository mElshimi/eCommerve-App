import { Button } from "flowbite-react";
import styles from "./styles.module.css";
const { product, productImg } = styles;

const Product = () => {
  return (
    <>
      <div className={`flex flex-col justify-between`}>
        <div className={``}>
          <img
            className="w-full h-56"
            src="https://eg.hm.com/assets/styles/HNM/14482498/6103a8463876770c30cdba3535b7be1f333315fe/2/image-thumb__3464789__product_listing/cb91f8f128ac2125e0ec3a008a2e8d2497d15434.jpg"
            alt=""
          />
        </div>
        <h2
          className={`my-3 text-md w-full whitespace-nowrap overflow-hidden text-ellipsis`}
        >
          Title
        </h2>
        <h3 className={`text-sm`}>10 EGP</h3>
        <Button>Add to cart</Button>
      </div>
    </>
  );
};

export default Product;
