import React, { useState } from 'react';
import Select from 'react-select';
import i18next from 'i18next';
import { LanguageContainer } from './style';

const options = [
  { value: 'uk', label: 'uk' },
  { value: 'en', label: 'en' },
];

function Language() {
  const lan = localStorage.getItem('lan') || 'uk';
  const [language, setLanguage] = useState({ value: lan, label: lan });

  const handleChangelanguage = (option) => {
    setLanguage({ value: option.value, label: option.label });
    i18next.changeLanguage(option.value);
    localStorage.setItem('lan', option.value);
  };

  return (
    <LanguageContainer>
      <Select
        value={language}
        onChange={handleChangelanguage}
        options={options}
      />
    </LanguageContainer>
  );
}

export default Language;
