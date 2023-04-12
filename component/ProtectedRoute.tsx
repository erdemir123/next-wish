import { useAppSelector } from "@/app/hooks";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect, useState } from "react";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const { user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (user.username) {
      console.log(user.username);
      router.push("/home");
    } else {
      console.log("else", user.username);
      router.push("/");
    }
  }, []);

  return <div>{children}</div>;
};

export default ProtectedRoute;
