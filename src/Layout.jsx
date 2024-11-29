import { Outlet } from "react-router-dom";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ContextProvider from "./context/ContextProvider";

const Layout = () => {
  return (
    <ContextProvider>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ToastContainer />
    </ContextProvider>
  );
};

export default Layout;
