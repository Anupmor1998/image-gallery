import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import ImageGrid from "../components/ImageGrid/ImageGrid";
import Model from "../components/Model/Model";
import Title from "../components/Title/Title";
import UploadForm from "../components/UploadForm/UploadForm";
import { useHistory } from "react-router-dom";
import { auth } from "../Firebase/FireBaseConfig";

function HomeLayout({ selectedImg, setSelectedImg }) {
  const history = useHistory();
  const [user] = useAuthState(auth);
  return (
    <>
      {user ? (
        <>
          <Title />
          <UploadForm />
          <ImageGrid setSelectedImg={setSelectedImg} />

          {selectedImg && (
            <Model selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
          )}
        </>
      ) : (
        history.push("/")
      )}
    </>
  );
}

export default HomeLayout;
