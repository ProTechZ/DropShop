import React from 'react';
import useGlobalStyles from '../../hooks/useGlobalStyles';

import { SvgIconComponent } from '@mui/icons-material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import Typography from '@mui/material/Typography';

interface SectionProps {
  title?: string;
  listItemObjs: { name: string; icon: SvgIconComponent }[];
}

const Section: React.FC<SectionProps> = ({ listItemObjs, title }) => {
  const classes = useGlobalStyles();

  return (
    <>
      {title && (
        <Typography
          sx={{ marginTop: 1 }}
          variant="h6"
          className={classes.textCenter}
        >
          {title}
        </Typography>
      )}
      <List>
        {listItemObjs.map((obj, index) => (
          <ListItem button key={index}>
            <ListItemIcon children={obj.icon} />
            <ListItemText primary={obj.name} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Section;
