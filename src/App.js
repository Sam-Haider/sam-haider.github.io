import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import MyStory from "./components/MyStory";
import MyProjects from "./components/MyProjects";
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
                <ListItem button component={Link} to="/">
                  <ListItemText primary="Home" />
                </ListItem>
                <ListItem button component={Link} to="/about">
                  <ListItemText primary="My Story" />
                </ListItem>
                <ListItem button component={Link} to="/projects">
                  <ListItemText primary="My Projects" />
                </ListItem>
              </List>
            </Drawer>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<MyStory />} />
          <Route path="/projects" element={<MyProjects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
