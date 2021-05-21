import React, { useRef, useState } from "react";

import "../LogIn/LogIn.css";

import {
  Card,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  CardTitle,
  Alert,
} from "reactstrap";
import { auth } from "../../Firebase/FireBaseConfig";

function LogIn() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [err, setErr] = useState("");

  const handleLogIn = async (e) => {
    e.preventDefault();
    setErr("");

    await auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .catch((error) => {
        setErr(error.message);
      });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    await auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .catch((error) => {
        setErr(error.message);
      });
  };

  const handleGuest = async (e) => {
    e.preventDefault();

    await auth.signInWithEmailAndPassword("abc@gmail.com", "123456");
  };

  return (
    <>
      <Card>
        <CardBody>
          <CardTitle tag="h2" className="text-center mb-4">
            Log In
          </CardTitle>
          {err && <Alert color="danger">{err}</Alert>}
          <Form>
            <FormGroup>
              <Label id="email">Email</Label>
              <Input type="email" innerRef={emailRef} required />
            </FormGroup>
            <FormGroup>
              <Label id="password">Password</Label>
              <Input type="password" innerRef={passwordRef} required />
            </FormGroup>
            <div className="log-btn">
              <Button onClick={handleLogIn}>Log In</Button>
              <Button onClick={handleSignUp}>Sign Up</Button>
              <Button onClick={handleGuest}>Guest Login</Button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </>
  );
}

export default LogIn;
