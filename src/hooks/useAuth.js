import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

// use auth custom hook for context API
const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
