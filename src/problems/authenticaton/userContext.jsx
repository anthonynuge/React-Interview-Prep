import React, { createContext, useState } from "react";

// Create the context
const UserContext = createContext();

// Create a provider component
const UserProvider = ({ children }) => {
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
