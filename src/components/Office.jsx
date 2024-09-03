import React, { useState } from "react";
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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import PeopleIcon from "@mui/icons-material/People";
import RouteIcon from "@mui/icons-material/AltRoute";
import BarChartIcon from "@mui/icons-material/BarChart";
import FeedbackIcon from "@mui/icons-material/Feedback";
import { Link } from "react-router-dom";

const drawerWidth = "200px";
const drawerCollapsedWidth = "5%";

const Office = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <div>
      <Box>
        <List>
          {[
            { text: "Dashboard", icon: <DashboardIcon />, to: "/office" },
            { text: "Bus Management", icon: <DirectionsBusIcon />, to: "/bus-management" },
            { text: "Crew Management", icon: <PeopleIcon />, to: "/crew-management" },
            { text: "Route Management", icon: <RouteIcon />, to: "/route-management" },
            { text: "Reports and Analytics", icon: <BarChartIcon />, to: "/reports-analytics" },
          ].map((item) => (
            <ListItem button key={item.text} component={Link} to={item.to}>
              <ListItemIcon>
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
              <ListItemIcon>
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
    <Box sx={{ display: "flex", minHeight: "75vh", overflow: "hidden" }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        {/* Temporary Drawer for mobile view */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawerContent}
        </Drawer>

        {/* Permanent Drawer for desktop view */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              width: mobileOpen ? drawerWidth : drawerCollapsedWidth,
              boxSizing: "border-box",
              backgroundColor: "lightblue",
              borderRadius: "0 10px 10px 0px",
              transition: "width 0.3s ease-in-out",
              height: "675px",
              top: "120px",
              position: "fixed",
              paddingTop: "64px",
            },
          }}
          open
        >
          {/* Drawer toggle button */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              left: 0,
              display: "flex",
              justifyContent: "flex-end",
              padding: 1,
            }}
          >
            <IconButton
              onClick={handleDrawerToggle}
              sx={{
                color: "black",
                backgroundColor: "white",
                borderRadius: "50%",
                mr: 2,
              }}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Box>
          {drawerContent}
        </Drawer>
      </Box>

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          marginLeft: { xs: 0, sm: mobileOpen ? drawerWidth : drawerCollapsedWidth },
          transition: "margin-left 0.3s ease-in-out",
          padding: 2,
          overflowX: "hidden",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            mb: 5,
            textAlign: "center",
            color: "black",
            fontSize: "2.2rem",
            fontWeight: 600,
          }}
        >
          Welcome Admin to Uttam Nagar Depot
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            mb: 2,
          }}
        >
          <Box
            sx={{
              height: "190px",
              backgroundColor: "#74c0fc",
              borderRadius: "20px",
              width: { xs: "90%", sm: "70%", md: "40%" },
              padding: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontSize: "1.5rem", fontWeight: 700 }}
            >
              Current Operations
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "1.2rem", mt: "5px" }}>
              Buses Active: 00
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "1.2rem", mt: "5px" }}>
              Buses under maintenance: 00
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "1.2rem", mt: "5px" }}>
              Absent crews: 00
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "1.2rem", mt: "5px" }}>
              Delayed buses: 00
            </Typography>
          </Box>
        </Box>
        <Grid
          container
          spacing={2}
          sx={{
            width: "100%",
          }}
        >
          {[
            { text: "Bus Management", to: "/bus-management" },
            { text: "Crew Management", to: "/crew-management" },
            { text: "Route Management", to: "/route-management" },
            { text: "Reports and Analytics", to: "/reports-analytics" },
            { text: "Feedback and Support", to: "/feedback-support" },
          ].map((item, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={2}
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Link
                to={item.to}
                style={{ textDecoration: "none", width: "100%" }}
              >
                <Box
                  sx={{
                    backgroundColor: "#74c0fc",
                    height: "200px",
                    width: "100%",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0 10px",
                    "&:hover": {
                      backgroundColor: "#5a9bd4",
                      cursor: "pointer",
                    },
                    mt: 4,
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      textAlign: "center",
                      fontSize: "1.4rem",
                      color: "black",
                    }}
                  >
                    {item.text}
                  </Typography>
                </Box>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* Drawer toggle button for mobile */}
      <IconButton
        onClick={handleDrawerToggle}
        sx={{
          position: "fixed",
          top: 1,
          left: 16,
          zIndex: 1200,
          display: { sm: "none" }, // Hide on desktop
        }}
      >
        <MenuIcon />
      </IconButton>
    </Box>
  );
};

export default Office;
