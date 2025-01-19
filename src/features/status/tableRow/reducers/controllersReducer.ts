import { atomWithReducer } from "jotai/utils";

import { HP } from "@/constants";
import type { NatureValue, StatusSpecies } from "@/types";

import { calculators } from "../../logic";

import type { Reducer } from "react";

type InitializeAction = {
  type: "INITIALIZE_ACTION";
  payload: {
    baseStat: number;
    type: StatusSpecies;
  };
};
type UpdateLevelAction = {
  type: "UPDATE_LEVEL_ACTION";
  payload: number;
};
type UpdateActualValueAction = {
  type: "UPDATE_ACTUAL_VALUE_ACTION";
  payload: {
    actualValue: number;
    effortValue: number;
  };
};
type UpdateEffortValueAction = {
  type: "UPDATE_EFFORT_VALUE_ACTION";
  payload: {
    actualValue: number;
    effortValue: number;
  };
};
type UpdateIndividualValueAction = {
  type: "UPDATE_INDIVIDUAL_VALUE_ACTION";
  payload: {
    actualValue: number;
    individualValue: number;
  };
};
type UpdateNatureValueAction = {
  type: "UPDATE_NATURE_VALUE_ACTION";
  payload: {
    actualValue: number;
    natureValue: NatureValue;
  };
};

type Action =
  | InitializeAction
  | UpdateLevelAction
  | UpdateEffortValueAction
  | UpdateActualValueAction
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

const initialValue: State = {
  baseStat: 0,
  level: 50,
  actualValue: 10,
  effortValue: 0,
  individualValue: 31,
  natureValue: 1,
  type: HP,
};

const controllersReducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case "INITIALIZE_ACTION": {
      const { type, baseStat } = action.payload;
      const { baseStat: _baseStat, actualValue: _actualValue, type: _type, ...rest } = initialValue;
      const actualValue = calculators.actualValue(type, {
        ...rest,
        baseStat,
      });

      return {
        ...rest,
        actualValue,
        baseStat,
        type,
      };
    }
    case "UPDATE_LEVEL_ACTION": {
      const newActualValue = calculators.actualValue(state.type, { ...state, level: action.payload });
      return {
        ...state,
        actualValue: newActualValue,
        level: action.payload,
      };
    }
    case "UPDATE_ACTUAL_VALUE_ACTION": {
      return {
        ...state,
        actualValue: action.payload.actualValue,
        effortValue: action.payload.effortValue,
      };
    }
    case "UPDATE_EFFORT_VALUE_ACTION": {
      return {
        ...state,
        actualValue: action.payload.actualValue,
        effortValue: action.payload.effortValue,
      };
    }
    case "UPDATE_INDIVIDUAL_VALUE_ACTION": {
      return {
        ...state,
        actualValue: action.payload.actualValue,
        individualValue: action.payload.individualValue,
      };
    }
    case "UPDATE_NATURE_VALUE_ACTION": {
      return {
        ...state,
        actualValue: action.payload.actualValue,
        natureValue: action.payload.natureValue,
      };
    }
    default:
      return state;
  }
};

export const controllersReducerAtom = atomWithReducer<State, Action>(initialValue, controllersReducer);
