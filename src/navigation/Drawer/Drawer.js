import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

type Anchor = 'left' | 'right' | 'top' | 'bottom'

const list1 = ['Tab', 'Starred', 'Send email', 'Drafts']
  const list2 = ['All mail', 'Trash', 'Spam']
  const temp = ['left',]
export default function Drawer(){
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  })
  
  const navigate = useNavigate();

  const toggleDrawer =(anchor: Anchor, open: boolean) =>
  (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event.key === 'Tab') ||
        (event.key === 'Shift'))
    ) {
    return;
    }

    setState({ ...state, [anchor]: open });
  };

const list = (anchor: Anchor) => (
  <Box 
  sx = {{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250}}
  role= "presentation"
  onClick={toggleDrawer(anchor, false)}
  onKeyDown={toggleDrawer(anchor, false)}
  >
  <List>
    {list1.map((text, index)=> (
      <ListItem 
      onClick={()=> index === 0 ? navigate('/tab') : null}
      key={text} disablePadding>
      <ListItemButton>
        <ListItemIcon>
          {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
        </ListItemIcon>
        <ListItemText primary={text}/>
      </ListItemButton>
      </ListItem>
    ))}
  </List>
  <Divider />
  <List>
        {list2.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
  </Box>
)

return(
  <div>
{ 
    (temp.map((anchor)=> (
      <React.Fragment key={anchor}>
      <Button 
      onClick={toggleDrawer(anchor, true)}>
      <MenuIcon onClick={toggleDrawer(anchor, true)}/>
      </Button>
      <SwipeableDrawer
      anchor={anchor}
      open={state[anchor]}
      onClose={toggleDrawer(anchor, false)}
      onOpen={toggleDrawer(anchor, true)}
      >
      {list(anchor)}
      </SwipeableDrawer>
      </React.Fragment>
    ))
)}
</div>
)
}
