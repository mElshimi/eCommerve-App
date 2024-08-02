import { IProduct } from "@interfaces/interfaces";
import { useAppSelector } from "@store/hooks";

const useProductFullInfo = (records: IProduct[]) => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const productsFullInfo = records.map((item) => ({
    ...item,
    quantity: cartItems[item.id],
  }));
  return productsFullInfo;
};

export default useProductFullInfo;
