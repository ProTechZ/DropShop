import React from 'react';
import { useParams } from 'react-router-dom';
import useProduct from '../../hooks/useProduct';
import useGlobalStyles from '../../hooks/useGlobalStyles';

import LoadingScreen from '../../components/LoadingScreen';
import Content from './components/Content';
import AddToCartBtn from './components/AddToCartBtn';
import ProductsListLink from './components/ProductsListLink';
import Box from '@mui/material/Box';

const SingleProduct: React.FC = () => {
  const classes = useGlobalStyles();

  const { data } = useProduct(+useParams().id!);

  if (!data) return <LoadingScreen text="Loading..." />;

  const {_id,  title, image } = data!;

  return (
    <Box
      sx={{
        flexDirection: 'column',
        margin: 2,
        marginBottom: 4,
      }}
      className={classes.horizontalVerticalCenter}
    >
      <ProductsListLink />
      <img
        style={{
          height: 'auto',
          maxHeight: '360px',
          width: 'auto',
          maxWidth: '360px',
        }}
        src={image}
        alt={title}
      />
      <Content {...data} />
      <AddToCartBtn id={_id} />
    </Box>
  );
};

export default SingleProduct;
