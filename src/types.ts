export type TextEntryValues = {
  en: string;
  es: string;
};

export type TextEntry = {
  key: string;
  values: TextEntryValues;
}

export type LanguageKey = keyof TextEntryValues;

export enum Theme {
  Default,
  Dark,
}

export type ThemeValues = {
  id: number;
  values: {
    '--clr-primary-400': string;
    '--clr-primary-800': string;
    '--clr-primary-900': string;
  
    '--clr-secondary-600': string;
    '--clr-secondary-400': string;
    '--clr-secondary-200': string;

    '--clr-tertiary-400': string;
    '--clr-tertiary-clear-400': string;

    '--clr-neutral-600': string;

    '--clr-main-background-400': string;
    '--clr-accent-400': string;

    '--clr-nav-primary': string;
    '--clr-nav-secondary': string;

    '--clr-text-heading': string;
    '--clr-text-primary': string;
    '--clr-text-secondary': string;
  };
};