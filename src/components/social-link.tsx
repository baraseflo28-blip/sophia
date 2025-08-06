import React, { useState } from "react";
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

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  const linkProps = isSaveButton || onClick 
    ? { 
        href: "#", 
        onClick: handleClick,
        style: { textDecoration: 'none', color: 'inherit' }
      }
    : { 
        href: url, 
        target: "_blank", 
        rel: "noopener noreferrer" 
      };

  // Create idle animation variants
  const idleAnimationVariants = {
    idle: {
      y: [0, -2, 0],
      scale: [1, 1.01, 1],
      rotateY: [0, 2, -2, 0],
      transition: {
        duration: 3 + (index * 0.5), // Stagger timing based on index
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.3, // Different start times for each link
      }
    },
    hover: {
      y: -4,
      scale: 1.02,
      rotateY: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.98,
      y: -2,
      rotateY: 0,
      transition: {
        duration: 0.1
      }
    }
  };

  // Icon idle animation variants
  const iconIdleVariants = {
    idle: {
      rotate: [0, 5, -5, 0],
      scale: [1, 1.05, 1],
      transition: {
        duration: 4 + (index * 0.3), // Different timing for icons
        repeat: Infinity,
        ease: "easeInOut",
        delay: (index * 0.4) + 1, // Offset from main animation
      }
    },
    hover: {
      rotate: 0,
      scale: 1.1,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: {
      rotate: 0,
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  };

  return (
    <Link {...linkProps} underline="none">
      <StyledLinkCard
        initial={{ 
          opacity: 0, 
          y: 30,
          scale: 0.9
        }}
        animate={
          isPressed 
            ? "tap" 
            : isHovered 
              ? "hover" 
              : "idle"
        }
        variants={idleAnimationVariants}
        transition={{
          duration: 0.5,
          delay: index * 0.1, // Staggered animation
          ease: [0.25, 0.25, 0, 1], // Custom easing
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onTapStart={() => setIsPressed(true)}
        onTap={() => setIsPressed(false)}
        onTapCancel={() => setIsPressed(false)}
        style={{
          boxShadow: isHovered ? "0px 8px 30px 0px #00000020" : "0px 0px 20px 0px #00000010"
        }}
      >
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={
            isPressed 
              ? "tap" 
              : isHovered 
                ? "hover" 
                : "idle"
          }
          variants={iconIdleVariants}
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
          animate={{
            opacity: isHovered ? 1 : [1, 0.9, 1],
            x: 0,
            scale: isHovered ? 1.02 : [1, 1.01, 1]
          }}
          transition={{
            duration: isHovered ? 0.4 : 3.5 + (index * 0.2),
            delay: (index * 0.1) + 0.3,
            ease: "easeOut",
            repeat: isHovered ? 0 : Infinity,
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
