import { useEffect, useState } from "react";
import { AppContext } from "./AppContext";
import { toast } from "react-toastify";
import axios from "axios";

const ContextProvider = ({ children }) => {
  const [appUser, setAppUser] = useState(null);
  const [appUserId, setAppUserId] = useState(null);

  useEffect(() => {
    if(appUserId) loadUserById(appUserId);
  }, [appUserId]);

  const loadUserById = async (id) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_SERVER}/users/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setAppUser(response.data);
    } catch (error) {
      toast.error("Error: " + error.message);
    }
  };

  return (
    <AppContext.Provider
      value={{ appUser, setAppUser, appUserId, setAppUserId,loadUserById }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
