"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { Box } from "@mui/material";

const bannerResponse = {
  page_id: 58177,
  page_name: "TPMC-Web",
  context: {
    user: {
      user_stage: "ALL_UPSELL",
      i_user: false,
    },
    request_id: "d5b06a2b-8a54-48a7-bc52-c2b0713953bd",
    served_by: "sf_java",
  },
  paytm_logo_url:
    "https://assetscdn1.paytm.com/images/catalog/category/5165/paytm_logo.png",
  page: [
    {
      id: 326833,
      views: [
        {
          id: 326833,
          type: "carousel-1",
          title: "TN- Web",
          items: [
            {
              id: 2491597,
              name: "Lal Salaam Advance - TPMC Desktop",
              url: "https://ticketnew.com/movies/x-movie-detail-157722",
              url_type: "embed",
              source: "storefrontFallback",
              seourl: "https://ticketnew.com/movies/x-movie-detail-157722",
              image_url:
                "https://assetscdn1.paytm.com/images/catalog/view_item/2491597/1707459414970.jpg",
              item_id: 0,
              priority: 0,
              reason: "SF|ws-fallback|NONLOGGEDIN|no-content",
            },
            {
              id: 2491904,
              name: "Teri Baaton Mein TPMC - Desktop",
              url: "https://ticketnew.com/movies/x-movie-detail-169320",
              url_type: "embed",
              source: "storefrontFallback",
              seourl: "https://ticketnew.com/movies/x-movie-detail-169320",
              image_url:
                "https://assetscdn1.paytm.com/images/catalog/view_item/2491904/1707301240597.jpg",
              item_id: 0,
              priority: 0,
              reason: "SF|ws-fallback|NONLOGGEDIN|no-content",
            },
            {
              id: 2491827,
              name: "Anweshippin Kandethum TPMC - Desktop",
              url: "https://ticketnew.com/movies/x-movie-detail-168955",
              url_type: "embed",
              source: "storefrontFallback",
              seourl: "https://ticketnew.com/movies/x-movie-detail-168955",
              image_url:
                "https://assetscdn1.paytm.com/images/catalog/view_item/2491827/1707297169055.jpg",
              item_id: 0,
              priority: 0,
              reason: "SF|ws-fallback|NONLOGGEDIN|no-content",
            },
            {
              id: 2476185,
              name: "Argylee TPMC - Desktop",
              url: "https://ticketnew.com/movies/x-movie-detail-166927",
              url_type: "embed",
              source: "storefrontFallback",
              seourl: "https://ticketnew.com/movies/x-movie-detail-166927",
              image_url:
                "https://assetscdn1.paytm.com/images/catalog/view_item/2476185/1706857499433.jpg",
              item_id: 0,
              priority: 0,
              reason: "SF|ws-fallback|NONLOGGEDIN|no-content",
            },
          ],
          datasources: [
            {
              manage_by_ct: 1,
            },
          ],
          is_bg_active: false,
          meta_layout: {},
        },
      ],
    },
  ],
  footer_image_url:
    "https://assetscdn1.paytm.com/images/catalog/category/5165/footer1.png",
  placeholder_image_url:
    "https://assetscdn1.paytm.com/images/catalog/category/5165/placeholder.png",
  ga_key: "/h/tpmc-web-clpid-58177",
  entity_type: "category",
  entity_associated_with: 66704,
  ga_category: "Others",
  vertical_name: "Others",
  layout: {},
  metadata: {},
};

const MovieBanner = () => {
  return (
    <Box>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
        style={{
            background:"linear-gradient(blue, #000000)"
        }}
      >
        {bannerResponse.page[0].views[0].items.map((banner) => (
          <SwiperSlide key={banner.id}>
            <Image
              src={banner.image_url}
              alt={banner.name}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default MovieBanner;
