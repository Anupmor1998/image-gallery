import React, { useState } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./UploadForm.css";
function UploadForm() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const changeHandler = (e) => {
    var selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select a valid image file (png or jpeg)");
    }
  };

  return (
    <form>
      <label className="label">
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </label>

      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div className="file">{file.name}</div>}
        {file && (
          <div>
            <ProgressBar file={file} setFile={setFile} />
          </div>
        )}
      </div>
    </form>
  );
}

export default UploadForm;
