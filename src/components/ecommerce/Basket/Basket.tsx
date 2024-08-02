import { RiShoppingCartLine } from "react-icons/ri";
import style from "./style.module.css";
import { useAppSelector } from "@store/hooks";
import { getCartTotalQuantitySelector } from "@store/cart/cartSlice";
import { useEffect, useState } from "react";

const Basket = () => {
  const [isAnimate, setIsAnimate] = useState(false);
  const totalQuantity = useAppSelector(getCartTotalQuantitySelector);

  useEffect(() => {
    if (!totalQuantity) {
      return;
    }
    setIsAnimate(true);

    const debounce = setTimeout(() => {
      setIsAnimate(false);
    }, 300);

    return () => clearTimeout(debounce);
  }, [totalQuantity]);
  return (
    <>
      <div className="relative">
        <RiShoppingCartLine
          className={` ${
            isAnimate && style.pumpCartQuantity
          } dark:text-white text-5xl `}
        />
        <span
          className={`${style.badge} font-medium absolute -translate-x-2/4 -translate-y-2/4 text-xs rounded-full dark:text-white text-slate-950`}
        >
          {totalQuantity}
        </span>
      </div>
    </>
  );
};

export default Basket;
