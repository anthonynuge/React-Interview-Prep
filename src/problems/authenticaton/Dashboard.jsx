import React, { useContext } from "react";
import { UserContext } from "./userContext";

const Dashboard = () => {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <div className="dashboard">
      {isLoggedIn
        ? "This is your dashboard."
        : "Please login to access your dashboard."}
    </div>
  );
};

export default Dashboard;
