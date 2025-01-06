import { CardHeader, Heading, HStack } from "@chakra-ui/react";

import { LevelControl } from "../ui";

import type { Dispatch, SetStateAction } from "react";

export function HeadLine({ label, level, setLevel }: { label: string; level: number; setLevel: Dispatch<SetStateAction<number>> }) {
  return (
    <CardHeader
      pb="8px"
      pt="12px"
    >
      <HStack alignItems="center">
        <Heading
          as="h3"
          px="16px"
          size="sm"
          width="100%"
        >
          {label}
        </Heading>
        <LevelControl
          level={level}
          setLevel={setLevel}
        />
      </HStack>
    </CardHeader>
  );
}
