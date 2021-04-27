import React from "react";
import "firebase/auth";
import { Button } from "reactstrap";
import { auth } from "../../Firebase/FireBaseConfig";
function LogOut() {
  const handleLogOut = async () => {
    await auth.signOut();
  };

  return (
    <div>
      <Button onClick={handleLogOut}>Log Out</Button>
    </div>
  );
}

export default LogOut;
