import { useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";

const Logout = () => {
  const { setAppUser } = useApp();
  const navigate = useNavigate();
  setAppUser(null);
  navigate("/")
  return (
    <>
    </>
  );
};

export default Logout;
