import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { GitHub, logOut, signUpProvider, userObserver } from "@/auth/firebase";
import Button from "@/component/Button";
import { useRouter } from "next/router";
import github from "@/public/github.png";
import chrome from "@/public/chrome.png";
import Image from "next/image";
import ProtectedRoute from "@/component/ProtectedRoute";

export default function Home() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const googleProvider = () => {
    signUpProvider(dispatch, router);
  };

  const gitProvider = () => {
    GitHub(dispatch, router);
  };
  const { user } = useAppSelector((state) => state.auth);
  console.log(user);

  return (
    <div className="flex justify-center items-center flex-col gap-8 h-[100vh]">
      <Button
        text={"Sign in With Google"}
        icon={<Image src={chrome} alt="Google Icon" width={50} height={50} />}
        name={"google"}
        func={googleProvider}
      />
      <Button
        text={"Sign in With GitHub"}
        icon={<Image src={github} alt="Google Icon" width={50} height={50} />}
        name={"google"}
        func={gitProvider}
      />
    </div>
  );
}
