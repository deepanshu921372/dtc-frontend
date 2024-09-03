import React, { useState } from "react";
import {
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  CssBaseline,
  Button,
  TextareaAutosize,
  Toolbar,
  Paper,
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

const drawerWidth = 240;
const drawerCollapsedWidth = 60;

const FeedbackSupport = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("feedback");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <div>
      <List>
        {[
          { text: "Dashboard", icon: <DashboardIcon />, to: "/office" },
          {
            text: "Bus Management",
            icon: <DirectionsBusIcon />,
            to: "/bus-management",
          },
          {
            text: "Crew Management",
            icon: <PeopleIcon />,
            to: "/crew-management",
          },
          {
            text: "Route Management",
            icon: <RouteIcon />,
            to: "/route-management",
          },
          {
            text: "Reports and Analytics",
            icon: <BarChartIcon />,
            to: "/reports-analytics",
          },
        ].map((item) => (
          <ListItem button key={item.text} component={Link} to={item.to}>
            <ListItemIcon sx={{ paddingBottom: mobileOpen ? 0 : 2 }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <List>
        {[
          {
            text: "Feedback and Support",
            icon: <FeedbackIcon />,
            to: "/feedback-support",
          },
        ].map((item) => (
          <ListItem button key={item.text} component={Link} to={item.to}>
            <ListItemIcon sx={{ paddingBottom: mobileOpen ? 0 : 2 }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: 'transparent',
          boxShadow: "none"
        }}
      >
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            edge="start"
            sx={{
              display: { sm: "none"},
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        {drawerContent}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            width: mobileOpen ? drawerWidth : drawerCollapsedWidth,
            boxSizing: "border-box",
            backgroundColor: 'lightblue',
            borderRadius: '0 10px 10px 0',
            transition: "width 0.3s ease-in-out",
            height: "672px",
            top: "122px",
            position: "fixed",
            paddingTop: "64px",
          },
        }}
        open
      >
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
            }}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Box>
        {drawerContent}
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginLeft: { sm: mobileOpen ? `${drawerWidth}px` : `${drawerCollapsedWidth}px` },
          transition: "margin-left 0.3s ease-in-out",
          padding: 2,
          overflowX: "hidden",
          marginTop: '64px', // To accommodate the AppBar height
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "1200px",
            padding: 2,
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            backgroundColor: "white",
          }}
        >
          <Box
  sx={{

    display: "flex",
    flexDirection: { xs: "row", sm: "row" }, // Row for small screens, column for larger screens
    gap: 2,
    justifyContent: { xs: "center", sm: "center" }, // Center buttons on small screens
    alignItems: "center",
  }}
>
  <Button
    variant="contained"
    onClick={() => setActiveTab("feedback")}
    sx={{
      fontSize: { xs: "0.8rem", sm: "1.2rem" }, // Smaller font size on small screens
      backgroundColor: "#74c0fc",
      color: "black",
      fontWeight: "bold",
      width: { xs: "auto", sm: "100%" }, // Auto width on small screens, full width on larger
      maxWidth: { sm: "250px" }, // Max width on larger screens
      px: { xs: 2, sm: 3 }, // Responsive padding
      height: { sm: "80px"}
    }}
  >
    Feedback
  </Button>
  <Button
    variant="contained"
    onClick={() => setActiveTab("grievance")}
    sx={{
      fontSize: { xs: "0.8rem", sm: "1.2rem" }, // Smaller font size on small screens
      backgroundColor: "#74c0fc",
      color: "black",
      fontWeight: "bold",
      width: { xs: "auto", sm: "100%" }, // Auto width on small screens, full width on larger
      maxWidth: { sm: "250px" }, // Max width on larger screens
      px: { xs: 2, sm: 3 }, // Responsive padding
    }}
  >
    Grievance Support
  </Button>
</Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
            {activeTab === "feedback" && (
              <>
                <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                  Does the system meet your expectations for managing bus
                  schedules and crew assignments?
                </Typography>
                <TextareaAutosize
                  minRows={3}
                  style={{ width: "100%", fontSize: "1rem", color: "black" }}
                />
                <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                  Are there any performance issues you’ve encountered while
                  using the system?
                </Typography>
                <TextareaAutosize
                  minRows={3}
                  style={{ width: "100%", fontSize: "1rem", color: "black" }}
                />
                <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                  Are the scheduling and crew assignments accurate according to
                  your needs?
                </Typography>
                <TextareaAutosize
                  minRows={3}
                  style={{ width: "100%", fontSize: "1rem", color: "black" }}
                />
              </>
            )}
            {activeTab === "grievance" && (
              <>
                <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                  Complaint Title
                </Typography>
                <TextareaAutosize
                  minRows={3}
                  style={{ width: "100%", fontSize: "1rem", color: "black" }}
                />
                <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                  Bus ID/Route Number
                </Typography>
                <TextareaAutosize
                  minRows={3}
                  style={{ width: "100%", fontSize: "1rem", color: "black" }}
                />
                <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                  Description of the Issue
                </Typography>
                <TextareaAutosize
                  minRows={3}
                  style={{ width: "100%", fontSize: "1rem", color: "black" }}
                />
              </>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FeedbackSupport;
