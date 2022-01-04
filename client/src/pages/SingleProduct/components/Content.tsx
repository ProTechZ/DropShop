import React from 'react';
import Typography from '@mui/material/Typography';
import CollapseField from '../../../components/CollapseField';
import Box from '@mui/material/Box';
import useGlobalStyles from '../../../hooks/useGlobalStyles';
import useCapitaliseEachWord from '../../../hooks/useCapitaliseEachWord';

interface ContentProps {
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
}

const Content: React.FC<ContentProps> = (props) => {
  const classes = useGlobalStyles();

  const { title, description, price, category } = props;
  return (
    <Box>
      <Typography
        sx={{ marginY: 1, fontWeight: '900' }}
        className={classes.textCenter}
        variant="h5"
      >
        {title}
      </Typography>

      <Box
        sx={{ display: 'flex', marginY: 3, justifyContent: 'space-between' }}
      >
        <Typography variant="h6">{`$${price.toFixed(2)}`}</Typography>
        <Typography variant="h6">{useCapitaliseEachWord(category)}</Typography>
      </Box>
      <CollapseField title="Description" text={description} />
    </Box>
  );
};

export default Content;
