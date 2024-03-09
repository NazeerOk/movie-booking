"use client";

import Logo from "../assests/logo.png";
import { Box } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";
import "./header.css";

const Header = () => {
  const pathName = usePathname();

  return (
    <Box>
      <Box className="header">
        <a href="#" className="logo">
          <Image src={Logo} alt="logo" height={70} width={70} />
        </a>
        <nav className="navbar">
          <Link
            href={"/movies"}
            className={pathName === "/movies" ? "active-nav-link" : "nav-link"}
          >
            Home
          </Link>
          <a href="#">Location</a>
        </nav>
      </Box>
    </Box>
  );
};

export default Header;
