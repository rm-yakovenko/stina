import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useField } from 'formik';

function CustomTextField({
  label,
  type,
  disabled = false,
  multiline = false,
  autoFocus = false,
  placeholder,
  rows = 1,
  rowsMax = 1,
  inputProps,
  variant = 'outlined',
  ...props
}) {
  const [field, meta] = useField(props);
  const { value, ...restField } = field;
  const errorText = meta.error && meta.touched ? meta.error : '';

  return (
    <TextField
      fullWidth
      variant={variant}
      size="small"
      label={label}
      type={type}
      helperText={errorText}
      error={!!errorText}
      value={value || ''}
      placeholder={placeholder}
      disabled={disabled}
      multiline={multiline}
      rows={rows}
      rowsMax={rowsMax}
      autoFocus={autoFocus}
      inputProps={inputProps}
      {...restField}
    />
  );
}

export default CustomTextField;
