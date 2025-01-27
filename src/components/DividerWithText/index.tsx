// libs
import { Divider } from "@nextui-org/react";
import { FC } from "react";
// types
import { DividerWithTextProps } from "./types/interface";

export const DividerWithText: FC<DividerWithTextProps> = ({ text }) => {
  return (
    <div className="flex items-center my-4 w-full max-w-[500px]">
      <Divider className="flex-1 border-slateBlue" />
      <p className="mx-4 text-сoolGray">{text}</p>
      <Divider className="flex-1 border-slateBlue" />
    </div>
  );
};
