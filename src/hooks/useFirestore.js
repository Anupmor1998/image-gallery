import { useEffect, useState } from "react";

import { imageFirestore } from "../Firebase/FireBaseConfig";

function useFirestore(collection) {
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    const unsub = imageFirestore
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let document = [];
        snap.forEach((doc) => {
          document.push({ ...doc.data(), id: doc.id });
        });
        setDocs(document);
      });
    return () => unsub();
  }, [collection]);

  return { docs };
}

export default useFirestore;
