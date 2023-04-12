import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { logOut } from "@/auth/firebase";
import ProtectedRoute from "@/component/ProtectedRoute";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const out = () => {
    logOut(dispatch, router);
  };
  const { user } = useAppSelector((state) => state.auth);

  return (
    <ProtectedRoute>
      <div onClick={out}>log out</div>
      <img src={user.photo} alt="" />
    </ProtectedRoute>
  );
}
