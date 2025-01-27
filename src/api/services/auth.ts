import { apiClient } from "../apiClient";
import { SignInForm, SignUpForm } from "@/types/AuthForm";
import { EndpointsEnum } from "../enums/endpoints.enum";

export const signUp = async (userData: SignUpForm) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { privacyPolicy, ...restUserData } = userData;
  const { data } = await apiClient.post(
    EndpointsEnum.AUTH_SIGN_UP,
    restUserData
  );
  return data;
};

export const signIn = async (credentials: SignInForm) => {
  const { data } = await apiClient.post(
    EndpointsEnum.AUTH_SIGN_IN,
    credentials
  );
  return data;
};
