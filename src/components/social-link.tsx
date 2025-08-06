import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledLinkCard = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: "12px 16px",
  background: "#FFFFFFCC",
  borderRadius: "25px",
  border: "0px solid #000000",
  cursor: "pointer",
  transition: "all 0.3s ease",
  width: "100%",
  maxWidth: "700px",
  minHeight: "45px",
  boxShadow: "0px 0px 20px 0px #00000010",
  textAlign: "center",
  position: "relative",
  "&:hover": {
    transform: "translateY(-1px)",
    boxShadow: "0px 0px 25px 0px #00000015",
  },
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
}

export const SocialLink: React.FC<SocialLinkProps> = ({
  icon = null,
  label,
  url,
  iconImage,
}) => {
  return (
    <Link href={url} underline="none" target="_blank" rel="noopener noreferrer">
      <StyledLinkCard>
        <IconImageWrapper>
          {iconImage ? (
            <IconImage src={iconImage} alt={label} loading="lazy" />
          ) : (
            icon
          )}
        </IconImageWrapper>
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
      </StyledLinkCard>
    </Link>
  );
};
