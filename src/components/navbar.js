import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';


const DrawerList = styled(List)(({ theme }) => ({
  backgroundColor: '#17185e',
  height: '100%',
  color: 'white',
}));

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: 'Home', icon: <HomeIcon />, link: '/' },
    { text: 'Login', icon: <LoginIcon />, link: '/login' },
    { text: 'Sign Up', icon: <PersonAddIcon />, link: '/signup' },
  ];

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: '#17185e' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, color: 'inherit', textDecoration: 'none','&:hover': {
                color: '#7f6feb',
              }, }}>
            MyApp
          </Typography>
          <div className="nav-links">
            {menuItems.map((item) => (
              <Link to={item.link} className="nav-link" key={item.text}>
                <IconButton color="inherit">{item.icon}</IconButton>
                <Typography variant="button" display="block" gutterBottom>
                  {item.text}
                </Typography>
              </Link>
            ))}
          </div>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <DrawerList onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          {menuItems.map((item) => (
            <ListItem button component={Link} to={item.link} key={item.text}>
              <ListItemIcon sx={{ color: 'white' }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </DrawerList>
      </Drawer>
    </>
  );
};

export default Navbar;