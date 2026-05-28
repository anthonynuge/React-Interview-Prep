import React, { useContext } from "react";
import { UserContext } from "./userContext";

const Navbar = () => {
  const { isLoggedIn, login, logout } = useContext(UserContext);

  return (
    <header className="navbar-header">
      <h1>App</h1>
      {isLoggedIn && <span>Welcome, User!</span>}
      <button onClick={isLoggedIn ? logout : login}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </header>
  );
};

export default Navbar;
