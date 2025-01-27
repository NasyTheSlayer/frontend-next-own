"use client";

import { ReactNode } from "react";
import { NextPage } from "next";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClientProvider } from "@tanstack/react-query";

import queryClient from "@/utils/reactQuery/queryClient";
import { AuthProvider } from "./AuthProvider";

interface MainProviderProps {
  children: ReactNode;
}

export const MainProvider: NextPage<MainProviderProps> = ({ children }) => {
  return (
    <>
      <NextUIProvider>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>{children}</AuthProvider>
        </QueryClientProvider>
      </NextUIProvider>
    </>
  );
};
