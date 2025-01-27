"use client";
// libs
import { NavbarItem } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
// types
import { NavbarLinkProps } from "./types/interface";
import { usePathname } from "next/navigation";

export const NavbarLink: FC<NavbarLinkProps> = ({ link, title, icon }) => {
  const pathname = usePathname();

  const isActive = pathname === link;

  return (
    <NavbarItem>
      <Link
        className={`flex items-center gap-x-4 h-11 font-InterSemiBold text-xl text-white rounded-[10px] px-6 
          ${
            isActive
              ? "bg-charcoalBlue outline outline-1 outline-charcoalTeal"
              : "bg-transparent"
          }`}
        href={link}
      >
        <Image
          src={`/assets/icons/sidebar/${icon}.svg`}
          width={24}
          height={24}
          alt={icon}
        />
        <span>{title}</span>
      </Link>
    </NavbarItem>
  );
};
