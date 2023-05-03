import React, { useContext, useState, useEffect } from "react";
import { DisplayContexts } from "../contexts/DisplayContexts";
import { Link } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/icons/logo.svg";
import MenuIcon from "../assets/icons/menu.png";
import GetStartedIcon from "../assets/icons/getstarted.png";
import "./navbar.css";
import "animate.css";
import AsideMenu from "./AsideMenu";

const Navbar1 = () => {
  const { aside, setAside } = useContext(DisplayContexts);

  return (
    <div>
      <Box
        sx={{
          color: "white",
          p: "2rem",
          backgroundColor: {
            xs: "black",
            sm: "black",
            lg: "#0B1422",
          },
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack display={{ xs: "flex", sm: "flex", md: "flex", lg: "none" }}>
            <img
              onClick={() => {
                if (aside === "none") {
                  setAside("block");
                } else if (aside === "block") {
                  setAside("none");
                }
              }}
              className="menu-btn"
              src={MenuIcon}
              width="30px"
              height="30px"
              alt="menu-icon"
            />
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            display={{ xs: "none", sm: "flex" }}
          >
            <img src={Logo} alt="Logo" height="27px" width="27px" />
            <Typography fontSize="30px">
              <Link to="/">
                <span className="puremike-style">Puremike</span>UI
              </Link>
            </Typography>
          </Stack>
          <Stack
            className="nav-link-style"
            direction="row"
            gap="2.25rem"
            display={{ xs: "none", sm: "none", lg: "flex" }}
          >
            <Typography fontSize="20px" fontFamily="source sans pro">
              <Link to="/">Home</Link>
            </Typography>
            <Typography fontSize="20px" fontFamily="source sans pro">
              <Link to="/products">Products</Link>
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
          <Stack
            direction="row"
            alignItems="center"
            gap={{ xs: "1.5rem", sm: "1.5rem", md: "2.75rem" }}
          >
            <Typography fontSize="26px" fontFamily="source sans pro">
              <Link to="/auth">Login</Link>
            </Typography>
            <Stack
              direction="row"
              gap="8px"
              alignItems="center"
              className="btn-style"
            >
              <img
                src={GetStartedIcon}
                alt="get-started-icon"
                width="18px"
                height="18px"
              />
              <Typography
                fontWeight="700"
                fontFamily="source sans pro"
                fontSize="1.2rem"
              >
                <Link to="sign-up">Get Started</Link>
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Box>
      <AsideMenu display={aside} />
    </div>
  );
};

export default Navbar1;
