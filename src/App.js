import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import MyStory from "./components/MyStory";
import MyProjects from "./components/MyProjects";
import MyTutorials from "./components/MyTutorials";
import Contact from "./components/Contact";
import PreloadImages from "./components/PreloadImages";
import styled, { keyframes } from "styled-components";
import "./App.css";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import { Menu } from "@mui/icons-material";

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledAppBar = styled(AppBar)`
  background-color: #333;
  box-shadow: none;
  border-bottom: 1px solid #ccc;
`;

const StyledFooter = styled.div`
  color: white;
  text-align: center;
  margin-top: 20px;
  padding-bottom: 20px;
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

const StyledDrawer = styled(Drawer)`
  & .MuiDrawer-paper {
    background: linear-gradient(to bottom right, #000000, #000000, #150f26);
    color: #fff;
    padding-top: 20px;
  }
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const Logo = styled.img`
  width: 40px;
  animation: ${spinAnimation} 10s linear infinite;
`;

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
            <Logo src="images/logo.png"></Logo>
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
              <StyledLink
                to="https://samnoonhaider.wordpress.com/"
                onClick={handleMenuOpen}
              >
                My Blog
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
      <PreloadImages></PreloadImages>
      <StyledFooter>Designed & built by Sam Haider, 2023</StyledFooter>
    </div>
  );
}

export default App;
