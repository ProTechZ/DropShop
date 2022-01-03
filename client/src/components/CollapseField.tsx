import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import useGlobalStyles from '../hooks/useGlobalStyles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

interface CollapseFieldProps {
  title: string;
  text: string;
}

const CollapseField: React.FC<CollapseFieldProps> = ({ title, text }) => {
  const classes = useGlobalStyles();

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => setExpanded(!expanded);

  return (
    <Box
      onClick={handleExpandClick}
      sx={{
        borderRadius: 1,
        '&:hover': {
          cursor: 'pointer',
        },
      }}
      className={classes.secondaryBorder}
    >
      <IconButton onClick={handleExpandClick}>
        {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        <Typography sx={{ marginLeft: 1 }} variant="h6">
          {title}
        </Typography>
      </IconButton>
      <Collapse sx={{ marginX: 1 }} in={expanded} timeout="auto" unmountOnExit>
        <Typography variant="body1">{text}</Typography>
      </Collapse>
    </Box>
  );
};

export default CollapseField;
