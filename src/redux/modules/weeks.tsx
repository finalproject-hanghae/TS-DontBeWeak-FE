import { drugApi } from "../../api/drugApi";
import { startAndEndDate, weekList } from "../../types/weeks";

// Actions
const LOAD = "week/LOAD";

type WeekState = {
  weeks: weekList;
  week: number;
};

const initialState: WeekState = {
  weeks: [],
  week: 0,
};

export function loadWeekData(myWeek: weekList) {
  return { type: LOAD, weeks: myWeek };
}

//middlewares
export function loadWeekDataMW(name: string, params: startAndEndDate) {
  return function (dispatch: any) {
    drugApi
      .apiDrugWeek(name, params)
      .then((response) => {
        console.log(response.data);
        dispatch(loadWeekData([...response.data]));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export default function reducer(state = initialState, action: any = {}) {
  //매개변수에 값이 안들어오면 넣을 초기상태 값 -> 함수(state = {})
  //dispatch는 action함수에 접근하여 리턴값으로 reducer의 2번째 매개변수(action)를 제공
  switch (action.type) {
    case "week/LOAD": {
      return { weeks: [...action.weeks], week: state.week };
    }
    // do reducer stuff
    default:
      return state;
  }
}
