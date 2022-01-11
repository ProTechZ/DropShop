import React, { useState } from 'react';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormField from '../../components/FormField';
import PasswordField from '../../components/PasswordField';
import useGlobalStyles from '../../hooks/useGlobalStyles';
import { useNavigate } from 'react-router-dom';
import SubmitButton from './SubmitButton';
import CustomLink from '../../components/CustomLink';

const LoginPage: React.FC = () => {
  const classes = useGlobalStyles();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const formHandler = () => {
    if (email && password) {
      axios
        .post('http://localhost:8000/users/login', { email, password })
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
          children="Login"
          fontWeight={900}
          variant="h4"
          sx={{ marginBottom: 2.5 }}
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
        <CustomLink to="/register" variant="body1">
          New to DropShop? Register here
        </CustomLink>
      </form>
    </Box>
  );
};

export default LoginPage;
