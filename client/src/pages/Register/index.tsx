import React, { useState } from 'react';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormField from '../../components/FormField';
import PasswordField from '../../components/PasswordField';
import useGlobalStyles from '../../hooks/useGlobalStyles';
import { useNavigate } from 'react-router-dom';
import SubmitButton from './SubmitButton';

const RegisterPage: React.FC = () => {
  const classes = useGlobalStyles();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const formHandler = () => {
    if (name && email && password) {
      axios
        .post('http://localhost:8000/users/register', { name, email, password })
        .then((res) => navigate('/'))
        .catch((err) => console.error(err));
    }
  };

  return (
    <Box className={classes.horizontalVerticalCenter} sx={{ margin: 2.5 }}>
      <form
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
        }}
      >
        <Typography
          children="Register"
          fontWeight={900}
          variant="h4"
          sx={{ marginBottom: 2.5 }}
        />
        <FormField
          setState={setName}
          state={name}
          label="Full Name"
          placeholder="John Doe"
        />
        <FormField
          setState={setEmail}
          state={email}
          type="email"
          label="Email"
          placeholder="john.doe@gmail.com"
        />
        <PasswordField state={password} setState={setPassword} />
        <SubmitButton formHandler={formHandler} />
      </form>
    </Box>
  );
};

export default RegisterPage;
