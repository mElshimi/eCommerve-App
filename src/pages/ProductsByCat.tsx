import { RenderList } from "@components/common";
import { Product } from "@components/ecommerce";
import { Loading } from "@components/feedback";
import useProductFullInfo from "@hooks/useProductFullInfo.";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actGetProductsByCatPrefix,
  productsCleanUp,
} from "@store/products/productsSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
const ProductsByCat = () => {
  const dispatch = useAppDispatch();
  const params = useParams();

  const { loading, error, records } = useAppSelector((state) => state.products);
  const products = useProductFullInfo(records);
  useEffect(() => {
    dispatch(actGetProductsByCatPrefix(params.prefix as string));
    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch, params]);

  return (
    <>
      <Loading status={loading} error={error}>
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mx-2">
          <RenderList
            records={products}
            renderItem={(record) => <Product {...record} />}
          />
        </div>
      </Loading>
    </>
  );
};

export default ProductsByCat;
