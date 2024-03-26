import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import RegisterForm from "./(component)/RegisterForm";

export default function page() {
  return (
    <div className="w-full h-screen grid grid-flow-row grid-cols-12 divide-x-2">
      <div className="hidden lg:block col-span-7 h-full"></div>
      <div className="col-span-12 lg:col-span-5 h-full grid place-content-center">
        <Button
          asChild
          variant="outline"
          size={"lg"}
          className="absolute right-4 top-4"
        >
          <Link href="/api/auth/signIn">Login</Link>
        </Button>
        <div className="w-auto space-y-4 px-2">
          <div className="w-full text-center grid">
            <span className="text-2xl font-bold">Register</span>
            <span className="text-sm text-muted-foreground">
              Enter your information to register
            </span>
          </div>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
