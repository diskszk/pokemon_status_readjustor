import { HP, ATK, DEF, SP_ATK, SP_DEF, SPD } from "@/_constants";

export const items = [
  { largeIncrease: "マックスアップ", smallIncrease: "たいりょくのハネ", decrease: "ザロクのみ", type: HP },
  { largeIncrease: "タウリン", smallIncrease: "きんりょくのハネ", decrease: "ネコブのみ", type: ATK },
  { largeIncrease: "ブロムヘキシン", smallIncrease: "ていこうのハネ", decrease: "タポルのみ", type: DEF },
  { largeIncrease: "リゾチウム", smallIncrease: "ちりょくのハネ", decrease: "ロメのみ", type: SP_ATK },
  { largeIncrease: "キトサン", smallIncrease: "せいしんのハネ", decrease: "ウブのみ", type: SP_DEF },
  { largeIncrease: "インドメタシン", smallIncrease: "しゅんぱつのハネ", decrease: "マトマのみ", type: SPD },
] as const;
