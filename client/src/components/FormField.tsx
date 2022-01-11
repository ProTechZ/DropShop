import React, { Dispatch, SetStateAction } from 'react';
import TextField from '@mui/material/TextField';

interface FormFieldProps {
  label: string;
  placeholder: string;
  type?: string;
  state: any;
  setState: Dispatch<SetStateAction<any>>;
}

const FormField: React.FC<FormFieldProps> = ({
  type,
  label,
  placeholder,
  state,
  setState,
}) => {
  return (
    <TextField
      value={state}
      onChange={(event) => {
        setState(event.target.value);
      }}
      type={type ? type : 'text'}
      color="secondary"
      sx={{ borderRadius: 2.5, width: '100%' }}
      required
      label={label}
      variant="outlined"
      placeholder={placeholder}
    />
  );
};

export default FormField;
