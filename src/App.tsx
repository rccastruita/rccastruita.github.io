import React from 'react';
import { useState } from 'react';

import { LanguageKey } from './types';
import LanguageContext from './contexts/LanguageContext';
import LanguageSetterContext from './contexts/LanguageSetterContext';

import Main from './components/Main';

const App = () => {
  const [language, setLanguage] = useState('en');


  return (
    <LanguageContext.Provider value={language as LanguageKey} >
      <LanguageSetterContext.Provider value={setLanguage} >
        <Main />
      </LanguageSetterContext.Provider>
    </LanguageContext.Provider>
  );
};

export default App;
