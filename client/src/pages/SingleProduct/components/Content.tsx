import React from 'react';
import Typography from '@mui/material/Typography';
import CollapseField from '../../../components/CollapseField';
import Box from '@mui/material/Box';
import useGlobalStyles from '../../../hooks/useGlobalStyles';

interface ContentProps {
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
}

const Content: React.FC<ContentProps> = (props) => {
  const classes = useGlobalStyles();

  const { title, description, price, image, category } = props;
  return (
    <Box>
      <Typography
        sx={{ marginY: 1, fontWeight: '900' }}
        className={classes.textCenter}
        variant="h5"
      >
        {title}
      </Typography>
      <Typography sx={{ marginY: 1}} variant="h6">
        {`$${price}`}
      </Typography>
      <CollapseField
        title="Description"
        text={description}
      />
    </Box>
  );
};

export default Content;
