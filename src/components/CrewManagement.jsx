import React from 'react';
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  CssBaseline,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Divider,
  AppBar,
  Toolbar
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import FeedbackIcon from '@mui/icons-material/Feedback';
import RouteIcon from '@mui/icons-material/Route'; // Assuming this import was missing
import { Link } from 'react-router-dom';

const drawerWidth = '200px';
const drawerCollapsedWidth = '5%';

const CrewManagement = () => {
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
            <ListItemIcon
              sx={{
                paddingBottom: mobileOpen ? 0 : 2, // Add padding-bottom when collapsed
              }}
            >
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
            <ListItemIcon
              sx={{
                paddingBottom: mobileOpen ? 0 : 2, // Add padding-bottom when collapsed
              }}
            >
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
      <AppBar position="fixed" sx={{ display: { xs: 'block', sm: 'none' }, bgcolor: 'transparent', boxShadow: 'none' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="black"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, mb: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
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
                mr: 2
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
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          transition: 'margin-left 0.3s ease-in-out',
          padding: 2,
          overflowX: 'hidden',
        }}
      >
        {/* Crew Management UI */}
        <Box sx={{ width: '100%', maxWidth: '1200px', marginTop: 5 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
            Crew Management
          </Typography>
          <TableContainer component={Paper}>
            <Table aria-label="crew management table">
              <TableBody>
                <TableRow>
                  <TableCell align="center" sx={{ backgroundColor: '#74c0fc', border: '1px solid black' }}>
                    <Typography variant="h6">Total Drivers</Typography>
                    <Typography variant="h6">00</Typography>
                  </TableCell>
                  <TableCell align="center" sx={{ backgroundColor: '#74c0fc', border: '1px solid black' }}>
                    <Typography variant="h6">Total Conductors</Typography>
                    <Typography variant="h6">00</Typography>
                  </TableCell>
                  <TableCell align="center" sx={{ backgroundColor: '#74c0fc', border: '1px solid black' }}>
                    <Typography variant="h6">Total Guards</Typography>
                    <Typography variant="h6">00</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center" sx={{ backgroundColor: '#74c0fc', border: '1px solid black' }}>
                    <Typography variant="h6">Drivers Present</Typography>
                    <Typography variant="h6">00</Typography>
                  </TableCell>
                  <TableCell align="center" sx={{ backgroundColor: '#74c0fc', border: '1px solid black' }}>
                    <Typography variant="h6">Conductors Present</Typography>
                    <Typography variant="h6">00</Typography>
                  </TableCell>
                  <TableCell align="center" sx={{ backgroundColor: '#74c0fc', border: '1px solid black' }}>
                    <Typography variant="h6">Guards Present</Typography>
                    <Typography variant="h6">00</Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <Typography variant="subtitle1" sx={{ marginTop: 3, fontWeight: 'bold' }}>
            View Reports
          </Typography>
          <Typography variant="body2">
            <ul>
              <li style={{ fontSize: '20px' }}>
                <Link to="/reports/driver" style={{ textDecoration: 'none', color: 'inherit' }}>Driver</Link>
              </li>
              <li style={{ fontSize: '20px' }}>
                <Link to="/reports/conductor" style={{ textDecoration: 'none', color: 'inherit' }}>Conductors</Link>
              </li>
              <li style={{ fontSize: '20px' }}>
                <Link to="/reports/guard" style={{ textDecoration: 'none', color: 'inherit' }}>Guards</Link>
              </li>
            </ul>
          </Typography>

          <Divider sx={{ marginY: 2 }} />

          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            Assign Crew Members to different Depots
          </Typography>
          <Typography variant="body2">
            <ul>
              <li style={{ fontSize: '20px' }}>
                <Link to="/assignments/driver" style={{ textDecoration: 'none', color: 'inherit' }}>Driver</Link>
              </li>
              <li style={{ fontSize: '20px' }}>
                <Link to="/assignments/conductor" style={{ textDecoration: 'none', color: 'inherit' }}>Conductors</Link>
              </li>
              <li style={{ fontSize: '20px' }}>
                <Link to="/assignments/guard" style={{ textDecoration: 'none', color: 'inherit' }}>Guards</Link>
              </li>
            </ul>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CrewManagement;
