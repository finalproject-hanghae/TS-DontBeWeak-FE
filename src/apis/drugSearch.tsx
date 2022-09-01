import axios from "axios";

const EncodingKey =
  "mXannjyGQuOwS5AW+JOwAeyGU068pNoPi+earzfgfdqykES+IkoKXkVRCuufQz4+9lwYQ/b9owxbkrncKp0+vg==";

export const drugSearchAPI = async (Prduct:string = "", pageNo:number = 1) => {
  const ja = await axios(
    "http://apis.data.go.kr/1471000/HtfsInfoService2/getHtfsItem",
    {
      params: {
        Prduct: Prduct,
        pageNo: pageNo,
        numOfRows: 7,
        ServiceKey: EncodingKey,
        type: "json",
      },
    }
  );

  return ja.data.body.items;
};
