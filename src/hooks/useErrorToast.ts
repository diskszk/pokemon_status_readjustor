import { useToast } from "@chakra-ui/react";

export function useErrorToast() {
  const showErrorToast = useToast({
    title: "Error",
    status: "error",
    duration: 5000,
    isClosable: true,
  });

  return { showErrorToast };
}
