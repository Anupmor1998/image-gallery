import { useEffect } from "react";
import useStorage from "../../hooks/useStorage";
import "./ProgressBar.css";
import { motion } from "framer-motion";
import "toastify-js/src/toastify.css";
import Toastify from "toastify-js";

function ProgressBar({ file, setFile }) {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
      Toastify({
        text: "Image Uploaded Successfully",
        duration: 3000,
        backgroundColor: "green",
      }).showToast();
    }
  }, [url, setFile]);
  return (
    <motion.div
      className="progressBar"
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
    ></motion.div>
  );
}

export default ProgressBar;
