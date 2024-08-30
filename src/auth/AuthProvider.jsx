import React, { createContext } from "react";

// Create the AuthContext
export const AuthContext = createContext();

// AuthProvider component to provide the context value
function AuthProvider({ children }) {
  // auth info
  const authInfo = {
    name: "Mehedi",
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
