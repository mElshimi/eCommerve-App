import { RenderList } from "@components/common";
import { Category } from "@components/ecommerce";
import { Loading } from "@components/feedback";
import { actGetCategories } from "@store/categories/categoriesSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";

const Categories = () => {
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    !records.length && dispatch(actGetCategories());
  }, [dispatch, records]);

  return (
    <>
      <Loading status={loading} error={error}>
        <div className="mt-16 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 mx-2">
          <RenderList
            records={records}
            renderItem={(record) => <Category {...record} />}
          />
        </div>
      </Loading>
    </>
  );
};

export default Categories;
