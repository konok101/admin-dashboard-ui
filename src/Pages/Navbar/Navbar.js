import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Icon } from '@iconify/react';
import styles from '../Navbar/NavItem.css'
import { Link } from 'react-router-dom';
const drawerWidth = 240;

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const menuItems = [
    <li >
      <Icon icon="material-symbols:add-home-outline" className="icon" />
      <Link className="link" to="/">Dashboard</Link>
    </li>,
    <li>
      <Icon icon="bxs:category" className="icon" />
      <Typography className='dropdown'  > Category List
        <Typography className='dropdown-content'>
          <li><Link className="subDrop" to="/pariman">Primaam</Link></li>
          <li><Link className="subDrop" to="/golden">Golden</Link></li>
          <li><Link className="subDrop" to="/silver">Silver</Link></li>
          <li><Link className="subDrop" to="/bronz">Bronz</Link></li>
        </Typography>
      </Typography></li>,
    <li> <Icon icon="raphael:customer" className="icon" />
      <Link className="link" to="/customerlist">Customer list</Link>
      </li>,
    <li>  <Icon icon="material-symbols:store" className="icon" /> 
    <Link className="link" to="/bookinglist">Booking List</Link>
    </li>,

 
   <li>
      <Icon icon="material-symbols:forward-to-inbox" className="icon" />
      <Typography className='dropdown'  > Inbox 
        <Typography className='dropdown-content'>
          <li><Link className="subDrop" to="/inbox">Comapny chat</Link></li>
          <li><Link className="subDrop" to="/customerInbox">Customer Chat</Link></li>
       
        </Typography>
      </Typography></li>,


    <li>  <Icon icon="fluent-mdl2:global-nav-button-active" className="icon" />
    <Link className="link" to="/activeAccount">Active Account</Link>
    </li>,
    <li>  <Icon icon="raphael:customer" className="icon" />
    <Link className="link" to="/ownerList">Company owner list</Link>
    </li>,
    <li> <Icon icon="ic:baseline-move-to-inbox" className="icon" />
     <Link className="link" to="/propertys">Propertys</Link></li>,
    <li>  <Icon icon="material-symbols:add-home-outline" className="icon" />
    <Link className="link" to="/customerReview">Customer Review</Link></li>,
    <li>  <Icon icon="raphael:customer" className="icon" />
    <Link className="link" to="/logout">Logout</Link>
    </li>
  ]

  const drawer = (
    <div>
      <List sx={{ background: 'black', color: 'whi' }}>
        {menuItems.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem >
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>


      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
      </Box>
    </Box>
  );
}


export default Navbar;