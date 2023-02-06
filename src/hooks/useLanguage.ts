import React, { useContext } from 'react';

import { LanguageKey } from '../types';
import LanguageContext from '../contexts/LanguageContext';
import LanguageSetterContext from '../contexts/LanguageSetterContext';

const useLanguage = (): [LanguageKey, React.Dispatch<LanguageKey>] => {
  const value = useContext(LanguageContext);
  const dispatch = useContext(LanguageSetterContext);

  return [value, dispatch];
};

export default useLanguage;