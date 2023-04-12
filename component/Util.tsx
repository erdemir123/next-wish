import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { userObserver } from "@/auth/firebase";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect } from "react";

const Util = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    userObserver(dispatch);
  }, []);
  return <div>{children}</div>;
};

export default Util;
