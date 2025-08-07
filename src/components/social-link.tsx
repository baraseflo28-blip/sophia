"use client";

import React, { useState, useEffect } from "react";
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
  onClick?: () => void; // Custom click handler
  isSaveButton?: boolean; // Special handling for save button
}

export const SocialLink: React.FC<SocialLinkProps> = ({
  icon = null,
  label,
  url,
  iconImage,
  index = 0,
  onClick,
  isSaveButton = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [showIdleAnimation, setShowIdleAnimation] = useState(false);

  // Start idle animations after entrance animation completes
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIdleAnimation(true);
    }, index * 100 + 1000); // Start after entrance animation

    return () => clearTimeout(timer);
  }, [index]);

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  const linkProps =
    isSaveButton || onClick
      ? {
          href: "#",
          onClick: handleClick,
          style: { textDecoration: "none", color: "inherit" },
        }
      : {
          href: url,
          target: "_blank",
          rel: "noopener noreferrer",
        };

  // No icon animation - icons appear instantly with the row
  const iconAnimation = {
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0, // Instant appearance
    },
  };

  // No text animation - text appears instantly with the row
  const textAnimation = {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0, // Instant appearance
    },
  };

  return (
    <Link {...linkProps} underline="none">
      <StyledLinkCard
        initial={{
          opacity: 0,
          y: 30,
          scale: 0.9,
        }}
        animate={
          isPressed
            ? { opacity: 1, scale: 0.98, y: -2 }
            : isHovered
            ? { opacity: 1, y: -4, scale: 1.02 }
            : showIdleAnimation
            ? { opacity: 1, y: [0, -3, 0], scale: 1 }
            : { opacity: 1, y: 0, scale: 1 }
        }
        transition={{
          duration: isPressed
            ? 0.1
            : isHovered
            ? 0.2
            : showIdleAnimation
            ? 3 + index * 0.3
            : 0.5,
          delay: showIdleAnimation ? 0 : index * 0.1,
          ease: [0.25, 0.25, 0, 1],
          repeat: showIdleAnimation && !isHovered && !isPressed ? Infinity : 0,
          repeatDelay: 0.5,
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onTapStart={() => setIsPressed(true)}
        onTap={() => setIsPressed(false)}
        onTapCancel={() => setIsPressed(false)}
        style={{
          boxShadow: isHovered
            ? "0px 8px 30px 0px #00000020"
            : "0px 0px 20px 0px #00000010",
        }}
      >
        <motion.div initial={{ scale: 1, rotate: 0 }} animate={iconAnimation}>
          <IconImageWrapper>
            {iconImage ? (
              <IconImage src={iconImage} alt={label} loading="lazy" />
            ) : (
              icon
            )}
          </IconImageWrapper>
        </motion.div>
        <motion.div
          initial={{ opacity: 1, x: 0 }}
          animate={textAnimation}
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
