"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { signIn } from "next-auth/react";

export default function LoginForm() {
  const [formData, setFormData] = React.useState({});
  const [show, setShow] = React.useState<boolean>(false);
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signIn("credentials", {
      ...formData,
      redirect: false,
    });
  };
  return (
    <form
      onSubmit={onSubmit}
      className="w-full grid grid-flow-row grid-cols-2 gap-4"
    >
      <div className="col-span-2 space-y-2 text-start">
        <Label htmlFor="user">Phone Number</Label>
        <div className="w-full flex items-center gap-2 border rounded-md">
          <Input
            id="user"
            placeholder="Phone Number"
            autoComplete="true"
            name="phone"
            className="focus-visible:ring-0 focus-visible:outline-none border-none"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setFormData({ ...formData, username: event.target.value })
            }
          />
        </div>
      </div>
      <div className="col-span-2 space-y-2 text-start">
        <Label htmlFor="password">Password</Label>
        <div className="w-full flex items-center gap-2 border rounded-md">
          <Input
            id="password"
            type={show ? "text" : "password"}
            placeholder="password"
            autoComplete="true"
            name="password"
            className="focus-visible:ring-0 focus-visible:outline-none border-none"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setFormData({ ...formData, password: event.target.value })
            }
          />
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setShow(!show)}
            className="focus-visible:ring-0 hover:bg-transparent"
          >
            {show ? (
              <svg
                fill="none"
                strokeWidth={1.5}
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            ) : (
              <svg
                fill="none"
                strokeWidth={1.5}
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            )}
          </Button>
        </div>
      </div>
      <div className="col-span-2">
        <Button size="lg" type="submit" className="w-full">
          Submit
        </Button>
      </div>
    </form>
  );
}
