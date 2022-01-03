import { useParams } from 'react-router-dom';
import useProduct from '../../hooks/useProduct';
import useGlobalStyles from '../../hooks/useGlobalStyles';
import React from 'react';
import LoadingScreen from '../../components/LoadingScreen';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';

const useStyles = makeStyles({
  image: {
    height: 'auto',
    maxHeight: '400px',
    width: 'auto',
    maxWidth: '400px',
  },
});

const SingleProduct: React.FC = () => {
  const classes = useGlobalStyles();
  const localClasses = useStyles();

  const { id } = useParams();
  const { data } = useProduct(+id!);

  if (!data) {
    return <LoadingScreen text="Loading..." />;
  }

  const { title, category, description, price, image } = data!;

  return (
    <Box className={classes.horizontalCenter}>
      
    </Box>
  );
};

export default SingleProduct;
