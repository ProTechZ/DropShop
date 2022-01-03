import React from 'react';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import useGlobalStyles from '../../../hooks/useGlobalStyles';
import useCapitaliseEachWord from '../../../hooks/useCapitaliseEachWord';
import { useStyles } from '..';
import { useNavigate } from 'react-router-dom';

export interface ProductProps {
  _id: number;
  title: string;
  category: string;
  description?: string;
  image: string;
  price: number;
}

const Product: React.FC<ProductProps> = (props) => {
  const classes = useGlobalStyles();
  const localClasses = useStyles();

  const { _id: id, title, category, image } = props;

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        marginX: 1,
        marginY: 0.5,
        cursor: 'pointer',
        '&:active': {
          backgroundColor: 'lightgrey',
        },
      }}
      onClick={() => navigate(`/products/${id}`)}
      className={`${classes.secondaryBorder} ${localClasses.borderRadius}`}
    >
      <Box sx={{ margin: 1 }} className={classes.horizontalVerticalCenter}>
        <img src={image} className={localClasses.sameSizedImage} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h6">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {useCapitaliseEachWord(category)}
          </Typography>
        </CardContent>
      </Box>
    </Box>
  );
};

export default Product;
