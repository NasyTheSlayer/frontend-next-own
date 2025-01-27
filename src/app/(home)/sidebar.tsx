// libs
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Spacer,
} from "@nextui-org/react";
import Image from "next/image";
// components
import { NavbarLink } from "@/components/NavbarLink";
import { NavbarLinkContainer } from "@/components/NavbarLinkContainer";
// constants
import { navbarClassNames } from "@/constants/styles";

export default function SidebarLayout() {
  return (
    <Navbar classNames={navbarClassNames}>
      <NavbarBrand>
        <h1 className="text-4xl font-InterBold">Vespera</h1>
      </NavbarBrand>

      <NavbarContent>
        <NavbarLinkContainer end={3} />
      </NavbarContent>

      <Spacer y={16} />

      <NavbarContent>
        <NavbarLinkContainer start={3} />
      </NavbarContent>

      <NavbarContent style={{ justifyContent: "end" }}>
        <NavbarLink title="Settings" link="/settings" icon="settings" />

        <NavbarItem>
          <Button
            variant="light"
            radius="none"
            disableRipple
            startContent={
              <Image
                src="/assets/icons/sidebar/logOut.svg"
                width={24}
                height={24}
                alt="logout"
              />
            }
            className="font-InterSemiBold text-xl leading-7 text-white p-0 px-6 m-0 gap-4"
          >
            Sign out
          </Button>
        </NavbarItem>
      </NavbarContent>

      <Spacer y={12} />
    </Navbar>
  );
}
