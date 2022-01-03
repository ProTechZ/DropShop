import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import React from 'react';
import useGlobalStyles from '../hooks/useGlobalStyles';

interface LoadingScreenProps {
  text: String;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ text }) => {
  const classes = useGlobalStyles();

  return (
      <Typography
        variant="h2"
        className={`
          ${classes.textCenter}
          ${classes.backupHorizontalVerticalCenter}
        `}
      >
        {text}
      </Typography>
  );
};

export default LoadingScreen;
