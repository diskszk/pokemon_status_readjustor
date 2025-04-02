import { atom, useAtom } from "jotai";

const inputValueAtom = atom("");

export function useInputValue() {
  const [inputValue, setInputValue] = useAtom(inputValueAtom);

  return {
    inputValue,
    setInputValue,
  };
}
