'use client'

import { ReactNode } from "react";
import { NextPage } from "next";
import { NextUIProvider } from "@nextui-org/react";

interface MainProviderProps {
  children: ReactNode;
}

export const MainProvider: NextPage<MainProviderProps> = ({ children }) => {
  return (
    <>
      <NextUIProvider>{children}</NextUIProvider>
    </>
  );
};
