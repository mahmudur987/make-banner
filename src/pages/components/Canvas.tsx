// components/Canvas.tsx
import React, { useEffect, useRef } from "react";

interface CanvasProps {
  bannerInfo: any;
}

const Canvas: React.FC<CanvasProps> = ({ bannerInfo }) => {
  const {
    imageUrl,
    X,
    Y,
    imageHeight,
    imagewidth,
    text,
    textBackground,
    textFontSize,
    textFontColor,
    borderRadius,
    bordercolor,
    borderwidth,
  } = bannerInfo;

  console.log(textBackground);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
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
  }, [
    imageUrl,
    text,
    imageHeight,
    imagewidth,
    X,
    Y,
    textBackground,
    textFontSize,
  ]);

  return (
    <div className=" min-w-[800px] w-full   ">
      <canvas
        style={{
          border: `${borderwidth}px solid ${bordercolor} `,
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