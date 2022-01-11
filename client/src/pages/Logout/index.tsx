import React, { useEffect } from 'react';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useGlobalStyles from '../../hooks/useGlobalStyles';
import CustomLink from '../../components/CustomLink';

const LogoutPage: React.FC = () => {
  const classes = useGlobalStyles();

  useEffect(() => {
    axios
      .get('http://localhost:8000/users/logout')
      .then((_) => {})
      .catch((err) => console.error(err));
  }, []);

  return (
    <Box
      className={classes.verticalCenter}
      sx={{ margin: 2.5, flexDirection: 'column', }}
    >
      <CustomLink variant="body1" to="/">
        Back to Home
      </CustomLink>
      <Typography fontWeight={900} className={classes.textCenter} variant="h4">
        You have been successfully logged out
      </Typography>
    </Box>
  );
};

export default LogoutPage;
