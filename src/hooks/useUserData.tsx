import React from "react";
import { userApi } from "../api/basicAPI";

const useUserData = () => {
  const [userInfo, setUserInfo] = React.useState();
  React.useEffect(() => {
    userApi
      .apiUser()
      .then((res) => {
        console.log(res.data, "유저정보다ㅏㅏㅏ");
        setUserInfo(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return userInfo;
};

export default useUserData;
