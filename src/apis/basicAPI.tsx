import axios from "axios";

import applyInterceptorsTo from "./axiosInterceptors";

const baseApi = axios.create({
  baseURL: process.env.REACT_APP_DB_HOST,
});

const useThisApi = applyInterceptorsTo(baseApi);

//user 관련 API -> userApi
const apiSignup = async (data: {
  username: string;
  nickname: string;
  password: string;
  passwordCheck: string;
}) => {
  const dataApiSignup = await useThisApi.post("/user/signup", data);
  return dataApiSignup;
};

const apiLogin = async (data: { username: string; password: string }) => {
  const dataApiLogin = await useThisApi.post("/login", data);
  return dataApiLogin;
};

const apiUser = async () => {
  const dataApiUser = await useThisApi.get("/user");
  return dataApiUser;
};

export const userApi = {
  apiSignup: (data: {
    username: string;
    nickname: string;
    password: string;
    passwordCheck: string;
  }) => apiSignup(data),
  apiLogin: (data: { username: string; password: string }) => apiLogin(data),
  apiUser: () => apiUser(),
};
