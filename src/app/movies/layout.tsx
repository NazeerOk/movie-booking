import { Box, Grid } from "@mui/material";
import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import MovieBanner from "./MovieBanner";

export const metadata: Metadata = {
  title: "Movies List",
  description: "Book movies near you",
};

export default function MoviesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <Grid container>
      <Grid item xs={2}></Grid>
      <Grid item xs={10}>
        {children}
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
}
