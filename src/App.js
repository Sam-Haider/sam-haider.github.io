import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import MyStory from "./components/MyStory";
import MyProjects from "./components/MyProjects";
import MyTutorials from "./components/MyTutorials";
import "./App.css";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="App">
      <Router>
        <AppBar position="static">
          <Toolbar>
            {/* <Typography variant="h6" component={Link} to="/">
              SMH
            </Typography> */}
            <Box sx={{ flexGrow: 1 }} />
            <IconButton color="inherit" onClick={handleMenuOpen}>
              <Menu />
            </IconButton>
            <Drawer
              anchor="right"
              open={menuOpen}
              onClose={handleMenuOpen}
              ModalProps={{ onBackdropClick: handleMenuOpen }}
            >
              <List>
                <ListItem component={Link} to="/">
                  <ListItemText onClick={handleMenuOpen} primary="Home" />
                </ListItem>
                <ListItem component={Link} to="/about">
                  <ListItemText onClick={handleMenuOpen} primary="My Story" />
                </ListItem>
                <ListItem component={Link} to="/projects">
                  <ListItemText
                    onClick={handleMenuOpen}
                    primary="My Projects"
                  />
                </ListItem>
                <ListItem component={Link} to="/tutorials">
                  <ListItemText
                    onClick={handleMenuOpen}
                    primary="My Tutorials"
                  />
                </ListItem>
              </List>
            </Drawer>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<MyStory />} />
          <Route path="/projects" element={<MyProjects />} />
          <Route path="/tutorials" element={<MyTutorials />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
