import { Category } from "@components/ecommerce";
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

  const categoriesList =
    records.length > 0
      ? records.map((item) => {
          return (
            <div key={item.id}>
              <Category {...item} />
            </div>
          );
        })
      : "there are no categories";
  return (
    <>
      <div className="mt-16 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 mx-2">
        {categoriesList}
      </div>
    </>
  );
};

export default Categories;
