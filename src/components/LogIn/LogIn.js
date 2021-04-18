import React, { useRef, useState } from "react";
import { useAuth } from "../../Contexts/AuthContext";

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
  const { login, currentUser } = useAuth();
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setErr("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/home");
    } catch {
      console.log("hello");
      setErr("Failed to Log In");
    }
    setLoading(false);
  };

  return (
    <>
      <Card>
        <CardBody>
          <CardTitle tag="h2" className="text-center mb-4">
            Log In
          </CardTitle>
          {/* {currentUser.email} */}
          {console.log(err)}
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

            <Button disabled={loading} type="submit" className="w-100">
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
