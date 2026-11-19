export const DISTRICTS = [
  "Kilinochchi",
  "Vavuniya",
  "Jaffna",
  "Mullaitivu",
  "Trincomalee",
  "Mannar",
] as const;

export type District = (typeof DISTRICTS)[number];
