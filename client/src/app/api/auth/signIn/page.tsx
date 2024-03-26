import React from "react";
import LoginForm from "./(components)/LoginForm";
import Link from "next/link";

export default function page() {
  return (
    <div className="w-full h-screen grid place-content-center">
      <div className="w-96 space-y-5">
        <div className="text-center grid space-y-1">
          <span className="text-3xl font-black tracking-widest w-full">
            LOGIN
          </span>
          <span className="text-sm text-muted-foreground">
            Provide credentials to login
          </span>
        </div>
        <LoginForm />
        <div className="w-full flex justify-center items-center gap-2">
          <span className="text-sm">Not yet registered ?</span>
          <Link href="/api/auth/newUser">
            <span className="text-blue-500 text-base hover:underline hover:underline-offset-4">
              Register
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
