import useLanguage from "./useLanguage";
import { TextEntry } from "../types";

const useTextEntry = (entries: Array<TextEntry>) => {
  const [languageKey] = useLanguage();

  const getTextEntry = (key: string): string => {
    const entry = entries.find(elem => elem.key === key)
      ?.values[languageKey];

    return entry ?? 'undefinedEntry';
  }

  return getTextEntry;
};

export default useTextEntry;