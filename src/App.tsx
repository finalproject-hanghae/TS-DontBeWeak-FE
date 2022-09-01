import React from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { loadDrugDataMW } from "./redux/modules/drugs";
import { loadWeekDataMW } from "./redux/modules/weeks";

function App() {
  const dispatch = useAppDispatch();
  const hajun = useAppSelector((state) => state.drugs.drugs);
  React.useEffect(() => {
    dispatch(loadWeekDataMW("hajun",{startDate:"20220828", endDate:"20220903"}));
  }, []);
  console.log(hajun);

  

  return (
    <div className="App">
      <div />
      <div />
    </div>
  );
}

export default App;
