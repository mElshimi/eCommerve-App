import AppRouter from "@routes/AppRouter";
import { useAppSelector } from "@store/hooks";
import { Slide, ToastContainer } from "react-toastify";
import "./App.css";


const App = () => {
  const { isDark } = useAppSelector((state) => state.theme);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={isDark ? "dark" : "light"}
        transition={Slide}
        stacked
      />
      <AppRouter />
    </>
  );
};

export default App;
