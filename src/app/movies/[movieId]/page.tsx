import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import MovieShows from "./MovieShows";

const movieResponse = {
  name: "Teri Baaton Mein Aisa Uljha Jiya",
  genre: ["Romance"],
  languages: ["Hindi"],
  bannerImageWeb:
    "https://assetscdn1.paytm.com/images/cinema/_Teri-Baaton-Mein-Aisa-Uljha-Jiya-web-24c89570-b69d-11ee-9ee5-7d491b016e7d.jpg",
  bannerImageApp:
    "https://assetscdn1.paytm.com/images/cinema/Teri-Baaton-Mein-Aisa-Uljha-Jiya-pp-21830760-b69d-11ee-8e34-8f1699ccb7ba.jpg",
  bannerVideo: "https://www.youtube.com/watch?v=w_N6d4ec79c&t=6s",
  images: { imageHeader: "Posters & Wallpapers", imageUrls: [""] },
  summary: {
    summaryHeader: "Synopsis",
    summary:
      "Aryan meets the perfect girl, Sifra, in the US and falls in love with her. Soon he brings her back home to India to meet his family, only to discover that it's an impossible love story.",
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
        id: 169584,
        imageUrl:
          "https://assetscdn1.paytm.com/images/cinema/Teri-Baaton-Mein-Aisa-Uljha-Jiya--icon-a3fd9610-b69d-11ee-8e34-8f1699ccb7ba.jpg",
        videoUrl: "https://www.youtube.com/watch?v=w_N6d4ec79c&t=6s",
        videoDuration: "2:56",
        viewCount: 11,
        title:
          "Teri Baaton Mein Aisa Uljha Jiya | Official Trailer | Shahid Kapoor & Kriti Sanon | Dinesh V |9thFeb",
      },
    ],
  },
  casts: {
    castHeader: "Casts",
    castData: [
      {
        id: 111236,
        name: "Shahid Kapoor",
        imageUrl:
          "https://assetscdn1.paytm.com/images/cinema/Stills/Padmavat/cast/Sahid-kapoor.jpg",
        description:
          "Son of veteran actor Pankaj Kapoor & celebrated dancer Neelima Azeem, Shahid Kapoor started his career as a background dancer for Hindi films. Popular for his charming looks & dancing skills, Shahid made his acting debut with Ishq Vishk in 2004 for which he also won the Filmfare Award for Best Debut- Male. He has appeared in popular movies like Jab We Met (2007), Vivah (2006), Haider (2014), Udta Punjab (2016) & Padmaavat (2018).",
      },
      {
        id: 114528,
        name: "Kriti Sanon",
        imageUrl:
          "https://assetscdn1.paytm.com/images/cinema/kri-0fea9940-8eae-11ed-bd95-b7350954b20c.jpg",
        description:
          "Kriti Sanon is a famous model turned actor. A graduate in Electronics and Communication, Kriti started her acting career with the Telugu movie 1 Nenokkadine (2014). She made her Bollywood debut alongside Tiger Shroff in Heropanti (2014). Kriti has appeared in movies like Dilwale, Raabta and Bareilly Ki Barfi.",
      },
      {
        id: 135461,
        name: "Dimple Kapadia",
        imageUrl:
          "https://assetscdn1.paytm.com/images/cinema/Dimpls-042f50f0-7df6-11ed-af72-ef9f24d260fa.jpg",
        description:
          "A well-known name of the Indian film industry and wife of superstar Rajesh Khanna, Dimple Kapadia is an excellent actress. Made her debut with the movie Bobby, Dimple won the hearts of people with her acting skills and cute looks. She is considered one of the most talented actresses of her time. Dimple has acted in many movies which include Bobby(1973), Sagar(1985), Aitabaar(1986), Rudaali(1993), Lekin(1990), Dil Chahta Hai(2001), Kaash(1987), and Ram Lakhan(1989). Now Dimple will be seen in Christopher Nolan’s movie Tenet which is going to be her Hollywood debut.",
      },
      {
        id: 115059,
        name: "Dharmendra",
        imageUrl:
          "https://assetscdn1.paytm.com/images/cinema/MovieIcons/dharmendra.jpg",
        description:
          "Dharmendra is a celebrated actor known for his work in Bollywood. Considered as one of the greatest stars of Hindi cinema, he grew from being a romantic hero to an action hero during the 1970s. In 2012, he was honoured India's third highest civilian honour Padma Bhushan by the Government of India. He has won several prestigious awards including the Filmfare and National Film Awards for his contribution to Indian cinema. Some of his best known movies include Bandini, Sholay, Phool Aur Patthar, Baazi, Aadmi Aur Insaan, Blackmail and Naseeb.",
      },
      {
        id: 157456,
        name: "Rakesh Bedi",
        imageUrl:
          "https://assetscdn1.paytm.com/images/cinema/Rakesh-992e4220-5771-11ed-acdf-fb331d5ccfe5.jpg",
        description:
          "Rakesh Bedi is an Indian film, stage and television actor. He is best known for his comic roles in films such as Mera Damaad, Chashme Buddoor and the television series Yeh Jo Hai Zindagi, Shrimaan Shrimati, Yes Boss, Bechara Big B and others.",
      },
    ],
  },
  metricInfo: {
    interested: { countInfo: { yes: 0 } },
    sentiment: { countInfo: { disliked: 81, liked: 501 }, percentage: 83 },
  },
  ratings: {
    PINKVILLA: { baseValue: "5", value: "3.0" },
    "TIMES OF INDIA": { baseValue: "5", value: "3.0" },
    FIRSTPOST: { baseValue: "5", value: "3.0" },
  },
  reviews: { isAvailable: true },
  moviesStatus: { HR8b6UvMC: { sessionCount: 282 } },
  languageFormatGroups: [
    {
      lang: "Hindi",
      fmtGrpId: "hr8b6uvmc",
      totalSessionCount: 282,
      cvrPath:
        "https://assetscdn1.paytm.com/images/cinema/Teri-Baaton-Mein-Aisa-Uljha-Jiya-web-89c618a0-c3fc-11ee-851c-3901cd26a9f8.jpg",
      appCvrPath:
        "https://assetscdn1.paytm.com/images/cinema/Teri-Baaton-Mein-Aisa-Uljha-Jiya-pp-8ed9fe10-c3fc-11ee-851c-3901cd26a9f8.jpg",
      trailer: "https://www.youtube.com/watch?v=w_N6d4ec79c&t=6s",
    },
  ],
  subscriptionCount: 58916,
  isReleased: true,
  activityId: "c49654f4-af8d-11ee-afeb-06e2927a70f6",
  actor_clickable: true,
};

const MovieInfoPage = async ({
  params,
}: {
  params: {
    movieId: string;
  };
}) => {
  const {movieId} = params
  let response = await fetch(
    `https://apiproxy.paytm.com/v1/movies/content/get-movie-details/${movieId}?version=3&site_id=1&channel=web&child_site_id=1&custId=undefined&cityName=bengaluru`
  );

  const movieResponse = await response.json();

  return (
    <>
      <Grid container>
        <Grid container item xs={12}>
          <Grid item xs={6}>
            <Typography variant="h4">{movieResponse.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              {movieResponse.genre?.map((genr:string) => genr)}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {movieResponse.languageFormatGroups?.map((lang:{
                lang:string
              }) => lang.lang)}
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
          <MovieShows />
        </Grid>
      </Grid>
    </>
  );
};

export default MovieInfoPage;
