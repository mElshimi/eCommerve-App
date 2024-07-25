import {
  Avatar,
  Button,
  DarkThemeToggle,
  Dropdown,
  Flowbite,
  Navbar,
} from "flowbite-react";
import { RiShoppingCartLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import logoDark from "@imgs/logo-dark.svg";
import { toggle } from "@store/themeSlice";
import style from "./style.module.css";
import { NavLink, useLocation } from "react-router-dom";

// import { Link } from "react-router-dom";
const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { isDark } = useSelector((state) => state.theme);

  return (
    <header>
      <div className="flex items-center px-5 md:px-0 pt-2 justify-between">
        <h1>
          <NavLink to={"/"}>
            <img src={logoDark} alt="logo" />
          </NavLink>
        </h1>
        <div className="flex gap-x-2 items-center">
          <Flowbite>
            <div onClick={() => dispatch(toggle())}>
              <DarkThemeToggle className="dark:text-yellow-300 text-zinc-600 " />
            </div>
          </Flowbite>
          <div className="relative">
            <RiShoppingCartLine className="dark:text-white text-5xl " />
            <span
              className={`${style.badge} font-medium absolute -translate-x-2/4 -translate-y-2/4 text-xs rounded-full dark:text-white text-slate-950`}
            >
              0
            </span>
          </div>
        </div>
      </div>
      <Navbar fluid className=" shadow-md">
        <div className="flex md:order-2 w-full md:w-fit justify-between  ">
          {/* <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown> */}
          <div className="flex">
            <Button as={NavLink} to="auth" className="me-4">
              Login
            </Button>
            <Button as={NavLink} to="auth/register">
              Register
            </Button>
          </div>

          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link
            as={NavLink}
            to="/"
            active={location.pathname === "/" ? true : false}
          >
            Home
          </Navbar.Link>
          <Navbar.Link
            as={NavLink}
            to="/categories"
            active={location.pathname === "/categories" ? true : false}
          >
            Categories
          </Navbar.Link>
          <Navbar.Link
            as={NavLink}
            to="/products"
            active={location.pathname === "/products" ? true : false}
          >
            Products
          </Navbar.Link>
          <Navbar.Link
            as={NavLink}
            to="/about-us"
            active={location.pathname === "/about-us" ? true : false}
          >
            About Us
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
