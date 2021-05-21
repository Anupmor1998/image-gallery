import React from "react";
import "./Model.css";
import { motion } from "framer-motion";
import { imageFirestore, auth } from "../../Firebase/FireBaseConfig";
import "toastify-js/src/toastify.css";
import Toastify from "toastify-js";
import { FaTrashAlt } from "react-icons/fa";

function Model({ selectedImg, setSelectedImg }) {
  const collectionRef = imageFirestore
    .collection(`/${auth.currentUser.uid}`)
    .doc(selectedImg.id);

  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };

  const handleDelete = async () => {
    await collectionRef.delete();
    setSelectedImg(null);
    Toastify({
      text: "Image Deleted Successfully",
      duration: 3000,
      backgroundColor: "green",
    }).showToast();
  };
  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedImg.url}
        alt="enlarged"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
      {collectionRef ? (
        <FaTrashAlt className="delete-icon" onClick={handleDelete} />
      ) : (
        ""
      )}
    </motion.div>
  );
}

export default Model;
