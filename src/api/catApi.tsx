import axios from "axios";

import applyInterceptorsTo from "./axiosInterceptors";

const baseApi = axios.create({
  baseURL: process.env.REACT_APP_DB_HOST + "/cat",
});

const useThisApi = applyInterceptorsTo(baseApi);

//cat 관련 API -> catApi
const apiMyCatStatus = async () => {
  const dataApiCatStatus = await useThisApi.get("");
  return dataApiCatStatus;
};

const apiSomeCatStatus = async (path: string | undefined) => {
  const dataApiSomeCatStatus = await useThisApi.get(`/${path}`);
  return dataApiSomeCatStatus;
};

export const catApi = {
  apiMyCatStatus: () => apiMyCatStatus(),
  apiSomeCatStatus: (path: string | undefined) => apiSomeCatStatus(path),
};
