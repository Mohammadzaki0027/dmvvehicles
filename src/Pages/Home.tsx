import Navbar from "../Component/Navbar/Navbar";
import trafficimage from "../assets/trafficimage.jpg";

import React from "react";
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Link
} from "@mui/material";

const BackgroundImageWithColumns = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: `url(${trafficimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative", 
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", 
          zIndex: 1, 
        }}
      />

      <Grid
        container
        spacing={2}
        sx={{
          maxWidth: "80%",
          backgroundColor: "rgba(255, 255, 255, 0.8)", 
          padding: 4,
          borderRadius: 2,
          zIndex: 2, 
          position: "relative", 
        }}
      >
        {/* First Column */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: "80%",

              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "20px",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontFamily: "New Amsterdam, sans-serif",
                fontSize: "48px",
                color: "teal",
                fontWeight: "500",
              }}
            >
              We Can Help You Find Today?
            </Typography>
            <Box sx={{ width: "100%", marginTop: "20px" }}>
              <FormControl fullWidth>
                <InputLabel id="page-select-label">Services...</InputLabel>
                <Select
                  labelId="page-select-label"
                  sx={{ fontSize: "16px", color: "#0158A4" }}
                  label="Navigate to"
                >
                  <MenuItem value="/">Renew My Vehicle Registration</MenuItem>
                  <MenuItem value="/about">
                    Apply for a Driver`s license
                  </MenuItem>
                  <MenuItem value="/contact">
                    Replace My Driver`s license
                  </MenuItem>

                  <MenuItem value="/">Register A Vehicle</MenuItem>
                  <MenuItem value="/about">Change My Address</MenuItem>
                  <MenuItem value="/contact">Browse License Plates</MenuItem>
                  <MenuItem value="/contact">Get Real Id</MenuItem>
                </Select>
              </FormControl>
            </Box>
          <Typography variant="body1" sx={{ textAlign: 'center', marginTop: 2 }}>
      Already have an account?{' '}
      <Link
        href="/login"
 
        underline="always" 
        sx={{
          cursor: 'pointer',
          fontWeight: 'bold',
        }}
      >
        Log in
      </Link>{' '}
      to get started today.
    </Typography>
          </Box>
        </Grid>

        {/* Second Column with Two Rows */}
        <Grid item xs={12} md={6}>
          {/* First Row in Second Column */}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4" gutterBottom>
                Row 1 in Column 2
              </Typography>
              <Typography variant="body1">
                This is the first row in the second column.
              </Typography>
            </Grid>

            {/* Second Row in Second Column */}
            <Grid item xs={12}>
              <Typography variant="h4" gutterBottom>
                Row 2 in Column 2
              </Typography>
              <Typography variant="body1">
                This is the second row in the second column.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

const Home = () => {
  return (
    <Box>
      <Navbar />
      <BackgroundImageWithColumns />
    </Box>
  );
};

export default Home;
