import React, { useRef, useState } from "react";

import firebase from "firebase/app";
import "../LogIn/LogIn.css";
import "firebase/auth";

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
import { Link, useHistory } from "react-router-dom";

function LogIn() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [err, setErr] = useState("");
  // const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErr("");
    // setLoading(true);
    await firebase
      .auth()
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then(() => {
        history.push("/home");
      })
      .catch((error) => {
        setErr("Invalid Username or Password");
      });
    // setLoading(false);
  };

  return (
    <>
      <Card>
        <CardBody>
          <CardTitle tag="h2" className="text-center mb-4">
            Log In
          </CardTitle>
          {err && <Alert color="danger">{err}</Alert>}
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label id="email">Email</Label>
              <Input type="email" innerRef={emailRef} required />
            </FormGroup>
            <FormGroup>
              <Label id="password">Password</Label>
              <Input type="password" innerRef={passwordRef} required />
            </FormGroup>

            <Button type="submit" className="w-100">
              Log In
            </Button>
          </Form>
        </CardBody>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  );
}

export default LogIn;
