import { useSetAtom } from "jotai";
import { useCallback, useEffect } from "react";
import { BehaviorSubject, debounceTime } from "rxjs";

import { formDisabledAtom } from "../stores";

const inputValue$ = new BehaviorSubject("");
const DEBOUNCE_TIME = 500;

export function useDebouncedInput(callback: (inputValue: string) => void) {
  const setFormDisabled = useSetAtom(formDisabledAtom);

  const handleChange = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
    inputValue$.next(event.target.value);
    setFormDisabled(true);
  }, [setFormDisabled]);

  useEffect(() => {
    const subscription = inputValue$.asObservable().pipe(debounceTime(DEBOUNCE_TIME)).subscribe((inputValue) => {
      callback(inputValue);
      setFormDisabled(false);
    });

    return () => subscription.unsubscribe();
  }, [callback, setFormDisabled]);

  return { handleChange };
}
