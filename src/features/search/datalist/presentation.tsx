import { List, ListItem } from "@chakra-ui/react";

type Props = {
  suggestedPokemonList: string[];
  updateFormValue: (value: string) => void;
};

export function Presentation({
  suggestedPokemonList,
  updateFormValue,
}: Props) {
  return (
    <List
      aria-label="suggested-pokemon-list"
      bg="white"
      border="1px solid"
      borderColor="gray.200"
      borderRadius="md"
      boxShadow="md"
      maxH="200px"
      overflowY="auto"
      position="absolute"
      top="40px"
      width="100%"

    >
      {suggestedPokemonList.map((value, key) => (
        <ListItem key={key}>
          <button onClick={() => updateFormValue(value)}>
            {value}
          </button>
        </ListItem>
      ))}
    </List>
  );
}
