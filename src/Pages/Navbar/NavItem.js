import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
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
 import css from '../Navbar/NavItem.css'
import { Link } from 'react-router-dom';
const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const menuItems = [
    <li > 
         <Icon icon="material-symbols:add-home-outline"  className="icon"  />
         <Link className="link" to="/">Dashboard</Link>
    </li>,
    <li>
 <Icon icon="material-symbols:add-home-outline"  className="icon"  />
<Link   className='dropdown' to="/review"> Category List
    <Typography className='dropdown-content'>
    <li><Link className="subDrop" to="/contact">Primaam</Link></li>  
    <li><Link className="subDrop"  to="/login">Golden</Link></li>  
    <li><Link className="subDrop"  to="/about">Silver</Link></li>  
    <li><Link className="subDrop"  to="/about">Bronz</Link></li>  
    </Typography>
    </Link></li>,
    <li> <Icon icon="material-symbols:add-home-outline"  className="icon"  />  <Link className="link" to="/home">Customer list</Link></li>,
    <li>  <Icon icon="material-symbols:add-home-outline"  className="icon"  /> <Link className="link" to="/about">Booking List</Link></li>,
    <li> <Icon icon="material-symbols:add-home-outline"  className="icon"  /> <Link className="link" to="/contact">Inbox </Link></li>,
    <li>  <Icon icon="material-symbols:add-home-outline"  className="icon"  /><Link className="link" to="/about">Active Account</Link></li>,
    <li>  <Icon icon="material-symbols:add-home-outline"  className="icon"  /><Link className="link" to="/contact">Company owner list</Link></li>,
    <li> <Icon icon="material-symbols:add-home-outline"  className="icon"  /> <Link className="link" to="/about">Propertys</Link></li>,
    <li>  <Icon icon="material-symbols:add-home-outline"  className="icon"  /><Link className="link" to="/about">Customer Review</Link></li>,
    <li>  <Icon icon="material-symbols:add-home-outline"  className="icon"  /><Link className="link" to="/about">Logout</Link></li>
]

  const drawer = (
    <div>
        <List sx={{background:'black', color:'whi'}}>
            {menuItems.map((text, index) => (
                <ListItem key={text} disablePadding>
                    <ListItemButton>
                        <ListItemText className="asa" primary={text} />
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

 
export default ResponsiveDrawer;