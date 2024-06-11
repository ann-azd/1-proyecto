import type { AppDispatch, RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<RootState>= useSelector
export const useAppDispatch: ()=> AppDispatch = useDispatch;

export const useMaterialesSelector = () => {
 return useSelector((state: RootState) => state.materiales);
 };