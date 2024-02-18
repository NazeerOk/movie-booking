import ShowTimeTooltip from "@/components/ShowTooltip";
import { Box, Chip, Grid, Paper, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

type MovieShow = {
  id: number;
  name: string;
  pid: number;
};

type MovieTheatre = {
  theatre: MovieShow;
  cinemaId: number;
  providerId: number;
  moviecode: string;
  movieId: number;
  screenFormat: string;
  theatreShows: {
    sid: string;
    pid: number;
    cid: number;
    showTime: string;
    areas: {
      code: string;
      label: string;
      typeCode: string;
      sType: string;
      sAvail: number;
      sTotal: number;
      price: number;
      statusColor: string;
    }[];
    total: number;
    avail: number;
    premium: number;
    premiumLabel: string;
    maxTkt: 10;
    statusColor: string;
  }[];
};

type StatusColor = "Y" | "R" | "G";

const getStatusColor = (color: StatusColor | string) => {
  if (color === "Y") return "yellow";
  else if (color === "R") return "red";
  else return "green";
};

const MovieTheatre = ({
  theatre,
  theatreShows,
  movieId,
  cinemaId,
  providerId,
  moviecode,
  screenFormat,
}: MovieTheatre) => {
  return (
    <Box>
      <Grid container>
        <Grid item xs={5}>
          <Typography variant="h5">{theatre.name}</Typography>
          <Box>
            <Chip label="Get Directions" variant="outlined" />
            <Chip label="More info" variant="outlined" />
          </Box>
          <Box>
            <Typography>Parking</Typography>
            <Typography>Mobile Ticket</Typography>
            <Typography>Online Food</Typography>
          </Box>
        </Grid>
        <Grid item xs={7} display={"flex"} flexDirection={"row"} gap={"10px"}>
          {theatreShows.map((show) => {
            let currentTime = new Date();
            let showTime = new Date(show.showTime);
            return true ? (
              <ShowTimeTooltip areas={show.areas} position="top">
                <Link
                  href={{
                    pathname:`/movies/seats/${movieId}?`,
                    query:{
                      cinemaId,
                      providerId,
                      screenFormat,
                      moviecode,
                      sessionId:show.sid
                    }
                  }}
                >
                  <Paper
                    key={show.sid}
                    sx={{
                      textAlign: "center",
                      height: 60,
                      lineHeight: "60px",
                      p: 1,
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: getStatusColor(show.statusColor),
                      }}
                    >
                      {new Date(show.showTime).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </Typography>
                    {show.premiumLabel && (
                      <Typography variant="subtitle2">
                        {show.premiumLabel}
                      </Typography>
                    )}
                  </Paper>
                </Link>
              </ShowTimeTooltip>
            ) : null;
          })}
        </Grid>
      </Grid>
    </Box>
  );
};

const MovieShows = async ({movieId}:{
  movieId:string
}) => {
  let response = await fetch(
    `https://apiproxy.paytm.com/v3/movies/search/movie?meta=1&reqData=1&city=bengaluru&movieCode=${movieId}&version=3&site_id=6&channel=web&child_site_id=370&date=2024-02-19`
  );
  const moviesShowsResponse = await response.json();
  

  return (
    <Box>
      {moviesShowsResponse?.meta?.cinemas?.map((movieShow: MovieShow) => (
        <MovieTheatre
          key={movieShow.id}
          theatre={movieShow}
          theatreShows={moviesShowsResponse?.pageData?.sessions?.[movieShow.id]}
          screenFormat={moviesShowsResponse?.meta?.movies?.[0].scrnFmt}
          cinemaId={movieShow.id}
          providerId={movieShow.pid}
          moviecode={moviesShowsResponse?.meta?.movies?.[0].id}
          movieId={moviesShowsResponse?.meta.movies[0].contentId}
        />
      ))}
    </Box>
  );
};

export default MovieShows;
