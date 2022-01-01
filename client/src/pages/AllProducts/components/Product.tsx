import React from 'react';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import useGlobalStyles from '../../../hooks/useGlobalStyles';
import { useStyles } from '..';

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

  const { title, category, image, price } = props;

  return (
    <Box
      sx={{
        marginX: 1,
      }}
      className={`
        ${classes.secondaryBorder}
        ${localClasses.borderRadius}
      `}
    >
      <CardActionArea sx={{ display: 'flex' }}>
        <CardMedia
          component="img"
          className={`${localClasses.borderRadius} ${localClasses.ml1}`}
          image={image}
          alt={title}
        />
        <CardContent className={localClasses.ml1}>
          <Typography gutterBottom variant="h6">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {category}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Box>
  );
};

export default Product;
