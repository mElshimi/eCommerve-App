import { toggle } from "@store/themeSlice";
import { Button, DarkThemeToggle, Flowbite } from "flowbite-react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

const AdminLayout = () => {
  //  const { isDark } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (
    <>
      <main className="dark:bg-slate-800 min-h-screen dark:text-white">
        <Flowbite>
          <div onClick={() => dispatch(toggle())}>
            <DarkThemeToggle className="dark:text-yellow-300 text-zinc-600 " />
          </div>
        </Flowbite>
        <Button as={NavLink} to={"/"}>
          back to home
        </Button>
        <h1>admin layout</h1>
      </main>
    </>
  );
};

export default AdminLayout;
