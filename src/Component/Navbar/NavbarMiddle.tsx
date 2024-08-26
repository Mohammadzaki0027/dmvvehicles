import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import OnlinePredictionIcon from "@mui/icons-material/OnlinePrediction"; // Example icon
import LocationOnIcon from "@mui/icons-material/LocationOn"; // Example icon
import DirectionsTransitIcon from "@mui/icons-material/DirectionsTransit"; // Example icon
import DescriptionIcon from "@mui/icons-material/Description"; // Example icon
import AccountCircleIcon from "@mui/icons-material/AccountCircle"; // Example icon
import { styled, alpha } from "@mui/material/styles";
import NavbarTop from "./NavbarTop";
import MyCustomComponent from "./NavbarBottom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.2), // Slightly greyed background
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.3), // Darker background on hover
  },
  padding: "2px 4px", // Padding around the search bar
  border: "1px solid #ccc", // Light border to make it stand out
  display: "flex",
  alignItems: "center",
  maxWidth: "400px", // Set a max width for the search box
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const NavbarMiddle = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const menuItems = [
    { text: "Online Service", icon: <OnlinePredictionIcon /> },
    { text: "Location", icon: <LocationOnIcon /> },
    { text: "Moving", icon: <DirectionsTransitIcon /> },
    { text: "Forms", icon: <DescriptionIcon /> },
    { text: "My Account", icon: <AccountCircleIcon /> },
  ];

  return (
    <>
    
  
    <AppBar
      position="static"
      sx={{ height: { xs: 100, sm: 80 }, backgroundColor: "white" }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            height: "100%",
            minHeight: { xs: 100, sm: 80 },
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo on Large Screens */}
          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ fontSize: { xs: "1.5rem", sm: "1.5rem" }, color: "grey" }} // Logo color
            >
              DMV LOGO
            </Typography>
          </Box>

          {/* Centered Menu Items */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {menuItems.map(({ text, icon }) => (
              <Button
                key={text}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "grey",
                  display: "flex",
                  alignItems: "center",
                  fontSize: "1rem",
                  textTransform: "none", // Ensure text is not capitalized
                  position: "relative",
                  "&:hover": {
                    backgroundColor: "transparent", // Remove background color on hover
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      height: "2px", // Height of the underline
                      backgroundColor: "blue", // Color of the underline
                      transition: "width 0.3s", // Smooth transition effect
                    },
                  },
                }}
              >
                {icon}
                <Typography sx={{ ml: 1 }}>{text}</Typography>
              </Button>
            ))}
          </Box>

          {/* Search Box on Large Screens */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            <Search>
              <SearchIconWrapper>
                <SearchIcon sx={{ color: "grey" }} />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                sx={{borderRadius:"20px"}}
              />
            </Search>
          </Box>
          <Box
            sx={{
       
              width: "100%",
              display: { sm: "flex", md: "none" },
              flexDirection: "row-reverse",
              justifyContent: "space-between",

              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                justifyContent: "center",
     
              }}
            >
              <Search>
                <SearchIconWrapper>
                  <SearchIcon sx={{ color: "grey" }} />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  sx={{borderRadius:"20px"}}
                />
              </Search>
            </Box>

            <Box
              sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}
            >
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ fontSize: { xs: "1.5rem", sm: "1rem" }, color: "grey" }} // Logo color
              >
                DMV LOGO
              </Typography>
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleOpenNavMenu}
                sx={{ marginLeft: "auto" }}
              >
                <MenuIcon
                  sx={{ fontSize: { xs: "2rem", sm: "1.5rem" }, color: "grey" }}
                />
              </IconButton>
            </Box>
          </Box>
          {/* Search Box on Small Screens */}

          {/* Hamburger Menu on Small Screens */}
        </Toolbar>

        {/* Hamburger Menu Dropdown */}
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
            backgroundColor: "white",
          }}
        >
          {menuItems.map(({ text, icon }) => (
            <MenuItem
              key={text}
              onClick={handleCloseNavMenu}
              sx={{ "&:hover": { backgroundColor: "transparent" } }}
            >
              <Typography
                textAlign="center"
                sx={{
                  fontSize: "1rem",
                  display: "flex",
                  alignItems: "center",
                  color: "grey",
                }}
              >
                {icon}
                <span style={{ marginLeft: 8 }}>{text}</span>
              </Typography>
            </MenuItem>
          ))}
        </Menu>
      </Container>
    </AppBar>

    </>
  );
};

export default NavbarMiddle;
