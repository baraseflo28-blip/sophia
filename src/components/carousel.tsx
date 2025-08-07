"use client";

import React, { useState, useEffect, useRef } from "react";
import { Box, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CarouselWrapper = styled(Box)({
  position: "relative",
  width: "100%",
  margin: "0 auto",
  padding: "0 20px", // Add padding to ensure rounded corners are visible
});

const CarouselContainer = styled(Box)({
  position: "relative",
  width: "775px", // Exactly 5 images: 5 * (140px + 15px) = 775px
  maxWidth: "100%", // Responsive on smaller screens
  height: "200px",
  overflow: "hidden", // Hide images outside the 5-image view
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
});

const CarouselTrack = styled(Box, {
  shouldForwardProp: (prop) => prop !== "translateX" && prop !== "isDragging",
})<{ translateX: number; isDragging?: boolean }>(
  ({ translateX, isDragging }) => ({
    display: "flex",
    gap: "15px",
    height: "100%",
    alignItems: "center",
    transition: isDragging
      ? "none"
      : "transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)", // Faster, smoother transition
    transform: `translateX(${translateX}px)`,
    willChange: "transform",
  })
);

const ImageCard = styled(Box)({
  width: "140px !important", // Square 1:1 ratio as requested
  height: "140px !important", // Square 1:1 ratio as requested
  minWidth: "140px !important", // Prevent shrinking
  minHeight: "140px !important", // Prevent shrinking
  maxWidth: "140px !important", // Prevent growing
  maxHeight: "140px !important", // Prevent growing
  borderRadius: "16px !important", // Ensure border radius is applied
  overflow: "hidden",
  flexShrink: 0,
  cursor: "pointer",
  transition: "all 0.3s ease",
  position: "relative",
  display: "block",
  boxSizing: "border-box",
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
  touchAction: "manipulation", // Improve touch response
  userSelect: "none",
  WebkitUserSelect: "none",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 1)",
    transform: "translateY(-50%) scale(1.1)",
  },
  "&:active": {
    backgroundColor: "rgba(255, 255, 255, 1)",
    transform: "translateY(-50%) scale(1.05)",
  },
  // Better mobile targeting
  "@media (max-width: 768px)": {
    width: "56px",
    height: "56px",
    fontSize: "18px",
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
  marginTop: "8px", // Reduced from 16px to 8px
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
  touchAction: "manipulation", // Better touch response
  userSelect: "none",
  WebkitUserSelect: "none",
  "&:hover": {
    backgroundColor: active ? "#ffffff" : "rgba(255, 255, 255, 0.7)",
    transform: "scale(1.2)",
  },
  "&:active": {
    transform: "scale(1.1)",
  },
  // Better mobile targeting
  "@media (max-width: 768px)": {
    width: "12px",
    height: "12px",
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
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [dragVelocity, setDragVelocity] = useState(0);
  const [lastDragTime, setLastDragTime] = useState(0);
  const [lastDragOffset, setLastDragOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Create infinite array for endless scrolling - need more copies to avoid gaps
  const infiniteImages = [
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
  ];

  // Calculate translate to show exactly 5 images (140px + 15px gap = 155px per image)
  const imageWidth = 155; // 140px + 15px gap
  const visibleImages = 5;
  const centerOffset = 2 * imageWidth; // Position to show 5 images with center image in middle
  const translateX = centerOffset - currentIndex * imageWidth;

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

  // Improved button handlers with better mobile support and haptic feedback
  const handlePreviousClick = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // Add haptic feedback for mobile devices
    if ("vibrate" in navigator) {
      navigator.vibrate(10); // Very light haptic feedback
    }

    goToPrevious();
  };

  const handleNextClick = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // Add haptic feedback for mobile devices
    if ("vibrate" in navigator) {
      navigator.vibrate(10); // Very light haptic feedback
    }

    goToNext();
  };

  // Enhanced drag functionality for web and mobile
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setDragStart(e.clientX);
    setDragOffset(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const offset = e.clientX - dragStart;
    setDragOffset(offset);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();

    const threshold = 30; // Reduced threshold for better responsiveness
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        goToNext(); // Drag right = go to next
      } else {
        goToPrevious(); // Drag left = go to previous
      }
    }

    setIsDragging(false);
    setDragStart(0);
    setDragOffset(0);
  };

  // Enhanced touch events for mobile with velocity detection
  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault(); // Prevent text selection and scrolling issues
    setIsDragging(true);
    setDragStart(e.touches[0].clientX);
    setDragOffset(0);
    setDragVelocity(0);
    setLastDragTime(Date.now());
    setLastDragOffset(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault(); // Prevent scrolling

    const currentTime = Date.now();
    const offset = e.touches[0].clientX - dragStart;

    // Calculate velocity for smoother interactions
    if (currentTime - lastDragTime > 0) {
      const velocity = (offset - lastDragOffset) / (currentTime - lastDragTime);
      setDragVelocity(velocity);
    }

    setDragOffset(offset * 1.3); // More responsive feel (30% amplification)
    setLastDragTime(currentTime);
    setLastDragOffset(offset);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();

    const threshold = 15; // Lower threshold for better mobile sensitivity
    const velocityThreshold = 0.5; // Velocity-based navigation

    // Check both distance and velocity for natural feel
    if (
      Math.abs(dragOffset) > threshold ||
      Math.abs(dragVelocity) > velocityThreshold
    ) {
      // Add haptic feedback for successful swipe
      if ("vibrate" in navigator) {
        navigator.vibrate(15); // Light haptic feedback for swipe
      }

      if (dragOffset > 0 || dragVelocity > 0) {
        goToPrevious(); // Swipe right = go to previous (natural direction)
      } else {
        goToNext(); // Swipe left = go to next (natural direction)
      }
    }

    setIsDragging(false);
    setDragStart(0);
    setDragOffset(0);
    setDragVelocity(0);
    setLastDragTime(0);
    setLastDragOffset(0);
  };

  return (
    <CarouselWrapper>
      <CarouselContainer
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={() => {
          if (isDragging) {
            setIsDragging(false);
            setDragStart(0);
            setDragOffset(0);
          }
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        sx={{
          cursor: isDragging ? "grabbing" : "grab",
          userSelect: "none",
          WebkitUserSelect: "none",
          touchAction: "pan-y", // Allow vertical scrolling but handle horizontal
          WebkitTouchCallout: "none", // Disable iOS callout
          WebkitTapHighlightColor: "transparent", // Remove tap highlight
          // Responsive width for mobile
          "@media (max-width: 800px)": {
            width: "100%",
            maxWidth: "100vw",
          },
        }}
      >
        <CarouselTrack
          translateX={translateX + dragOffset}
          isDragging={isDragging}
        >
          {Array.from({ length: images.length * 3 }, (_, index) => {
            const imageIndex = index % images.length;
            const image = images[imageIndex];

            return (
              <ImageCard key={`${image}-${index}`}>
                <img
                  src={image}
                  alt={`Sofia Fashions Collection - Image ${imageIndex + 1}`}
                  style={{
                    width: "140px !important",
                    height: "140px !important",
                    objectFit: "cover",
                    borderRadius: "16px !important",
                    display: "block",
                    maxWidth: "140px",
                    maxHeight: "140px",
                    minWidth: "140px",
                    minHeight: "140px",
                    boxSizing: "border-box",
                  }}
                />
              </ImageCard>
            );
          })}
        </CarouselTrack>

        {/* Navigation Buttons */}
        <LeftButton
          onClick={handlePreviousClick}
          onTouchEnd={handlePreviousClick}
          aria-label="Previous image"
        >
          <FaChevronLeft size={16} />
        </LeftButton>
        <RightButton
          onClick={handleNextClick}
          onTouchEnd={handleNextClick}
          aria-label="Next image"
        >
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
