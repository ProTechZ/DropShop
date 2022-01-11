import React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import useGlobalStyles from '../hooks/useGlobalStyles';

interface CustomLinkProps {
  variant:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'button'
    | 'overline'
    | 'inherit';
  to: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ children, variant, to }) => {
  const classes = useGlobalStyles();
  return (
    <Typography variant={variant}>
      <Link className={classes.resetLink} to={to}>
        {children}
      </Link>
    </Typography>
  );
};

export default CustomLink;
