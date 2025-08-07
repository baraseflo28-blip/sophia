import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const VideoContainer = styled(Box)({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: -1,
  overflow: "hidden",
});

const StyledVideo = styled("video")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

const VideoOverlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  backdropFilter: "blur(1px)",
});

export interface BackgroundVideoProps {
  src?: string;
  poster?: string;
}

export const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
  src = "/videos/video-poster.mp4",
  poster,
}) => {
  return (
    <VideoContainer>
      <StyledVideo autoPlay muted loop playsInline poster={poster}>
        <source src={src} type="video/mp4" />
      </StyledVideo>
      <VideoOverlay />
    </VideoContainer>
  );
};
