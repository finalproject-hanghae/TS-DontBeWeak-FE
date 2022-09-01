import axios from "axios";
import { loginData, signupData } from "../types/users";

import applyInterceptorsTo from "./axiosInterceptors";

const baseApi = axios.create({
  baseURL: process.env.REACT_APP_DB_HOST,
});

const useThisApi = applyInterceptorsTo(baseApi);

//user 관련 API -> userApi
const apiSignup = async (data: signupData) => {
  const dataApiSignup = await useThisApi.post("/user/signup", data);
  return dataApiSignup;
};

const apiLogin = async (data: loginData) => {
  const dataApiLogin = await useThisApi.post("/login", data);
  return dataApiLogin;
};

const apiUser = async () => {
  const dataApiUser = await useThisApi.get("/user");
  return dataApiUser;
};

export const userApi = {
  apiSignup: (data: signupData) => apiSignup(data),
  apiLogin: (data: loginData) => apiLogin(data),
  apiUser: () => apiUser(),
};
