/**
 * FLAG CONFIG — single source of truth for all team flag mappings.
 *
 * To add a new flag:      add an entry below pointing to your component.
 * To swap a flag image:   replace the component on the right-hand side.
 * To add a generic team:  it falls back to GenericFlag automatically.
 *
 * Flag components live in: src/components/flags.tsx
 */

import type { ComponentType } from "react";
import {
  Australia,
  India,
  England,
  Pakistan,
  SriLanka,
  NewZealand,
  SouthAfrica,
  WestIndies,
  Bangladesh,
  Zimbabwe,
  Afghanistan,
  Ireland,
  Netherlands,
  Scotland,
  GenericFlag,
} from "@/components/flags";

export type FlagComponent = ComponentType<{ size?: number }>;

/** Maps every team name to its flag component. Update this to change flags. */
export const FLAG_MAP: Record<string, FlagComponent> = {
  "Australia":    Australia,
  "India":        India,
  "England":      England,
  "Pakistan":     Pakistan,
  "Sri Lanka":    SriLanka,
  "New Zealand":  NewZealand,
  "South Africa": SouthAfrica,
  "West Indies":  WestIndies,
  "Bangladesh":   Bangladesh,
  "Zimbabwe":     Zimbabwe,
  "Afghanistan":  Afghanistan,
  "Ireland":      Ireland,
  "Netherlands":  Netherlands,
  "Scotland":     Scotland,
};

export { GenericFlag };
