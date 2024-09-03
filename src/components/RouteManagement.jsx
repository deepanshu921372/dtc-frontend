import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  CssBaseline,
  IconButton,
  AppBar,
  Toolbar,
  Grid,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import PeopleIcon from '@mui/icons-material/People';
import RouteIcon from '@mui/icons-material/AltRoute';
import BarChartIcon from '@mui/icons-material/BarChart';
import FeedbackIcon from '@mui/icons-material/Feedback';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import img3 from './../assets/graph3.jpeg';

const drawerWidth = '200px';
const drawerCollapsedWidth = '5%';

const RouteManagement = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <div>
      <List>
        {[
          { text: 'Dashboard', icon: <DashboardIcon />, to: '/office' },
          { text: 'Bus Management', icon: <DirectionsBusIcon />, to: '/bus-management' },
          { text: 'Crew Management', icon: <PeopleIcon />, to: '/crew-management' },
          { text: 'Route Management', icon: <RouteIcon />, to: '/route-management' },
          { text: 'Reports and Analytics', icon: <BarChartIcon />, to: '/reports-analytics' },
        ].map((item) => (
          <ListItem button key={item.text} component={Link} to={item.to}>
            <ListItemIcon sx={{ paddingBottom: mobileOpen ? 0 : 2 }}>
              {item.icon}
            </ListItemIcon>
            {mobileOpen && <ListItemText primary={item.text} />}
          </ListItem>
        ))}
      </List>
      <List>
        {[
          { text: 'Feedback and Support', icon: <FeedbackIcon />, to: '/feedback-support' },
        ].map((item) => (
          <ListItem button key={item.text} component={Link} to={item.to}>
            <ListItemIcon sx={{ paddingBottom: mobileOpen ? 0 : 2 }}>
              {item.icon}
            </ListItemIcon>
            {mobileOpen && <ListItemText primary={item.text} />}
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex', minHeight: '75vh', overflow: 'hidden' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          display: { xs: 'block', sm: 'none' },
          bgcolor: 'transparent',
          boxShadow: 'none',
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="black"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawerContent}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              width: mobileOpen ? drawerWidth : drawerCollapsedWidth,
              boxSizing: 'border-box',
              backgroundColor: 'lightblue',
              borderRadius: '0 10px 10px 0px',
              transition: 'width 0.3s ease-in-out',
              height: '675px',
              top: '120px',
              position: 'fixed',
              paddingTop: '64px',
            },
          }}
          open
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              left: 0,
              display: 'flex',
              justifyContent: 'flex-end',
              padding: 1,
            }}
          >
            <IconButton
              onClick={handleDrawerToggle}
              sx={{
                color: 'black',
                backgroundColor: 'white',
                borderRadius: '50%',
                mr: 2,
              }}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Box>
          {drawerContent}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          // marginTop: { xs: '64px', sm: 0 }, // Adjust margin for AppBar
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
          Route Management
        </Typography>

        <Box sx={{ marginBottom: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
            Assigned Routes
          </Typography>
          <Typography>
            Following routes are currently assigned for this Depot:
            <ul>
              <li>Route 761</li>
              <li>BYPASS EXP</li>
            </ul>
          </Typography>
        </Box>

        <Box sx={{ marginBottom: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
            Route Analytics
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '50%' }}>
              <img
                src={img3}
                alt="Graph Placeholder"
                style={{ maxWidth: '100%' }}
              />
            </Box>
          </Box>
        </Box>

        <Box>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
            Route Adjustments
          </Typography>
          <Typography>What do you want to adjust?</Typography>
          <ul>
            <li>Add a new Stop to the route</li>
            <li>Remove an existing stop</li>
            <li>Change bus service for a route</li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
};

export default RouteManagement;
