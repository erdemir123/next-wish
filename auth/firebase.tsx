import { clearUser, setUser } from "@/features/authSlice";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { initializeApp } from "firebase/app";

import {
  getAuth,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  GithubAuthProvider,
} from "firebase/auth";
import { NextRouter } from "next/router";

const firebaseConfig = {
  apiKey: "AIzaSyAQSEH-NTi4nLUeVRfLhkr4jFVFV2zndYw",
  authDomain: "wish-20d4a.firebaseapp.com",
  projectId: "wish-20d4a",
  storageBucket: "wish-20d4a.appspot.com",
  messagingSenderId: "195414482221",
  appId: "1:195414482221:web:cc8725a48f504c479587a4",
};
// Firebase'i başlatma
const data = initializeApp(firebaseConfig);
export default data;
const auth = getAuth(data);

export const logOut = (dispatch: Dispatch<AnyAction>, router: NextRouter) => {
  signOut(auth);
  dispatch(clearUser());
  router.push("/");
};
export const userObserver = (dispatch: Dispatch<AnyAction>) => {
  //? Kullanıcının signin olup olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak dönen firebase metodu
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const { email, displayName, photoURL } = user;
      dispatch(
        setUser({
          username: `${displayName}`,
          email: `${email}`,
          photo: `${photoURL}`,
        })
      );
    } else {
      dispatch(clearUser());
    }
  });
};
export const signUpProvider = (
  dispatch: Dispatch<AnyAction>,
  router: NextRouter
) => {
  //? Google ile giriş yapılması için kullanılan firebase metodu
  const provider = new GoogleAuthProvider();
  //? Açılır pencere ile giriş yapılması için kullanılan firebase metodu
  signInWithPopup(auth, provider)
    .then(({ user }) => {
      const { email, displayName, photoURL } = user;
      dispatch(
        setUser({
          username: `${displayName}`,
          email: `${email}`,
          photo: `${photoURL}`,
        })
      );
      router.push("/home");
    })
    .catch((error) => {
      console.log(error);
    });
};

export const GitHub = (dispatch: Dispatch<AnyAction>, router: NextRouter) => {
  const provider = new GithubAuthProvider();
  signInWithPopup(auth, provider)
    .then(({ user }) => {
      const { email, displayName, photoURL } = user;
      dispatch(
        setUser({
          username: `${displayName}`,
          email: `${email}`,
          photo: `${photoURL}`,
        })
      );
      router.push("/home");
    })
    .catch((error) => {
      console.log(error);
    });
};
