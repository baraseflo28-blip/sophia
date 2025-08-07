"use client";

import React from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import { styled } from "@mui/material/styles";

const SharingContainer = styled(Box)({
  position: "fixed",
  left: "20px",
  top: "50%",
  transform: "translateY(-50%)",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  zIndex: 1000,
  "@media (max-width: 768px)": {
    display: "none", // Hide on mobile to avoid clutter
  },
});

const ShareButton = styled(IconButton)({
  width: "48px",
  height: "48px",
  borderRadius: "50%",
  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.1)",
    boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
  },
});

export const SocialSharing: React.FC = () => {
  const shareUrl = "https://sofiafashions.com/";
  const shareText = "Check out Sofia Fashions - Premium Women's Fashion from Istanbul to Aleppo! 🌟 تسوقي أجمل الأزياء النسائية الراقية";

  const handleShare = (platform: string) => {
    let url = "";
    
    switch (platform) {
      case "facebook":
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case "twitter":
        url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
        break;
      case "whatsapp":
        url = `https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`;
        break;
      case "telegram":
        url = `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
        break;
      case "native":
        if (typeof window !== 'undefined' && 'share' in navigator) {
          navigator.share({
            title: "Sofia Fashions",
            text: shareText,
            url: shareUrl,
          });
          return;
        }
        break;
    }

    if (url) {
      window.open(url, "_blank", "width=600,height=400");
    }
  };

  return (
    <SharingContainer>
      <Tooltip title="Share on Facebook" placement="right">
        <ShareButton
          onClick={() => handleShare("facebook")}
          sx={{ backgroundColor: "#1877F2", color: "white", "&:hover": { backgroundColor: "#166FE5" } }}
        >
          📘
        </ShareButton>
      </Tooltip>

      <Tooltip title="Share on Twitter" placement="right">
        <ShareButton
          onClick={() => handleShare("twitter")}
          sx={{ backgroundColor: "#1DA1F2", color: "white", "&:hover": { backgroundColor: "#1A91DA" } }}
        >
          🐦
        </ShareButton>
      </Tooltip>

      <Tooltip title="Share on WhatsApp" placement="right">
        <ShareButton
          onClick={() => handleShare("whatsapp")}
          sx={{ backgroundColor: "#25D366", color: "white", "&:hover": { backgroundColor: "#22C55E" } }}
        >
          💬
        </ShareButton>
      </Tooltip>

      <Tooltip title="Share on Telegram" placement="right">
        <ShareButton
          onClick={() => handleShare("telegram")}
          sx={{ backgroundColor: "#0088CC", color: "white", "&:hover": { backgroundColor: "#007BB8" } }}
        >
          ✈️
        </ShareButton>
      </Tooltip>

      {typeof window !== 'undefined' && 'share' in navigator && (
        <Tooltip title="Share" placement="right">
          <ShareButton
            onClick={() => handleShare("native")}
            sx={{ backgroundColor: "#6B7280", color: "white", "&:hover": { backgroundColor: "#4B5563" } }}
          >
            📤
          </ShareButton>
        </Tooltip>
      )}
    </SharingContainer>
  );
};
