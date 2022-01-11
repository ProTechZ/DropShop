import React, { useState, Dispatch, SetStateAction } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

interface PasswordFieldProps {
  state: string;
  setState: Dispatch<SetStateAction<any>>;
}

const PasswordField: React.FC<PasswordFieldProps> = ({state, setState}) => {
  const [passwordHidden, setPasswordHidden] = useState(false);

  const togglePasswordHidden = () => {
    setPasswordHidden(!passwordHidden);
  };

  return (
    <TextField
      value={state}
      onChange={(event) => {
        setState(event.target.value);
      }}
      type={passwordHidden ? 'password' : 'text'}
      color="secondary"
      sx={{ borderRadius: 2.5, width: '100%' }}
      required
      label="Password"
      variant="outlined"
      InputProps={{
        endAdornment: (
          <Box onClick={togglePasswordHidden} sx={{ cursor: 'pointer' }}>
            {passwordHidden ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </Box>
        ),
      }}
    />
  );
};

export default PasswordField;
