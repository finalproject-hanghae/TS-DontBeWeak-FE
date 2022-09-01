import axios from "axios";

import applyInterceptorsTo from "./axiosInterceptors";

const baseApi = axios.create({
  baseURL: process.env.REACT_APP_DB_HOST + "/schedule",
});

const useThisApi = applyInterceptorsTo(baseApi);

//drug 관련 API -> drugApi
const apiDrugAdd = async (data: {
  productName: string;
  customColor: string;
  done: boolean;
}) => {
  const dataApiDrugAdd = await useThisApi.post("", data);
  return dataApiDrugAdd;
};

const apiDrugList = async (path: string) => {
  const dataApiDrugList = await useThisApi.get(`/${path}`);
  return dataApiDrugList;
};

const apiDrugCheck = async (data: {
  productName: string;
  usedAt: string;
  done: boolean;
}) => {
  const dataApiDrugCheck = await useThisApi.patch("/week", data);
  return dataApiDrugCheck;
};

const apiDrugWeek = async (
  path: string,
  params: { startDate: string; endDate: string }
) => {
  const dataApiDrugWeek = await useThisApi.get(`/${path}/week`, {
    params: params,
  });
  return dataApiDrugWeek;
};

export const drugApi = {
  apiDrugAdd: (data: {
    productName: string;
    customColor: string;
    done: boolean;
  }) => apiDrugAdd(data),
  apiDrugList: (path: string) => apiDrugList(path),
  apiDrugCheck: (data: {
    productName: string;
    usedAt: string;
    done: boolean;
  }) => apiDrugCheck(data),
  apiDrugWeek: (path: string, params: { startDate: string; endDate: string }) =>
    apiDrugWeek(path, params),
};
