"use client";
// libs
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
// providers
import { useAuth } from "@/providers/AuthProvider";
// services
import { signIn, signUp } from "@/api/services/auth";

export const useSignUp = () => {
  const router = useRouter();
  const { setUser } = useAuth();

  return useMutation({
    mutationFn: signUp,
    onSuccess: (data) => {
      router.push("/home");
      setUser(data.user);
    },
    onError: (error) => {
      console.log(error, "error");

      toast.error("Something went wrong");
    },
  });
};

export const useSignIn = () => {
  const router = useRouter();
  const { setUser } = useAuth();

  return useMutation({
    mutationFn: signIn,
    onSuccess: (data) => {
      router.push("/home");
      setUser(data.user);
    },
    onError: (error: AxiosError) => {
      if (error.status === 401) {
        toast.error("Wrong email or password");
      } else {
        toast.error("Something went wrong");
      }
    },
  });
};
