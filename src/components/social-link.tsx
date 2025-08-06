import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

const StyledLinkCard = styled(motion.div)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: "12px 16px",
  background: "#FFFFFFCC",
  borderRadius: "25px",
  border: "0px solid #000000",
  cursor: "pointer",
  width: "100%",
  maxWidth: "700px",
  minHeight: "45px",
  boxShadow: "0px 0px 20px 0px #00000010",
  textAlign: "center",
  position: "relative",
}));

const IconImageWrapper = styled(Box)({
  position: "absolute",
  left: "16px",
  top: "50%",
  transform: "translateY(-50%)",
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const IconImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

export interface SocialLinkProps {
  icon?: React.ReactNode;
  label: string;
  url: string;
  iconImage?: string;
  index?: number; // For staggered animations
}

export const SocialLink: React.FC<SocialLinkProps> = ({
  icon = null,
  label,
  url,
  iconImage,
  index = 0,
}) => {
  return (
    <Link href={url} underline="none" target="_blank" rel="noopener noreferrer">
      <StyledLinkCard
        initial={{ 
          opacity: 0, 
          y: 30,
          scale: 0.9
        }}
        animate={{ 
          opacity: 1, 
          y: 0,
          scale: 1
        }}
        transition={{
          duration: 0.5,
          delay: index * 0.1, // Staggered animation
          ease: [0.25, 0.25, 0, 1], // Custom easing
        }}
        whileHover={{
          y: -4,
          scale: 1.02,
          boxShadow: "0px 8px 30px 0px #00000020",
          transition: {
            duration: 0.2,
            ease: "easeOut"
          }
        }}
        whileTap={{
          scale: 0.98,
          y: -2,
          transition: {
            duration: 0.1
          }
        }}
      >
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            duration: 0.4,
            delay: (index * 0.1) + 0.2,
            ease: "backOut"
          }}
        >
          <IconImageWrapper>
            {iconImage ? (
              <IconImage src={iconImage} alt={label} loading="lazy" />
            ) : (
              icon
            )}
          </IconImageWrapper>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.4,
            delay: (index * 0.1) + 0.3,
            ease: "easeOut"
          }}
          style={{ width: "100%" }}
        >
          <Typography
            variant="body1"
            color="#000000"
            fontWeight={500}
            sx={{
              width: "100%",
              textAlign: "center",
              fontSize: "16px",
              paddingLeft: "48px",
              paddingRight: "16px",
            }}
          >
            {label}
          </Typography>
        </motion.div>
      </StyledLinkCard>
    </Link>
  );
};
