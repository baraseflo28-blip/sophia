"use client";

import React, { useState, useEffect } from "react";
import { Box, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CarouselWrapper = styled(Box)({
  position: "relative",
  width: "100%",
  margin: "0 auto",
});

const CarouselContainer = styled(Box)({
  position: "relative",
  width: "100%",
  height: "200px",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const CarouselTrack = styled(Box, {
  shouldForwardProp: (prop) => prop !== "translateX",
})<{ translateX: number }>(({ translateX }) => ({
  display: "flex",
  gap: "15px",
  height: "100%",
  alignItems: "center",
  transition: "transform 0.5s ease",
  transform: `translateX(${translateX}px)`,
  willChange: "transform",
}));

const ImageCard = styled(Box)({
  width: "140px", // Square 1:1 ratio as requested
  height: "140px", // Square 1:1 ratio as requested
  borderRadius: "16px",
  overflow: "hidden",
  flexShrink: 0,
  cursor: "pointer",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
  },
});

const NavButton = styled(IconButton)({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  color: "#333",
  width: "48px",
  height: "48px",
  zIndex: 10,
  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 1)",
    transform: "translateY(-50%) scale(1.1)",
  },
});

const LeftButton = styled(NavButton)({
  left: "20px",
});

const RightButton = styled(NavButton)({
  right: "20px",
});

const DotsContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  gap: "8px",
  marginTop: "16px",
});

const Dot = styled(Box, {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active: boolean }>(({ active }) => ({
  width: "10px",
  height: "10px",
  borderRadius: "50%",
  backgroundColor: active ? "#ffffff" : "rgba(255, 255, 255, 0.4)",
  cursor: "pointer",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: active ? "#ffffff" : "rgba(255, 255, 255, 0.7)",
    transform: "scale(1.2)",
  },
}));

interface CarouselProps {
  images?: string[];
}

export const Carousel: React.FC<CarouselProps> = ({
  images = [
    "/images/carousel-images-optimized/IMG_0788.jpg",
    "/images/carousel-images-optimized/IMG_0800.jpg",
    "/images/carousel-images-optimized/IMG_0808.jpg",
    "/images/carousel-images-optimized/IMG_0816.jpg",
    "/images/carousel-images-optimized/IMG_0829.jpg",
    "/images/carousel-images-optimized/IMG_0833.jpg",
    "/images/carousel-images-optimized/IMG_0844.jpg",
    "/images/carousel-images-optimized/IMG_0847.jpg",
    "/images/carousel-images-optimized/IMG_0875.jpg",
  ],
}) => {
  const [currentIndex, setCurrentIndex] = useState(0); // Start from beginning

  // Create infinite array for endless scrolling - need more copies to avoid gaps
  const infiniteImages = [
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
  ];

  // Calculate translate to always show 5 images (140px + 15px gap = 155px per image)
  const imageWidth = 155; // 140px + 15px gap
  const containerCenter = 310; // Position to center the view and show 5 images
  const translateX = containerCenter - currentIndex * imageWidth;

  // Auto-rotation every 3 seconds with seamless infinite loop
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = prev + 1;
        // Reset to beginning when we've gone through all original images
        if (nextIndex >= images.length) {
          return 0;
        }
        return nextIndex;
      });
    }, 3000); // 3 seconds as requested

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <CarouselWrapper>
      <CarouselContainer>
        <CarouselTrack translateX={translateX}>
          {Array.from({ length: 15 }, (_, index) => {
            const imageIndex = index % images.length;
            const image = images[imageIndex];
            return (
              <ImageCard key={`${image}-${index}`}>
                <img
                  src={image}
                  alt={`Sofia Fashions Collection - Image ${imageIndex + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </ImageCard>
            );
          })}
        </CarouselTrack>

        {/* Navigation Buttons */}
        <LeftButton onClick={goToPrevious} aria-label="Previous image">
          <FaChevronLeft size={16} />
        </LeftButton>
        <RightButton onClick={goToNext} aria-label="Next image">
          <FaChevronRight size={16} />
        </RightButton>
      </CarouselContainer>

      {/* Dot Indicators - shows all 9 dots */}
      <DotsContainer>
        {images.map((_, index) => (
          <Dot
            key={index}
            active={index === currentIndex}
            onClick={() => goToSlide(index)}
          />
        ))}
      </DotsContainer>
    </CarouselWrapper>
  );
};
