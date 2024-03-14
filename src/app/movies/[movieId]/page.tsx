import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import MovieShows from "./MovieShows";
import "../movies.css";
import TitleSection from "@/components/TitleSection";

const DUMMY_RESPONSE = {
  name: "Lal Salaam",
  genre: ["Drama"],
  languages: ["Tamil"],
  bannerImageWeb:
    "https://assetscdn1.paytm.com/images/cinema/Lal-Salaam--f6d2ddf0-839e-11ee-85e5-b3e9f70aa217.jpg",
  bannerImageApp:
    "https://assetscdn1.paytm.com/images/cinema/Lal-Salaam-app-f4479f30-839e-11ee-85e5-b3e9f70aa217.jpg",
  bannerVideo: "https://www.youtube.com/watch?v=-lpb8tNFvYA",
  images: {
    imageHeader: "Posters & Wallpapers",
    imageUrls: [
      "https://assetscdn1.paytm.com/images/cinema/Laal-min-fb3eeb20-ed73-11ed-82e8-cf24b6293ec4.jpg",
    ],
  },
  summary: {
    summaryHeader: "Synopsis",
    summary:
      "Lal Salaam is an upcoming cricket based Indian tamil movie directed by Aishwarya Rajinikanth. It is starring by Vikranth and Vishnu Vishal in the lead roles with Superstar Rajinikanth. Jeevitha, Thambi Ramaiah, Senthil and Thangadurai costar. A.R. Rahman is scoring the music for this mega venture bankrolled by Lyca Productions.",
  },
  movieSeo: {
    noFollow: 0,
    noIndex: 0,
    canonicalUrl: "",
    content: "",
    metaDescription: "",
    metaKeyword: "",
    metaTitle: "",
  },
  releaseDate: "2024-02-09",
  imaxMeta: {
    imaxSummary: "",
    imaxVideoUrl: "",
    imaxCoverImageApp: "",
    imaxCoverImageWeb: "",
    imaxCoverImageTab: "",
  },
  videos: {
    videoData: [
      {
        id: 169865,
        imageUrl:
          "https://assetscdn1.paytm.com/images/cinema/Lal-Salaam-icon%20(1)-fac87f60-c029-11ee-851c-3901cd26a9f8.jpg",
        videoUrl: "https://www.youtube.com/watch?v=-lpb8tNFvYA",
        videoDuration: "2:27",
        viewCount: 13,
        title:
          "LAL SALAAM - Trailer | Superstar Rajinikanth | Aishwarya | Vishnu Vishal| Vikranth| AR Rahman| Lyca",
      },
    ],
  },
  casts: {
    castHeader: "Casts",
    castData: [
      {
        id: 114149,
        name: "Rajnikanth",
        imageUrl:
          "https://assetscdn1.paytm.com/images/cinema/Rajni-44ee5790-901f-11ed-bd95-b7350954b20c.jpg",
        description:
          "An Indian actor and politician, Rajnikanth (real name: Shivaji Rao Gaekwad) is one of the biggest and most successful superstars of the Indian film industry. He made his debut with 1975 release, Apoorva Raagangal. Primarily seen in Tamil cinema, he has acted out in various languages. The veteran actor has been awarded numerous awards including Padma Bhushan (2000) and Padma Vibhushan (2016). He is one of the few actors of his time who enjoy a humongous fan following. He is best known for his films such as Baasha (1995), Sivaji (2007), Enthiran (2010), Muthu (1995), Kabali (2016), Hum (1991), Kaala (2018), 2.0 (2018) and ChaalBaaz (1989).",
      },
      {
        id: 141773,
        name: "Vishnu Vishal",
        imageUrl:
          "https://assetscdn1.paytm.com/images/cinema/Vishn-557c60f0-ed73-11ed-8b83-8735af6d695b.jpg",
        description:
          "Vishnu Vishal is an Indian actor and producer who appears in Tamil language films. After a brief career in cricket, he started his acting career in the year 2009 playing the lead role in the sports film Vennila Kabadi Kuzhu, winning acclaim for his portrayal.",
      },
      {
        id: 162229,
        name: "Vikranth",
        imageUrl:
          "https://assetscdn1.paytm.com/images/cinema/Vikranth-a893da30-ed72-11ed-8b83-8735af6d695b.jpg",
        description:
          "Vikranth is an Indian actor who has appeared in Tamil language films. He was first introduced in the film Karka Kasadara directed by R. V. Udayakumar and later appeared in other romantic drama films. Following his participation in the Celebrity Cricket League, Vikranth has moved on to work in bigger film projects.",
      },
      {
        id: 162231,
        name: "Jeevitha",
        imageUrl:
          "https://assetscdn1.paytm.com/images/cinema/jeevita6-c93287a0-ed72-11ed-82e8-cf24b6293ec4.jpg",
        description:
          "Jeevitha or popularly known as Jeevitha Rajasekhar is an Indian actress, who has primarily worked in the Southern film industry of the Indian film industry. She was a prominent leading actress and was often cast as the second heroine during the 80s era. She's also a director and producer now.",
      },
      {
        id: 145831,
        name: "Thambi Ramaiah",
        imageUrl:
          "https://assetscdn1.paytm.com/images/cinema/thambi-ramaiah-ac9c74f0-3560-11ec-b77e-113d7655bcb6.jpg",
        description:
          "Thambi Ramaiah is an Indian actor, director and comedian who works in the Tamil film industry. He has also worked occasionally as a lyricist. He directed three films, Manu Needhi (2000), Indiralohathil Na Azhagappan (2008) and Maniyaar Kudumbam (2018).",
      },
      {
        id: 112492,
        name: "Senthil",
        imageUrl:
          "https://assetscdn1.paytm.com/images/cinema/Stills/Gang/cast/Senthil.jpg",
        description: "",
      },
    ],
  },
  metricInfo: {
    sentiment: { countInfo: { disliked: 239, liked: 696 }, percentage: 72 },
    interested: { countInfo: { yes: 0 } },
  },
  ratings: { "TIMES OF INDIA": { baseValue: "5", value: "3.0" } },
  reviews: { isAvailable: true },
  moviesStatus: {},
  languageFormatGroups: [],
  subscriptionCount: 49777,
  isReleased: true,
  activityId: "",
  actor_clickable: true,
};

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
  console.log(movieResponse)
  // const movieResponse = DUMMY_RESPONSE;

  return (
    <>
      <Grid container sx={{ mt: 10, color: "white" }}>
        <Grid container item xs={12}>
          <div
            style={{
              background: `linear-gradient(to left, rgba(0,0,0,0) 20%, rgba(0,0,0,1)), url(${movieResponse?.bannerImageWeb})`,
              backgroundSize: "100% 100%",
              width: "100%",
              height: "250px",
              position: "relative",
            }}
          >
           <Box>
              <Typography variant="h4">{movieResponse.name}</Typography>
              <Typography variant="body2">
                {movieResponse.genre?.map((genr: string) => `${genr} `)}
              </Typography>
              <Typography variant="body2">
                {movieResponse.languageFormatGroups?.map(
                  (lang: { lang: string }) => lang.lang
                )}
              </Typography>
            </Box>
          </div>
          <div
            className="module"
            style={{
              background: `linear-gradient(to bottom, rgba(0,0,0,0) 20%, rgba(0,0,0,1)), url(${movieResponse?.images?.imageUrls?.[0]})`,
              backgroundSize: "100% 100%",
              position: "absolute",
              top: "25%",
              left: "20%",
            }}
          >
          </div>
          

          {/* <Grid item xs={6}>
            <Typography variant="h4">{movieResponse.name}</Typography>
            <Typography variant="body2">
              {movieResponse.genre?.map((genr: string) => genr)}
            </Typography>
            <Typography variant="body2">
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
          </Grid> */}
        </Grid>
        <Grid container item xs={12}>
        <Grid item xs={4}></Grid>
        <Grid item xs={8}>
        <TitleSection label="Movie Shows"/>
          <MovieShows movieId={movieCode} />
        </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default MovieInfoPage;
