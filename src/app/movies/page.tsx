import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Link from "next/link";

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
  {
    label: "Madame Web",
    totalSessionCount: 280,
    imgPath:
      "https://assetscdn1.paytm.com/images/cinema/Madame-Web-705x750-d54fd380-ca35-11ee-a731-b5c20ce5229e.jpg",
    appImgPath:
      "https://assetscdn1.paytm.com/images/cinema/Madame-Web-608x800-0821ed70-ca36-11ee-a731-b5c20ce5229e.jpg",
    cvrPath:
      "https://assetscdn1.paytm.com/images/cinema/MAdame-Web--2a5fcbf0-ca36-11ee-a731-b5c20ce5229e.jpg",
    appCvrPath:
      "https://assetscdn1.paytm.com/images/cinema/MADAME-WEB-2eb2ab50-ca36-11ee-a414-e787967340b4.jpg",
    edgeBanner:
      "https://assetscdn1.paytm.com/images/cinema/Madame-Web-1035%E2%80%8A%C3%97%E2%80%8A420-1dfd2c40-ca36-11ee-a414-e787967340b4.jpg",
    contentId: 154962,
    censor: "U/A",
    duration: 116,
    grn: ["Action", "Sci-Fi", "Adventure"],
    scrnFmt: ["2D", "4DX-2D", "ICE 2D", "IMAX 2D"],
    sndFmt: [null, "None"],
    rnr: {
      hasUReview: 0,
      hasContent: 1,
    },
    bookingStatus: "New Release",
    popularityRank: 2,
    languageFormatGroups: [
      {
        lang: "English",
        fmtGrpId: "ybwviuwq6",
        totalSessionCount: 280,
        screenFormats: [
          {
            movieCode: "OADBYG",
            scrnFmt: "2D",
            nextAvailableDate: "2024-02-17",
          },
          {
            movieCode: "OAYLJQ",
            scrnFmt: "4DX-2D",
            nextAvailableDate: "2024-02-17",
          },
          {
            movieCode: "OAYLEP",
            scrnFmt: "ICE 2D",
            nextAvailableDate: "2024-02-17",
          },
          {
            movieCode: "OAYLFG",
            scrnFmt: "IMAX 2D",
            nextAvailableDate: "2024-02-17",
          },
        ],
      },
    ],
    releaseDate: "2024-02-16",
  },
  {
    label: "Siren",
    totalSessionCount: 227,
    imgPath:
      "https://assetscdn1.paytm.com/images/cinema/Siren-705x750-fb09e0c0-c3f0-11ee-8d86-1796967a11a3.jpg",
    appImgPath:
      "https://assetscdn1.paytm.com/images/cinema/Siren--608x800-ff16dd80-c3f0-11ee-851c-3901cd26a9f8.jpg",
    cvrPath:
      "https://assetscdn1.paytm.com/images/cinema/Siren-web-069d97b0-c3f1-11ee-8d86-1796967a11a3.jpg",
    appCvrPath:
      "https://assetscdn1.paytm.com/images/cinema/Siren-app-0b996140-c3f1-11ee-851c-3901cd26a9f8.jpg",
    edgeBanner:
      "https://assetscdn1.paytm.com/images/cinema/Siren-1035%E2%80%8A%C3%97%E2%80%8A420-117bba40-c3f1-11ee-851c-3901cd26a9f8.jpg",
    contentId: 156173,
    censor: "U/A",
    duration: 150,
    grn: ["Drama", "Thriller"],
    scrnFmt: ["2D"],
    sndFmt: ["None"],
    rnr: {
      hasUReview: 0,
      hasContent: 1,
    },
    bookingStatus: "New Release",
    popularityRank: 4,
    languageFormatGroups: [
      {
        lang: "Tamil",
        fmtGrpId: "z5cmotjq_",
        totalSessionCount: 227,
        screenFormats: [
          {
            movieCode: "OAYDUE",
            scrnFmt: "2D",
            nextAvailableDate: "2024-02-17",
          },
        ],
      },
    ],
    releaseDate: "2024-02-16",
  },
  {
    label: "Premalu",
    totalSessionCount: 174,
    imgPath:
      "https://assetscdn1.paytm.com/images/cinema/Premalu--705x750-fef6e8d0-c4f5-11ee-851c-3901cd26a9f8.jpg",
    appImgPath:
      "https://assetscdn1.paytm.com/images/cinema/Premalu--608x800-02dab2b0-c4f6-11ee-851c-3901cd26a9f8.jpg",
    cvrPath:
      "https://assetscdn1.paytm.com/images/cinema/Premalu-web-082ed570-c4f6-11ee-8d86-1796967a11a3.jpg",
    appCvrPath:
      "https://assetscdn1.paytm.com/images/cinema/Premalu--0bd26200-c4f6-11ee-8d86-1796967a11a3.jpg",
    edgeBanner:
      "https://assetscdn1.paytm.com/images/cinema/Premalu--1035%E2%80%8A%C3%97%E2%80%8A420-0f7419d0-c4f6-11ee-8d86-1796967a11a3.jpg",
    contentId: 169994,
    censor: "U",
    duration: 155,
    grn: ["Romance", "Comedy"],
    scrnFmt: ["2D"],
    sndFmt: [null],
    rnr: {
      hasUReview: 0,
      hasContent: 1,
    },
    popularityRank: 5,
    languageFormatGroups: [
      {
        lang: "Malayalam",
        fmtGrpId: "ygjgwa1iuh",
        totalSessionCount: 174,
        screenFormats: [
          {
            movieCode: "OAYFIQ",
            scrnFmt: "2D",
            nextAvailableDate: "2024-02-17",
          },
        ],
      },
    ],
    releaseDate: "2024-02-09",
  },
  {
    label: "Bramayugam ",
    totalSessionCount: 169,
    imgPath:
      "https://assetscdn1.paytm.com/images/cinema/Bramayugam--705x750-6131e5e0-bea7-11ee-9382-a7483b2961db.jpg",
    appImgPath:
      "https://assetscdn1.paytm.com/images/cinema/Bramayugam--608x800-631bdb90-bea7-11ee-a207-f9075b6968be.jpg",
    cvrPath:
      "https://assetscdn1.paytm.com/images/cinema/Bramayugam-web-660d0810-bea7-11ee-9382-a7483b2961db.jpg",
    appCvrPath:
      "https://assetscdn1.paytm.com/images/cinema/Bramayugam--68d528c0-bea7-11ee-9382-a7483b2961db.jpg",
    edgeBanner:
      "https://assetscdn1.paytm.com/images/cinema/Bramayugam--1035%E2%80%8A%C3%97%E2%80%8A420-6adfc5d0-bea7-11ee-a207-f9075b6968be.jpg",
    contentId: 165664,
    censor: "U/A",
    duration: 139,
    grn: ["Horror"],
    scrnFmt: ["2D"],
    sndFmt: [null],
    rnr: {
      hasUReview: 1,
      hasContent: 1,
    },
    bookingStatus: "New Release",
    popularityRank: 6,
    languageFormatGroups: [
      {
        lang: "Malayalam",
        fmtGrpId: "uutdokx5w",
        totalSessionCount: 169,
        screenFormats: [
          {
            movieCode: "OAY74W",
            scrnFmt: "2D",
            nextAvailableDate: "2024-02-17",
          },
        ],
      },
    ],
    releaseDate: "2024-02-14",
  },
  {
    label: "Dune: Part Two",
    totalSessionCount: 120,
    imgPath:
      "https://assetscdn1.paytm.com/images/cinema/Dune-Part-2-705x750-3af2b920-ca89-11ee-a414-e787967340b4.jpg",
    appImgPath:
      "https://assetscdn1.paytm.com/images/cinema/Dune-Part-2-608x800-min-550cb310-ca89-11ee-a414-e787967340b4.jpg",
    cvrPath:
      "https://assetscdn1.paytm.com/images/cinema/Dune-Part-2-5a61c030-ca89-11ee-a414-e787967340b4.jpg",
    appCvrPath:
      "https://assetscdn1.paytm.com/images/cinema/Dune-Part-2-app-5fc91cd0-ca89-11ee-a731-b5c20ce5229e.jpg",
    edgeBanner:
      "https://assetscdn1.paytm.com/images/cinema/Dune-Part-2-1035%E2%80%8A%C3%97%E2%80%8A420-6a251710-ca89-11ee-a414-e787967340b4.jpg",
    contentId: 158908,
    censor: "U/A",
    duration: 146,
    grn: ["Action", "Sci-Fi", "Adventure", "Drama"],
    scrnFmt: ["IMAX 2D"],
    sndFmt: ["none"],
    rnr: {
      hasUReview: 0,
      hasContent: 1,
    },
    bookingStatus: "Bookings Open",
    popularityRank: 7,
    languageFormatGroups: [
      {
        lang: "English",
        fmtGrpId: "z9xa4m4c~",
        totalSessionCount: 120,
        screenFormats: [
          {
            movieCode: "OAONCR",
            scrnFmt: "IMAX 2D",
            nextAvailableDate: "2024-02-29",
          },
        ],
      },
    ],
    releaseDate: "2024-03-01",
  },
  {
    label: "Fighter",
    totalSessionCount: 111,
    imgPath:
      "https://assetscdn1.paytm.com/images/cinema/Fighter--705x750-0fec4d00-b782-11ee-9ee5-7d491b016e7d.jpg",
    appImgPath:
      "https://assetscdn1.paytm.com/images/cinema/Fighter-608x800-12152070-b782-11ee-9ee5-7d491b016e7d.jpg",
    cvrPath:
      "https://assetscdn1.paytm.com/images/cinema/Fighter-web-1546ff70-b782-11ee-8e34-8f1699ccb7ba.jpg",
    appCvrPath:
      "https://assetscdn1.paytm.com/images/cinema/Fighter-app-197bcf80-b782-11ee-8e34-8f1699ccb7ba.jpg",
    edgeBanner:
      "https://assetscdn1.paytm.com/images/cinema/Fighter--1035%E2%80%8A%C3%97%E2%80%8A420-1c380950-b782-11ee-9ee5-7d491b016e7d.jpg",
    contentId: 145127,
    censor: "U/A",
    duration: 167,
    grn: ["Action", "Thriller"],
    scrnFmt: ["2D", "4DX-3D", "4DX-2D", "ICE 3D", "IMAX 3D"],
    sndFmt: [null],
    rnr: {
      hasUReview: 1,
      hasContent: 1,
    },
    popularityRank: 8,
    languageFormatGroups: [
      {
        lang: "Hindi",
        fmtGrpId: "3ih1_rihf",
        totalSessionCount: 111,
        screenFormats: [
          {
            movieCode: "OAY1SQ",
            scrnFmt: "2D",
            nextAvailableDate: "2024-02-17",
          },
          {
            movieCode: "OAY1T6",
            scrnFmt: "4DX-2D",
            nextAvailableDate: "2024-02-17",
          },
          {
            movieCode: "OAY1TF",
            scrnFmt: "4DX-3D",
            nextAvailableDate: "2024-02-17",
          },
          {
            movieCode: "OAY1T9",
            scrnFmt: "ICE 3D",
            nextAvailableDate: "2024-02-17",
          },
          {
            movieCode: "OAY1TB",
            scrnFmt: "IMAX 3D",
            nextAvailableDate: "2024-02-17",
          },
        ],
      },
    ],
    releaseDate: "2024-01-25",
  },
  {
    label: "Abbabba",
    totalSessionCount: 73,
    imgPath:
      "https://assetscdn1.paytm.com/images/cinema/abbaban-705x750-7aee2ed0-cb31-11ee-a414-e787967340b4.jpg",
    appImgPath:
      "https://assetscdn1.paytm.com/images/cinema/abbaban-608x800-809c7f80-cb31-11ee-a414-e787967340b4.jpg",
    cvrPath:
      "https://assetscdn1.paytm.com/images/cinema/abbaban-web-8626a660-cb31-11ee-a414-e787967340b4.jpg",
    appCvrPath:
      "https://assetscdn1.paytm.com/images/cinema/abbaban_%5D%20(1)-8ea66690-cb31-11ee-a414-e787967340b4.jpg",
    edgeBanner:
      "https://assetscdn1.paytm.com/images/cinema/abbaban_-1035%E2%80%8A%C3%97%E2%80%8A420-9178e780-cb31-11ee-a731-b5c20ce5229e.jpg",
    contentId: 170155,
    censor: "U/A",
    duration: 147,
    grn: ["Drama", "Comedy"],
    scrnFmt: ["2D"],
    sndFmt: ["None"],
    rnr: {
      hasUReview: 0,
      hasContent: 1,
    },
    bookingStatus: "New Release",
    popularityRank: 10,
    languageFormatGroups: [
      {
        lang: "Kannada",
        fmtGrpId: "lpwjxrid3",
        totalSessionCount: 73,
        screenFormats: [
          {
            movieCode: "OAYM7F",
            scrnFmt: "2D",
            nextAvailableDate: "2024-02-17",
          },
        ],
      },
    ],
    releaseDate: "2024-02-16",
  },
  {
    label: "5D",
    totalSessionCount: 70,
    imgPath:
      "https://assetscdn1.paytm.com/images/cinema/5d-705x750-b43ee1c0-cb31-11ee-a414-e787967340b4.jpg",
    appImgPath:
      "https://assetscdn1.paytm.com/images/cinema/5d-608x800-babc9060-cb31-11ee-a414-e787967340b4.jpg",
    cvrPath:
      "https://assetscdn1.paytm.com/images/cinema/5d-web-be9d4d00-cb31-11ee-a731-b5c20ce5229e.jpg",
    appCvrPath:
      "https://assetscdn1.paytm.com/images/cinema/5d-c78c70d0-cb31-11ee-a414-e787967340b4.jpg",
    edgeBanner:
      "https://assetscdn1.paytm.com/images/cinema/5d-1035%E2%80%8A%C3%97%E2%80%8A420-cfafe030-cb31-11ee-a414-e787967340b4.jpg",
    contentId: 170158,
    censor: "U/A",
    duration: 130,
    grn: ["Crime", "Mystery"],
    scrnFmt: ["2D"],
    sndFmt: [null],
    rnr: {
      hasUReview: 0,
      hasContent: 1,
    },
    bookingStatus: "New Release",
    popularityRank: 11,
    languageFormatGroups: [
      {
        lang: "Kannada",
        fmtGrpId: "mv_nomc6f",
        totalSessionCount: 70,
        screenFormats: [
          {
            movieCode: "OAYN20",
            scrnFmt: "2D",
            nextAvailableDate: "2024-02-17",
          },
        ],
      },
    ],
    releaseDate: "2024-02-16",
  },
  {
    label: "Vaaranam Aayiram",
    totalSessionCount: 67,
    imgPath:
      "https://assetscdn1.paytm.com/images/cinema/Vaaranam-Aayiram--705x750-f9de07a0-8389-11ee-931a-230dd0f33fac.jpg",
    appImgPath:
      "https://assetscdn1.paytm.com/images/cinema/Vaaranam-Aayiram-608x800-fdf4a150-8389-11ee-931a-230dd0f33fac.jpg",
    cvrPath:
      "https://assetscdn1.paytm.com/images/cinema/web-cover-b475c8c0-837e-11ee-931a-230dd0f33fac.jpg",
    appCvrPath:
      "https://assetscdn1.paytm.com/images/cinema/app-cover-b618a350-837e-11ee-931a-230dd0f33fac.jpg",
    edgeBanner:
      "https://assetscdn1.paytm.com/images/cinema/Vaaranam-Aayiram--1035%E2%80%8A%C3%97%E2%80%8A420-034f05a0-838a-11ee-931a-230dd0f33fac.jpg",
    contentId: 167957,
    censor: "U",
    duration: 169,
    grn: ["Drama", "Romance"],
    scrnFmt: ["2D"],
    sndFmt: [null],
    rnr: {
      hasUReview: 0,
      hasContent: 1,
    },
    popularityRank: 12,
    languageFormatGroups: [
      {
        lang: "Tamil",
        fmtGrpId: "j31lh5ncs",
        totalSessionCount: 67,
        screenFormats: [
          {
            movieCode: "OAVZRX",
            scrnFmt: "2D",
            nextAvailableDate: "2024-02-17",
          },
        ],
      },
    ],
    releaseDate: "2023-11-17",
  },
  {
    label: "Ondu Sarala Premakathe",
    totalSessionCount: 61,
    imgPath:
      "https://assetscdn1.paytm.com/images/cinema/Ondu-Sarala-Premakathe-705x750-7d52a080-c432-11ee-8d86-1796967a11a3.jpg",
    appImgPath:
      "https://assetscdn1.paytm.com/images/cinema/Ondu-Sarala-Premakathe-608x800-8158bf70-c432-11ee-8d86-1796967a11a3.jpg",
    cvrPath:
      "https://assetscdn1.paytm.com/images/cinema/Ondu-Sarala-Premakathe-88f4fd70-c432-11ee-851c-3901cd26a9f8.jpg",
    appCvrPath:
      "https://assetscdn1.paytm.com/images/cinema/Ondu-Sarala-Premakathe-2-8f42e980-c432-11ee-851c-3901cd26a9f8.jpg",
    edgeBanner:
      "https://assetscdn1.paytm.com/images/cinema/Ondu-Sarala-Premakathe--1035%E2%80%8A%C3%97%E2%80%8A420-94637920-c432-11ee-8d86-1796967a11a3.jpg",
    contentId: 169958,
    censor: "U/A",
    duration: 149,
    grn: ["Romance"],
    scrnFmt: ["2D"],
    sndFmt: ["None"],
    rnr: {
      hasUReview: 0,
      hasContent: 1,
    },
    popularityRank: 13,
    languageFormatGroups: [
      {
        lang: "Kannada",
        fmtGrpId: "stojsqm6s",
        totalSessionCount: 61,
        screenFormats: [
          {
            movieCode: "OAYDXY",
            scrnFmt: "2D",
            nextAvailableDate: "2024-02-17",
          },
        ],
      },
    ],
    releaseDate: "2024-02-08",
  },
  {
    label: "Thundu",
    totalSessionCount: 48,
    imgPath:
      "https://assetscdn1.paytm.com/images/cinema/thundu-705x750-1cad0a10-cb3d-11ee-a731-b5c20ce5229e.jpg",
    appImgPath:
      "https://assetscdn1.paytm.com/images/cinema/thudu_-608x800-20d8b260-cb3d-11ee-a731-b5c20ce5229e.jpg",
    cvrPath:
      "https://assetscdn1.paytm.com/images/cinema/thundu-web-264a6f40-cb3d-11ee-a731-b5c20ce5229e.jpg",
    appCvrPath:
      "https://assetscdn1.paytm.com/images/cinema/tundu-55af9d00-cb3d-11ee-a414-e787967340b4.jpg",
    edgeBanner:
      "https://assetscdn1.paytm.com/images/cinema/thundu_-1035%E2%80%8A%C3%97%E2%80%8A420-5ba0c310-cb3d-11ee-a731-b5c20ce5229e.jpg",
    contentId: 170183,
    censor: "U",
    duration: 120,
    grn: ["Drama", "Comedy"],
    scrnFmt: ["2D"],
    sndFmt: [null],
    rnr: {
      hasUReview: 0,
      hasContent: 1,
    },
    bookingStatus: "New Release",
    popularityRank: 14,
    languageFormatGroups: [
      {
        lang: "Malayalam",
        fmtGrpId: "xoty9cpvq",
        totalSessionCount: 48,
        screenFormats: [
          {
            movieCode: "OAYNXQ",
            scrnFmt: "2D",
            nextAvailableDate: "2024-02-17",
          },
        ],
      },
    ],
    releaseDate: "2024-02-16",
  },
  {
    label: "KTM",
    totalSessionCount: 47,
    imgPath:
      "https://assetscdn1.paytm.com/images/cinema/KM-705x750%20(1)-88412c80-cb32-11ee-a414-e787967340b4.jpg",
    appImgPath:
      "https://assetscdn1.paytm.com/images/cinema/ktm--608x800-8d6fecf0-cb32-11ee-a731-b5c20ce5229e.jpg",
    cvrPath:
      "https://assetscdn1.paytm.com/images/cinema/KTM-web-98274da0-cb32-11ee-a731-b5c20ce5229e.jpg",
    appCvrPath:
      "https://assetscdn1.paytm.com/images/cinema/KTM-a176e0f0-cb32-11ee-a731-b5c20ce5229e.jpg",
    edgeBanner:
      "https://assetscdn1.paytm.com/images/cinema/KTM-1035%E2%80%8A%C3%97%E2%80%8A420-a6355360-cb32-11ee-a414-e787967340b4.jpg",
    contentId: 170159,
    censor: "U/A",
    duration: 150,
    grn: ["Drama", "Comedy"],
    scrnFmt: ["2D"],
    sndFmt: ["None"],
    rnr: {
      hasUReview: 0,
      hasContent: 1,
    },
    bookingStatus: "New Release",
    popularityRank: 15,
    languageFormatGroups: [
      {
        lang: "Kannada",
        fmtGrpId: "nsbacjiaz",
        totalSessionCount: 47,
        screenFormats: [
          {
            movieCode: "OAYN28",
            scrnFmt: "2D",
            nextAvailableDate: "2024-02-17",
          },
        ],
      },
    ],
    releaseDate: "2024-02-16",
  },
  {
    label: "Bob Marley: One Love",
    totalSessionCount: 45,
    imgPath:
      "https://assetscdn1.paytm.com/images/cinema/Bob-Marley---One-Love--705x750-b2676af0-cbe7-11ee-a731-b5c20ce5229e.jpg",
    appImgPath:
      "https://assetscdn1.paytm.com/images/cinema/Bob-Marley---One-Love--608x800-b593a4a0-cbe7-11ee-a414-e787967340b4.jpg",
    cvrPath:
      "https://assetscdn1.paytm.com/images/cinema/Bob-Marley---One-Love-bb7142b0-cbe7-11ee-a414-e787967340b4.jpg",
    appCvrPath:
      "https://assetscdn1.paytm.com/images/cinema/Bob-Marley---One-Love-app-bfaaa6a0-cbe7-11ee-a414-e787967340b4.jpg",
    edgeBanner:
      "https://assetscdn1.paytm.com/images/cinema/Bob-Marley---One-Love--1035%E2%80%8A%C3%97%E2%80%8A420-c39aa580-cbe7-11ee-a414-e787967340b4.jpg",
    contentId: 164242,
    censor: "U/A",
    duration: 109,
    grn: ["Drama", "Biography", "Musical"],
    scrnFmt: ["2D"],
    sndFmt: ["none"],
    rnr: {
      hasUReview: 0,
      hasContent: 1,
    },
    bookingStatus: "New Release",
    popularityRank: 16,
    languageFormatGroups: [
      {
        lang: "English",
        fmtGrpId: "jkehfmjcj",
        totalSessionCount: 45,
        screenFormats: [
          {
            movieCode: "OAU9CP",
            scrnFmt: "2D",
            nextAvailableDate: "2024-02-17",
          },
        ],
      },
    ],
    releaseDate: "2024-02-16",
  },
  {
    label: "TRAILERS SCREENING SHOW",
    totalSessionCount: 42,
    imgPath:
      "https://assetscdn1.paytm.com/images/cinema/PVR--705x750-aa1c11a0-ddec-11ed-bea3-ef4efacaa437.jpg",
    appImgPath:
      "https://assetscdn1.paytm.com/images/cinema/PVR-608x800-aef0a420-ddec-11ed-a2db-d3cf14842e45.jpg",
    cvrPath:
      "https://assetscdn1.paytm.com/images/cinema/web-cover-0a221520-d881-11ed-a508-6f7f215a1c0f.jpg",
    appCvrPath:
      "https://assetscdn1.paytm.com/images/cinema/app-cover-0c447ff0-d881-11ed-a508-6f7f215a1c0f.jpg",
    edgeBanner:
      "https://assetscdn1.paytm.com/images/cinema/PVR-1035%E2%80%8A%C3%97%E2%80%8A420-b633c5a0-ddec-11ed-a2db-d3cf14842e45.jpg",
    contentId: 161507,
    censor: "U/A",
    duration: 30,
    grn: ["Drama"],
    scrnFmt: ["2D"],
    sndFmt: ["None"],
    rnr: {
      hasUReview: 0,
      hasContent: 1,
    },
    popularityRank: 17,
    languageFormatGroups: [
      {
        lang: "Hinglish",
        fmtGrpId: "jtoarm9go",
        totalSessionCount: 42,
        screenFormats: [
          {
            movieCode: "OANSVQ",
            scrnFmt: "2D",
            nextAvailableDate: "2024-02-17",
          },
        ],
      },
    ],
    releaseDate: "2023-04-14",
  },
  {
    label: "The Holdovers",
    totalSessionCount: 42,
    imgPath:
      "https://assetscdn1.paytm.com/images/cinema/The-Holdovers--705x750-24c49150-cbe7-11ee-a414-e787967340b4.jpg",
    appImgPath:
      "https://assetscdn1.paytm.com/images/cinema/The-Holdovers--608x800-280d53b0-cbe7-11ee-a414-e787967340b4.jpg",
    cvrPath:
      "https://assetscdn1.paytm.com/images/cinema/The-Holdovers--2cc0a290-cbe7-11ee-a414-e787967340b4.jpg",
    appCvrPath:
      "https://assetscdn1.paytm.com/images/cinema/The-Holdovers-app-min-47786320-cbe7-11ee-a414-e787967340b4.jpg",
    edgeBanner:
      "https://assetscdn1.paytm.com/images/cinema/The-Holdovers-1035%E2%80%8A%C3%97%E2%80%8A420-4d76f6b0-cbe7-11ee-a731-b5c20ce5229e.jpg",
    contentId: 166896,
    censor: "A",
    duration: 135,
    grn: ["Drama", "Comedy"],
    scrnFmt: ["2D"],
    sndFmt: ["none"],
    rnr: {
      hasUReview: 0,
      hasContent: 1,
    },
    bookingStatus: "New Release",
    languageFormatGroups: [
      {
        lang: "English",
        fmtGrpId: "1juhtryyx",
        totalSessionCount: 42,
        screenFormats: [
          {
            movieCode: "OAU9GM",
            scrnFmt: "2D",
            nextAvailableDate: "2024-02-17",
          },
        ],
      },
    ],
    releaseDate: "2024-02-16",
  },
  {
    label: "Upadhyaksha",
    totalSessionCount: 37,
    imgPath:
      "https://assetscdn1.paytm.com/images/cinema/Upadhyaksha--705x750-bd3cb720-ba10-11ee-aa0d-fffa0ed2ba98.jpg",
    appImgPath:
      "https://assetscdn1.paytm.com/images/cinema/Upadhyaksha--608x800-c0f24510-ba10-11ee-aa0d-fffa0ed2ba98.jpg",
    cvrPath:
      "https://assetscdn1.paytm.com/images/cinema/_Upadhyakshya-web-c6b55640-ba10-11ee-aa0d-fffa0ed2ba98.jpg",
    appCvrPath:
      "https://assetscdn1.paytm.com/images/cinema/Upadhyakshya-cbbcdfa0-ba10-11ee-8e34-8f1699ccb7ba.jpg",
    edgeBanner:
      "https://assetscdn1.paytm.com/images/cinema/Upadhyakshya-1035%E2%80%8A%C3%97%E2%80%8A420-cf013530-ba10-11ee-8e34-8f1699ccb7ba.jpg",
    contentId: 169695,
    censor: "U/A",
    duration: 153,
    grn: ["Comedy"],
    scrnFmt: ["2D"],
    sndFmt: [null],
    rnr: {
      hasUReview: 0,
      hasContent: 1,
    },
    languageFormatGroups: [
      {
        lang: "Kannada",
        fmtGrpId: "oq9ptiush",
        totalSessionCount: 37,
        screenFormats: [
          {
            movieCode: "OAY2L8",
            scrnFmt: "2D",
            nextAvailableDate: "2024-02-17",
          },
        ],
      },
    ],
    releaseDate: "2024-01-26",
  },
  {
    label: "Hanuman",
    totalSessionCount: 35,
    imgPath:
      "https://assetscdn1.paytm.com/images/cinema/_Hanuman-705x750-a8619a80-adec-11ee-8a1f-bfa09bf4348a.jpg",
    appImgPath:
      "https://assetscdn1.paytm.com/images/cinema/Hanuman--608x800-ab894050-adec-11ee-8a1f-bfa09bf4348a.jpg",
    cvrPath:
      "https://assetscdn1.paytm.com/images/cinema/Hanuman-web-ae72f2c0-adec-11ee-8a1f-bfa09bf4348a.jpg",
    appCvrPath:
      "https://assetscdn1.paytm.com/images/cinema/Hanuman-b172c540-adec-11ee-a5bf-d57c26f93d70.jpg",
    edgeBanner:
      "https://assetscdn1.paytm.com/images/cinema/Hanuman--1035%E2%80%8A%C3%97%E2%80%8A420-b48d72c0-adec-11ee-8a1f-bfa09bf4348a.jpg",
    contentId: 153751,
    censor: "U/A",
    duration: 158,
    grn: ["Action", "Adventure", "Fantasy"],
    scrnFmt: ["2D", "ICE 2D"],
    sndFmt: [null, "None"],
    rnr: {
      hasUReview: 1,
      hasContent: 1,
    },
    languageFormatGroups: [
      {
        lang: "Telugu",
        fmtGrpId: "jiovhjl77",
        totalSessionCount: 17,
        screenFormats: [
          {
            movieCode: "OALZX2",
            scrnFmt: "2D",
            nextAvailableDate: "2024-02-17",
          },
        ],
      },
      {
        lang: "Hindi",
        fmtGrpId: "stsfadazo",
        totalSessionCount: 16,
        screenFormats: [
          {
            movieCode: "OAXGCO",
            scrnFmt: "2D",
            nextAvailableDate: "2024-02-17",
          },
          {
            movieCode: "OAY1PA",
            scrnFmt: "ICE 2D",
            nextAvailableDate: "2024-02-17",
          },
        ],
      },
      {
        lang: "Kannada",
        fmtGrpId: "tycgze8rs",
        totalSessionCount: 2,
        screenFormats: [
          {
            movieCode: "OAXNW8",
            scrnFmt: "2D",
            nextAvailableDate: "2024-02-17",
          },
        ],
      },
    ],
    releaseDate: "2024-01-12",
  },
  {
    label: "Land of Bad",
    totalSessionCount: 23,
    imgPath:
      "https://assetscdn1.paytm.com/images/cinema/Land-of-Bad-705x750-54feb540-b9b2-11ee-8e34-8f1699ccb7ba.jpg",
    appImgPath:
      "https://assetscdn1.paytm.com/images/cinema/Land-of-Bad--608x800-57550150-b9b2-11ee-8e34-8f1699ccb7ba.jpg",
    cvrPath:
      "https://assetscdn1.paytm.com/images/cinema/Land-of-Bad-web-5afde510-b9b2-11ee-8e34-8f1699ccb7ba.jpg",
    appCvrPath:
      "https://assetscdn1.paytm.com/images/cinema/Land-of-Bad-5dd63260-b9b2-11ee-aa0d-fffa0ed2ba98.jpg",
    edgeBanner:
      "https://assetscdn1.paytm.com/images/cinema/Land-of-Bad--1035%E2%80%8A%C3%97%E2%80%8A420-62201110-b9b2-11ee-8e34-8f1699ccb7ba.jpg",
    contentId: 169640,
    censor: "A",
    duration: 115,
    grn: ["Action"],
    scrnFmt: ["2D"],
    sndFmt: [null],
    rnr: {
      hasUReview: 0,
      hasContent: 1,
    },
    bookingStatus: "New Release",
    languageFormatGroups: [
      {
        lang: "English",
        fmtGrpId: "ft_5tqamv",
        totalSessionCount: 23,
        screenFormats: [
          {
            movieCode: "OAY2AA",
            scrnFmt: "2D",
            nextAvailableDate: "2024-02-17",
          },
        ],
      },
    ],
    releaseDate: "2024-02-16",
  },
  {
    label: "Raajadhani Files",
    totalSessionCount: 19,
    imgPath:
      "https://assetscdn1.paytm.com/images/cinema/Raajadhani-Files705x750-806e72e0-ca3a-11ee-a731-b5c20ce5229e.jpg",
    appImgPath:
      "https://assetscdn1.paytm.com/images/cinema/Raajadhani-Files-608x800-841c86c0-ca3a-11ee-a731-b5c20ce5229e.jpg",
    cvrPath:
      "https://assetscdn1.paytm.com/images/cinema/Raajadhani-Files-web-8d8176d0-ca3a-11ee-a414-e787967340b4.jpg",
    appCvrPath:
      "https://assetscdn1.paytm.com/images/cinema/Raajadhani-Files-918f8500-ca3a-11ee-a414-e787967340b4.jpg",
    edgeBanner:
      "https://assetscdn1.paytm.com/images/cinema/Raajadhani-Files-1035%E2%80%8A%C3%97%E2%80%8A420-958db4b0-ca3a-11ee-a731-b5c20ce5229e.jpg",
    contentId: 170075,
    censor: "U/A",
    duration: 160,
    grn: ["Drama"],
    scrnFmt: ["2D"],
    sndFmt: ["None"],
    rnr: {
      hasUReview: 0,
      hasContent: 1,
    },
    bookingStatus: "New Release",
    languageFormatGroups: [
      {
        lang: "Telugu",
        fmtGrpId: "vxlnikwt1",
        totalSessionCount: 19,
        screenFormats: [
          {
            movieCode: "OAYLBN",
            scrnFmt: "2D",
            nextAvailableDate: "2024-02-17",
          },
        ],
      },
    ],
    releaseDate: "2024-02-16",
  },
  {
    label: "Shakhahaari",
    totalSessionCount: 18,
    imgPath:
      "https://assetscdn1.paytm.com/images/cinema/Shakahari--705x750-b6b07d00-cb3c-11ee-a731-b5c20ce5229e.jpg",
    appImgPath:
      "https://assetscdn1.paytm.com/images/cinema/Shakahari--608x800-bb39d5b0-cb3c-11ee-a731-b5c20ce5229e.jpg",
    cvrPath:
      "https://assetscdn1.paytm.com/images/cinema/sahkari-web-c08b8770-cb3c-11ee-a414-e787967340b4.jpg",
    appCvrPath:
      "https://assetscdn1.paytm.com/images/cinema/sahkari-c5d08f00-cb3c-11ee-a414-e787967340b4.jpg",
    edgeBanner:
      "https://assetscdn1.paytm.com/images/cinema/Poster_1035x420px-bf7447f0-ca74-11ee-a414-e787967340b4.png",
    contentId: 170165,
    censor: "U/A",
    duration: 146,
    grn: ["Thriller"],
    scrnFmt: ["2D"],
    sndFmt: [null],
    rnr: {
      hasUReview: 0,
      hasContent: 1,
    },
    bookingStatus: "New Release",
    languageFormatGroups: [
      {
        lang: "Kannada",
        fmtGrpId: "yp9~~utsj",
        totalSessionCount: 18,
        screenFormats: [
          {
            movieCode: "OAYNO8",
            scrnFmt: "2D",
            nextAvailableDate: "2024-02-17",
          },
        ],
      },
    ],
    releaseDate: "2024-02-16",
  },
  {
    label: "E-mail",
    totalSessionCount: 17,
    imgPath:
      "https://assetscdn1.paytm.com/images/cinema/_E-mail-705x750-1c867380-c590-11ee-851c-3901cd26a9f8-30247b40-ca6c-11ee-a731-b5c20ce5229e.jpg",
    appImgPath:
      "https://assetscdn1.paytm.com/images/cinema/_E-mail--608x800-1f207f50-c590-11ee-8d86-1796967a11a3-3376b380-ca6c-11ee-a414-e787967340b4.jpg",
    cvrPath:
      "https://assetscdn1.paytm.com/images/cinema/E-mail-2-20b13170-c590-11ee-851c-3901cd26a9f8-3928fbd0-ca6c-11ee-a731-b5c20ce5229e.jpg",
    appCvrPath:
      "https://assetscdn1.paytm.com/images/cinema/E-mail-app-22863f90-c590-11ee-8d86-1796967a11a3-3ccd72c0-ca6c-11ee-a731-b5c20ce5229e.jpg",
    edgeBanner:
      "https://assetscdn1.paytm.com/images/cinema/_E-mail--1035%E2%80%8A%C3%97%E2%80%8A420-24f4f5a0-c590-11ee-851c-3901cd26a9f8-409a5940-ca6c-11ee-a731-b5c20ce5229e.jpg",
    contentId: 169972,
    censor: "U/A",
    duration: 119,
    grn: ["Drama"],
    scrnFmt: ["2D"],
    sndFmt: [null],
    rnr: {
      hasUReview: 0,
      hasContent: 1,
    },
    languageFormatGroups: [
      {
        lang: "Kannada",
        fmtGrpId: "ctd1ytam1",
        totalSessionCount: 17,
        screenFormats: [
          {
            movieCode: "OAYN3T",
            scrnFmt: "2D",
            nextAvailableDate: "2024-02-17",
          },
        ],
      },
    ],
    releaseDate: "2024-02-09",
  },
  {
    label: "Saramsha",
    totalSessionCount: 16,
    imgPath:
      "https://assetscdn1.paytm.com/images/cinema/Saramsha-705x750-7d673a90-cb30-11ee-a731-b5c20ce5229e.jpg",
    appImgPath:
      "https://assetscdn1.paytm.com/images/cinema/Saramsha-608x800-820023a0-cb30-11ee-a731-b5c20ce5229e.jpg",
    cvrPath:
      "https://assetscdn1.paytm.com/images/cinema/saremsha_-web-864bb000-cb30-11ee-a731-b5c20ce5229e.jpg",
    appCvrPath:
      "https://assetscdn1.paytm.com/images/cinema/saremsha-8b098630-cb30-11ee-a731-b5c20ce5229e.jpg",
    edgeBanner:
      "https://assetscdn1.paytm.com/images/cinema/saramsha_-1035%E2%80%8A%C3%97%E2%80%8A420-90a1b6d0-cb30-11ee-a414-e787967340b4.jpg",
    contentId: 170157,
    censor: "U/A",
    duration: 132,
    grn: ["Drama"],
    scrnFmt: ["2D"],
    sndFmt: [null],
    rnr: {
      hasUReview: 0,
      hasContent: 1,
    },
    bookingStatus: "New Release",
    languageFormatGroups: [
      {
        lang: "Kannada",
        fmtGrpId: "dzbgtp5sg",
        totalSessionCount: 16,
        screenFormats: [
          {
            movieCode: "OAYN1S",
            scrnFmt: "2D",
            nextAvailableDate: "2024-02-17",
          },
        ],
      },
    ],
    releaseDate: "2024-02-15",
  },
  {
    label: "Mandya Haida",
    totalSessionCount: 12,
    imgPath:
      "https://assetscdn1.paytm.com/images/cinema/Mandya-Haida-705x750-c215ed70-cb3b-11ee-a731-b5c20ce5229e.jpg",
    appImgPath:
      "https://assetscdn1.paytm.com/images/cinema/Mandya-Haida--608x800-c6ccbec0-cb3b-11ee-a414-e787967340b4.jpg",
    cvrPath:
      "https://assetscdn1.paytm.com/images/cinema/Mandya-Haida--web-cde3ee40-cb3b-11ee-a414-e787967340b4.jpg",
    appCvrPath:
      "https://assetscdn1.paytm.com/images/cinema/Mandya-Haida--d07ac5c0-cb3b-11ee-a414-e787967340b4.jpg",
    edgeBanner:
      "https://assetscdn1.paytm.com/images/cinema/Mandya-Haida-_1035%E2%80%8A%C3%97%E2%80%8A420-d7503150-cb3b-11ee-a414-e787967340b4.jpg",
    contentId: 170163,
    censor: "U/A",
    duration: 139,
    grn: ["Action"],
    scrnFmt: ["2D"],
    sndFmt: [null],
    rnr: {
      hasUReview: 0,
      hasContent: 1,
    },
    bookingStatus: "New Release",
    languageFormatGroups: [
      {
        lang: "Kannada",
        fmtGrpId: "yqirhiydo",
        totalSessionCount: 12,
        screenFormats: [
          {
            movieCode: "OAYNMK",
            scrnFmt: "2D",
            nextAvailableDate: "2024-02-17",
          },
        ],
      },
    ],
    releaseDate: "2024-02-16",
  },
  {
    label: "Aakhir Palaayan Kab Tak?",
    totalSessionCount: 11,
    imgPath:
      "https://assetscdn1.paytm.com/images/cinema/Aakhir-Palaayan-Kab-Tak-705x750-9fcb0030-ca36-11ee-a731-b5c20ce5229e.jpg",
    appImgPath:
      "https://assetscdn1.paytm.com/images/cinema/Aakhir-Palaayan-Kab-Tak-608x800-a236f720-ca36-11ee-a731-b5c20ce5229e.jpg",
    cvrPath:
      "https://assetscdn1.paytm.com/images/cinema/AAKHIR-PALAAYAN-KAB-TAK--a709b4e0-ca36-11ee-a414-e787967340b4.jpg",
    appCvrPath:
      "https://assetscdn1.paytm.com/images/cinema/AAKHIR-PALAAYAN-KAB-TAK--app-abbcdcb0-ca36-11ee-a731-b5c20ce5229e.jpg",
    edgeBanner:
      "https://assetscdn1.paytm.com/images/cinema/Aakhir-Palaayan-Kab-Tak--1035%E2%80%8A%C3%97%E2%80%8A420-af12e580-ca36-11ee-a414-e787967340b4.jpg",
    contentId: 170007,
    censor: "U/A",
    duration: 108,
    grn: ["Drama", "Thriller"],
    scrnFmt: ["2D"],
    sndFmt: [null],
    rnr: {
      hasUReview: 0,
      hasContent: 1,
    },
    bookingStatus: "New Release",
    languageFormatGroups: [
      {
        lang: "Hindi",
        fmtGrpId: "zesx5b37q",
        totalSessionCount: 11,
        screenFormats: [
          {
            movieCode: "OAYLK6",
            scrnFmt: "2D",
            nextAvailableDate: "2024-02-17",
          },
        ],
      },
    ],
    releaseDate: "2024-02-16",
  },
  {
    label: "Shivrayancha Chhava",
    totalSessionCount: 11,
    imgPath:
      "https://assetscdn1.paytm.com/images/cinema/Shivrayancha-Chhava-705x750-150d4530-6f1d-11ee-8d97-473f463cc499.jpg",
    appImgPath:
      "https://assetscdn1.paytm.com/images/cinema/Shivrayancha-Chhava-608x800-1989f3b0-6f1d-11ee-b230-2d48320d83d4.jpg",
    cvrPath:
      "https://assetscdn1.paytm.com/images/cinema/web-cover-d3ca6b50-6e88-11ee-b230-2d48320d83d4.jpg",
    appCvrPath:
      "https://assetscdn1.paytm.com/images/cinema/app-cover-d50fbc90-6e88-11ee-8d97-473f463cc499.jpg",
    edgeBanner:
      "https://assetscdn1.paytm.com/images/cinema/Shivrayancha-Chhava-1035%E2%80%8A%C3%97%E2%80%8A420-22dbf800-6f1d-11ee-b230-2d48320d83d4.jpg",
    contentId: 167513,
    censor: "U/A",
    duration: 145,
    grn: ["Action", "Drama", "Historical"],
    scrnFmt: ["2D"],
    sndFmt: ["none"],
    rnr: {
      hasUReview: 0,
      hasContent: 1,
    },
    bookingStatus: "New Release",
    languageFormatGroups: [
      {
        lang: "Marathi",
        fmtGrpId: "rjt5sp~ng",
        totalSessionCount: 11,
        screenFormats: [
          {
            movieCode: "OAV35N",
            scrnFmt: "2D",
            nextAvailableDate: "2024-02-17",
          },
        ],
      },
    ],
    releaseDate: "2024-02-16",
  },
  {
    label: "Kuch Khattaa Ho Jaay",
    totalSessionCount: 10,
    imgPath:
      "https://assetscdn1.paytm.com/images/cinema/Kuch-Khattaa-Ho-Jaay-705x750-b8eb8a10-c0e2-11ee-851c-3901cd26a9f8.jpg",
    appImgPath:
      "https://assetscdn1.paytm.com/images/cinema/Kuch-Khattaa-Ho-Jaay--608x800-bc614fe0-c0e2-11ee-851c-3901cd26a9f8.jpg",
    cvrPath:
      "https://assetscdn1.paytm.com/images/cinema/%E2%80%98KUCH-KHATTAA-HO-JAAY--3e963f80-c0e2-11ee-851c-3901cd26a9f8.jpg",
    appCvrPath:
      "https://assetscdn1.paytm.com/images/cinema/%E2%80%98KUCH-KHATTAA-HO-JAAY-APP-41014c10-c0e2-11ee-8d86-1796967a11a3.jpg",
    edgeBanner:
      "https://assetscdn1.paytm.com/images/cinema/Kuch-Khattaa-Ho-Jaay--1035%E2%80%8A%C3%97%E2%80%8A420-d92d2360-c0e2-11ee-851c-3901cd26a9f8.jpg",
    contentId: 157032,
    censor: "U/A",
    duration: 125,
    grn: ["Drama", "Romance", "Comedy"],
    scrnFmt: ["2D"],
    sndFmt: [null],
    rnr: {
      hasUReview: 0,
      hasContent: 1,
    },
    bookingStatus: "New Release",
    languageFormatGroups: [
      {
        lang: "Hindi",
        fmtGrpId: "zrispz5e2",
        totalSessionCount: 10,
        screenFormats: [
          {
            movieCode: "OAYAFH",
            scrnFmt: "2D",
            nextAvailableDate: "2024-02-17",
          },
        ],
      },
    ],
    releaseDate: "2024-02-16",
  },
  {
    label: "Anatomy of a Fall",
    totalSessionCount: 9,
    imgPath:
      "https://assetscdn1.paytm.com/images/cinema/anatomy__705x750-cf211850-9729-11ee-931a-230dd0f33fac.jpg",
    appImgPath:
      "https://assetscdn1.paytm.com/images/cinema/anatomy____-608x800-d2af4820-9729-11ee-931a-230dd0f33fac.jpg",
    cvrPath:
      "https://assetscdn1.paytm.com/images/cinema/anatomy__-d7db4970-9729-11ee-931a-230dd0f33fac.jpg",
    appCvrPath:
      "https://assetscdn1.paytm.com/images/cinema/anatomy__app-dd8a5d70-9729-11ee-9c0a-f7ea7e5b0325.jpg",
    edgeBanner:
      "https://assetscdn1.paytm.com/images/cinema/1_anatomy__-e56ca520-9729-11ee-931a-230dd0f33fac.jpg",
    contentId: 168494,
    censor: "U/A",
    duration: 153,
    grn: ["Crime"],
    scrnFmt: ["2D"],
    sndFmt: ["none"],
    rnr: {
      hasUReview: 0,
      hasContent: 1,
    },
    languageFormatGroups: [
      {
        lang: "English",
        fmtGrpId: "5qgro2bzu",
        totalSessionCount: 9,
        screenFormats: [
          {
            movieCode: "OAWVTF",
            scrnFmt: "2D",
            nextAvailableDate: "2024-02-17",
          },
        ],
      },
    ],
    releaseDate: "2024-02-02",
  },
  {
    label: "Ladies Bar",
    totalSessionCount: 9,
    imgPath:
      "https://assetscdn1.paytm.com/images/cinema/ladies-bar-705x750-2b539bc0-cb3c-11ee-a414-e787967340b4.jpg",
    appImgPath:
      "https://assetscdn1.paytm.com/images/cinema/ladies-bar--608x800-30219e90-cb3c-11ee-a731-b5c20ce5229e.jpg",
    cvrPath:
      "https://assetscdn1.paytm.com/images/cinema/web-cover-92fada60-ca72-11ee-a414-e787967340b4.jpg",
    appCvrPath:
      "https://assetscdn1.paytm.com/images/cinema/app-cover-961783b0-ca72-11ee-a731-b5c20ce5229e.jpg",
    edgeBanner:
      "https://assetscdn1.paytm.com/images/cinema/ladies-bar-1035%E2%80%8A%C3%97%E2%80%8A420-38226ac0-cb3c-11ee-a731-b5c20ce5229e.jpg",
    contentId: 170162,
    censor: "A",
    duration: 135,
    grn: ["Drama"],
    scrnFmt: ["2D"],
    sndFmt: [null],
    rnr: {
      hasUReview: 0,
      hasContent: 1,
    },
    bookingStatus: "New Release",
    languageFormatGroups: [
      {
        lang: "Kannada",
        fmtGrpId: "tpscqozq1",
        totalSessionCount: 9,
        screenFormats: [
          {
            movieCode: "OAYNHS",
            scrnFmt: "2D",
            nextAvailableDate: "2024-02-17",
          },
        ],
      },
    ],
    releaseDate: "2024-02-16",
  },
  {
    label: "Ravike Prasanga",
    totalSessionCount: 8,
    imgPath:
      "https://assetscdn1.paytm.com/images/cinema/Ravike-Prasanga--705x750-5a055800-cb3c-11ee-a414-e787967340b4.jpg",
    appImgPath:
      "https://assetscdn1.paytm.com/images/cinema/Ravike-Prasanga--608x800-5f2c7750-cb3c-11ee-a414-e787967340b4.jpg",
    cvrPath:
      "https://assetscdn1.paytm.com/images/cinema/ravike_web-649ad8d0-cb3c-11ee-a731-b5c20ce5229e.jpg",
    appCvrPath:
      "https://assetscdn1.paytm.com/images/cinema/ravike-6aa6d9e0-cb3c-11ee-a414-e787967340b4.jpg",
    edgeBanner:
      "https://assetscdn1.paytm.com/images/cinema/ravike_1035%E2%80%8A%C3%97%E2%80%8A420-702f2c00-cb3c-11ee-a414-e787967340b4.jpg",
    contentId: 170164,
    censor: "U/A",
    duration: 153,
    grn: ["Comedy"],
    scrnFmt: ["2D"],
    sndFmt: [null],
    rnr: {
      hasUReview: 0,
      hasContent: 1,
    },
    bookingStatus: "New Release",
    languageFormatGroups: [
      {
        lang: "Kannada",
        fmtGrpId: "bt0b0jxos",
        totalSessionCount: 8,
        screenFormats: [
          {
            movieCode: "OAYNMV",
            scrnFmt: "2D",
            nextAvailableDate: "2024-02-17",
          },
        ],
      },
    ],
    releaseDate: "2024-02-16",
  },
  {
    label: "Oye",
    totalSessionCount: 6,
    imgPath:
      "https://assetscdn1.paytm.com/images/cinema/Oye--705x750-07736e30-c676-11ee-a414-e787967340b4.jpg",
    appImgPath:
      "https://assetscdn1.paytm.com/images/cinema/Oye-608x800-0bd89d10-c676-11ee-85c6-4b12fb3048f0.jpg",
    cvrPath:
      "https://assetscdn1.paytm.com/images/cinema/Kemiti-E-Sampark--5338dc60-c676-11ee-85c6-4b12fb3048f0.jpg",
    appCvrPath:
      "https://assetscdn1.paytm.com/images/cinema/Kemiti-E-Sampark-app-5c0b2960-c676-11ee-a414-e787967340b4.jpg",
    edgeBanner:
      "https://assetscdn1.paytm.com/images/cinema/Oye-1035%E2%80%8A%C3%97%E2%80%8A420-6195c570-c676-11ee-85c6-4b12fb3048f0.jpg",
    contentId: 170015,
    censor: "U/A",
    duration: 172,
    grn: ["Romance"],
    scrnFmt: ["2D"],
    sndFmt: [null],
    rnr: {
      hasUReview: 0,
      hasContent: 1,
    },
    languageFormatGroups: [
      {
        lang: "Telugu",
        fmtGrpId: "vujanp7z0",
        totalSessionCount: 6,
        screenFormats: [
          {
            movieCode: "OAYIOD",
            scrnFmt: "2D",
            nextAvailableDate: "2024-02-17",
          },
        ],
      },
    ],
    releaseDate: "2009-07-03",
  },
  {
    label: "Kaatera",
    totalSessionCount: 6,
    imgPath:
      "https://assetscdn1.paytm.com/images/cinema/Kaatera--705x750-Recovered-b45cd290-2544-11ee-860b-25ebd55bc3b6.jpg",
    appImgPath:
      "https://assetscdn1.paytm.com/images/cinema/Kaatera--608x800-Recovered-b72b0dc0-2544-11ee-a61c-31a377cce2ed.jpg",
    cvrPath:
      "https://assetscdn1.paytm.com/images/cinema/Kaatera-web-baa7b160-2544-11ee-a61c-31a377cce2ed.jpg",
    appCvrPath:
      "https://assetscdn1.paytm.com/images/cinema/Kaatera-app-bd8e7da0-2544-11ee-860b-25ebd55bc3b6.jpg",
    edgeBanner:
      "https://assetscdn1.paytm.com/images/cinema/Kaatera-1035%E2%80%8A%C3%97%E2%80%8A420-Recovered-c0d914c0-2544-11ee-860b-25ebd55bc3b6.jpg",
    contentId: 163963,
    censor: "U/A",
    duration: 183,
    grn: ["Action", "Drama", "Period"],
    scrnFmt: ["2D"],
    sndFmt: ["none"],
    rnr: {
      hasUReview: 1,
      hasContent: 1,
    },
    languageFormatGroups: [
      {
        lang: "Kannada",
        fmtGrpId: "uajok325i",
        totalSessionCount: 6,
        screenFormats: [
          {
            movieCode: "OARR38",
            scrnFmt: "2D",
            nextAvailableDate: "2024-02-17",
          },
        ],
      },
    ],
    releaseDate: "2023-12-29",
  },
  {
    label: "Jab We Met",
    totalSessionCount: 5,
    imgPath:
      "https://assetscdn1.paytm.com/images/cinema/JWM-705x750_psd-b97240ce-b49a-4736-9bfa-7b02570522e4.jpg",
    appImgPath:
      "https://assetscdn1.paytm.com/images/cinema/JWM_608x800-0ef5cb52-1e30-4f97-bad9-02738b750d1f.jpg",
    cvrPath:
      "https://assetscdn1.paytm.com/images/cinema/web-cover-41f9cc92-b7dc-46bb-9443-f4fba8b9f2c1.jpg",
    appCvrPath:
      "https://assetscdn1.paytm.com/images/cinema/app-cover-12f5b26f-3f86-4a97-9f9b-755513c9a3ae.jpg",
    edgeBanner:
      "https://assetscdn1.paytm.com/images/cinema/JWM_new-dimension-e6f81bb8-c8a5-49e9-b551-792488f7969b.jpg",
    contentId: 159985,
    censor: "U/A",
    duration: 143,
    grn: ["Romance"],
    scrnFmt: ["2D"],
    sndFmt: ["None"],
    rnr: {
      hasUReview: 0,
      hasContent: 1,
    },
    languageFormatGroups: [
      {
        lang: "Hindi",
        fmtGrpId: "ezoyhqwwtjwe",
        totalSessionCount: 5,
        screenFormats: [
          {
            movieCode: "O9RKFN",
            scrnFmt: "2D",
            nextAvailableDate: "2024-02-18",
          },
        ],
      },
    ],
    releaseDate: "2007-10-26",
  },
  {
    label: "Titanic",
    totalSessionCount: 4,
    imgPath:
      "https://assetscdn1.paytm.com/images/cinema/Titanic_705x750-70654390-98c4-11ed-a04b-13c554b2cc84-11614120-a39e-11ed-9858-d143c091363e-59b60bf0-a7b7-11ed-aa60-d15e94d97726.jpg",
    appImgPath:
      "https://assetscdn1.paytm.com/images/cinema/Titanic_608x800-75bbb040-98c4-11ed-a04b-13c554b2cc84-167833d0-a39e-11ed-8b43-9b31075fc07f-5cc1c550-a7b7-11ed-bb07-51fce9c3dafd.jpg",
    cvrPath:
      "https://assetscdn1.paytm.com/images/cinema/Titanic_web-cover-7dc33330-98c4-11ed-8092-a9deecfa7463-1c28ce70-a39e-11ed-9858-d143c091363e-617dedd0-a7b7-11ed-aa60-d15e94d97726.jpg",
    appCvrPath:
      "https://assetscdn1.paytm.com/images/cinema/Titanic_app-cover-84323bd0-98c4-11ed-8092-a9deecfa7463-21d179d0-a39e-11ed-8b43-9b31075fc07f-6473d540-a7b7-11ed-aa60-d15e94d97726.jpg",
    edgeBanner:
      "https://assetscdn1.paytm.com/images/cinema/Titanic_1035%E2%80%8A%C3%97%E2%80%8A420-896282e0-98c4-11ed-8092-a9deecfa7463-28b934e0-a39e-11ed-8b43-9b31075fc07f-685d9290-a7b7-11ed-bb07-51fce9c3dafd.jpg",
    contentId: 159467,
    censor: "U/A",
    duration: 194,
    grn: ["Drama"],
    scrnFmt: ["2D"],
    sndFmt: ["None"],
    rnr: {
      hasUReview: 1,
      hasContent: 1,
    },
    languageFormatGroups: [
      {
        lang: "English",
        fmtGrpId: "qzuyvxt695sc",
        totalSessionCount: 4,
        screenFormats: [
          {
            movieCode: "OALFVG",
            scrnFmt: "2D",
            nextAvailableDate: "2024-02-17",
          },
        ],
      },
    ],
    releaseDate: "2023-02-10",
  },
  {
    label: "Dheera Samrat",
    totalSessionCount: 4,
    imgPath:
      "https://assetscdn1.paytm.com/images/cinema/Poster_705%20x%20750px-1b9a8250-ca71-11ee-a414-e787967340b4.png",
    appImgPath:
      "https://assetscdn1.paytm.com/images/cinema/Poster_608x800px-1e355170-ca71-11ee-a414-e787967340b4.png",
    cvrPath:
      "https://assetscdn1.paytm.com/images/cinema/web-cover-2264a340-ca71-11ee-a731-b5c20ce5229e.jpg",
    appCvrPath:
      "https://assetscdn1.paytm.com/images/cinema/app-cover-251bd400-ca71-11ee-a731-b5c20ce5229e.jpg",
    edgeBanner:
      "https://assetscdn1.paytm.com/images/cinema/Poster_1035x420px-280649c0-ca71-11ee-a731-b5c20ce5229e.png",
    contentId: 170166,
    censor: "U/A",
    duration: 123,
    grn: ["Action"],
    scrnFmt: ["2D"],
    sndFmt: [null],
    rnr: {
      hasUReview: 0,
      hasContent: 1,
    },
    bookingStatus: "New Release",
    languageFormatGroups: [
      {
        lang: "Kannada",
        fmtGrpId: "jzwhoamlc",
        totalSessionCount: 4,
        screenFormats: [
          {
            movieCode: "OAYNG7",
            scrnFmt: "2D",
            nextAvailableDate: "2024-02-17",
          },
        ],
      },
    ],
    releaseDate: "2024-02-16",
  },
  {
    label: "Anyone But You",
    totalSessionCount: 4,
    imgPath:
      "https://assetscdn1.paytm.com/images/cinema/Anyone-But-You--705x750-0f8cac50-b5cb-11ee-9ee5-7d491b016e7d.jpg",
    appImgPath:
      "https://assetscdn1.paytm.com/images/cinema/Anyone-But-You-608x800-12adc270-b5cb-11ee-8e34-8f1699ccb7ba.jpg",
    cvrPath:
      "https://assetscdn1.paytm.com/images/cinema/Anyone-but-you--15909710-b5cb-11ee-8e34-8f1699ccb7ba.jpg",
    appCvrPath:
      "https://assetscdn1.paytm.com/images/cinema/Anyone-but-you-app-19f306d0-b5cb-11ee-8e34-8f1699ccb7ba.jpg",
    edgeBanner:
      "https://assetscdn1.paytm.com/images/cinema/Anyone-But-You--1035%E2%80%8A%C3%97%E2%80%8A420-1d39cd60-b5cb-11ee-9ee5-7d491b016e7d.jpg",
    contentId: 162858,
    censor: "A",
    duration: 105,
    grn: ["Romance", "Comedy"],
    scrnFmt: ["2D"],
    sndFmt: ["none"],
    rnr: {
      hasUReview: 0,
      hasContent: 1,
    },
    languageFormatGroups: [
      {
        lang: "English",
        fmtGrpId: "qlivqmogbm",
        totalSessionCount: 4,
        screenFormats: [
          {
            movieCode: "OAPS5E",
            scrnFmt: "2D",
            nextAvailableDate: "2024-02-17",
          },
        ],
      },
    ],
    releaseDate: "2024-01-19",
  },
  {
    label: "Sapta Sagaradaache Ello - Side A",
    totalSessionCount: 4,
    imgPath:
      "https://assetscdn1.paytm.com/images/cinema/Sapta-Sagaradaache-Ello---Side-A--705x750-f06d3040-46fa-11ee-b3fd-0718d70da224.jpg",
    appImgPath:
      "https://assetscdn1.paytm.com/images/cinema/Sapta-Sagaradaache-Ello---Side-A--608x800-f3d8bce0-46fa-11ee-b3fd-0718d70da224.jpg",
    cvrPath:
      "https://assetscdn1.paytm.com/images/cinema/Sapta-Sagaradaache-Ello---Side-A-f7215830-46fa-11ee-8bf9-6d2094a6427e.jpg",
    appCvrPath:
      "https://assetscdn1.paytm.com/images/cinema/Sapta-Sagaradaache-Ello---Side-A-app-09429c40-46fb-11ee-b3fd-0718d70da224.jpg",
    edgeBanner:
      "https://assetscdn1.paytm.com/images/cinema/Sapta-Sagaradaache-Ello---Side-A-1035%E2%80%8A%C3%97%E2%80%8A420-0cbfdc20-46fb-11ee-8bf9-6d2094a6427e.jpg",
    contentId: 157576,
    censor: "U/A",
    duration: 142,
    grn: ["Drama", "Romance"],
    scrnFmt: ["2D"],
    sndFmt: [null],
    rnr: {
      hasUReview: 0,
      hasContent: 1,
    },
    languageFormatGroups: [
      {
        lang: "Kannada",
        fmtGrpId: "q3dshxeaz",
        totalSessionCount: 4,
        screenFormats: [
          {
            movieCode: "OAI60J",
            scrnFmt: "2D",
            nextAvailableDate: "2024-02-17",
          },
        ],
      },
    ],
    releaseDate: "2023-09-01",
  },
  {
    label: "Vadakkupatti Ramasamy",
    totalSessionCount: 4,
    imgPath:
      "https://assetscdn1.paytm.com/images/cinema/Vadakkupatti-Ramasamy--705x750-85d278f0-c01a-11ee-8d86-1796967a11a3.jpg",
    appImgPath:
      "https://assetscdn1.paytm.com/images/cinema/Vadakkupatti-Ramasamy-608x800-95bcdfd0-c01a-11ee-851c-3901cd26a9f8.jpg",
    cvrPath:
      "https://assetscdn1.paytm.com/images/cinema/Vadakkupatti-Ramasamy-web-99b78d10-c01a-11ee-851c-3901cd26a9f8.jpg",
    appCvrPath:
      "https://assetscdn1.paytm.com/images/cinema/Vadakkupatti-Ramasamy-9c5c4740-c01a-11ee-851c-3901cd26a9f8.jpg",
    edgeBanner:
      "https://assetscdn1.paytm.com/images/cinema/Vadakkupatti-Ramasamy-1035%E2%80%8A%C3%97%E2%80%8A420-9fb66ec0-c01a-11ee-8d86-1796967a11a3.jpg",
    contentId: 169290,
    censor: "U",
    duration: 146,
    grn: ["Drama"],
    scrnFmt: ["2D"],
    sndFmt: [null],
    rnr: {
      hasUReview: 0,
      hasContent: 1,
    },
    languageFormatGroups: [
      {
        lang: "Tamil",
        fmtGrpId: "agwic8rhp",
        totalSessionCount: 4,
        screenFormats: [
          {
            movieCode: "OAXNUM",
            scrnFmt: "2D",
            nextAvailableDate: "2024-02-17",
          },
        ],
      },
    ],
    releaseDate: "2024-02-02",
  },
  {
    label: "Varsham",
    totalSessionCount: 4,
    imgPath:
      "https://assetscdn1.paytm.com/images/cinema/Varsham-705x750-e5ae6f90-5ab8-11ed-8001-8d4db17d42e4.jpg",
    appImgPath:
      "https://assetscdn1.paytm.com/images/cinema/Varsham--608x800-eb085eb0-5ab8-11ed-a2cb-9994f52d2667.jpg",
    cvrPath:
      "https://assetscdn1.paytm.com/images/cinema/Varsham-f0b66140-5ab8-11ed-ac40-5fd01dde4a65.jpg",
    appCvrPath:
      "https://assetscdn1.paytm.com/images/cinema/Varsham-app-f62c3cd0-5ab8-11ed-9323-73fadb398182.jpg",
    edgeBanner:
      "https://assetscdn1.paytm.com/images/cinema/Varsham-1035%E2%80%8A%C3%97%E2%80%8A420-fa934070-5ab8-11ed-b781-9b0897f59b77.jpg",
    contentId: 157519,
    censor: "U/A",
    duration: 165,
    grn: ["Romance"],
    scrnFmt: ["2D"],
    sndFmt: [null],
    rnr: {
      hasUReview: 0,
      hasContent: 1,
    },
    languageFormatGroups: [
      {
        lang: "Telugu",
        fmtGrpId: "kufnskve3",
        totalSessionCount: 4,
        screenFormats: [
          {
            movieCode: "OAHWKT",
            scrnFmt: "2D",
            nextAvailableDate: "2024-02-17",
          },
        ],
      },
    ],
    releaseDate: "2022-11-04",
  },
  {
    label: "Kasoombo",
    totalSessionCount: 4,
    imgPath:
      "https://assetscdn1.paytm.com/images/cinema/Kasoombo--705x750-05a67c90-cb3b-11ee-a731-b5c20ce5229e.jpg",
    appImgPath:
      "https://assetscdn1.paytm.com/images/cinema/Kasoombo--608x800-095ec9a0-cb3b-11ee-a414-e787967340b4.jpg",
    cvrPath:
      "https://assetscdn1.paytm.com/images/cinema/Kasoombo-web--29469930-a004-11ee-bde8-6186437f3848.jpg",
    appCvrPath:
      "https://assetscdn1.paytm.com/images/cinema/Kasoombo-app-2d281920-a004-11ee-8b6a-b35ce9c4940d.jpg",
    edgeBanner:
      "https://assetscdn1.paytm.com/images/cinema/Kasoombo--1035%E2%80%8A%C3%97%E2%80%8A420-Recovered-328ed980-a004-11ee-bde8-6186437f3848.jpg",
    contentId: 168827,
    censor: "U/A",
    duration: 120,
    grn: ["Thriller"],
    scrnFmt: ["2D"],
    sndFmt: [null],
    rnr: {
      hasUReview: 1,
      hasContent: 1,
    },
    bookingStatus: "New Release",
    languageFormatGroups: [
      {
        lang: "Gujarati",
        fmtGrpId: "iixom7gew",
        totalSessionCount: 4,
        screenFormats: [
          {
            movieCode: "OAXB9L",
            scrnFmt: "2D",
            nextAvailableDate: "2024-02-17",
          },
        ],
      },
    ],
    releaseDate: "2024-02-16",
  },
  {
    label: "Migration",
    totalSessionCount: 4,
    imgPath:
      "https://assetscdn1.paytm.com/images/cinema/migration--705x750-824ef2d0-a1a2-11ee-a5bf-d57c26f93d70.jpg",
    appImgPath:
      "https://assetscdn1.paytm.com/images/cinema/migratiuon--608x800-8445e0d0-a1a2-11ee-a5bf-d57c26f93d70.jpg",
    cvrPath:
      "https://assetscdn1.paytm.com/images/cinema/migration_--8a18d080-a1a2-11ee-a5bf-d57c26f93d70.jpg",
    appCvrPath:
      "https://assetscdn1.paytm.com/images/cinema/migration_--app-8c71dbb0-a1a2-11ee-a5bf-d57c26f93d70.jpg",
    edgeBanner:
      "https://assetscdn1.paytm.com/images/cinema/migration--1035x420-8f1e3700-a1a2-11ee-9c51-4f8d6cd07594.jpg",
    contentId: 156847,
    censor: "U",
    duration: 83,
    grn: ["Animation", "Comedy"],
    scrnFmt: ["3D"],
    sndFmt: ["None"],
    rnr: {
      hasUReview: 1,
      hasContent: 1,
    },
    languageFormatGroups: [
      {
        lang: "English",
        fmtGrpId: "uejs0hcjkg",
        totalSessionCount: 4,
        screenFormats: [
          {
            movieCode: "OAX63K",
            scrnFmt: "3D",
            nextAvailableDate: "2024-02-17",
          },
        ],
      },
    ],
    releaseDate: "2023-12-29",
  },
  {
    label: "Dune",
    totalSessionCount: 4,
    imgPath:
      "https://assetscdn1.paytm.com/images/cinema/Dune-705x750-d08b9c00-caf6-11ee-a731-b5c20ce5229e.jpg",
    appImgPath:
      "https://assetscdn1.paytm.com/images/cinema/Dune--608x800-d6e12930-caf6-11ee-a414-e787967340b4.jpg",
    cvrPath:
      "https://assetscdn1.paytm.com/images/cinema/Dune_%20Web%20Cover-d90d5800-caf6-11ee-a731-b5c20ce5229e.jpg",
    appCvrPath:
      "https://assetscdn1.paytm.com/images/cinema/_Dune-app-dc1eddc0-caf6-11ee-a414-e787967340b4.jpg",
    edgeBanner:
      "https://assetscdn1.paytm.com/images/cinema/Dune-1035%E2%80%8A%C3%97%E2%80%8A420-e1bf4bc0-caf6-11ee-a414-e787967340b4.jpg",
    contentId: 141858,
    censor: "U/A",
    duration: 156,
    grn: ["Action", "Sci-Fi", "Adventure", "Drama"],
    scrnFmt: ["4DX-2D"],
    sndFmt: [null],
    rnr: {
      rating: [
        {
          src: "imdb",
          base: "10",
          val1: "8.1",
        },
      ],
      hasUReview: 1,
      hasContent: 1,
    },
    languageFormatGroups: [
      {
        lang: "English",
        fmtGrpId: "w1weqkqyw",
        totalSessionCount: 4,
        screenFormats: [
          {
            movieCode: "OA3Y73",
            scrnFmt: "4DX-2D",
            nextAvailableDate: "2024-02-17",
          },
        ],
      },
    ],
    releaseDate: "2021-10-22",
  },
  {
    label: "96",
    totalSessionCount: 3,
    imgPath:
      "https://assetscdn1.paytm.com/images/cinema/96---Tamil-web-poster-82e7f6d8-dd92-4c5b-98ba-fd7a5811d9d9.jpg",
    appImgPath:
      "https://assetscdn1.paytm.com/images/cinema/96---Tamil-app-poster-1f066930-1b6e-4fdc-a2d5-aba02dbb18cf.jpg",
    cvrPath:
      "https://assetscdn1.paytm.com/images/cinema/96-Web-Cover-60b16f27-96b2-407f-a1d0-171eabc57584.jpg",
    appCvrPath:
      "https://assetscdn1.paytm.com/images/cinema/96-App-cover-2206f859-a08d-4c0e-9adb-32a543b7732a.jpg",
    edgeBanner:
      "https://assetscdn1.paytm.com/images/cinema/96-276fc93d-2013-4e9d-88f3-30e1c639959b.jpg",
    contentId: 446,
    censor: "U",
    duration: 158,
    grn: ["Drama", "Romance"],
    scrnFmt: ["2D"],
    sndFmt: ["None"],
    rnr: {
      hasUReview: 0,
      hasContent: 1,
    },
    languageFormatGroups: [
      {
        lang: "Tamil",
        fmtGrpId: "1qzqzpsgry",
        totalSessionCount: 3,
        screenFormats: [
          {
            movieCode: "O9K2J0",
            scrnFmt: "2D",
            nextAvailableDate: "2024-02-18",
          },
        ],
      },
    ],
  },
  {
    label: "Alemari E Baduku",
    totalSessionCount: 2,
    imgPath:
      "https://assetscdn1.paytm.com/images/cinema/Alemari-E-Baduku--705x750-bea85a70-cb3a-11ee-a731-b5c20ce5229e.jpg",
    appImgPath:
      "https://assetscdn1.paytm.com/images/cinema/Alemari-E-Baduku--608x800-c4764110-cb3a-11ee-a731-b5c20ce5229e.jpg",
    cvrPath:
      "https://assetscdn1.paytm.com/images/cinema/Alemari-E-Baduku-web-cce697f0-cb3a-11ee-a414-e787967340b4.jpg",
    appCvrPath:
      "https://assetscdn1.paytm.com/images/cinema/Alemari-E-Baduku-d195c820-cb3a-11ee-a414-e787967340b4.jpg",
    edgeBanner:
      "https://assetscdn1.paytm.com/images/cinema/Alemari-E-Baduku-1035%E2%80%8A%C3%97%E2%80%8A420-d7151990-cb3a-11ee-a731-b5c20ce5229e.jpg",
    contentId: 170160,
    censor: "U/A",
    duration: 113,
    grn: ["Drama"],
    scrnFmt: ["2D"],
    sndFmt: ["None"],
    rnr: {
      hasUReview: 0,
      hasContent: 1,
    },
    bookingStatus: "New Release",
    languageFormatGroups: [
      {
        lang: "Kannada",
        fmtGrpId: "kmbpoey4r",
        totalSessionCount: 2,
        screenFormats: [
          {
            movieCode: "OAYN85",
            scrnFmt: "2D",
            nextAvailableDate: "2024-02-17",
          },
        ],
      },
    ],
    releaseDate: "2024-02-16",
  },
  {
    label: "Yeh Jawaani Hai Deewani",
    totalSessionCount: 2,
    imgPath:
      "https://assetscdn1.paytm.com/images/cinema/Yeh-Jawaani-Hai-Deewani--705x750-4d2b192b-e32d-4561-9e9c-701ebe2dbf02.jpg",
    appImgPath:
      "https://assetscdn1.paytm.com/images/cinema/Yeh-Jawaani-Hai-Deewani--608x800-702b71d7-4398-4d90-aa83-11b5711e2920.jpg",
    cvrPath:
      "https://assetscdn1.paytm.com/images/cinema/Yeh-jawaani--c7c52b3c-2aae-41e5-9c30-d5ed7cd3adca.jpg",
    appCvrPath:
      "https://assetscdn1.paytm.com/images/cinema/Yeh-jawaani-ap-2e161123-f914-477d-a950-787f975cd7fb.jpg",
    edgeBanner:
      "https://assetscdn1.paytm.com/images/cinema/Yeh-Jawaani-Hai-Deewani--1035x420-769be81e-1f06-4c4c-b63e-b1fcaf803d43.jpg",
    contentId: 138332,
    censor: "U/A",
    duration: 161,
    grn: ["Drama", "Romance", "Comedy"],
    scrnFmt: ["2D"],
    sndFmt: ["None"],
    rnr: {
      rating: [
        {
          src: "imdb",
          base: "10",
          val1: "7.1",
        },
      ],
      hasUReview: 0,
      hasContent: 1,
    },
    languageFormatGroups: [
      {
        lang: "Hindi",
        fmtGrpId: "pfsbhqvvew",
        totalSessionCount: 2,
        screenFormats: [
          {
            movieCode: "O9XWRC",
            scrnFmt: "2D",
            nextAvailableDate: "2024-02-17",
          },
        ],
      },
    ],
    releaseDate: "2013-05-31",
  },
  {
    label: "Nuvvostanante Nenoddantana",
    totalSessionCount: 1,
    imgPath:
      "https://assetscdn1.paytm.com/images/cinema/Nuvvostanante-Nenoddantana--705x750-a9184980-a873-11ed-aa60-d15e94d97726.jpg",
    appImgPath:
      "https://assetscdn1.paytm.com/images/cinema/Nuvvostanante-Nenoddantana--608x800-add7cd60-a873-11ed-aa60-d15e94d97726.jpg",
    cvrPath:
      "https://assetscdn1.paytm.com/images/cinema/Nuvvostanante-Nenoddantana-b2307920-a873-11ed-8130-0122aeb724bb.jpg",
    appCvrPath:
      "https://assetscdn1.paytm.com/images/cinema/Nuvvostanante-Nenoddantana-app-b5c14100-a873-11ed-aa60-d15e94d97726.jpg",
    edgeBanner:
      "https://assetscdn1.paytm.com/images/cinema/Nuvvostanante-Nenoddantana--1035%E2%80%8A%C3%97%E2%80%8A420-be799d60-a873-11ed-8130-0122aeb724bb.jpg",
    contentId: 160007,
    censor: "U",
    duration: 161,
    grn: ["Romance"],
    scrnFmt: ["2D"],
    sndFmt: [null],
    rnr: {
      hasUReview: 0,
      hasContent: 1,
    },
    languageFormatGroups: [
      {
        lang: "Telugu",
        fmtGrpId: "_pv8owb9n",
        totalSessionCount: 1,
        screenFormats: [
          {
            movieCode: "OALHGR",
            scrnFmt: "2D",
            nextAvailableDate: "2024-02-17",
          },
        ],
      },
    ],
    releaseDate: "2023-02-14",
  },
  {
    label: "Sapta Sagaradaache Ello - Side B",
    totalSessionCount: 1,
    imgPath:
      "https://assetscdn1.paytm.com/images/cinema/_Sapta-Sagaradaache-Ello---Side-B--705x750-Recovered-2de2fd70-8133-11ee-85e5-b3e9f70aa217.jpg",
    appImgPath:
      "https://assetscdn1.paytm.com/images/cinema/Sapta-Sagaradaache-Ello---Side-B--608x800-Recovered-30e82720-8133-11ee-931a-230dd0f33fac.jpg",
    cvrPath:
      "https://assetscdn1.paytm.com/images/cinema/Sapta-Sagaradaache-Ello---Side-B-web-38b07e30-8133-11ee-85e5-b3e9f70aa217.jpg",
    appCvrPath:
      "https://assetscdn1.paytm.com/images/cinema/Sapta-Sagaradaache-Ello---Side-B-3bb7cac0-8133-11ee-85e5-b3e9f70aa217.jpg",
    edgeBanner:
      "https://assetscdn1.paytm.com/images/cinema/Sapta-Sagaradaache-Ello---Side-B--1035%E2%80%8A%C3%97%E2%80%8A420-Recovered-3f0743e0-8133-11ee-931a-230dd0f33fac.jpg",
    contentId: 167232,
    censor: "U/A",
    duration: 147,
    grn: ["Drama", "Romance"],
    scrnFmt: ["2D"],
    sndFmt: ["None"],
    rnr: {
      hasUReview: 0,
      hasContent: 1,
    },
    languageFormatGroups: [
      {
        lang: "Kannada",
        fmtGrpId: "p48pdu0sd",
        totalSessionCount: 1,
        screenFormats: [
          {
            movieCode: "OAULHB",
            scrnFmt: "2D",
            nextAvailableDate: "2024-02-21",
          },
        ],
      },
    ],
    releaseDate: "2023-10-27",
  },
  {
    label: "Dilwale Dulhaniya Le Jayenge",
    totalSessionCount: 1,
    imgPath:
      "https://assetscdn1.paytm.com/images/cinema/Dilwale-Dulhania-Le-Jayenge-Hindi-Web-poster-705x750-ab4ece5d-87ac-423f-8fbc-78cadecd1d1f.jpg",
    appImgPath:
      "https://assetscdn1.paytm.com/images/cinema/Dilwale-Dulhania-Le-Jayenge-Hindi-App-poster-608x800-2d992fe7-a908-48fc-8447-e73ca47a2105.jpg",
    cvrPath:
      "https://assetscdn1.paytm.com/images/cinema/DDLJ-web-71c7be3e-bc36-41d6-89e0-ec27df807aec.jpg",
    appCvrPath:
      "https://assetscdn1.paytm.com/images/cinema/DDLJ-33300fd4-3acc-452c-96ec-83d89d03c7b3.jpg",
    edgeBanner:
      "https://assetscdn1.paytm.com/images/cinema/Dilwale-Dulhania-Le-Jayenge-Hindi-1035x420-250bedbd-8860-4f79-9811-51e55c3a6cfc.jpg",
    contentId: 141245,
    censor: "U",
    duration: 192,
    grn: ["Drama", "Comedy"],
    scrnFmt: ["2D"],
    sndFmt: ["None"],
    rnr: {
      rating: [
        {
          src: "imdb",
          base: "10",
          val1: "8.1",
        },
      ],
      hasUReview: 0,
      hasContent: 1,
    },
    languageFormatGroups: [
      {
        lang: "Hindi",
        fmtGrpId: "b_dclb~e9",
        totalSessionCount: 1,
        screenFormats: [
          {
            movieCode: "O9VZ27",
            scrnFmt: "2D",
            nextAvailableDate: "2024-02-17",
          },
        ],
      },
    ],
    releaseDate: "1995-10-20",
  },
];

const movie = {
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
};

const MoviesListing = () => {
  console.log(movieJSON.length);
  return (
    <Box sx={{ color: "red" }}>
      <h1>Movie Listing</h1>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <h1>Filters</h1>
        </Grid>
        <Grid item xs={8} sx={{display:'flex',flexWrap:'wrap',gap:'10px'}}>
          {movieJSON.map((movie) => (
            <>
              <Card sx={{ maxWidth: 345,height:'fit-content' }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    width={"300"}
                    height={"300"}
                    image={movie.imgPath}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {movie.label}
                    </Typography>
                    <Box display={"flex"}>
                      <Typography variant="body2" color="text.secondary">
                        {movie.censor}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {"."}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {movie.languageFormatGroups?.map((lang) => lang.lang)}
                      </Typography>
                    </Box>
                  </CardContent>
                </CardActionArea>
                <CardActions sx={{ justifyContent: "center" }}>
                  <Link href={`movies/${movie.contentId}`}>
                  <Button size="small" color="primary" variant="contained" sx={{mt:'auto'}}>
                    Book Ticket
                  </Button>
                  </Link>
                </CardActions>
              </Card>
            </>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default MoviesListing;
