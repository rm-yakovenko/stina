import React, { useState } from 'react';
import { LocaleContext } from './Context';

function LocaleProvider({ children }) {
  const lan = localStorage.getItem('lan') || 'uk';
  const [locale, setLocale] = useState(lan);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export default LocaleProvider;
