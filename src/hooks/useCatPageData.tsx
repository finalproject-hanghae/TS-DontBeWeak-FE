import { useParams } from "react-router-dom";
import React from "react";
import { catApi } from "../api/catApi";

export const useCatPageData = () => {
  const myname = useParams().username;
  const [myCat, setMyCat] = React.useState({});

  React.useEffect(() => {
    catApi
      .apiSomeCatStatus(myname)
      .then((response) => {
        console.log(response.data);
        setMyCat({ ...response.data, username: myname });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return myCat;
};
