import React, { useState, useEffect, useRef } from "react";
import { Box, useMediaQuery, useTheme, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FaChevronLeft, FaChevronRight, FaInfinity } from "react-icons/fa";

const CarouselWrapper = styled(Box)({
  position: "relative",
  width: "100%",
});

const InfinityIconLeft = styled(Box)({
  position: "absolute",
  left: "-50px",
  top: "50%",
  transform: "translateY(-50%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1,
});

const InfinityIconRight = styled(Box)({
  position: "absolute",
  right: "-50px",
  top: "50%",
  transform: "translateY(-50%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1,
});

const CarouselContainer = styled(Box)({
  position: "relative",
  width: "100%",
  overflow: "hidden",
  borderRadius: "16px",
  cursor: "grab",
  touchAction: "pan-y pinch-zoom", // Allow vertical scrolling but handle horizontal ourselves
  "&:active": {
    cursor: "grabbing",
  },
});

const CarouselTrack = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "currentIndex" &&
    prop !== "isTransitioning" &&
    prop !== "dragOffset",
})<{ currentIndex: number; isTransitioning: boolean; dragOffset: number }>(
  ({ currentIndex, isTransitioning, dragOffset }) => ({
    display: "flex",
    transition: isTransitioning ? "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)" : "none",
    transform: `translate3d(-${currentIndex * 180 - dragOffset}px, 0, 0)`,
    userSelect: "none",
    willChange: "transform",
    backfaceVisibility: "hidden",
  })
);

const ImageCard = styled(Box)({
  width: "160px",
  height: "160px",
  borderRadius: "12px",
  overflow: "hidden",
  flexShrink: 0,
  cursor: "grab",
  transition: "transform 0.3s ease",
  marginRight: "20px",
  "&:hover": {
    transform: "scale(1.05)",
  },
  "&:active": {
    cursor: "grabbing",
  },
});

const StyledImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  willChange: "transform",
  backfaceVisibility: "hidden",
  transform: "translateZ(0)",
});

const NavButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  color: "#333",
  width: "44px",
  height: "44px",
  minWidth: "44px", // Ensure minimum touch target size
  touchAction: "manipulation", // Improve touch responsiveness
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
  },
  "&:active": {
    backgroundColor: "rgba(255, 255, 255, 1)",
    transform: "translateY(-50%) scale(0.95)",
  },
  zIndex: 10, // Higher z-index to ensure buttons are clickable
  [theme.breakpoints.down('md')]: {
    width: "48px",
    height: "48px",
    minWidth: "48px", // Larger on mobile for better touch experience
  },
}));

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

export interface ImageCarouselProps {
  images?: string[];
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
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
  const [currentIndex, setCurrentIndex] = useState(images.length); // Start from the first duplicated set
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Create infinite array by duplicating images
  const infiniteImages = [...images, ...images, ...images];

  // Auto-rotation effect
  useEffect(() => {
    if (isDragging) return; // Don't auto-rotate while dragging

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 4000); // Rotate every 4 seconds for better UX

    return () => clearInterval(interval);
  }, [isDragging]);

  // Preload images for better performance
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  // Handle infinite loop transitions
  useEffect(() => {
    if (currentIndex >= images.length * 2) {
      // When we reach the end of the second set, jump back to the first set
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(images.length);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 500);
    } else if (currentIndex < images.length) {
      // When we go before the first set, jump to the second set
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(images.length * 2 - 1);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 500);
    }
  }, [currentIndex, images.length]);

  const goToPrevious = (e?: React.MouseEvent | React.TouchEvent) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    setCurrentIndex(currentIndex - 1);
  };

  const goToNext = (e?: React.MouseEvent | React.TouchEvent) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    setCurrentIndex(currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(images.length + index); // Jump to the middle set + index
  };

  // Touch and mouse drag handlers
  const handleStart = (clientX: number) => {
    setIsDragging(true);
    setDragStart(clientX);
    setDragOffset(0);
  };

  const handleMove = (clientX: number) => {
    if (!isDragging) return;
    const offset = clientX - dragStart;
    setDragOffset(offset);

    // Temporarily pause auto-rotation while dragging
    if (Math.abs(offset) > 10) {
      // User is actively dragging, pause auto rotation
    }
  };

  const handleEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    // Calculate how many slides we've moved based on drag distance
    const slideWidth = 180; // width of each slide + margin
    const slidesToMove = Math.round(dragOffset / slideWidth);

    // Update the current index based on drag direction and distance
    if (slidesToMove !== 0) {
      setCurrentIndex((prevIndex) => prevIndex - slidesToMove);
    }

    setDragOffset(0);
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    // Only handle mouse down if not clicking on buttons
    const target = e.target as HTMLElement;
    if (target.closest('button') || target.closest('[role="button"]')) {
      return;
    }
    e.preventDefault();
    handleStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleEnd();
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleEnd();
    }
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    // Only handle touch if not clicking on buttons
    const target = e.target as HTMLElement;
    if (target.closest('button') || target.closest('[role="button"]')) {
      return;
    }
    handleStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault(); // Only prevent default when actually dragging
    handleMove(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleEnd();
  };

  return (
    <CarouselWrapper>
      {/* Carousel */}
      <CarouselContainer
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={isDragging ? handleMouseMove : undefined}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <CarouselTrack
          currentIndex={currentIndex}
          isTransitioning={isTransitioning && !isDragging}
          dragOffset={dragOffset}
        >
          {infiniteImages.map((image, index) => (
            <ImageCard key={`${image}-${index}`}>
              <StyledImage
                src={image}
                alt={`Gallery image ${(index % images.length) + 1}`}
                loading="lazy"
              />
            </ImageCard>
          ))}
        </CarouselTrack>

        {/* Navigation Buttons */}
        <LeftButton 
          onClick={goToPrevious}
          onTouchStart={(e) => {
            e.stopPropagation();
            goToPrevious(e);
          }}
          role="button"
          aria-label="Previous image"
        >
          <FaChevronLeft size={16} />
        </LeftButton>
        <RightButton 
          onClick={goToNext}
          onTouchStart={(e) => {
            e.stopPropagation();
            goToNext(e);
          }}
          role="button"
          aria-label="Next image"
        >
          <FaChevronRight size={16} />
        </RightButton>
      </CarouselContainer>

      {/* Dot Indicators */}
      <DotsContainer>
        {images.map((_, index) => (
          <Dot
            key={index}
            active={index === (currentIndex - images.length) % images.length}
            onClick={() => goToSlide(index)}
          />
        ))}
      </DotsContainer>
    </CarouselWrapper>
  );
};
