import { useContext } from 'react';

import LocaleProvider from './Provider';
import { LocaleContext } from './Context';

function useLocale() {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
}

export default useLocale;

export { LocaleProvider };
