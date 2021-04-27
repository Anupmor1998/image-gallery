import React, { useState } from "react";
import firebase from "firebase/app";
import { useHistory } from "react-router-dom";
import "firebase/auth";
import { Alert, Button } from "reactstrap";
function LogOut() {
  const [error, setError] = useState("");
  const history = useHistory();
  const handleLogOut = async () => {
    setError("");
    await firebase
      .auth()
      .signOut()
      .then(() => {
        history.push("/");
      })
      .catch(() => {
        setError("Some error ocurred");
      });
  };

  return (
    <div>
      {error && <Alert color="danger">{error}</Alert>}
      <Button onClick={handleLogOut}>Log Out</Button>
    </div>
  );
}

export default LogOut;
