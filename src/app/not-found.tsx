"use client";

import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";

const NotFoundContainer = styled(Container)({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  color: "white",
});

const NotFoundBox = styled(Box)({
  padding: "2rem",
  borderRadius: "16px",
  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  maxWidth: "600px",
  width: "100%",
});

const LogoImage = styled("img")({
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  marginBottom: "1rem",
});

const StyledButton = styled(Button)({
  marginTop: "1.5rem",
  marginRight: "1rem",
  padding: "12px 24px",
  borderRadius: "8px",
  fontWeight: "bold",
  textTransform: "none",
  fontSize: "16px",
});

export default function NotFound() {
  return (
    <NotFoundContainer maxWidth={false}>
      <NotFoundBox>
        <LogoImage src="/images/logo.png" alt="Sofia Fashions Logo" />
        
        <Typography variant="h1" component="h1" sx={{ fontSize: "4rem", fontWeight: "bold", mb: 1 }}>
          404
        </Typography>
        
        <Typography variant="h4" component="h2" sx={{ mb: 2, fontWeight: "600" }}>
          Page Not Found | الصفحة غير موجودة
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 3, opacity: 0.9, lineHeight: 1.6 }}>
          Sorry, we couldn't find the page you're looking for. The page may have been moved, deleted, or you may have entered an incorrect URL.
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 3, opacity: 0.9, lineHeight: 1.6, direction: "rtl" }}>
          عذراً، لم نتمكن من العثور على الصفحة التي تبحث عنها. قد تكون الصفحة قد تم نقلها أو حذفها أو أنك أدخلت رابطاً غير صحيح.
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 1 }}>
          <Link href="/" passHref>
            <StyledButton variant="contained" color="primary">
              🏠 Back to Home | العودة للرئيسية
            </StyledButton>
          </Link>
          
          <Link href="/#carousel" passHref>
            <StyledButton variant="outlined" sx={{ color: "white", borderColor: "white" }}>
              👗 View Collection | عرض المجموعة
            </StyledButton>
          </Link>
        </Box>

        <Box sx={{ mt: 4, pt: 3, borderTop: "1px solid rgba(255,255,255,0.2)" }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: "600" }}>
            Quick Links | روابط سريعة
          </Typography>
          
          <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 2 }}>
            <Link href="/" style={{ textDecoration: "none" }}>
              <Typography sx={{ color: "white", "&:hover": { textDecoration: "underline" } }}>
                Fashion Collection
              </Typography>
            </Link>
            <Link href="https://www.instagram.com/sofiafashions" style={{ textDecoration: "none" }}>
              <Typography sx={{ color: "white", "&:hover": { textDecoration: "underline" } }}>
                Instagram
              </Typography>
            </Link>
            <Link href="https://www.facebook.com/sofiafashions" style={{ textDecoration: "none" }}>
              <Typography sx={{ color: "white", "&:hover": { textDecoration: "underline" } }}>
                Facebook
              </Typography>
            </Link>
            <Link href="https://t.me/sofiafashions" style={{ textDecoration: "none" }}>
              <Typography sx={{ color: "white", "&:hover": { textDecoration: "underline" } }}>
                Telegram
              </Typography>
            </Link>
          </Box>
        </Box>

        <Typography variant="body2" sx={{ mt: 3, opacity: 0.7 }}>
          Sofia Fashions - Premium Women's Fashion | صوفيا فاشن - أزياء نسائية راقية
        </Typography>
      </NotFoundBox>
    </NotFoundContainer>
  );
}
