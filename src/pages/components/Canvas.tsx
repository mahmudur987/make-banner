import React, { useEffect, useRef } from "react";

interface CanvasProps {
  bannerInfo: {
    imageUrl: string;
    X: number;
    Y: number;
    imageHeight: number;
    imagewidth: number;
    text: string;
    textBackground: string;
    textFontSize: number;
    borderRadius: number;
    bordercolor: string;
    borderwidth: number;
  };
}

const Canvas: React.FC<CanvasProps> = ({ bannerInfo }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!bannerInfo || !bannerInfo.imageUrl) {
      return; // Or render a loading state or fallback content
    }

    const {
      imageUrl,
      X,
      Y,
      imageHeight,
      imagewidth,
      text,
      textBackground,
      textFontSize,
      borderRadius,
      bordercolor,
      borderwidth,
    } = bannerInfo;

    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext("2d");

    if (!ctx) {
      return;
    }

    // Load and display the image from the public directory
    const image = new Image();
    image.src = imageUrl;
    image.onload = () => {
      const aspectRatio = imagewidth / imageHeight;
      const canvasWidth = canvas.width;
      const ImageHeight = canvasWidth / aspectRatio;
      canvas.height = ImageHeight;
      ctx.drawImage(image, X, Y, canvas.width, ImageHeight);

      // Add text to the canvas
      ctx.font = `${textFontSize}px sans-serif`;
      ctx.fillStyle = textBackground;
      ctx.fillText(
        text,
        canvas.width / 5,
        canvas.height / 3,
        (canvas.width * 2) / 3
      );
    };
  }, [bannerInfo]);

  return (
    <div className="min-w-[800px] w-full">
      <canvas
        style={{
          border: `${bannerInfo.borderwidth}px solid ${bannerInfo.bordercolor} `,
          borderRadius: `${bannerInfo.borderRadius}px`,
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
