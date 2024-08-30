import React, { createContext, useState } from "react";

// Create the AuthContext
export const AuthContext = createContext();

// AuthProvider component to provide the context value
function AuthProvider({ children }) {
  // user
  const [user, setUser] = useState(true);

  //   user loader
  const [userLoader, setUserLoader] = useState(true);

  // auth info
  const authInfo = {
    user,

    userLoader,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
