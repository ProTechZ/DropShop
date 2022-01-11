import React, { useContext } from 'react';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import useGlobalStyles from '../hooks/useGlobalStyles';
import { MenuContext } from '../App';

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
  sx?: {};
}

const CustomLink: React.FC<CustomLinkProps> = ({
  children,
  sx,
  variant,
  to,
}) => {
  const classes = useGlobalStyles();
  const { setShowMenu } = useContext(MenuContext);

  return (
    <Typography variant={variant} sx={sx}>
      <Link
        className={classes.resetLink}
        onClick={() => setShowMenu(false)}
        to={to}
      >
        {children}
      </Link>
    </Typography>
  );
};

export default CustomLink;
