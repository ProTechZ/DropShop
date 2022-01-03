import React from 'react';
import { useParams } from 'react-router-dom';
import useProduct from '../../hooks/useProduct';
import useGlobalStyles from '../../hooks/useGlobalStyles';
import { makeStyles } from '@mui/styles';

import LoadingScreen from '../../components/LoadingScreen';
import Content from './components/Content';
import BackToProducts from './components/BackToProducts';
import Box from '@mui/material/Box';

const useStyles = makeStyles({
  image: {
    height: 'auto',
    maxHeight: '360px',
    width: 'auto',
    maxWidth: '360px',
  },
});

const SingleProduct: React.FC = () => {
  const classes = useGlobalStyles();
  const localClasses = useStyles();

  const { data } = useProduct(+useParams().id!);

  if (!data) return <LoadingScreen text="Loading..." />;

  const { title, category, description, price, image } = data!;

  return (
    <Box
      sx={{
        flexDirection: 'column',
        margin: 2,
        marginBottom: 4
      }}
      className={classes.horizontalVerticalCenter}
    >
      <BackToProducts />
      <img
        className={localClasses.image}
        src={image}
        alt={title}
      />
      <Content {...data} />
    </Box>
  );
};

export default SingleProduct;
