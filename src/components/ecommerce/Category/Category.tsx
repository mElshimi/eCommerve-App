import { ICategory } from "@interfaces/interfaces";
import { Link } from "react-router-dom";
const Category = ({ title, img, prefix }: ICategory) => {
  return (
    <>
      <div className={`text-center `}>
        <Link to={`/categories/products/${prefix}`}>
          <div
            className={` overflow-hidden  rounded-full flex justify-start items-center bg-gray-300`}
          >
            <img
              className={`w-full `}
              src={img}
              alt={`${title} category image`}
            />
          </div>
          <h4 className={`mt-4 text-md`}>{title}</h4>
        </Link>
      </div>
    </>
  );
};

export default Category;
