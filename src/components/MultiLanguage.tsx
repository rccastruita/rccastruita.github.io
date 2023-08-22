import { ReactNode } from "react";

import useLanguage from "../hooks/useLanguage";
import { LanguageKey } from "../types";

type MLProps = {
  language: LanguageKey;
  children: ReactNode;
};

const MultiLanguage = ({language, children}: MLProps) => {
  const [lan] = useLanguage();

  return lan === language ? (
    <>{children}</>
  ) : null;
};

export default MultiLanguage;