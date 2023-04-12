import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { GitHub, logOut, signUpProvider, userObserver } from "@/auth/firebase";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  const dispatch = useAppDispatch();
  const googleProvider = () => {
    signUpProvider(dispatch);
  };
  const out = () => {
    logOut(dispatch);
  };
  const git = () => {
    GitHub(dispatch);
  };
  const { user } = useAppSelector((state) => state.auth);
  console.log(user);
  useEffect(() => {
    userObserver(dispatch);
  }, []);

  return (
    <>
      <div className="text-red-500" onClick={googleProvider}>
        sadık
      </div>
      <div onClick={out}>log out</div>
      <div onClick={git}>GitHub</div>
      <p>{user.username}</p>
      <Image src={user.photo} width={200} height={200} alt="user" />
    </>
  );
}
