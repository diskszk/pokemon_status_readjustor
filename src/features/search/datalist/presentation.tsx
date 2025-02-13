import { Button, List, ListItem } from "@chakra-ui/react";
import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  suggestedPokemonList: string[];
  updateFormValue: (value: string) => void;
};

export function Presentation({
  suggestedPokemonList,
  updateFormValue,
}: Props) {
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const listRefs = useRef<HTMLButtonElement[]>([]);

  useEffect(() => {
    if (suggestedPokemonList.length) {
      setIsOpen(true);
    }
    else {
      setIsOpen(false);
    }
  }, [suggestedPokemonList]);

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

  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {isOpen && (
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
          ref={ref}
          role="tablist"
          top="40px"
          width="100%"
          zIndex="1"
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
                fontWeight="normal"
                justifyContent="flex-start"
                onClick={() => {
                  updateFormValue(value);
                  setFocusedIndex(-1);
                  setIsOpen(false);
                }}
                ref={(el) => focusOnButton(el, index)}
                width="100%"
              >
                {value}
              </Button>
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
}
