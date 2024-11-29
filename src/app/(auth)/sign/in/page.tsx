import { Button, Checkbox, Divider, Input } from "@nextui-org/react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { inputClassNames } from "@/constants/styles";

export default function Page() {
  return (
    <>
      <div className="flex flex-col justify-center text-center gap-2">
        <h1 className="font-InterSemiBold text-[30px] text-white leading-[52px]">
          Log in to your account
        </h1>
        <h2 className="font-InterRegular text-[20px] text-grayishBlue leading-8">
          Welcome back! Please enter your details
        </h2>
      </div>

      <div className="flex w-full max-w-[500px] flex-col gap-7 mt-11">
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
          classNames={{
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
          }}
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
          Remember for 30 days
        </Checkbox>
        <Link href="#" className="text-blueViolet">
          Forgot password
        </Link>
      </div>

      <Button
        color="secondary"
        size="lg"
        className="w-full h-full max-w-[500px] max-h-12 mt-6"
      >
        Sign in
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
        <span className="text-сoolGray">Don&apos;t have an account? </span>
        <Link href="up" className="text-blueViolet">
          Sign up
        </Link>
      </div>
    </>
  );
}
