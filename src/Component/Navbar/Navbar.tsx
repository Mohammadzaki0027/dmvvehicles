import { Box } from "@mui/material";

import NavbarTop from "./NavbarTop";
import NavbarMiddle from "./NavbarMiddle";
import NavbarBottom from "./NavbarBottom";

const Navbar = () => {
  return (
    <Box>
      <NavbarTop />
      <NavbarMiddle />
      <NavbarBottom />
    </Box>
  );
};

export default Navbar;
