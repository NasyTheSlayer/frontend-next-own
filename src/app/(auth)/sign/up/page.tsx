"use client";

import { inputClassNames } from "@/constants/styles";
import { Button, Checkbox, Divider, Input } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <>
      <div className="flex flex-col justify-center text-center gap-2">
        <h1 className="font-InterSemiBold text-[30px] text-white leading-[52px]">
          Create your account
        </h1>
        <h2 className="font-InterRegular text-[20px] text-grayishBlue leading-8">
          Welcome! Please enter your details to create an account
        </h2>
      </div>

      <div className="flex w-full max-w-[500px] flex-col gap-7 mt-11">
        <Input
          type="text"
          label="Username"
          labelPlacement="outside"
          placeholder="Your username"
          classNames={inputClassNames}
        />
        <Input
          type="email"
          label="Email"
          labelPlacement="outside"
          placeholder="example@gmail.com"
          classNames={inputClassNames}
        />
        <Input
          type="password"
          label="Password"
          labelPlacement="outside"
          placeholder="••••••••••"
          classNames={inputClassNames}
        />
        <Input
          type="password"
          label="Confirm Password"
          labelPlacement="outside"
          placeholder="••••••••••"
          classNames={inputClassNames}
        />
      </div>

      <div className="w-full max-w-[500px] h-12 flex flex-row items-center justify-between mt-8">
        <Checkbox
          color="default"
          size="lg"
          classNames={{
            label: "text-md text-сoolGray",
          }}
        >
          I agree to the Terms and Conditions
        </Checkbox>
      </div>

      <Button
        color="secondary"
        size="lg"
        className="w-full h-full max-w-[500px] max-h-12 mt-6"
      >
        Sign up
      </Button>

      <div className="flex items-center my-4 w-full max-w-[500px]">
        <Divider className="flex-1 border-slateBlue" />
        <p className="mx-4 text-сoolGray">OR</p>
        <Divider className="flex-1 border-slateBlue" />
      </div>

      <div className="flex items-center gap-4">
      {["google", "github", "discord"].map((platform, index) => (
          <Button
            key={index}
            isIconOnly
            aria-label={platform}
            className="w-[156px] h-12"
          >
            <Image
              width={25}
              height={25}
              src={`/assets/icons/auth/${platform}.svg`}
              alt={platform}
            />
          </Button>
        ))}
      </div>

      <div className="mt-11">
        <span className="text-сoolGray">Already have an account? </span>
        <Link
          href="in"
          className="text-blueViolet"
        >
          Log in
        </Link>
      </div>
    </>
  );
}
