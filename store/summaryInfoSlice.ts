import { StateCreator } from "zustand";
import { SummarySlice } from "./types";

export const createSummarySlice: StateCreator<
  SummarySlice,
  [],
  [],
  SummarySlice
> = (set) => ({
    summary:{personalSummary:'',jobDescription:''},
    updateSummary:(field,value)=>
        set((state)=>({
            summary:{...state.summary,[field]:value}
        })),
})
