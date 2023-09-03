// pages/CanvasPage.tsx
import { useState } from "react";
import Canvas from "./components/Canvas";
import SaveBanner from "./components/SaveBanner";
import EditBanner from "./components/EditBanner";
const Home: React.FC = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);
  const [imageHeight, setImageHeight] = useState(900);
  const [imagewidth, setImagewidth] = useState(1600);
  const [text, setText] = useState("Your Heading start from Here ");
  const [textBackground, setTextbackground] = useState("black");
  const [textFontSize, setTextFontSize] = useState(30);
  const [textFontColor, setTextFontColor] = useState("");
  const [borderRadius, setborderRadius] = useState(0);
  const [bordercolor, setbordercolor] = useState("white");
  const [borderwidth, setborderwidth] = useState(3);
  const editInfo = {
    setImageUrl,
    setX,
    setY,
    setImageHeight,
    setImagewidth,
    setText,
    setTextbackground,
    setTextFontSize,
    setTextFontColor,
    setborderRadius,
    setbordercolor,
    setborderwidth,
  };

  const bannerInfo = {
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
  };

  return (
    <main className="container  flex flex-col justify-center items-center mx-auto">
      <h1 className="uppercase text-3xl font-bold my-10 ">make banner</h1>

      <div className="flex w-full ">
        <div className="w-1/5">
          <SaveBanner />
        </div>

        <div className="w-3/5">
          <Canvas bannerInfo={bannerInfo} />
        </div>

        <div className="w-1/5">
          <EditBanner editInfo={editInfo} />
        </div>
      </div>
    </main>
  );
};

export default Home;
