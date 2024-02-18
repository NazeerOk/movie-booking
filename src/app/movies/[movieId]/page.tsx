import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import MovieShows from "./MovieShows";

const MovieInfoPage = async ({
  params,
  searchParams,
}: {
  params: {
    movieId: string;
  };
  searchParams: {
    movieCode: string;
  };
}) => {
  const { movieId } = params;
  const { movieCode } = searchParams;
  let response = await fetch(
    `
    https://apiproxy.paytm.com/v1/movies/content/get-movie-details/${movieId}?version=3&site_id=6&channel=HTML5&child_site_id=370&custId=undefined&cityName=bengaluru`
  );

  const movieResponse = await response.json();


  return (
    <>
      <Grid container>
        <Grid container item xs={12}>
          <Grid item xs={6}>
            <Typography variant="h4">{movieResponse.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              {movieResponse.genre?.map((genr: string) => genr)}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {movieResponse.languageFormatGroups?.map(
                (lang: { lang: string }) => lang.lang
              )}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Image
              src={movieResponse.videos?.videoData?.[0]?.imageUrl}
              alt="Picture of the author"
              width={200}
              height={200}
            />
          </Grid>
        </Grid>
        <Grid item xs={8}>
          <h1>Movie Shows</h1>
          <MovieShows movieId={movieCode} />
        </Grid>
      </Grid>
    </>
  );
};

export default MovieInfoPage;
