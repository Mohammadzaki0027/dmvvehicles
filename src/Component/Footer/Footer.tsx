import React from "react";
import { Grid, Typography, Link, Box } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";

const Footer = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const AboutUs = [
    { name: "Blog", path: "/blog" },
    { name: "Help Center", path: "/blog" },
    { name: "FAQS", path: "/blog" },
    { name: "Faqs2", path: "/blog" },
    { name: "Blogs2", path: "/blog" },
    { name: "Abcs2", path: "/blog" },
    { name: "Xyz", path: "/blog" },
    { name: "Blog", path: "/blog" },
  ];
  return (
    <footer style={{ padding: "20px", backgroundColor: "#f5f5f5" }}>
        <h1>Footer</h1>
      <Grid container spacing={2} direction={isSmallScreen ? "column" : "row"}>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6">About Us</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1px",
              marginTop: "10px",
            }}
          >
            {AboutUs.map((items: { name: string; path: string }) => (
              <>
                <Link href="#" color="inherit" underline="none">
                  {items.name}
                </Link>
                <br />
              </>
            ))}
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6">Resources</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1px",
              marginTop: "10px",
            }}
          >
            <Link href="#" color="inherit" underline="none">
              Blog
            </Link>
            <br />
            <Link href="#" color="inherit" underline="none">
              Help Center
            </Link>
            <br />
            <Link href="#" color="inherit" underline="none">
              FAQs
            </Link>
            <Link href="#" color="inherit" underline="none">
              Blog
            </Link>
            <br />
            <Link href="#" color="inherit" underline="none">
              Help Center
            </Link>
            <br />
            <Link href="#" color="inherit" underline="none">
              FAQs
            </Link>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6">Contact</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1px",
              marginTop: "10px",
            }}
          >
            <Link href="#" color="inherit" underline="none">
              Support
            </Link>
            <br />
            <Link href="#" color="inherit" underline="none">
              Sales
            </Link>
            <br />
            <Link href="#" color="inherit" underline="none">
              Press
            </Link>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3} direction={"row"}>
          <Box sx={{ justifyContent: "center", alignItems: "center" }}>
            <Typography variant="h6">Connect with Us</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "8px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link href="#" color="inherit">
              Facebook
            </Link>
            <br />
            <Link href="#" color="inherit">
              Twitter
            </Link>
            <br />
            <Link href="#" color="inherit">
              LinkedIn
            </Link>
          </Box>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
