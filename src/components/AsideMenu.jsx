import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Stack } from "@mui/material";
import Logo from "../assets/icons/logo.svg";
import "./navbar.css";
import "animate.css";

const AsideMenu = ({ display }) => {
  return (
    <Box display={{ lg: "none" }}>
      <Stack className="aside-menu" gap="2rem" display={display}>
        <Stack direction="row" alignItems="center">
          <img src={Logo} alt="Logo" height="27px" width="27px" />
          <Typography fontSize="30px">
            <Link to="/">
              <span className="puremike-style">Puremike</span>UI
            </Link>
          </Typography>
        </Stack>
        <Stack className="aside-link-style" direction="column" gap="1.25rem">
          <Typography fontSize="20px" fontFamily="source sans pro">
            <Link>Home</Link>
          </Typography>

          <Typography fontSize="20px" fontFamily="source sans pro">
            <Link to="/products"> Products</Link>
          </Typography>
          <Typography fontSize="20px" fontFamily="source sans pro">
            <Link to="/services">Services</Link>
          </Typography>
          <Typography fontSize="20px" fontFamily="source sans pro">
            <Link to="/blog">Blog</Link>
          </Typography>
          <Typography fontSize="20px" fontFamily="source sans pro">
            <Link to="/pricing">Pricing</Link>
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default AsideMenu;
