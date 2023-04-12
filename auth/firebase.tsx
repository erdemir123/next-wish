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

const firebaseConfig = {
  apiKey: "AIzaSyCgMikTWx6qVwtKQm69cZClHhH4gdY1LUU",
  authDomain: "wish-6b628.firebaseapp.com",
  projectId: "wish-6b628",
  storageBucket: "wish-6b628.appspot.com",
  messagingSenderId: "946824748988",
  appId: "1:946824748988:web:6d99fda51dbffef40755b9",
};
// Firebase'i başlatma
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const logOut = (dispatch: Dispatch<AnyAction>) => {
  signOut(auth);
  dispatch(clearUser());
};
export const userObserver = (dispatch: Dispatch<AnyAction>) => {
  //? Kullanıcının signin olup olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak dönen firebase metodu
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const { email, displayName, photoURL } = user;
      dispatch(
        setUser({
            username:`${displayName}`,
            email: `${email}`,
            photo:`${photoURL}`
        })
      );
    } else {
      dispatch(clearUser());
    }
  });
};
export const signUpProvider = (dispatch: Dispatch<AnyAction>) => {
  //? Google ile giriş yapılması için kullanılan firebase metodu
  const provider = new GoogleAuthProvider();
  //? Açılır pencere ile giriş yapılması için kullanılan firebase metodu
  signInWithPopup(auth, provider)
    .then(({ user }) => {
      const { email, displayName, photoURL } = user;
      dispatch(
        setUser({
            username:`${displayName}`,
            email: `${email}`,
            photo:`${photoURL}`
        })
      );
      console.log(user);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const GitHub = (dispatch: Dispatch<AnyAction>) => {
  const provider = new GithubAuthProvider();
  signInWithPopup(auth, provider)
    .then(({ user }) => {
      const { email, displayName, photoURL } = user;
      dispatch(
        setUser({
          username:`${displayName}`,
          email: `${email}`,
          photo:`${photoURL}`
        })
      );
      console.log(user);
    })
    .catch((error) => {
      console.log(error);
    });
};
