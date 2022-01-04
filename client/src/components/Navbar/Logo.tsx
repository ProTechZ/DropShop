import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import useGlobalStyles from '../../hooks/useGlobalStyles';

const Logo = () => {
  const classes = useGlobalStyles();

  return (
    <Typography
      variant="h5"
      sx={{ letterSpacing: 2.5, fontFamily: 'Fira Sans, sans-serif' }}
    >
      <Link to="/" style={{ color: 'inherit' }} className={classes.resetLink}>
        DROPSHOP
      </Link>
    </Typography>
  );
};

export default Logo;
