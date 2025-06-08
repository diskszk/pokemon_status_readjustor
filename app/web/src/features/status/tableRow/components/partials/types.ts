import type { StatusSpeciesJA } from "@/features/status/logic/term";
import type { StatusType } from "@/types";

export type AriaLabel<T extends string> = `${StatusType}テーブルの${StatusSpeciesJA}${T}`;
