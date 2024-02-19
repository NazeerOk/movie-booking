"use client";

import MovieBanner from "@/app/movies/MovieBanner";
import { Box } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathName = usePathname();

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ position: "relative",zIndex:1 }}>
        <MovieBanner />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          p: 2,
          position: "absolute",
          top: 0,
          zIndex:2,
          width:'100%',
          color:'white',
          backdropFilter:'blur(1px)'
        }}
      >
        <Box>
          <p>Logo</p>
        </Box>
        <Box>
          <Link
            href={"/movies"}
            className={pathName === "/movies" ? "active-nav-link" : "nav-link"}
          >
            Home
          </Link>
        </Box>
        <Box>
          <p>Location</p>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
