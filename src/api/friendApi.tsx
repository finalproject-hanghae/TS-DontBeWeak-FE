import axios from "axios";

import applyInterceptorsTo from "./axiosInterceptors";

const baseApi = axios.create({
  baseURL: process.env.REACT_APP_DB_HOST + "/friend",
});

const useThisApi = applyInterceptorsTo(baseApi);

//friend 관련 API ->friendApi
const apiFriendAdd = async (data:{friendname:string}) => {
  const dataApiFriendAdd = await useThisApi.post("", data);
  return dataApiFriendAdd;
};

const apiFriendList = async () => {
  const dataApiFriendList = await useThisApi.get("");
  return dataApiFriendList;
};

export const friendApi = {
  apiFriendAdd: (data:{friendname:string}) => apiFriendAdd(data),
  apiFriendList: () => apiFriendList(),
};
