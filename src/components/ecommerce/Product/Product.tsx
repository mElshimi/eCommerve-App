import { IProduct } from "@interfaces/interfaces";
import { addToCart } from "@store/cart/cartSlice";
import { useAppDispatch } from "@store/hooks";
import { Button, Spinner } from "flowbite-react";
import { memo, useEffect, useState } from "react";

const Product = ({ id, title, price, img, max, quantity }: IProduct) => {
  console.log('fir');
  const [isClicked, setIsClicked] = useState(false);
  const dispatch = useAppDispatch();

  const currentRemainingQuantity = max - (quantity ?? 0);
  const quantityReachedToMax = currentRemainingQuantity <= 0 ? true : false;
  const addToCartHabdler = () => {
    setIsClicked(true);
    dispatch(addToCart(id));
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      setIsClicked(false);
    }, 300);
    return () => {
      clearTimeout(debounce);
    };
  }, [isClicked]);

  return (
    <>
      <div className={`flex flex-col  justify-between`}>
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
        <p>
          {quantityReachedToMax
            ? "You reach to the limit"
            : `You can add ${currentRemainingQuantity} item(s)`}
        </p>
        <h3 className={`text-sm`}>{price} EGP</h3>
        <Button
          disabled={isClicked || quantityReachedToMax}
          onClick={() => addToCartHabdler()}
        >
          {isClicked ? (
            <>
              <Spinner aria-label="Spinner button example" size="sm" />
              <span className="pl-3">Loading...</span>
            </>
          ) : (
            " Add to cart"
          )}
        </Button>
      </div>
    </>
  );
};

export default Product;
