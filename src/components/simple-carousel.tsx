import React, { useState, useEffect } from "react";
import { Box, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CarouselWrapper = styled(Box)({
  position: "relative",
  width: "100%",
  maxWidth: "700px",
  margin: "0 auto",
});

const CarouselContainer = styled(Box)({
  position: "relative",
  width: "100%",
  height: "180px",
  overflow: "hidden",
  borderRadius: "16px",
  cursor: "grab",
  "&:active": {
    cursor: "grabbing",
  },
});

const CarouselTrack = styled(Box, {
  shouldForwardProp: (prop) => prop !== "translateX",
})<{ translateX: number }>(({ translateX }) => ({
  display: "flex",
  gap: "20px",
  height: "100%",
  alignItems: "center",
  padding: "20px",
  transform: `translateX(${translateX}px)`,
  transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  willChange: "transform",
}));

const ImageCard = styled(Box)({
  width: "160px",
  height: "160px",
  borderRadius: "12px",
  overflow: "hidden",
  flexShrink: 0,
  cursor: "grab",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
  },
  "&:active": {
    cursor: "grabbing",
  },
});

const NavButton = styled(IconButton)({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  color: "#333",
  width: "44px",
  height: "44px",
  zIndex: 10,
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
  },
});

const LeftButton = styled(NavButton)({
  left: "10px",
});

const RightButton = styled(NavButton)({
  right: "10px",
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
  width: "8px",
  height: "8px",
  borderRadius: "50%",
  backgroundColor: active ? "#ffffff" : "rgba(255, 255, 255, 0.4)",
  cursor: "pointer",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: active ? "#ffffff" : "rgba(255, 255, 255, 0.7)",
  },
}));

interface SimpleCarouselProps {
  images?: string[];
}

export const SimpleCarousel: React.FC<SimpleCarouselProps> = ({
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
  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(images.length / 2)
  ); // Start from center

  // Auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
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

  // Get visible images (current, previous, next)
  const getVisibleImages = () => {
    const visibleImages = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + images.length) % images.length;
      visibleImages.push({
        src: images[index],
        index,
        isCenter: i === 0,
      });
    }
    return visibleImages;
  };

  const visibleImages = getVisibleImages();

  return (
    <CarouselWrapper>
      {/* Main Carousel */}
      <CarouselContainer>
        <ImageContainer>
          {visibleImages.map((image, idx) => (
            <ImageCard
              key={`${image.index}-${idx}`}
              sx={{
                opacity: image.isCenter ? 1 : 0.6,
                transform: image.isCenter ? "scale(1.1)" : "scale(0.9)",
              }}
            >
              <img
                src={image.src}
                alt={`Sofia Fashions Collection - Image ${image.index + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                onLoad={() => console.log("✅ Image loaded:", image.src)}
                onError={() => console.error("❌ Image failed:", image.src)}
              />
            </ImageCard>
          ))}
        </ImageContainer>

        {/* Navigation Buttons */}
        <LeftButton onClick={goToPrevious} aria-label="Previous image">
          <FaChevronLeft size={16} />
        </LeftButton>
        <RightButton onClick={goToNext} aria-label="Next image">
          <FaChevronRight size={16} />
        </RightButton>
      </CarouselContainer>

      {/* Dot Indicators */}
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
