import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useHistory } from 'react-router-dom';

import { Home, Settings, Task } from '@mui/icons-material'
import path from 'path-browserify';

const getIcon = (icon) => {
  switch (icon) {
    case 'HOME':
      return (<Home/>);
    case 'TASKS':
      return (<Home/>);
    case 'SETIINGS':
      return (<Settings/>);
    default:
      return (<Home/>);
  }
}

const MenuListItem = ({list}) => {
  const history = useHistory();

  const navigate = (path) => {
    history.push(path);
  }

  return (
    <List>
      {list.map(({text, path, icon}, index) => 
        (
          <ListItem key={index} button onClick={() => navigate(path)}>
            <ListItemIcon>
              {getIcon(icon)}
            </ListItemIcon>
            <ListItemText
              primary={text}
            />
          </ListItem>
        )
      )}
    </List>
  )
}

export default MenuListItem;