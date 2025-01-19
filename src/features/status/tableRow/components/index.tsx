import { Td, Th, Tr } from "@chakra-ui/react";
import { useSetAtom } from "jotai";
import { useEffect } from "react";

import { HP } from "@/constants";
import type { StatusSpecies, StatusType } from "@/types";

import { ActualValueInput, EffortValueInput, IndividualValueInput, NatureValueValueInput } from "./partials";
import { toJaStatusSpecies } from "../../logic/toJaStatusSpecies";
import { controllersReducerAtom } from "../reducers";

type Props = {
  baseStat: number;
  level: number;
  statusType: StatusType;
  speciesName: StatusSpecies;
};

export function TableRow({
  baseStat,
  level,
  statusType,
  speciesName,
}: Props) {
  const speciesNameJA = toJaStatusSpecies(speciesName);
  const dispatch = useSetAtom(controllersReducerAtom);

  useEffect(() => {
    dispatch({ type: "INITIALIZE_ACTION", payload: {
      baseStat,
      type: speciesName,
    } });
  }, [baseStat, dispatch, speciesName]);

  useEffect(() => {
    // 変更されたlevelが渡ってきた時 action を行う
    dispatch({ type: "UPDATE_LEVEL_ACTION", payload: level });
  }, [dispatch, level]);

  return (
    <Tr>
      <Th>{speciesNameJA}</Th>
      <Td>
        <ActualValueInput
          ariaLabel={`${statusType}テーブルの${speciesNameJA}実数値`}
          baseStat={baseStat}
          speciesName={speciesName}
          statusType={statusType}
        />
      </Td>
      <Td>
        <EffortValueInput
          ariaLabel={`${statusType}テーブルの${speciesNameJA}努力値`}
          statusType={statusType}
        />
      </Td>
      <Td>
        <IndividualValueInput
          ariaLabel={`${statusType}テーブルの${speciesNameJA}個体値`}
        />
      </Td>
      {speciesName !== HP && (
        <Td>
          <NatureValueValueInput
            ariaLabel={`${statusType}テーブルの${speciesNameJA}性格補正`}
          />
        </Td>
      )}
    </Tr>
  );
}
