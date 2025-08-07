"use client";

import React, { useEffect, useState } from "react";
import { Box, Container, Typography, Avatar } from "@mui/material";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { savePageLocally, addKeyboardShortcuts } from "@/lib/save-page";
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
import {
  SocialLink,
  BackgroundVideo,
  SEOStructuredData,
  SocialSharing,
} from "@/components";
import { Carousel } from "@/components/carousel";

export default function Home() {
  const { t, ready } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Use requestIdleCallback for better performance
    if (typeof window.requestIdleCallback !== "undefined") {
      window.requestIdleCallback(() => setIsClient(true));
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(() => setIsClient(true), 0);
    }
  }, []);

  // Add keyboard shortcuts for save functionality
  useEffect(() => {
    const cleanup = addKeyboardShortcuts();
    return cleanup; // Cleanup on component unmount
  }, []);

  const getSocialLinks = () => {
    const useTranslations = isClient && ready;
    return [
      {
        iconImage: "/Icons/whatsapp.png",
        label: useTranslations ? t("links.whatsapp") : "WhatsApp واتساب",
        url: "https://wa.me/905342050168",
      },
      {
        iconImage: "/Icons/telegram.png",
        label: useTranslations ? t("links.telegram") : "Telegram تلغرام",
        url: "https://t.me/sofiaturkey",
      },
      {
        iconImage: "/Icons/instagram.png",
        label: useTranslations ? t("links.instagram") : "Instagram انستاقرام",
        url: "https://www.instagram.com/sofia_tr24",
      },
      {
        iconImage: "/Icons/tik-tok.png",
        label: useTranslations ? t("links.tiktok") : "Tiktok تيك توك",
        url: "https://google.com",
      },
      {
        iconImage: "/Icons/facebook.png",
        label: useTranslations ? t("links.facebook") : "Facebook فيس بوك",
        url: "https://www.facebook.com/share/16msSWTFTQ",
      },
      {
        iconImage: "/Icons/google-maps.png",
        label: useTranslations
          ? t("links.google_location")
          : "Google Location مواقع غوغل",
        url: "https://maps.app.goo.gl/GHHHaKBokpciojKZ9",
      },
      {
        iconImage: "/Icons/download.png",
        label: useTranslations ? t("links.save_add_kaydet") : "Save  حفظ",
        url: "#",
        isSaveButton: true,
        onClick: savePageLocally,
      },
    ];
  };

  const socialLinks = getSocialLinks();

  // Show loading spinner during initial hydration
  if (!isClient || !ready) {
    return (
      <>
        <SEOStructuredData />
        <BackgroundVideo />
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            zIndex: 9999,
          }}
        >
          <Box
            sx={{
              width: 40,
              height: 40,
              border: "3px solid rgba(255, 255, 255, 0.3)",
              borderTop: "3px solid white",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
            }}
          />
        </Box>
      </>
    );
  }

  return (
    <>
      <SEOStructuredData />
      <BackgroundVideo />
      {/* <SocialSharing /> */}
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
        <motion.div
          initial={{ opacity: 0, y: -30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.25, 0, 1],
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              mb: { xs: 1.5, sm: 2, md: 2 }, // Reduced spacing
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src="/images/logo.png"
              alt="Sofia Fashions - Premium Women's Fashion Store - Turkish Fashion from Istanbul to Aleppo"
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
                "& *": {
                  direction: "ltr !important", // Force LTR direction
                },
              }}
              style={{
                direction: "ltr",
                unicodeBidi: "embed",
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
                Sofia Fashion
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
                textAlign: "right",
                direction: "rtl",
              }}
            >
              {isClient && ready ? t("brand.subtitle") : "أبدعنا في إسطنبول"}
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
                textAlign: "right",
                direction: "rtl",
              }}
            >
              {isClient && ready
                ? t("brand.subtitle2")
                : "والان بداية جديدة من حلب"}
            </Typography>
          </Box>
        </motion.div>

        {/* Social Links Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1, // Reduced from 1 to 0.5
            width: "100%",
            maxWidth: "700px",
            mb: 1, // Reduced from 2 to 1
          }}
        >
          {socialLinks.map((link, index) => (
            <SocialLink
              key={index}
              iconImage={link.iconImage}
              label={link.label}
              url={link.url}
              index={index}
              onClick={link.onClick}
              isSaveButton={link.isSaveButton}
            />
          ))}
        </Box>

        {/* Divider with Infinity Icon */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            mb: 0.1, // Reduced from 2 to 1
            mt: 0.1, // Reduced from 1 to 0.5
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
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: socialLinks.length * 0.1 + 0.3, // After all social links
            ease: [0.25, 0.25, 0, 1],
          }}
          style={{ width: "100%", maxWidth: "700px" }}
        >
          <Carousel />
        </motion.div>

        {/* SEO Content - Hidden but indexable */}
        <Box
          component="section"
          sx={{
            position: "absolute",
            left: "-9999px",
            width: "1px",
            height: "1px",
            overflow: "hidden",
          }}
          aria-hidden="true"
        >
          <Typography component="h1">
            Sofia Fashions - Premium Women's Fashion Store Istanbul Aleppo
          </Typography>
          <Typography component="h2">
            Turkish Fashion for Women - Ladies Clothing Store
          </Typography>
          <Typography component="h3">
            صوفيا فاشن - متجر الأزياء النسائية الراقية
          </Typography>
          <Typography>
            Sofia Fashions offers premium women's clothing, Turkish fashion,
            ladies apparel, women's dresses, fashion accessories, clothing
            store, fashion boutique, Istanbul fashion, Aleppo fashion, أزياء
            نسائية, ملابس نسائية, متجر الألبسة, الأزياء التركية, إسطنبول, حلب
          </Typography>
        </Box>
      </Box>
    </>
  );
}
