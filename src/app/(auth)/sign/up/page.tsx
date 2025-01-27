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
import { signUpSchema } from "@/utils/validation/signUpSchema";
// hooks
import { useSignUp } from "@/hooks/useAuth";
// constants
import { inputClassNames } from "@/constants/styles";
// types
import { SignUpForm } from "@/types/AuthForm";

export default function Page() {
  const { mutate, isPending } = useSignUp();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpForm>({
    resolver: zodResolver(signUpSchema),
    mode: "onSubmit",
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      privacyPolicy: false,
    },
  });

  const onSubmit = (data: SignUpForm) => {
    mutate(data);
  };

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

      <Form
        onSubmit={handleSubmit(onSubmit)}
        method="post"
        validationBehavior="native"
        className="w-full max-w-[500px]"
      >
        <div className="w-full flex flex-col gap-7 mt-11">
          <Input
            type="text"
            label="Username"
            labelPlacement="outside"
            {...register("username")}
            placeholder="Your username"
            isInvalid={!!errors.username}
            errorMessage={errors.username?.message}
            classNames={inputClassNames}
            autoComplete="username"
          />
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
            {...register("password")}
            labelPlacement="outside"
            placeholder="••••••••••"
            isInvalid={!!errors.password}
            errorMessage={errors.password?.message}
            classNames={inputClassNames}
            autoComplete="new-password"
          />
          <Input
            type="password"
            label="Confirm Password"
            {...register("confirmPassword")}
            labelPlacement="outside"
            placeholder="••••••••••"
            isInvalid={!!errors.confirmPassword}
            errorMessage={errors.confirmPassword?.message}
            classNames={inputClassNames}
            autoComplete="new-password"
          />
        </div>

        <Checkbox
          color="default"
          size="lg"
          {...register("privacyPolicy")}
          isInvalid={!!errors.privacyPolicy}
          validationBehavior="aria"
          classNames={{
            label: `text-md ${!errors.privacyPolicy && "text-сoolGray"}`,
            base: "h-12 flex flex-row items-center justify-between mt-8",
          }}
        >
          I agree to the Terms and Conditions
        </Checkbox>

        <Button
          isDisabled={isPending}
          isLoading={isPending}
          type="submit"
          color="secondary"
          size="lg"
          className="w-full h-12 mt-6"
        >
          {!isPending && "Sign up"}
        </Button>
      </Form>

      <DividerWithText text={"OR"} />

      <Socials />

      <div className="text-center mt-11">
        <span className="text-сoolGray">Already have an account? </span>
        <Link href="in" className="text-blueViolet">
          Log in
        </Link>
      </div>
    </>
  );
}
