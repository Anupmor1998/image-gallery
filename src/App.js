import { useState } from "react";

import "./App.css";
import { useAuthState } from "react-firebase-hooks/auth";
import HomeLayout from "./Layouts/HomeLayout";
import LoginLayout from "./Layouts/LogInLayout";
import { auth } from "./Firebase/FireBaseConfig";
import loader from "./images/loading.svg";
import GithubRibbons from "./components/GithubRibbons/GithubRibbons";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <img className="loader" src={loader} alt="loading..." />;
  }

  return (
    <>
      <GithubRibbons />
      <div className="App">
        {user ? (
          <HomeLayout
            selectedImg={selectedImg}
            setSelectedImg={setSelectedImg}
          />
        ) : (
          <LoginLayout />
        )}
      </div>
    </>
  );
}

export default App;
