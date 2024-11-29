import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col w-full items-center justify-center h-screen">
      {children}
    </div>
  );
}
