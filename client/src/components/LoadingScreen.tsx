import React from 'react';
import Typography from '@mui/material/Typography';
import useGlobalStyles from '../hooks/useGlobalStyles';

interface LoadingScreenProps {
  text: string;
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
