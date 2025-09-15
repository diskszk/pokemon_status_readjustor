import { useAtom, type atom } from "jotai";
import { useId } from "react";

import * as styles from "./LevelControl.css";

type Props = {
  levelAtom: ReturnType<typeof atom<number>>;
};

export function LevelControl({ levelAtom }: Props) {
  const id = useId();
  const [level, setLevel] = useAtom(levelAtom);

  const handleBlur = () => {
    if (level < 1) {
      setLevel(1);
      return;
    }
    if (level > 100) {
      setLevel(100);
      return;
    }
  };

  const increment = () => {
    if (level >= 100) {
      return;
    }
    setLevel(level + 1);
  };

  const decrement = () => {
    if (level <= 1) {
      return;
    }
    setLevel(level - 1);
  };

  return (
    <div
      className={styles.container}
      role="group"
    >
      <label htmlFor={`level-${id}`}>レベル</label>
      <div className={styles.inputContainer}>
        <input
          aria-valuemax={100}
          aria-valuemin={1}
          className={styles.input}
          id={`level-${id}`}
          inputMode="decimal"
          onBlur={handleBlur}
          onChange={(ev) => {
            const value = Number(ev.target.value);
            if (isNaN(value)) {
              return;
            }
            setLevel(value);
          }}
          pattern="[0-9]*(.[0-9]+)?"
          role="spinbutton"
          value={level}
        />
        <div className={styles.stepper}>
          <button
            className={styles.button}
            disabled={level === 100}
            onClick={increment}
          >
            <span className={styles.triangleUp} />
          </button>
          <button
            className={styles.button}
            disabled={level === 1}
            onClick={decrement}
          >
            <span className={styles.triangleDown} />
          </button>
        </div>

      </div>
    </div>
  );
}
