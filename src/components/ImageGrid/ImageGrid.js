import React from "react";
import useFirestore from "../../hooks/useFirestore";
import { motion } from "framer-motion";
import "./ImageGrid.css";
import { auth } from "../../Firebase/FireBaseConfig";
function ImageGrid({ setSelectedImg }) {
  const { docs } = useFirestore(`/${auth.currentUser.uid}`);
  console.log(docs);
  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="img-wrap"
            key={doc.id}
            whileHover={{ opacity: 1 }}
            layout
            onClick={() => setSelectedImg(doc.url)}
          >
            <motion.img
              src={doc.url}
              alt="images not shown"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
}

export default ImageGrid;
