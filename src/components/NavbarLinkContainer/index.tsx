// libs
import { FC } from "react";
// components
import { navbarItems } from "@/constants/dataNavbarItems";
// constants
import { NavbarLink } from "../NavbarLink";
// types
import { NavbarLinkContainerProps } from "./types/interface";

export const NavbarLinkContainer: FC<NavbarLinkContainerProps> = ({
  start = 0,
  end,
}) => {
  return navbarItems.slice(start, end).map((item) => {
    return (
      <NavbarLink
        key={item.title}
        title={item.title}
        link={item.link}
        icon={item.icon}
      />
    );
  });
};
