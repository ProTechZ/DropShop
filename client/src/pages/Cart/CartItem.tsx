import React from 'react';
import useProduct from '../../hooks/useProduct';
import { ProductType } from '../AllProducts/';
import LoadingScreen from '../../components/LoadingScreen';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import useGlobalStyles from '../../hooks/useGlobalStyles';
import { useNavigate } from 'react-router-dom';

interface CartItemProps {
  id: number;
}

const CartItem: React.FC<CartItemProps> = ({ id }) => {
  const classes = useGlobalStyles();
  const { data } = useProduct(id);
  const navigate = useNavigate();

  if (!data) return <LoadingScreen text="Loading..." />;

  const { title, category, image } = data as ProductType;

  return (
    <>
      <Box
        sx={{
          marginY: 0.5,
          cursor: 'pointer',
          '&:active': {
            backgroundColor: 'lightgrey',
          },
          borderRadius: 2.5,
        }}
        onClick={() => navigate(`/products/${id}?cart=true`)}
        className={classes.secondaryBorder}
      >
        <Box sx={{ margin: 1 }} className={classes.horizontalVerticalCenter}>
          <img
            style={{
              height: 'auto',
              maxHeight: '175px',
              width: 'auto',
              maxWidth: '175px',
            }}
            src={image}
            alt={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h6">
              {title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {category}
            </Typography>
          </CardContent>
        </Box>
      </Box>
    </>
  );
};

export default CartItem;
