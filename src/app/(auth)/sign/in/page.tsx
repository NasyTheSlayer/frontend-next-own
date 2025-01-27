"use client";
// libs
import { Button, Checkbox, Form, Input } from "@nextui-org/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// components
import { Socials } from "@/components/Socials";
import { DividerWithText } from "@/components/DividerWithText";
// utils
import { signInSchema } from "@/utils/validation/signInSchema";
// hooks
import { useSignIn } from "@/hooks/useAuth";
// constants
import { inputClassNames } from "@/constants/styles";
// types
import { SignInForm } from "@/types/AuthForm";

export default function Page() {
  const { mutate, isPending } = useSignIn();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInForm>({
    resolver: zodResolver(signInSchema),
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: SignInForm) => {
    mutate(data);
  };

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

      <Form
        onSubmit={handleSubmit(onSubmit)}
        method="post"
        validationBehavior="native"
        className="w-full max-w-[500px]"
      >
        <div className="flex w-full flex-col gap-7 mt-11">
          <Input
            type="email"
            label="Email"
            labelPlacement="outside"
            {...register("email")}
            placeholder="example@gmail.com"
            isInvalid={!!errors.email}
            errorMessage={errors.email?.message}
            classNames={inputClassNames}
            autoComplete="email"
          />
          <Input
            type="password"
            label="Password"
            labelPlacement="outside"
            {...register("password")}
            placeholder="••••••••••"
            isInvalid={!!errors.password}
            errorMessage={errors.password?.message}
            classNames={inputClassNames}
            autoComplete="current-password"
          />
        </div>

        <div className="w-full h-12 flex flex-row items-center justify-between mt-8">
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
          isDisabled={isPending}
          isLoading={isPending}
          type="submit"
          color="secondary"
          size="lg"
          className="w-full h-12 mt-6"
        >
          {!isPending && "Sign in"}
        </Button>
      </Form>

      <DividerWithText text={"OR"} />

      <Socials />

      <div className="text-center mt-11">
        <span className="text-сoolGray">Don&apos;t have an account? </span>
        <Link href="up" className="text-blueViolet">
          Sign up
        </Link>
      </div>
    </>
  );
}
