import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
  remove,
  update,
} from "firebase/database";
import { useEffect, useState } from "react";
import data from "./firebase";

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [wishList, setWishList] = useState<[] | string[]>([]);
  useEffect(() => {
    const db = getDatabase(data);
    const userRef = ref(db, "app/");
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      const userArray = [];
      for (let id in data) {
        userArray.push({ id, ...data[id] });
      }
      setWishList(userArray);
      setIsLoading(false);
      console.log("fetch çalıştı")
    });
  }, []);
  return { isLoading, wishList };
};

export const AddWish = (wish: string) => {
  const db = getDatabase(data);
  const userRef = ref(db, "app/");
  const newUserRef = push(userRef);
  set(newUserRef, {
    wish,
  });
};
