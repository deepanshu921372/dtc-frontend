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
  Grid,
  CircularProgress,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  AppBar,
  Toolbar
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import PeopleIcon from '@mui/icons-material/People';
import RouteIcon from "@mui/icons-material/AltRoute";
import BarChartIcon from '@mui/icons-material/BarChart';
import FeedbackIcon from '@mui/icons-material/Feedback';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const drawerWidth = '200px';
const drawerCollapsedWidth = '5%';

const ReportsAnalytics = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <div>
      <Box>
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
                  paddingBottom: mobileOpen ? 0 : 2,
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
                  paddingBottom: mobileOpen ? 0 : 2,
                }}
              >
                {item.icon}
              </ListItemIcon>
              {mobileOpen && <ListItemText primary={item.text} />}
            </ListItem>
          ))}
        </List>
      </Box>
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
          top: 0
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
        <Typography
          variant="h6"
          sx={{ fontSize: '3rem', fontWeight: 700, textAlign: 'center', mt: 5 }}
        >
          Reports and Analytics
        </Typography>
        <Box
          sx={{
            width: '80%',
            maxWidth: '1200px',
            margin: 'auto',
            padding: 2,
            mt: 7
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <Box
                sx={{
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '200px',
                }}
              >
                <CircularProgress
                  variant="determinate"
                  value={100}
                  size={150}
                  thickness={8}
                  sx={{
                    color: '#6ce5e8',
                    position: 'absolute',
                    zIndex: 1,
                  }}
                />
                <CircularProgress
                  variant="determinate"
                  value={75}
                  size={150}
                  thickness={8}
                  sx={{
                    color: '#40b8d5',
                    position: 'absolute',
                    zIndex: 2,
                    clipPath: 'circle(75% at 50% 50%)',
                  }}
                />
              </Box>
            </Grid>
             <Grid item xs={12} md={3}>
               <Box
                 sx={{
                   padding: 2,
                   borderRadius: '20px',
                   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                   height: '70%',
                   width: 'auto',
                   display: 'flex',
                   justifyContent: 'center',
                   alignItems: 'center',
                   backgroundColor: "#74c0fc"
                 }}
               >
                <Typography variant="h6" sx={{fontSize: '1.3rem', textAlign: 'center'}}>Bus Active this <br /> month</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box
                sx={{
                  padding: 2,
                  borderRadius: '20px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  height: '70%',
                  width: 'auto',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: "#74c0fc"
                }}
              >
                <Typography variant="h6" sx={{fontSize: '1.3rem', textAlign: 'center'}}>Crew Active this month</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box
                sx={{
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '200px',
                }}
              >
                <CircularProgress
                  variant="determinate"
                  value={100}
                  size={150}
                  thickness={8}
                  sx={{
                    color: '#6ce5e8',
                    position: 'absolute',
                    zIndex: 1,
                  }}
                />
                <CircularProgress
                  variant="determinate"
                  value={70}
                  size={150}
                  thickness={8}
                  sx={{
                    color: '#40b8d5',
                    position: 'absolute',
                    zIndex: 2,
                    clipPath: 'circle(70% at 50% 50%)',
                  }}
                />
              </Box>
            </Grid>
          </Grid>

          {/* Summary Section */}
          <Box sx={{ mt: 6 }}>
            <Typography variant="h6" sx={{ fontSize: '2.6rem', textAlign: 'left' }}>Summary</Typography>
            <Grid container spacing={3} sx={{ mt: 1 }}>
              <Grid item xs={12} md={6}>
                <TableContainer component={Paper} sx={{ boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}>
                  <Table>
                    <TableHead sx={{ backgroundColor: '#74c0fc' }}>
                      <TableRow>
                        <TableCell sx={{ color: 'black' }}>Month</TableCell>
                        <TableCell sx={{ color: 'black' }}>No. of Buses</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>January</TableCell>
                        <TableCell>25</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>February</TableCell>
                        <TableCell>30</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>March</TableCell>
                        <TableCell>28</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
              <Grid item xs={12} md={6}>
                <TableContainer component={Paper} sx={{ boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}>
                  <Table>
                    <TableHead sx={{ backgroundColor: '#74c0fc' }}>
                      <TableRow>
                        <TableCell sx={{ color: 'black' }}>Month</TableCell>
                        <TableCell sx={{ color: 'black' }}>No. of Crew Members</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>January</TableCell>
                        <TableCell>45</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>February</TableCell>
                        <TableCell>48</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>March</TableCell>
                        <TableCell>47</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </Box>

          {/* Maps Section */}
          <Box sx={{ mt: 6 }}>
            <Typography variant="h6" sx={{ fontSize: '2rem', textAlign: 'left' }}>Maps</Typography>
            <MapContainer
              center={[28.62560125392331,77.06551991130448]}
              zoom={13}
              style={{ height: '400px', width: '100%', marginTop: '16px' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[51.505, -0.09]}>
                 <Popup>
                   A pretty CSS3 popup. <br /> Easily customizable.
                 </Popup>
               </Marker>
             </MapContainer>
           </Box>
         </Box>
       </Box>
     </Box>
   );
 };

 export default ReportsAnalytics;

