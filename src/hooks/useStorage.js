import { useEffect, useState } from "react";
import {
  imageStorage,
  imageFirestore,
  timestamp,
} from "../Firebase/FireBaseConfig";

import { auth } from "../../src/Firebase/FireBaseConfig";

function useStorage(file) {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    let storageRef = imageStorage.ref(file.name);
    let collectionRef = imageFirestore.collection(`/${auth.currentUser.uid}`);

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        collectionRef.add({ url, createdAt });
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, error, url };
}

export default useStorage;
