import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./App.css";
import { RootState } from "./redux/configStore";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { loadDrugDataMW } from "./redux/modules/drugs";

function App() {
  const dispatch = useAppDispatch();
  const hajun = useAppSelector((state) => state.drugs.drugs);
  React.useEffect(() => {
    dispatch(loadDrugDataMW("hajun"));
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
