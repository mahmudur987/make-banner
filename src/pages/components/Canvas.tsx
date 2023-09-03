// components/Canvas.tsx
import React, { useEffect, useRef } from "react";

interface CanvasProps {
  bannerInfo: {
    imageUrl: string;
    X: number;
    Y: number;
    imageHeight: number;
    imageWidth: number; // Corrected variable name to match the interface
    text: string;
    textBackground: string;
    textFontSize: number;
    borderRadius: number;
    borderColor: string; // Corrected variable name to match the interface
    borderWidth: number;
  };
}

const Canvas: React.FC<CanvasProps> = ({ bannerInfo }) => {
  const {
    imageUrl,
    X,
    Y,
    imageHeight,
    imageWidth,
    text,
    textBackground,
    textFontSize,
    borderRadius,
    borderColor,
    borderWidth,
  } = bannerInfo;
  console.log(imageUrl);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!bannerInfo) {
      return;
    }
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext("2d");

    if (!ctx) {
      return;
    }
    // Load and display the image from the public directory
    if (bannerInfo) {
      const image = new Image();
      image.src = imageUrl;
      image.onload = () => {
        const aspectRatio = imageWidth / imageHeight; // Corrected variable names
        const canvasWidth = canvas.width;
        const canvasHeight = canvasWidth / aspectRatio; // Corrected variable name
        canvas.height = canvasHeight;
        ctx.drawImage(image, X, Y, canvasWidth, canvasHeight);

        // Add text to the canvas
        ctx.font = `${textFontSize}px sans-serif`;

        ctx.fillStyle = textBackground;
        ctx.fillText(
          text,
          canvasWidth / 5,
          canvasHeight / 3,
          (canvasWidth * 2) / 3
        );
      };
    }
  }, [
    imageUrl,
    text,
    imageHeight,
    imageWidth,
    X,
    Y,
    textBackground,
    textFontSize,
    bannerInfo,
  ]);

  return (
    <div className="min-w-[800px] w-full">
      <canvas
        style={{
          border: `${borderWidth}px solid ${borderColor}`,
          borderRadius: `${borderRadius}px`,
        }}
        className="mx-auto"
        ref={canvasRef}
        width={800}
        height={600}
      />
    </div>
  );
};

export default Canvas;
