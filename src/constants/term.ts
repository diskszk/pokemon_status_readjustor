export const HP_JA = "HP" as const;
export const ATK_JA = "こうげき" as const;
export const DEF_JA = "ぼうぎょ" as const;
export const SP_ATK_JA = "とくこう" as const;
export const SP_DEF_JA = "とくぼう" as const;
export const SPD_JA = "すばやさ" as const;

export const STATUS_SPECIES_JA = [HP_JA, ATK_JA, DEF_JA, SP_ATK_JA, SP_DEF_JA, SPD_JA] as const;

export const HP = "hp" as const;
export const ATK = "attack" as const;
export const DEF = "defense" as const;
export const SP_ATK = "special-attack" as const;
export const SP_DEF = "special-defense" as const;
export const SPD = "speed" as const;

export const STATUS_SPECIES = [HP, ATK, DEF, SP_ATK, SP_DEF, SPD] as const;

export const items = [
  { largeIncrease: "マックスアップ", smallIncrease: "たいりょくのハネ", decrease: "ザロクのみ", type: HP },
  { largeIncrease: "タウリン", smallIncrease: "きんりょくのハネ", decrease: "ネコブのみ", type: ATK },
  { largeIncrease: "ブロムヘキシン", smallIncrease: "ていこうのハネ", decrease: "タポルのみ", type: DEF },
  { largeIncrease: "リゾチウム", smallIncrease: "ちりょくのハネ", decrease: "ロメのみ", type: SP_ATK },
  { largeIncrease: "キトサン", smallIncrease: "せいしんのハネ", decrease: "ウブのみ", type: SP_DEF },
  { largeIncrease: "インドメタシン", smallIncrease: "しゅんぱつのハネ", decrease: "マトマのみ", type: SPD },
];
