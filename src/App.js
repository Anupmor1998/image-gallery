import { useState } from "react";

import "./App.css";

import { AuthProvider } from "./Contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeLayout from "./Layouts/HomeLayout";
import LoginLayout from "./Layouts/LogInLayout";
import SignUpLayout from "./Layouts/SignUpLayout";

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
              component={() => (
                <HomeLayout
                  selectedImg={selectedImg}
                  setSelectedImg={setSelectedImg}
                />
              )}
            />
            <Route exact path="/signup" component={SignUpLayout} />
            <Route path="/" component={LoginLayout} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
