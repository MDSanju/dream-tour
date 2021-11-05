import React, { createContext } from "react";
import useFirebase from "../hooks/useFirebase";

// export auth context for use auth custom hook
export const AuthContext = createContext();

// context API setup
const AuthProvider = ({ children }) => {
  const allContext = useFirebase();
  return (
    <AuthContext.Provider value={allContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
