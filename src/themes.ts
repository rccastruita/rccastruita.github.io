import { Theme, ThemeValues } from './types';

const Themes: ThemeValues[] = [
  {
    id: Theme.Default,
    values: {
      '--clr-primary-200': 'hsl(228 100% 56%)',
      '--clr-primary-400': 'hsl(228 100% 44%)',
      '--clr-primary-800': 'hsl(228 100% 22%)',
      '--clr-primary-900': 'hsl(228 100% 15%)',
  
      '--clr-secondary-600': 'hsl(347 95% 65%)',
      '--clr-secondary-400': 'hsl(347 85% 45%)',
      '--clr-secondary-200': 'hsl(347 85% 55%)',

      '--clr-tertiary-400': 'hsl(258 100% 44%)',
      '--clr-tertiary-clear-400': 'hsl(198 100% 44%)',

      '--clr-neutral-600': 'hsl(0 0% 30%)',

      '--clr-main-background-400': 'hsl(214 0% 100%)',
      '--clr-accent-400': 'white',

      '--clr-nav-primary': 'var(--clr-secondary-400)',
      '--clr-nav-secondary': 'white',

      '--clr-text-heading': 'hsl(45 100% 100%)',
      '--clr-text-primary': 'black',
      '--clr-text-secondary': 'white',
      '--clr-text-tertiary': 'white',

      '--clr-automation-fill': 'white',
      '--clr-frontend-circle': 'none',
    }
  },
  {
    id: Theme.Dark,
    values: {
      '--clr-primary-200': 'hsl(228 100% 56%)',
      '--clr-primary-400': 'hsl(190, 90%, 10%)',
      '--clr-primary-800': 'hsl(228 100% 22%)',
      '--clr-primary-900': 'hsl(228 100% 15%)',
  
      '--clr-secondary-600': 'hsl(190 77% 25%)',
      '--clr-secondary-400': 'hsl(190 77% 15%)',
      '--clr-secondary-200': 'hsl(190 77% 10%)',

      '--clr-tertiary-400': 'hsl(258 100% 44%)',
      '--clr-tertiary-clear-400': 'hsl(0, 0%, 19%)',

      '--clr-neutral-600': 'hsl(0 0% 30%)',

      '--clr-main-background-400': 'hsl(214 32% 13%)',
      '--clr-accent-400': 'white',

      '--clr-nav-primary': 'var(--clr-secondary-400)',
      '--clr-nav-secondary': 'white',

      '--clr-text-heading': 'hsl(45 100% 100%)',
      '--clr-text-primary': 'white',
      '--clr-text-secondary': 'black',
      '--clr-text-tertiary': 'white',

      '--clr-automation-fill': 'white',
      '--clr-frontend-circle': 'none',
    }
  }
];

export default Themes;