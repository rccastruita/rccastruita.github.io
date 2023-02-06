import { createContext } from "react";

import { LanguageKey } from "../types";

const LanguageContext = createContext<LanguageKey>('en');

export default LanguageContext;