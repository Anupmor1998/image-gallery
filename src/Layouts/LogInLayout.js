import React from "react";
import LogIn from "../components/LogIn/LogIn";
import { Container } from "reactstrap";
import "./LogInLayout.css";
function LoginLayout() {
  return (
    <>
      <div className="heading-block">
        <h1 className="heading">Image Gallery</h1>
      </div>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{
          minHeight: "90vh",
          backgroundColor: "#fae1dd",
          borderRadius: "5px",
        }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <LogIn />
        </div>
      </Container>
    </>
  );
}

export default LoginLayout;
