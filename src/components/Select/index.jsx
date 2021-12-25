import React from 'react';
import Select from 'react-select';
import { HeadingH6 } from 'components/Typography';
import Box from '@material-ui/core/Box';
import * as colors from 'theme/colors';
import { useField } from 'formik';

import { ErrorMessage } from './style';

function SelectInput({
  values = {},
  setFieldValue,
  name,
  placeholder,
  label,
  options,
  value,
  onChange,
  isDisabled,
}) {
  const [field, meta] = useField(name);
  const errorText = meta.error && meta.touched ? meta.error : '';

  const handleOnChange = (option) => {
    setFieldValue(name, option);
  };

  const isValid = !errorText;

  const renderBoxShadow = (isFocused, stateIsValid) => {
    if (!stateIsValid) {
      return `0 0 0 1px red`;
    }
    return isFocused ? `0 0 0 1px blue` : 'none';
  };

  const renderBorderColor = (isFocused, stateIsValid) => {
    if (!stateIsValid) {
      return `red`;
    }
    return isFocused ? 'blue' : 'grey';
  };

  const customStyles = {
    placeholder: (provided) => ({
      ...provided,
      fontSize: '16px',
      fontWeight: 500,
      textTransform: 'none',
      opacity: 0.7,
    }),
    control: (provided, state) => ({
      display: 'flex',
      justifyContent: 'space-between',
      padding: '5px',
      fontSize: '14px',
      fontWeight: 500,
      border: '1px solid',
      fontFamily: 'Raleway, sans-serif',
      borderColor: renderBorderColor(
        state.isFocused,
        state.selectProps.isValid,
      ),
      boxShadow: renderBoxShadow(state.isFocused, state.selectProps.isValid),
      borderRadius: '5px',
      textTransform: 'uppercase',
      backgroundColor: state.isDisabled ? 'lightgrey' : 'none',
    }),
    option: (provided) => ({
      ...provided,
      fontWeight: 500,
      fontSize: '14px',
      textTransform: 'uppercase',
      fontFamily: 'Raleway, sans-serif',
    }),
    menu: (provided) => ({
      ...provided,
      zIndex: 10,
    }),
  };

  return (
    <Box>
      <HeadingH6>{label}</HeadingH6>
      <Select
        options={options}
        value={value || values[name] || null}
        onChange={onChange || handleOnChange}
        isClearable
        isDisabled={isDisabled}
        styles={customStyles}
        noOptionsMessage={() => null}
        placeholder={placeholder}
        isValid={isValid}
      />
      {!isValid && <ErrorMessage>{errorText}</ErrorMessage>}
    </Box>
  );
}

export default SelectInput;
