import React from "react";
import ImageGrid from "../components/ImageGrid/ImageGrid";
import Model from "../components/Model/Model";
import Title from "../components/Title/Title";
import UploadForm from "../components/UploadForm/UploadForm";

function HomeLayout({ selectedImg, setSelectedImg }) {
  return (
    <div className="home">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />

      {selectedImg && (
        <Model selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default HomeLayout;
