import { SignIn } from "@clerk/nextjs";
import { Router } from "next/router";

export default function Page() {
  return (
    <>
      <SignIn />
    </>
  );
}
