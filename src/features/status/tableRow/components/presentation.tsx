import {
  Td,
  Th,
  Tr,
} from "@chakra-ui/react";

import type { NatureValue, StatusSpecies, StatusType } from "@/types";

import { MAX_TOTAL_EFFORT_VALUE, MAX_EFFORT_VALUE, MAX_INDIVIDUAL_VALUE } from "./styleConfig";
import { InputField, InputFieldWithButton } from "./ui";
import { toJaStatusSpecies } from "../../logic/toJaStatusSpecies";

import type { MouseEventHandler } from "react";

type Props = {
  speciesName: StatusSpecies;
  actualValue: number;
  maximumActualValue: number;
  minimumActualValue: number;
  handleChangeActualValue: (valueAsString: string, valueAsNumber: number) => void;
  effortValue: number;
  totalEffortValue: number;
  handleChangeEffortValue: (valueAsString: string, valueAsNumber: number) => void;
  maximizeEffortValue: MouseEventHandler<HTMLButtonElement>;
  minimizeEffortValue: MouseEventHandler<HTMLButtonElement>;
  individualValue: number;
  handleChangeIndividualValue: (valueAsString: string, valueAsNumber: number) => void;
  maximizeIndividualValue: MouseEventHandler<HTMLButtonElement>;
  minimizeIndividualValue: MouseEventHandler<HTMLButtonElement>;
  handleChangeNature?: (_: string, valueAsNumber: NatureValue) => void;
  statusType: StatusType;
};

export function Presentation({
  speciesName,
  actualValue,
  maximumActualValue,
  minimumActualValue,
  handleChangeActualValue,
  effortValue,
  totalEffortValue,
  handleChangeEffortValue,
  maximizeEffortValue,
  minimizeEffortValue,
  individualValue,
  handleChangeIndividualValue,
  maximizeIndividualValue,
  minimizeIndividualValue,
  handleChangeNature,
  statusType,
}: Props) {
  // 外に出せないか検討
  const speciesNameJA = toJaStatusSpecies(speciesName);

  return (
    <Tr>
      <Th>{speciesNameJA}</Th>
      <Td>
        <InputField
          aria-label={`${statusType}テーブルの${speciesNameJA}実数値`}
          defaultValue={actualValue}
          max={maximumActualValue}
          min={minimumActualValue}
          onChange={handleChangeActualValue}
          value={actualValue}
        />
      </Td>
      <Td>
        <InputFieldWithButton
          inputProps={{
            "aria-label": `${statusType}テーブルの${speciesNameJA}努力値`,
            "defaultValue": 0,
            "isInvalid": (totalEffortValue > MAX_TOTAL_EFFORT_VALUE),
            "max": MAX_EFFORT_VALUE,
            "min": 0,
            "onChange": handleChangeEffortValue,
            "step": (effortValue === 0 ? 4 : 8),
            "value": effortValue,
          }}
          maxButtonProps={{ "aria-label": `${statusType}テーブルの${speciesNameJA}努力値を最大`, "onClick": maximizeEffortValue }}
          minimumButtonProps={{ "aria-label": "努力値を0", "onClick": minimizeEffortValue }}
        />
      </Td>
      <Td>
        <InputFieldWithButton
          inputProps={{
            "aria-label": `${statusType}テーブルの${speciesNameJA}個体値`,
            "defaultValue": 31,
            "max": MAX_INDIVIDUAL_VALUE,
            "min": 0,
            "onChange": handleChangeIndividualValue,
            "step": 1,
            "value": individualValue,
          }}
          maxButtonProps={{ "aria-label": "個体値を最大", "onClick": maximizeIndividualValue }}
          minimumButtonProps={{ "aria-label": "個体値を0", "onClick": minimizeIndividualValue }}
        />
      </Td>
      {speciesName !== "hp" && (
        <Td>
          <InputField
            aria-label={`${statusType}テーブルの${speciesNameJA}性格補正`}
            defaultValue={1}
            height="16px"
            max={1.1}
            min={0.9}
            onChange={handleChangeNature}
            size="sm"
            step={0.1}
            variant="flushed"
            width="64px"
          />
        </Td>
      )}
    </Tr>
  );
}
