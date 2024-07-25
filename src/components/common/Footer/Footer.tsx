import logoDark from "@assets/imgs/logo-dark.svg";
import { Footer } from "flowbite-react";
import { useNavigate } from "react-router-dom";
const FooTer = () => {
  const navigate = useNavigate();

  return (
    <>
      <Footer container className="mt-auto">
        <div className="w-full text-center">
          <div className="w-full flex flex-col sm:flex-row items-center justify-between">
            <Footer.Brand
              type="button"
              className="hover:cursor-pointer mb-4 sm:mb-0"
              onClick={() => navigate("/")}
              src={logoDark}
              alt="logo"
            />
            <Footer.LinkGroup className="text-xs sm:text-sm">
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Contact</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <Footer.Copyright
            href="https://github.com/mElshimi"
            by="mElshimi™"
            year={2024}
          />
        </div>
      </Footer>
    </>
  );
};

export default FooTer;
