import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

const BreadCrumb = () => {
  const location = useLocation();
  const links = location?.pathname.split("/").slice(1);
  const lastIndex = links.length - 1;

  return (
    <>
      <Breadcrumb aria-label="Default breadcrumb example">
        <Breadcrumb.Item icon={HiHome}>
          <Link to={"/"}>Home</Link>
        </Breadcrumb.Item>
        {links?.map((item, i) => {
          return (
            <Breadcrumb.Item key={i}>
              {i === lastIndex
                ? item
                : item === "products"
                ? item
                : // <Link to={"/" + links[i]}>{item}</Link>
                  item}
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
    </>
  );
};

export default BreadCrumb;
