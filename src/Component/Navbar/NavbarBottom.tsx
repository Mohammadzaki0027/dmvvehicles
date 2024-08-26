import React, { useState } from 'react';
import { Box, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const NavbarBottom = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const navItems = [
    { label: 'Licenses & IDs', path: '/licenses&id' },
    { label: 'Vehicles', path: '/vehicles' },
    { label: 'Businesses', path: '/business' },
    { label: 'Records', path: '/records' },
    { label: 'Safety', path: '/safety' },
  ];

  const handleMenuOpen = (event:any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      height="80px"
      bgcolor="#0158A4"
      paddingLeft={10}
    >
      <Box display="flex" alignItems="center">
        {/* Mobile Menu Icon */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: 'block', md: 'none' } }}
          onClick={handleMenuOpen}
        >
          <MenuIcon />
        </IconButton>

        {/* Desktop Menu Items */}
        <Box display={{ xs: 'none', md: 'flex' }} gap={2}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Typography variant="h6" sx={{
                  cursor: 'pointer',
                  position: 'relative',
                  '&:hover::after': {
                    content: '""',
                    position: 'absolute',
                    width: '100%',
                    height: '2px',
                    backgroundColor: 'white',
                    bottom: '-4px', 
                    left: 0,
                  },
                }}>
                {item.label}
              </Typography>
            </Link>
          ))}
        </Box>

        {/* Mobile Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          {navItems.map((item) => (
            <MenuItem key={item.path} onClick={handleMenuClose}>
              <Link
                to={item.path}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                {item.label}
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </Box>

      {/* Right Box with slanted border and different color */}
      <Box
   width={"130px"}
        height="80px"
        bgcolor="#004075"
        color="white"
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          clipPath: 'polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)',
        }}
      >
        <Typography>Other Box</Typography>
      </Box>
    </Box>
  );
};

export default NavbarBottom;
