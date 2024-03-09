import {
  Box,
  Grid,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import "./movies.css";
import MovieBanner from "./MovieBanner";

const movieJSON = [
  {
    label: "Teri Baaton Mein Aisa Uljha Jiya",
    totalSessionCount: 278,
    imgPath:
      "https://assetscdn1.paytm.com/images/cinema/teri-baaton-mein-aisa-uljha-jiya--705x750-83801bd0-c3fc-11ee-851c-3901cd26a9f8.jpg",
    appImgPath:
      "https://assetscdn1.paytm.com/images/cinema/teri-baaton-mein-aisa-uljha-jiya--608x800-85fbf140-c3fc-11ee-851c-3901cd26a9f8.jpg",
    cvrPath:
      "https://assetscdn1.paytm.com/images/cinema/Teri-Baaton-Mein-Aisa-Uljha-Jiya-web-89c618a0-c3fc-11ee-851c-3901cd26a9f8.jpg",
    appCvrPath:
      "https://assetscdn1.paytm.com/images/cinema/Teri-Baaton-Mein-Aisa-Uljha-Jiya-pp-8ed9fe10-c3fc-11ee-851c-3901cd26a9f8.jpg",
    edgeBanner:
      "https://assetscdn1.paytm.com/images/cinema/teri-baaton-mein-aisa-uljha-jiya-1035%E2%80%8A%C3%97%E2%80%8A420-9533a9f0-c3fc-11ee-851c-3901cd26a9f8.jpg",
    contentId: 169320,
    censor: "U/A",
    duration: 143,
    grn: ["Romance"],
    scrnFmt: ["2D"],
    sndFmt: [null],
    rnr: {
      hasUReview: 1,
      hasContent: 1,
    },
    popularityRank: 3,
    languageFormatGroups: [
      {
        lang: "Hindi",
        fmtGrpId: "hr8b6uvmc",
        totalSessionCount: 278,
        screenFormats: [
          {
            movieCode: "OAXPF0",
            scrnFmt: "2D",
            nextAvailableDate: "2024-02-17",
          },
        ],
      },
    ],
    releaseDate: "2024-02-09",
  },
  {
    label: "Eagle",
    totalSessionCount: 84,
    imgPath:
      "https://assetscdn1.paytm.com/images/cinema/eagle--705x750-150bd740-c4e0-11ee-851c-3901cd26a9f8.jpg",
    appImgPath:
      "https://assetscdn1.paytm.com/images/cinema/eagle---608x800-17203850-c4e0-11ee-8d86-1796967a11a3.jpg",
    cvrPath:
      "https://assetscdn1.paytm.com/images/cinema/Eagle-web-52325c40-c4de-11ee-851c-3901cd26a9f8.jpg",
    appCvrPath:
      "https://assetscdn1.paytm.com/images/cinema/Eagle-507e43a0-c4de-11ee-851c-3901cd26a9f8.jpg",
    edgeBanner:
      "https://assetscdn1.paytm.com/images/cinema/eagle--1035%E2%80%8A%C3%97%E2%80%8A420-19df0a30-c4e0-11ee-8d86-1796967a11a3.jpg",
    contentId: 163705,
    censor: "U/A",
    duration: 158,
    grn: ["Action", "Drama", "Thriller"],
    scrnFmt: ["2D"],
    sndFmt: ["None"],
    rnr: {
      hasUReview: 1,
      hasContent: 1,
    },
    popularityRank: 9,
    languageFormatGroups: [
      {
        lang: "Telugu",
        fmtGrpId: "3zb4ug5vn",
        totalSessionCount: 84,
        screenFormats: [
          {
            movieCode: "OAV2UP",
            scrnFmt: "2D",
            nextAvailableDate: "2024-02-17",
          },
        ],
      },
    ],
    releaseDate: "2024-02-09",
  },
  {
    label: "Lal Salaam",
    totalSessionCount: 34,
    imgPath:
      "https://assetscdn1.paytm.com/images/cinema/lal-salaam705x750-dd0941a0-c4ff-11ee-8d86-1796967a11a3.jpg",
    appImgPath:
      "https://assetscdn1.paytm.com/images/cinema/lal-salaam-608x800-e26860e0-c4ff-11ee-851c-3901cd26a9f8.jpg",
    cvrPath:
      "https://assetscdn1.paytm.com/images/cinema/Lal-Salaam--f9ed9340-8f56-11ee-b92b-8d514c58433c.jpg",
    appCvrPath:
      "https://assetscdn1.paytm.com/images/cinema/Lal-Salaam-app-fe5ea900-8f56-11ee-b92b-8d514c58433c.jpg",
    edgeBanner:
      "https://assetscdn1.paytm.com/images/cinema/LAl-salaam-1035%E2%80%8A%C3%97%E2%80%8A420-e7ded8b0-c4ff-11ee-851c-3901cd26a9f8.jpg",
    contentId: 157722,
    censor: "U/A",
    duration: 152,
    grn: ["Action", "Drama"],
    scrnFmt: ["2D"],
    sndFmt: ["none"],
    rnr: {
      hasUReview: 1,
      hasContent: 1,
    },
    languageFormatGroups: [
      {
        lang: "Tamil",
        fmtGrpId: "ygzgis2wg",
        totalSessionCount: 34,
        screenFormats: [
          {
            movieCode: "OAIGCZ",
            scrnFmt: "2D",
            nextAvailableDate: "2024-02-17",
          },
        ],
      },
    ],
    releaseDate: "2024-02-09",
  },
  {
    label: "Anweshippin Kandethum",
    totalSessionCount: 34,
    imgPath:
      "https://assetscdn1.paytm.com/images/cinema/Anweshippin-Kandethum--705x750-37feb400-c587-11ee-851c-3901cd26a9f8.jpg",
    appImgPath:
      "https://assetscdn1.paytm.com/images/cinema/Anweshippin-Kandethum---608x800-3b294000-c587-11ee-851c-3901cd26a9f8.jpg",
    cvrPath:
      "https://assetscdn1.paytm.com/images/cinema/Anweshippin-Kandethum-a3d3c250-c0e2-11ee-851c-3901cd26a9f8.jpg",
    appCvrPath:
      "https://assetscdn1.paytm.com/images/cinema/Anweshippin-Kandethum-app-a7911870-c0e2-11ee-851c-3901cd26a9f8.jpg",
    edgeBanner:
      "https://assetscdn1.paytm.com/images/cinema/Anweshippin-Kandethum-1035%E2%80%8A%C3%97%E2%80%8A420-3dfad690-c587-11ee-851c-3901cd26a9f8.jpg",
    contentId: 168955,
    censor: "U/A",
    duration: 145,
    grn: ["Drama", "Thriller", "Crime"],
    scrnFmt: ["2D"],
    sndFmt: ["None"],
    rnr: {
      hasUReview: 0,
      hasContent: 1,
    },
    languageFormatGroups: [
      {
        lang: "Malayalam",
        fmtGrpId: "tzhc7efba",
        totalSessionCount: 34,
        screenFormats: [
          {
            movieCode: "OAYADF",
            scrnFmt: "2D",
            nextAvailableDate: "2024-02-17",
          },
        ],
      },
    ],
    releaseDate: "2024-02-09",
  },
  {
    label: "Lover",
    totalSessionCount: 2,
    imgPath:
      "https://assetscdn1.paytm.com/images/cinema/Lover-705x750-06635850-c4b6-11ee-8d86-1796967a11a3.jpg",
    appImgPath:
      "https://assetscdn1.paytm.com/images/cinema/Lover---608x800-09471750-c4b6-11ee-8d86-1796967a11a3.jpg",
    cvrPath:
      "https://assetscdn1.paytm.com/images/cinema/Lover-0e2769a0-c4b6-11ee-8d86-1796967a11a3.jpg",
    appCvrPath:
      "https://assetscdn1.paytm.com/images/cinema/Lover-app-14d66170-c4b6-11ee-851c-3901cd26a9f8.jpg",
    edgeBanner:
      "https://assetscdn1.paytm.com/images/cinema/Lover--1035%E2%80%8A%C3%97%E2%80%8A420-192ff790-c4b6-11ee-8d86-1796967a11a3.jpg",
    contentId: 169568,
    censor: "U/A",
    duration: 146,
    grn: ["Drama", "Romance"],
    scrnFmt: ["2D"],
    sndFmt: ["None"],
    rnr: {
      hasUReview: 1,
      hasContent: 1,
    },
    languageFormatGroups: [
      {
        lang: "Tamil",
        fmtGrpId: "fx0lzick8",
        totalSessionCount: 2,
        screenFormats: [
          {
            movieCode: "OAYF7I",
            scrnFmt: "2D",
            nextAvailableDate: "2024-02-17",
          },
        ],
      },
    ],
    releaseDate: "2024-02-09",
  },
  {
    label: "Ooru Peru Bhairavakona",
    totalSessionCount: 291,
    imgPath:
      "https://assetscdn1.paytm.com/images/cinema/Ooru-Peru-Bhairavakona--705x750-Recovered-dc54b8f0-a003-11ee-bde8-6186437f3848.jpg",
    appImgPath:
      "https://assetscdn1.paytm.com/images/cinema/Ooru-Peru-Bhairavakona--608x800-Recovered-e0c55980-a003-11ee-8b6a-b35ce9c4940d.jpg",
    cvrPath:
      "https://assetscdn1.paytm.com/images/cinema/Ooru-Peru-Bhairavakona-2-e6e13910-a003-11ee-bde8-6186437f3848.jpg",
    appCvrPath:
      "https://assetscdn1.paytm.com/images/cinema/app-cover-816c22f0-9fec-11ee-8b6a-b35ce9c4940d.jpg",
    edgeBanner:
      "https://assetscdn1.paytm.com/images/cinema/_Ooru-Peru-Bhairavakona-1035%E2%80%8A%C3%97%E2%80%8A420-Recovered-ec5e4090-a003-11ee-8b6a-b35ce9c4940d.jpg",
    contentId: 162555,
    censor: "U/A",
    duration: 136,
    grn: ["Adventure", "Thriller", "Fantasy"],
    scrnFmt: ["2D"],
    sndFmt: [null],
    rnr: {
      hasUReview: 0,
      hasContent: 1,
    },
    popularityRank: 1,
    languageFormatGroups: [
      {
        lang: "Telugu",
        fmtGrpId: "rihqqayhj",
        totalSessionCount: 291,
        screenFormats: [
          {
            movieCode: "OAXB9P",
            scrnFmt: "2D",
            nextAvailableDate: "2024-02-17",
          },
        ],
      },
    ],
    releaseDate: "2024-02-09",
  },
];

const MovieCard = ({
  img,
  title,
  rating,
}: {
  img: string;
  title: string;
  rating?: string;
}) => {
  return (
    <>
      <div
        className="module"
        style={{
          background: `linear-gradient(to bottom, rgba(0,0,0,0) 20%, rgba(0,0,0,1)), url(${img})`,
          backgroundSize: "100% 100%",
        }}
      >
        
      </div>
      <div className="module-movie-details">
      <h3>{title}</h3>
      </div>
    </>
  );
};

const MoviesListing = () => {
  return (
    <>
    <Box>
          <MovieBanner />
        </Box>
      <Box sx={{ color: "white", mt: 5 }}>
      <h1 className="title-section">New Movies</h1>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            flexDirection: "row",
          }}
        >
          {movieJSON.map((movie, idx) => (
            <>
              <Link
                href={{
                  pathname: `movies/${movie.contentId}`,
                  query: {
                    movieCode: movie.languageFormatGroups[0]?.fmtGrpId,
                  },
                }}
              >
                <MovieCard img={movie.imgPath} title={movie.label} />
              </Link>
            </>
          ))}
        </Grid>
      </Grid>
    </Box>
    </>
   
  );
};

export default MoviesListing;
