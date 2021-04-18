import { useState } from "react";
import { Container } from "reactstrap";
import "./App.css";
import ImageGrid from "./components/ImageGrid/ImageGrid";
import Model from "./components/Model/Model";
import SignUp from "./components/SignUp/SignUp";
import Title from "./components/Title/Title";
import UploadForm from "./components/UploadForm/UploadForm";
import { AuthProvider } from "./Contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LogIn from "./components/LogIn/LogIn";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Switch>
            <Route
              exact
              path="/home"
              render={() => (
                <>
                  <Title />
                  <UploadForm />
                  <ImageGrid setSelectedImg={setSelectedImg} />

                  {selectedImg && (
                    <Model
                      selectedImg={selectedImg}
                      setSelectedImg={setSelectedImg}
                    />
                  )}
                </>
              )}
            />
            <Route
              path="/signup"
              render={() => (
                <Container
                  className="d-flex align-items-center justify-content-center"
                  style={{ minHeight: "100vh" }}
                >
                  <div className="w-100" style={{ maxWidth: "400px" }}>
                    <SignUp />
                  </div>
                </Container>
              )}
            />
            <Route
              path="/"
              render={() => (
                <Container
                  className="d-flex align-items-center justify-content-center"
                  style={{ minHeight: "100vh" }}
                >
                  <div className="w-100" style={{ maxWidth: "400px" }}>
                    <LogIn />
                  </div>
                </Container>
              )}
            />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
