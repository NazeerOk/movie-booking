import { Box, Button, Tooltip, TooltipProps, Typography } from "@mui/material";
import React from "react";
import CenteredBox from "./CenteredBox";

type areasType = {
  code: string;
  label: string;
  sAvail: number;
  sTotal: number;
  price: number;
  statusColor: string;
  [key: string]: unknown; // Index signature for dynamic properties
};

type ShowTimeToolTipType = {
  areas: areasType[];
  position?: TooltipProps["placement"];
  children: React.ReactElement;
};

type ShowPricesProps = {
  areas: areasType[];
};

const ShowPrices = ({ areas }: ShowPricesProps) => {
  return (
    <CenteredBox sx={{gap:'10px'}}>
      {areas.map((area) => (
        <CenteredBox
          key={area.code}
          sx={{
            flexDirection:'column'
          }}
        >
          <Typography>{area.label}</Typography>
          <Typography>{area.price}</Typography>
        </CenteredBox>
      ))}
    </CenteredBox>
  );
};

const ShowTimeTooltip = ({
  areas,
  position,
  children,
}: ShowTimeToolTipType) => {
  return (
    <Tooltip title={<ShowPrices areas={areas} />} arrow placement={position}>
      {children}
    </Tooltip>
  );
};

export default ShowTimeTooltip;
