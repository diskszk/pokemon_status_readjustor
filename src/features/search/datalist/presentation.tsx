import { Button, List, ListItem } from "@chakra-ui/react";
import { useCallback, useRef, useState } from "react";

type Props = {
  suggestedPokemonList: string[];
  updateFormValue: (value: string) => void;
};

export function Presentation({
  suggestedPokemonList,
  updateFormValue,
}: Props) {
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const listRefs = useRef<HTMLButtonElement[]>([]);
  const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLUListElement>) => {
    if (suggestedPokemonList.length === 0) {
      return;
    }

    if ((event.shiftKey && event.key === "Tab") || event.key === "ArrowUp") {
      event.preventDefault();

      const prevIndex = focusedIndex > 0 ? focusedIndex - 1 : suggestedPokemonList.length - 1;

      setFocusedIndex(prevIndex);
      listRefs.current[prevIndex]?.focus();
      return;
    }

    if (event.key === "Tab" || event.key === "ArrowDown") {
      event.preventDefault();
      const nextIndex = suggestedPokemonList.length - focusedIndex - 1 > 0 ? focusedIndex + 1 : 0;
      setFocusedIndex(nextIndex);
      listRefs.current[nextIndex]?.focus();
      return;
    }
  }, [focusedIndex, suggestedPokemonList.length]);

  const focusOnButton = useCallback((el: HTMLButtonElement | null, index: number) => {
    if (!listRefs.current) {
      return;
    }
    if (!el) {
      return;
    }
    listRefs.current[index] = el;
  }, []);

  return (
    <List
      aria-label="suggested-pokemon-list"
      bg="white"
      border="1px solid"
      borderColor="gray.200"
      borderRadius="md"
      boxShadow="md"
      maxH="200px"
      onKeyDown={handleKeyDown}
      overflowY="auto"
      position="absolute"
      role="tablist"
      top="40px"
      width="100%"
    >
      {suggestedPokemonList.map((value, index) => (
        <ListItem
          aria-selected={index === focusedIndex}
          key={value}
          onFocus={() => setFocusedIndex(index)}
          p="2"
          role="tab"
        >
          <Button
            _focus={{ bgColor: "blue.400" }}
            color={index === focusedIndex ? "white" : "black"}
            onClick={() => updateFormValue(value)}
            ref={(el) => focusOnButton(el, index)}
            width="100%"
          >
            {value}
          </Button>
        </ListItem>
      ))}
    </List>
  );
}
