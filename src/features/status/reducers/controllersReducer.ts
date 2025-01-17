import { atomWithReducer } from "jotai/utils";

import { HP } from "@/constants";
import type { NatureValue, StatusSpecies } from "@/types";

import { calculators } from "../logic";

import type { Reducer } from "react";

type UpdateActualValueAction = {
  type: "UPDATE_ACTUAL_VALUE_ACTION";
  payload: number;
};
type UpdateEffortValueAction = {
  type: "UPDATE_EFFORT_VALUE_ACTION";
  payload: number;
};
type Initialize = {
  type: "INITIALIZE_ACTION";
  payload: State;
};
type UpdateLevelAction = {
  type: "UPDATE_LEVEL_ACTION";
  payload: number;
};
type UpdateIndividualValueAction = {
  type: "UPDATE_INDIVIDUAL_VALUE_ACTION";
  payload: number;
};
type UpdateNatureValueAction = {
  type: "UPDATE_NATURE_VALUE_ACTION";
  payload: NatureValue;
};

type Action =
  | Initialize
  | UpdateEffortValueAction
  | UpdateActualValueAction
  | UpdateLevelAction
  | UpdateIndividualValueAction
  | UpdateNatureValueAction;

type State = {
  level: number;
  actualValue: number;
  effortValue: number;
  individualValue: number;
  natureValue: NatureValue;
  baseStat: number;
  type: StatusSpecies;
};

const controllersReducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case "INITIALIZE_ACTION": {
      return action.payload;
    }
    case "UPDATE_ACTUAL_VALUE_ACTION": {
      const newEffortValue = calculators.effortValue(state.type, { ...state, actualValue: action.payload });

      return { ...state, effortValue: newEffortValue, actualValue: action.payload };
    }
    case "UPDATE_EFFORT_VALUE_ACTION": {
      const newActualValue = calculators.actualValue(state.type, { ...state, effortValue: action.payload });

      return { ...state, actualValue: newActualValue, effortValue: action.payload };
    }
    case "UPDATE_LEVEL_ACTION": {
      const newActualValue = calculators.actualValue(state.type, { ...state, level: action.payload });
      return { ...state, actualValue: newActualValue, level: action.payload };
    }
    case "UPDATE_INDIVIDUAL_VALUE_ACTION": {
      const newActualValue = calculators.actualValue(state.type, { ...state, individualValue: action.payload });
      return { ...state, actualValue: newActualValue, individualValue: action.payload };
    }
    case "UPDATE_NATURE_VALUE_ACTION": {
      const newActualValue = calculators.actualValue(state.type, { ...state, natureValue: action.payload });
      return { ...state, actualValue: newActualValue, natureValue: action.payload };
    }
    default:
      return state;
  }
};

const initialValue: State = {
  baseStat: 100,
  level: 50,
  actualValue: 0,
  effortValue: 0,
  individualValue: 31,
  natureValue: 1,
  type: HP,
};

export const controllersReducerAtom = atomWithReducer<State, Action>(initialValue, controllersReducer);
