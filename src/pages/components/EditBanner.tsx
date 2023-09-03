import React from "react";

const EditBanner = ({ editInfo }: any) => {
  if (!editInfo) {
    return;
  }

  const {
    setImageUrl,
    setImageHeight,
    setImagewidth,
    setX,
    setY,
    setText,
    setTextbackground,
    setTextFontSize,
    setborderRadius,
    setbordercolor,
    setborderwidth,
  } = editInfo;

  return (
    <div className=" flex flex-col p-3 bg-base-200 border rounded-md font-semibold">
      <h1 className="font-bold text-xl text-center px-1">Edit your Image</h1>
      {/* image url */}
      <div className="form-control  ">
        <label className="label">
          <span className="label-text">Image Url</span>
        </label>
        <input
          onChange={(e) => setImageUrl(e.target.value)}
          type="text"
          placeholder="Type here"
          className="p-1 rounded-md "
        />
      </div>
      {/* width */} {/* height */}
      <div className="flex justify-center gap-5">
        <div>
          <label className="label">
            <span className="label-text">width</span>
          </label>
          <select
            onChange={(e) => setImagewidth(e.target.value)}
            className="select select-bordered  "
          >
            <option defaultChecked>1600</option>

            <option>1080</option>
          </select>
        </div>

        <div>
          <label className="label">
            <span className="label-text">height</span>
          </label>
          <select
            onChange={(e) => setImageHeight(e.target.value)}
            className="select select-bordered  "
          >
            <option defaultChecked>900</option>
            <option>1080</option>
            <option>1920</option>
          </select>
        </div>
      </div>
      {/* x,y */}
      <div className="flex gap-2 w-full">
        <div className="">
          <label className="label">
            <span className="label-text"> X</span>
          </label>
          <input
            onChange={(e) => setX(e.target.value)}
            type="number"
            placeholder="X coordinates"
            className="p-1 rounded-md w-full "
          />
        </div>
        <div className="  ">
          <label className="label">
            <span className="label-text">Y</span>
          </label>
          <input
            onChange={(e) => setY(e.target.value)}
            type="number"
            placeholder="Y coordinates"
            className="p-1 rounded-md w-full"
          />
        </div>
      </div>
      {/* text */}
      <div className="form-control  ">
        <label className="label">
          <span className="label-text">Heading Text</span>
        </label>
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Type here"
          className="p-1 rounded-md "
        />
      </div>
      {/* heading font size and color */}
      <div className="flex gap-2">
        <div className="form-control  ">
          <label className="label">
            <span className="label-text"> Heading text size</span>
          </label>
          <input
            onChange={(e) => setTextFontSize(e.target.value)}
            type="number"
            placeholder="Type here"
            className="p-1 rounded-md w-full "
          />
        </div>

        <div className="form-control  ">
          <label className="label">
            <span className="label-text">Heading Text Color</span>
          </label>
          <input
            onChange={(e) => setTextbackground(e.target.value)}
            type="text"
            placeholder="color name /code"
            className="p-1 rounded-md w-full "
          />
        </div>
      </div>
      {/* border width */}
      <div className="form-control  ">
        <label className="label">
          <span className="label-text">Border width</span>
        </label>
        <input
          onChange={(e) => setborderwidth(e.target.value)}
          type="number"
          placeholder="number"
          className="p-1 rounded-md "
        />
      </div>
      {/* border color */}
      <div className="form-control   ">
        <label className="label">
          <span className="label-text"> Border color</span>
        </label>
        <input
          onChange={(e) => setbordercolor(e.target.value)}
          type="text"
          placeholder="color name/code"
          className="p-1 rounded-md "
        />
      </div>
      {/* border radias */}
      <div className="form-control  ">
        <label className="label">
          <span className="label-text">Border Radius</span>
        </label>
        <input
          onChange={(e) => setborderRadius(e.target.value)}
          type="number"
          placeholder="Type number"
          className="p-1 rounded-md "
        />
      </div>
    </div>
  );
};

export default EditBanner;
