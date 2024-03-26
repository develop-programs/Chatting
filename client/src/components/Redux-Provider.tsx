"use client";
import { store } from "@/services/Redux/store";
import React from "react";
import { Provider } from "react-redux";

type ReduxProviderProps = {
  children: React.ReactNode;
};

export default function ReduxProvider({ children }: ReduxProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}
