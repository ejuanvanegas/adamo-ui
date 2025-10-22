export const THEMES = ["default", "sign", "id", "pay", "risk"] as const;

export type Theme = (typeof THEMES)[number];
