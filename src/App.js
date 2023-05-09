import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import MyStory from "./components/MyStory";
import MyProjects from "./components/MyProjects";
import MyTutorials from "./components/MyTutorials";
import Contact from "./components/Contact";
import "./App.css";
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
import { styled } from "@mui/material/styles";

const StyledAppBar = styled(AppBar)({
  backgroundColor: "#333",
  boxShadow: "none",
  borderBottom: "1px solid #ccc",
});

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const StyledDrawer = styled(Drawer)({
  "& .MuiDrawer-paper": {
    background: "linear-gradient(to bottom right, #000000, #000000, #150f26)",
    color: "#fff",
    paddingTop: "20px",
  },
});

const StyledLink = styled(Link)({
  color: "#fff",
  textDecoration: "none",
  fontSize: "1.2rem",
  padding: "10px",
  "&:hover": {
    textDecoration: "underline",
  },
});

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="App">
      <Router>
        <StyledAppBar position="static">
          <StyledToolbar>
            <Typography variant="h6" component={Link} to="/">
              SMH
            </Typography>
            <IconButton color="inherit" onClick={handleMenuOpen}>
              <Menu />
            </IconButton>
          </StyledToolbar>
        </StyledAppBar>
        <StyledDrawer
          anchor="right"
          open={menuOpen}
          onClose={handleMenuOpen}
          ModalProps={{ onBackdropClick: handleMenuOpen }}
        >
          <List>
            <ListItem>
              <StyledLink to="/" onClick={handleMenuOpen}>
                Home
              </StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="/about" onClick={handleMenuOpen}>
                My Story
              </StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="/projects" onClick={handleMenuOpen}>
                My Projects
              </StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="/tutorials" onClick={handleMenuOpen}>
                My Tutorials
              </StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="/contact" onClick={handleMenuOpen}>
                Get In Touch
              </StyledLink>
            </ListItem>
          </List>
        </StyledDrawer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<MyStory />} />
          <Route path="/projects" element={<MyProjects />} />
          <Route path="/tutorials" element={<MyTutorials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
