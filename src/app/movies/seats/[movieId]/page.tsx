import CenteredBox from "@/components/CenteredBox";
import { Box, Typography } from "@mui/material";
import React from "react";
import ChairIcon from "@mui/icons-material/Chair";

type SeatLayout = {
  GridSeatNum: number;
  SeatStatus: string;
  seatNumber: number;
  displaySeatNumber: string;
};

type RowLayout = { GridRowId: number; PhyRowId: string; objSeat: SeatLayout[] };

type ColLayout = {
  AreaNum: number;
  AreaDesc: string;
  AreaCode: string;
  HasCurrentOrder: boolean;
  objRow: RowLayout[];
};

const SeatBox = ({
  seatNumber,
  shouldDisplay,
  seatStatus,
}: {
  seatNumber: number | undefined | string;
  shouldDisplay: boolean;
  seatStatus: string | undefined;
}) => (
  <CenteredBox
    sx={{
      height: "30px",
      width: "30px",
      borderRadius: "5px",
      visibility: !shouldDisplay ? "hidden" : "initial",
    }}
  >
    <ChairIcon
      sx={{
        opacity: seatStatus === "1" ? "0.5" : 1,
        color: seatStatus === "1" ? "#808080" : "white",
      }}
    />
  </CenteredBox>
);

type MovieSeats = {
  params: {
    movieId: string;
  };
  searchParams: {
    cinemaId: string;
    providerId: string;
    screenFormat: string;
    moviecode: string;
    sessionId: string;
  };
};

const MovieSeats = async ({ params, searchParams }: MovieSeats) => {
  const { cinemaId, providerId, screenFormat, moviecode, sessionId } =
    searchParams;
  console.log("Seach Params", searchParams);

  let payload = JSON.stringify({
    cinemaId,
    sessionId,
    providerId,
    screenOnTop: 0,
    freeSeating: false,
    screenFormat,
    moviecode,
    config: {
      socialDistancing: 1,
    },
  });

  let response = await fetch(
    `https://movies-tickets.paytm.com/v1/movies/select-seat?version=3&site_id=6&channel=web&child_site_id=370`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: payload,
    }
  );

  const ticketResponse = await response.json();

  console.log(ticketResponse);

  if (!ticketResponse) return <h1>Loading</h1>;
  const seatColsArr = new Array(ticketResponse?.seatLayout?.colAreas?.Count);

  const seatHash = new Map<string, SeatLayout>();

  const rowHash = new Map<string, RowLayout>();

  ticketResponse.seatLayout?.colAreas?.objArea?.forEach(
    (col: ColLayout, colIdx: number) => {
      seatColsArr[colIdx] = new Array(col.objRow.length).fill(
        new Array(ticketResponse.seatLayout.colAreas.intMaxSeatId).fill("")
      );

      col.objRow.forEach((row, rowIdx) => {
        rowHash.set(`${colIdx}-${rowIdx}`, row);
        row.objSeat.forEach((seat) => {
          seatHash.set(`${colIdx}-${rowIdx}-${seat.GridSeatNum - 1}`, seat);
        });
      });
    }
  );

  return (
    <CenteredBox
      sx={{
        display: "flex",
        gap: "10px",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#0f0f0f",
        color: "white",
        padding: "10px",
      }}
    >
     <Box>Seats</Box>
        {seatColsArr?.map((col, colIdx) => (
          <Box
            key={colIdx}
            sx={{ display: "flex", gap: "10px", flexDirection: "row" }}
          >
            <Box sx={{ display: "flex", gap: "10px", flexDirection: "column" }}>
              {/* <Typography>{`Row : ${colIdx + 1}`}</Typography> */}
              {col?.map((rows: [], rowIdx: number) => (
                <>
                  <CenteredBox
                    key={rowIdx}
                    sx={{ gap: "10px", flexDirection: "row" }}
                  >
                    <Typography
                      sx={{ width: "10px", fontSize: "10px", color: "grey" }}
                    >
                      {rowHash.get(`${colIdx}-${rowIdx}`)?.PhyRowId}
                    </Typography>
                    {rows?.map((seat, seatIdx) => {
                      let param = `${colIdx}-${rowIdx}-${seatIdx}`;
                      let seatInfo = seatHash.get(param);
                      return (
                        <SeatBox
                          key={seatIdx}
                          seatNumber={seatInfo?.displaySeatNumber}
                          shouldDisplay={seatHash.has(param)}
                          seatStatus={seatInfo?.SeatStatus}
                        />
                      );
                    })}
                  </CenteredBox>
                </>
              ))}
            </Box>
          </Box>
        ))}
        <Box
        className="screen"
        sx={{
          border: "1px solid white",
          borderTop: "10px",
          borderBottomRightRadius: "100px",
          borderBottomLeftRadius: "100px",
          boxShadow: "rgb(255 255 255 / 15%) 0px -40px 80px 0px",
          width: "734px",
          height: "100px",
        }}
      ></Box>
    </CenteredBox>
  );
};

export default MovieSeats;

/* 
<Box
        className="screen"
        sx={{
          border: "1px solid white",
          borderTop: "10px",
          borderBottomRightRadius: "100px",
          borderBottomLeftRadius: "100px",
          boxShadow: "rgb(255 255 255 / 15%) 0px -40px 80px 0px",
          width: "734px",
          height: "100px",
        }}
      ></Box>

*/
