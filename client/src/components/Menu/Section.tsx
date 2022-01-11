import React from 'react';
import useGlobalStyles from '../../hooks/useGlobalStyles';

import CustomLink from '../CustomLink';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface SectionProps {
  title?: string;
  listItemObjs: { name: string; to: string; icon: any }[];
}

const Section: React.FC<SectionProps> = ({ listItemObjs, title }) => {
  const classes = useGlobalStyles();

  return (
    <Box sx={{ marginBottom: 2 }}>
      {title && (
        <Typography
          sx={{ marginTop: 1 }}
          variant="h5"
          className={classes.textCenter}
          children={title}
        />
      )}
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
