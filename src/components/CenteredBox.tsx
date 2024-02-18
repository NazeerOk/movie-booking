import { Box, BoxProps } from "@mui/material";
import React from "react";

type CenteredBox =
  | BoxProps
  | {
      children: React.ReactElement;
      sx?: BoxProps["sx"];
    };

const CenteredBox = ({ children, sx }: CenteredBox) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default CenteredBox;
