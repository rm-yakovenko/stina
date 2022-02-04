import React, { useState } from 'react';
import Select from 'react-select';
import ukrFlag from 'assets/flags/ukraine.png';
import britFlag from 'assets/flags/britan.png';
import gerFlag from 'assets/flags/germany.png';
import polFlag from 'assets/flags/poland.png';
import useLocale from 'components/useLocale';
import * as colors from 'theme/colors';
import { LanguageContainer, FlagImage } from './style';

const options = [
  { value: 'uk', label: <FlagImage src={ukrFlag} /> },
  { value: 'en', label: <FlagImage src={britFlag} /> },
  //{ value: 'de', label: <FlagImage src={gerFlag} /> },
  //{ value: 'pl', label: <FlagImage src={polFlag} /> },
];

function Language() {
  const lan = localStorage.getItem('lan') || 'uk';
  const currentOption = options.find((option) => option.value === lan);
  const [language, setLanguage] = useState(currentOption);
  const { setLocale } = useLocale();

  const handleChangelanguage = (option) => {
    setLanguage({ value: option.value, label: option.label });
    setLocale(option.value);
    localStorage.setItem('lan', option.value);
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: colors.lightBlue,
      border: 'none',
      boxShadow: 'none',
    }),
    input: (provided) => ({
      ...provided,
      color: 'transparent',
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: colors.lightBlue,
    }),
  };

  return (
    <LanguageContainer>
      <Select
        value={language}
        onChange={handleChangelanguage}
        options={options}
        styles={customStyles}
      />
    </LanguageContainer>
  );
}

export default Language;
