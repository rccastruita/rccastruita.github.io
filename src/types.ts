export type TextEntryValues = {
  en: string;
  es: string;
};

export type TextEntry = {
  key: string;
  values: TextEntryValues;
}

export type LanguageKey = keyof TextEntryValues;