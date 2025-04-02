import { useAtom } from "jotai";
import { useCallback } from "react";

import type { NatureValue, StatusType } from "@/types";

import { useEffortValues } from "../../hooks";
import { calculators } from "../../logic";
import { controllersReducerAtom } from "../reducers";

export function useUserInputValues() {
  const [state, dispatch] = useAtom(controllersReducerAtom);

  const { updateEffortValue } = useEffortValues();

  const updateActualValueInput = useCallback(({
    type,
    value,
  }: {
    type: StatusType;
    value: number;
  }) => {
    const newEffortValue = calculators.effortValue(state.type, { ...state, actualValue: value });

    dispatch({ type: "UPDATE_ACTUAL_VALUE_ACTION", payload: {
      actualValue: value,
      effortValue: newEffortValue,
    } });

    updateEffortValue({ type, statusSpecies: state.type, value: newEffortValue });
  }, [dispatch, state, updateEffortValue]);

  const updateEffortValueInput = useCallback(({
    type,
    value,
  }: {
    type: StatusType;
    value: number;
  }) => {
    const newActualValue = calculators.actualValue(state.type, { ...state, effortValue: value });

    dispatch({ type: "UPDATE_EFFORT_VALUE_ACTION", payload: {
      actualValue: newActualValue,
      effortValue: value,
    } });

    updateEffortValue({ type, statusSpecies: state.type, value });
  }, [dispatch, state, updateEffortValue]);

  const updateIndividualValueInput = useCallback(({
    value,
  }: {
    value: number;
  }) => {
    const newActualValue = calculators.actualValue(state.type, { ...state, individualValue: value });

    dispatch({ type: "UPDATE_INDIVIDUAL_VALUE_ACTION", payload: { actualValue: newActualValue, individualValue: value } });
  }, [dispatch, state]);

  const updateNatureValueInput = useCallback(({
    value,
  }: {
    value: NatureValue;
  }) => {
    const newActualValue = calculators.actualValue(state.type, { ...state, natureValue: value });

    dispatch({
      type: "UPDATE_NATURE_VALUE_ACTION",
      payload: {
        actualValue: newActualValue,
        natureValue: value,
      },
    });
  }, [dispatch, state]);

  return {
    updateActualValueInput,
    updateEffortValueInput,
    updateIndividualValueInput,
    updateNatureValueInput,
  };
}
