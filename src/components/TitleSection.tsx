"use client";
import { styled } from "@mui/material";
import React from "react";

const Styledh1 = styled("span")({
  content: '""',
  display: "block",
  height: "3px",
  flex: 1,
  margin: "10px",
  background:
    "linear-gradient(to right, rgba(204, 0, 0, 1) 0%, rgba(204, 0, 0, 0.5) 49%, rgba(204, 0, 0, 0) 100%)",
});

type TitleSection = {
  label: string;
};

const TitleSection = ({ label }: TitleSection) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>{label}</h1>
      <Styledh1></Styledh1>
    </div>
  );
};

export default TitleSection;
