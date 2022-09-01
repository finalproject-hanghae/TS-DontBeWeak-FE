import { drugApi } from "../../api/drugApi";

// Actions
const KEEP = "drug/KEEP";
const LOAD = "drug/LOAD";

const initialState = {
  drugs: [],
};

export function keepDrugData(newDrug) {
  return { type: KEEP, drugs: newDrug };
}

export function loadDrugData(myDrug) {
  return { type: LOAD, drugs: myDrug };
}

//middlewares
export function loadDrugDataMW(username) {
  return function (dispatch) {
    drugApi
      .apiDrugList(username)
      .then((res) => {
        dispatch(loadDrugData(res.data));
      })
      .catch((err) => console.log(err));
  };
}

export const keepDrugDataMW = (tmpDrugData) => {
  return function (dispatch) {
    drugApi
      .apiDrugAdd(tmpDrugData)
      .then((res) => {
        console.log(res);
        dispatch(keepDrugData(tmpDrugData));
      })
      .catch((err) => console.log(err));
  };
};

export default function reducer(state = initialState, action = {}) {
  //매개변수에 값이 안들어오면 넣을 초기상태 값 -> 함수(state = {})
  //dispatch는 action함수에 접근하여 리턴값으로 reducer의 2번째 매개변수(action)를 제공
  switch (action.type) {
    case "drug/KEEP": {
      return { drugs: [...state.drugs, action.drugs] };
    }
    case "drug/LOAD": {
      return { drugs: [...action.drugs] };
    }
    // do reducer stuff
    default:
      return state;
  }
}