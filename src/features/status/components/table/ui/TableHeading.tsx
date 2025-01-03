import {
  Heading,
} from "@chakra-ui/react";

export function TableHeading({ label }: { label: string }) {
  return (
    <Heading
      as="h3"
      px="16px"
      size="sm"
      width="100%"
    >
      {label}
    </Heading>
  );
}
