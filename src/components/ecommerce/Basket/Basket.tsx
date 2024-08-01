import { RiShoppingCartLine } from "react-icons/ri";
import style from "./style.module.css";
const Basket = () => {
  return (
    <>
      <div className="relative">
        <RiShoppingCartLine className="dark:text-white text-5xl " />
        <span
          className={`${style.badge} font-medium absolute -translate-x-2/4 -translate-y-2/4 text-xs rounded-full dark:text-white text-slate-950`}
        >
          0
        </span>
      </div>
    </>
  );
};

export default Basket;
