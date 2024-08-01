import { Header, Footer } from "@components/common";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <main className="dark:bg-slate-800 dark:text-white">
        <div className="container mx-auto min-h-screen flex flex-col">
          <Header />
          <div className={`my-10`}>
            <Outlet />
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
};

export default MainLayout;
