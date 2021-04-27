import React from "react";
import SignUp from "../components/SignUp/SignUp";
import { Container } from "reactstrap";
function SignUpLayout() {
  return (
    <>
      <div className="heading-block">
        <h1 className="heading">ImaGram</h1>
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
          <SignUp />
        </div>
      </Container>
    </>
  );
}

export default SignUpLayout;
