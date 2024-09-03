import React from "react";
import {
  Drawer,
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
  Button,
  Select,
  MenuItem,
  IconButton,
  AppBar,
  Toolbar,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import PeopleIcon from "@mui/icons-material/People";
import RouteIcon from "@mui/icons-material/AltRoute";
import BarChartIcon from "@mui/icons-material/BarChart";
import FeedbackIcon from "@mui/icons-material/Feedback";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const drawerWidth = '200px';
const drawerCollapsedWidth = '60px'; // Adjusted for a more compact look

const BusManagement = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <div>
      <List>
        {[
          { text: "Dashboard", icon: <DashboardIcon />, to: "/office" },
          { text: "Bus Management", icon: <DirectionsBusIcon />, to: "/bus-management" },
          { text: "Crew Management", icon: <PeopleIcon />, to: "/crew-management" },
          { text: "Route Management", icon: <RouteIcon />, to: "/route-management" },
          { text: "Reports and Analytics", icon: <BarChartIcon />, to: "/reports-analytics" },
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
          { text: "Feedback and Support", icon: <FeedbackIcon />, to: "/feedback-support" },
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
    <Box sx={{ display: "flex" }}>
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
          ModalProps={{ keepMounted: true }}
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
              height: '100%',
              top: '0',
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
              sx={{ color: 'black', backgroundColor: 'white', borderRadius: '50%' }}
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
          marginLeft: { xs: 0, sm: drawerWidth },
          transition: 'margin 0.3s ease-in-out',
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2 }}>
          Bus Management
        </Typography>
        <TableContainer
          component={Paper}
          sx={{ maxWidth: "100%", marginBottom: 3 }}
        >
          <Table aria-label="bus management table">
            <TableBody>
              <TableRow>
                <TableCell
                  align="center"
                  sx={{ backgroundColor: "#74c0fc", border: "1px solid black" }}
                >
                  <Typography variant="h6">Outgoing Buses</Typography>
                  <Typography variant="h6">00</Typography>
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ backgroundColor: "#74c0fc", border: "1px solid black" }}
                >
                  <Typography variant="h6">Total Special Buses</Typography>
                  <Typography variant="h6">00</Typography>
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ backgroundColor: "#74c0fc", border: "1px solid black" }}
                >
                  <Typography variant="h6">Buses Under Maintenance</Typography>
                  <Typography variant="h6">00</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  align="center"
                  sx={{ backgroundColor: "#74c0fc", border: "1px solid black" }}
                >
                  <Typography variant="h6">Incoming Buses</Typography>
                  <Typography variant="h6">00</Typography>
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ backgroundColor: "#74c0fc", border: "1px solid black" }}
                >
                  <Typography variant="h6">Total Active Special Buses</Typography>
                  <Typography variant="h6">00</Typography>
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ backgroundColor: "#74c0fc", border: "1px solid black" }}
                >
                  <Typography variant="h6">Total New Buses Added</Typography>
                  <Typography variant="h6">00</Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ padding: 3 }}>
      <Typography variant="h6" sx={{ marginTop: 2 }}>
        Schedule Changes Below
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 2 }}>
        To make changes to Bus Demand, Crew, etc., follow the given instructions -
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexDirection: { xs: "column", sm: "row" }, // Stack vertically on small screens
          marginBottom: 3,
        }}
      >
        <Select
          defaultValue=""
          displayEmpty
          sx={{
            width: { xs: "100%", sm: "200px" }, // Full width on small screens
            backgroundColor: "#74c0fc",
          }}
        >
          <MenuItem value="" disabled>Select Route</MenuItem>
          <MenuItem value="1">Route 1</MenuItem>
          <MenuItem value="2">Route 2</MenuItem>
          <MenuItem value="3">Route 3</MenuItem>
        </Select>
        <Select
          defaultValue=""
          displayEmpty
          sx={{
            width: { xs: "100%", sm: "200px" }, // Full width on small screens
            backgroundColor: "#74c0fc",
          }}
        >
          <MenuItem value="" disabled>Select Bus</MenuItem>
          <MenuItem value="1">Bus 1</MenuItem>
          <MenuItem value="2">Bus 2</MenuItem>
          <MenuItem value="3">Bus 3</MenuItem>
        </Select>
        <Select
          defaultValue=""
          displayEmpty
          sx={{
            width: { xs: "100%", sm: "200px" }, // Full width on small screens
            backgroundColor: "#74c0fc",
          }}
        >
          <MenuItem value="" disabled>Select Action</MenuItem>
          <MenuItem value="1">Action 1</MenuItem>
          <MenuItem value="2">Action 2</MenuItem>
          <MenuItem value="3">Action 3</MenuItem>
        </Select>
        <Button variant="contained" sx={{ backgroundColor: "#74c0fc", color: 'black' }}>
          Execute Changes
        </Button>
      </Box>

      <Typography variant="h6" sx={{ marginTop: 2 }}>
        Schedule a Private Bus
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 2 }}>
        To schedule a private bus, follow the given instructions -
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexDirection: { xs: "column", sm: "row" }, // Stack vertically on small screens
          marginBottom: 3,
        }}
      >
        <Select
          defaultValue=""
          displayEmpty
          sx={{
            width: { xs: "100%", sm: "200px" }, // Full width on small screens
            backgroundColor: "#74c0fc",
          }}
        >
          <MenuItem value="" disabled>Select Bus</MenuItem>
          <MenuItem value="1">Bus 1</MenuItem>
          <MenuItem value="2">Bus 2</MenuItem>
          <MenuItem value="3">Bus 3</MenuItem>
        </Select>
        <Select
          defaultValue=""
          displayEmpty
          sx={{
            width: { xs: "100%", sm: "200px" }, // Full width on small screens
            backgroundColor: "#74c0fc",
          }}
        >
          <MenuItem value="" disabled>Select Crew</MenuItem>
          <MenuItem value="1">Crew 1</MenuItem>
          <MenuItem value="2">Crew 2</MenuItem>
          <MenuItem value="3">Crew 3</MenuItem>
        </Select>
      </Box>

      <Typography variant="h6" sx={{ marginTop: 2 }}>
        Manage Special Buses
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 2 }}>
        To manage a special bus like MC715, follow the given instructions -
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexDirection: { xs: "column", sm: "row" }, // Stack vertically on small screens
          marginBottom: 3,
        }}
      >
        <Select
          defaultValue=""
          displayEmpty
          sx={{
            width: { xs: "100%", sm: "200px" }, // Full width on small screens
            backgroundColor: "#74c0fc",
          }}
        >
          <MenuItem value="" disabled>Select Bus</MenuItem>
          <MenuItem value="1">Bus 1</MenuItem>
          <MenuItem value="2">Bus 2</MenuItem>
          <MenuItem value="3">Bus 3</MenuItem>
        </Select>
      </Box>
    </Box>
        

      </Box>
    </Box>
  );
};

export default BusManagement;
