import type { InputProps, NavbarProps } from "@nextui-org/react";

export const inputClassNames: InputProps["classNames"] = {
  label: "text-md group-data-[filled-within=true]:text-whisperGray pb-[6px]",
  input: ["text-md group-data-[has-value=true]:text-dustyBlue"],
  inputWrapper: [
    "bg-charcoalBlue",
    "h-12",
    "outline-slateBlue",
    "outline-offset-0",
    "outline-[1px]",
    "data-[hover=true]:bg-charcoalBlue",
    "group-data-[hover=true]:outline-none",
    "group-data-[focus=true]:bg-white",
    "group-data-[focus=true]:outline-none",
  ],
};

export const navbarClassNames: NavbarProps["classNames"] = {
  base: "w-56 bg-darkGrayishBlue",
  wrapper:
    "grid grid-cols-1 grid-rows-[auto_auto_auto_auto_1fr] w-full h-full p-0",
  content: "flex flex-col items-start gap-0",
  brand: "h-32 px-6",
  item: "w-full",
};
