import React from "react";
import { useHistory } from "react-router-dom";

function Logout() {
  const history = useHistory();

  const handleLogout = () => {
    // Implement logout logic here (e.g., clear user session or token)

    // After logging out, redirect to the login page
    history.push("/login");
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
