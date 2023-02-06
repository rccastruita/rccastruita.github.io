import React, { createContext } from "react";

import { LanguageKey } from "../types";

const LanguageSetterContext = 
  createContext<React.Dispatch<LanguageKey>>(
    _ => console.log('LanguageSetter not defined')
  );

export default LanguageSetterContext;