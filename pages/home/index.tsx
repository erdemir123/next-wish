import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { logOut } from "@/auth/firebase";
import { AddWish, useFetch } from "@/auth/realtimeDatabase";
import ProtectedRoute from "@/component/ProtectedRoute";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [wish, setWish] = useState<string>("");
  const out = () => {
    logOut(dispatch, router);
  };
  const { user } = useAppSelector((state) => state.auth);
  const { isLoading, wishList } = useFetch();

  console.log(wish);
  console.log(wishList);
  console.log(isLoading);
  const handleSubmit = () => {
    console.log("çalıştı")
    AddWish(wish);
  };
  return (
    <ProtectedRoute>
      <div className="w-100 h-[100vh] bg-slate-800">
        <div className="flex justify-end pr-4 py-2 bg-slate-400 w-100 gap-2">
          <div className="flex items-center gap-3 ">
            <img src={user.photo} alt="" className="rounded-[50%] w-8 " />
            <p className="font-bold text-slate-600 ">{user.username}</p>
            {user.email !== "null" && <p>{user.email}</p>}
          </div>
          <button
            className="bg-amber-200  py-2 px-2  rounded-lg  text-lg font-bold capitalize text-slate-600"
            onClick={out}
          >
            log out
          </button>
        </div>
        <h1 className="uppercase text-center mt-6 text-white text-xl font-bold  ">
          do you have{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-amber-600 via-pink-300 ">
            Something
          </span>{" "}
          to say ?
        </h1>
        <div className="flex justify-center flex-col mt-4 gap-6">
          <input
            type="text"
            placeholder="My wish is "
            value={wish}
            onChange={(e) => setWish(e.target.value)}
            className="px-3 py-3 placeholder-gray-900 relative bg-white rounded-lg text-sm border-0 shadow-sm shadow-amber-300 focus:outline-none   w-[60%] mx-auto"
          />
          <button
            className="bg-amber-200  py-2 px-2  rounded-lg  text-lg font-bold capitalize text-slate-600 w-32 mx-auto"
            onClick={() => {
              handleSubmit()
            }}
          >
            SEND
          </button>
        </div>
      </div>
    </ProtectedRoute>
  );
}
