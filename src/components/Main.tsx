import { useContext } from 'react';

import { TextEntryValues, TextEntry } from '../types';
import useLanguage from '../hooks/useLanguage';
import TestButton from './TestButton';

const Main = () => {
  const [key] = useLanguage();

  const text: TextEntryValues = {
    en: 'Hello world! Language:',
    es: '¡Hola mundo! Idioma:'
  };

  const texts: Array<TextEntry> = [
    {
      key: 'HELLO',
      values: {
        en: 'Hello Worldo!!',
        es: '¡Hola Mundillo!'
      }
    },
    {
      key: 'LANGUAGE',
      values: {
        en: 'Language:',
        es: 'Idioma:'
      }
    }
  ];

  const HELLO = texts.find(elem => elem.key === 'HELLO')?.values[key];
  const LANGUAGE = texts.find(elem => elem.key === 'LANGUAGE')?.values[key];

  return (
    <>
      <p>{HELLO} {LANGUAGE}</p>
      <TestButton />
    </>
  );
};

export default Main;