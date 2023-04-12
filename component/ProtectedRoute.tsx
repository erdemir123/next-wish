import { useAppSelector } from "@/app/hooks";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect, useState } from "react";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, SetIsLoggedIn] = useState("");
  const router = useRouter();
  const { user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    SetIsLoggedIn(user.username);
    if (!isLoggedIn) {
      router.push("/");
    } else {
      router.push("/home");
    }
  }, []);
  console.log(isLoggedIn);
  return <div>{children}</div>;
};

export default ProtectedRoute;
