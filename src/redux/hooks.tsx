import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./configStore";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// dispatch는 매개변수로 action을 요구함. 하지만 MW를 제공할 때가 있음.
// js에서는 문제가 없었으나 ts에서는 타입 오류가 나타남. 해결.
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
