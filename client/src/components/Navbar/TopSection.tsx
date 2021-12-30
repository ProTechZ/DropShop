import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';

const TopSection = () => {
  return (
    <Stack direction="row" spacing={6}>
      <MenuIcon fontSize="large" htmlColor="white" />
      <Typography
        letterSpacing={3}
        variant="h4"
        color="white"
        fontFamily="Fira Sans"
      >
        DROPSHOP
      </Typography>
      <ShoppingCartIcon fontSize="large" htmlColor="white" />
    </Stack>
  );
};

export default TopSection;
