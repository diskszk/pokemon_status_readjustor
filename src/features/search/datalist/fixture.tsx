import { Presentation } from "./presentation";

export default () => (
  <Presentation
    suggestedPokemonList={["フシギダネ", "ヒトカゲ", "ゼニガメ"]}
    updateFormValue={(value: string) => {
      console.log(value);
    }}
  />
);
