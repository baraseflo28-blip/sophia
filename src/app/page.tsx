"use client";

import React from "react";
import { Box, Container, Typography, Avatar } from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  FaWhatsapp,
  FaTelegram,
  FaInstagram,
  FaTiktok,
  FaFacebook,
  FaMapMarkerAlt,
  FaSave,
  FaInfinity,
} from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { SocialLink, ImageCarousel, BackgroundVideo } from "@/components";

export default function Home() {
  const { t } = useTranslation();

  const socialLinks = [
    {
      iconImage: "/Icons/whatsapp.png",
      label: t("links.whatsapp"),
      url: "https://google.com",
    },
    {
      iconImage: "/Icons/telegram.png",
      label: t("links.telegram"),
      url: "https://google.com",
    },
    {
      iconImage: "/Icons/instagram.png",
      label: t("links.instagram"),
      url: "https://google.com",
    },
    {
      iconImage: "/Icons/tik-tok.png",
      label: t("links.tiktok"),
      url: "https://google.com",
    },
    {
      iconImage: "/Icons/facebook.png",
      label: t("links.facebook"),
      url: "https://google.com",
    },
    {
      iconImage: "/Icons/google-maps.png",
      label: t("links.google_location"),
      url: "https://google.com",
    },
    {
      iconImage: "/Icons/download.png",
      label: t("links.save_add_kaydet"),
      url: "https://google.com",
    },
  ];

  return (
    <>
      <BackgroundVideo />
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          py: 2,
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: { xs: "90%", sm: "80%", md: "70%", lg: "60%" },
          margin: "0 auto",
          px: { xs: 1, sm: 2, md: 3 },
        }}
      >
        {/* Logo and Brand Section */}
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 2, sm: 3, md: 3 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src="/images/logo.png"
            alt="Trend One Fashion"
            sx={{
              width: { xs: 80, sm: 90, md: 100 },
              height: { xs: 80, sm: 90, md: 100 },
              mb: 1,
              borderRadius: "50%",
              borderWidth: "0px",
              borderColor: "#000000",
              borderStyle: "solid",
              objectFit: "contain",
            }}
            loading="lazy"
          />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              mb: 0.5,
            }}
          >
            <Typography
              variant="h2"
              color="white"
              fontWeight="bold"
              sx={{
                textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                fontSize: { xs: "1.8rem", sm: "2rem", md: "2.2rem" },
                margin: 0,
                textAlign: "center",
              }}
            >
              {t("brand.name")}
            </Typography>
            <MdVerified
              size={28}
              color="#1DA1F2"
              style={{
                opacity: 1,
                filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.3))",
              }}
            />
          </Box>

          <Typography
            variant="h1"
            color="white"
            sx={{
              opacity: 0.9,
              textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
              fontSize: { xs: "1.5rem", sm: "1.5rem", md: "1.5rem" },
              margin: 0,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {t("brand.subtitle")}
          </Typography>
          <Typography
            variant="h5"
            color="white"
            sx={{
              opacity: 0.9,
              textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
              fontSize: { xs: "1.5rem", sm: "1.5rem", md: "1.5rem" },
              margin: 0,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {t("brand.subtitle2")}
          </Typography>
        </Box>

        {/* Social Links Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            width: "100%",
            maxWidth: "700px",
            mb: 2,
          }}
        >
          {socialLinks.map((link, index) => (
            <SocialLink
              key={index}
              iconImage={link.iconImage}
              label={link.label}
              url={link.url}
            />
          ))}
        </Box>

        {/* Divider with Infinity Icon */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            mb: 2,
            mt: 1,
          }}
        >
          <Box
            sx={{
              flex: 1,
              height: "1px",
              background:
                "linear-gradient(to right, transparent, rgba(255, 255, 255, 0.3), transparent)",
            }}
          />
          <Box
            sx={{
              mx: 2,
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            <FaInfinity size={16} color="rgba(255, 255, 255, 0.8)" />
          </Box>
          <Box
            sx={{
              flex: 1,
              height: "1px",
              background:
                "linear-gradient(to left, transparent, rgba(255, 255, 255, 0.3), transparent)",
            }}
          />
        </Box>

        {/* Image Carousel Section */}
        <Box sx={{ width: "100%", maxWidth: "700px" }}>
          <ImageCarousel />
        </Box>
      </Box>
    </>
  );
}
