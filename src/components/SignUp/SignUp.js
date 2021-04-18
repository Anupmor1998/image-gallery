import React, { useRef, useState } from "react";
import { useAuth } from "../../Contexts/AuthContext";
import "./SignUp.css";
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

function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/home");
    } catch {
      setError("Failed to create Account");
    }
    setLoading(false);
  };

  return (
    <>
      <Card>
        <CardBody>
          <CardTitle tag="h2" className="text-center mb-4">
            Sign Up
          </CardTitle>

          {error && <Alert color="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label id="email">Email</Label>
              <Input type="email" innerRef={emailRef} required />
            </FormGroup>
            <FormGroup>
              <Label id="password">Password</Label>
              <Input type="password" innerRef={passwordRef} required />
            </FormGroup>
            <FormGroup>
              <Label id="confirm-password">Confirm Password</Label>
              <Input type="password" innerRef={confirmPasswordRef} required />
            </FormGroup>
            <Button disabled={loading} type="submit" className="w-100">
              Sign Up
            </Button>
          </Form>
        </CardBody>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/">Log In</Link>
      </div>
    </>
  );
}

export default SignUp;
