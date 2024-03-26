"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const FormData = [
  {
    name: "username",
    type: "text",
    id: "username",
    autoComplete: "true",
    placeholder: "Enter your username",
  },
  {
    name: "email",
    type: "email",
    id: "email",
    autoComplete: "true",
    placeholder: "Enter your email",
  },
  {
    name: "phone",
    type: "text",
    id: "phone",
    autoComplete: "true",
    placeholder: "Enter your phone number",
  },
  {
    name: "About",
    type: "textarea",
    id: "about",
    autoComplete: "true",
    placeholder: "Tell us about yourself",
  },
];

export default function RegisterForm() {
  const [formData, setFormData] = React.useState({});
  return (
    <form
      action=""
      className="w-full lg:w-[30rem] grid grid-flow-row grid-cols-4 gap-2"
    >
      <div className="col-span-2 space-y-1">
        <Label htmlFor="name">Name</Label>
        <Input
          placeholder="Enter your name"
          id="name"
          name="name"
          className="w-full"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setFormData({ ...formData, username: event.target.value });
          }}
        />
      </div>
      <div className="col-span-2 space-y-1">
        <Label htmlFor="mail">Email</Label>
        <Input
          placeholder="Enter your email"
          id="mail"
          name="mail"
          className="w-full"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setFormData({ ...formData, username: event.target.value });
          }}
        />
      </div>
      <div className="col-span-4 space-y-1">
        <Label htmlFor="phone">Phone</Label>
        <Input
          placeholder="Enter your phone number"
          id="phone"
          name="phone"
          className="w-full"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setFormData({ ...formData, username: event.target.value });
          }}
        />
      </div>
      <div className="col-span-4 space-y-1">
        <Label htmlFor="abt">About</Label>
        <Textarea
          rows={5}
          placeholder="Tell us about yourself"
          id="abt"
          name="abt"
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
            setFormData({ ...formData, username: event.target.value });
          }}
        />
      </div>
      <Button variant="primary" size={"lg"} className="col-span-4">
        Submit
      </Button>
    </form>
  );
}
