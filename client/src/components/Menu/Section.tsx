import React from 'react';
import useGlobalStyles from '../../hooks/useGlobalStyles';

import CustomLink from '../CustomLink';
import Box from '@mui/material/Box';

interface SectionProps {
  listItemObjs: { name: string; to: string; icon: any }[];
}

const Section: React.FC<SectionProps> = ({ listItemObjs }) => {
  const classes = useGlobalStyles();

  return (
    <Box sx={{ marginY: 2 }}>
      {listItemObjs.map((obj, index) => (
        <Box
          key={index}
          sx={{ marginLeft: 3, marginBottom: 1.5 }}
          className={classes.verticalCenter}
        >
          {obj.icon}
          <CustomLink to={obj.to} variant="h6" sx={{ marginLeft: 4 }}>
            {obj.name}
          </CustomLink>
        </Box>
      ))}
    </Box>
  );
};

export default Section;
