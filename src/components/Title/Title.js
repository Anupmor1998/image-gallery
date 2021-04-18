import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { Button } from "reactstrap";
import { useAuth } from "../../Contexts/AuthContext";
import "./Title.css";
function Title() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const handleLogOut = async () => {
    setError("");

    try {
      await logout();
      history.push("/");
    } catch {
      setError("Failed to Log Out");
    }
  };
  return (
    <div className="title">
      <div className="title-block">
        <h1>Image Gallery</h1>
        <Link>
          <Button onClick={handleLogOut}>Log Out</Button>
        </Link>
      </div>
      <h2>Your Images</h2>
      <p>Heloo</p>
    </div>
  );
}

export default Title;
