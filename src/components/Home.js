import React from "react";
import { Typography, Grid } from "@mui/material";
import { styled } from "@mui/system";

const Image = styled("img")({
  maxWidth: "100%",
  height: "auto",
});

function Home() {
  return (
    <div>
      <Grid container spacing={2} sx={{ my: 5 }}>
        <Grid item xs={12} md={6}>
          <Image src="images/profile.jpeg" alt="Your photo" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h2" component="h1" sx={{ mb: 2 }}>
            Welcome to my portfolio
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            I'm a front-end engineer with experience in React, JavaScript, and
            CSS. Take a look at my work and get in touch if you'd like to work
            together!
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
