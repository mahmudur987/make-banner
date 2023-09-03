import React from "react";

interface Props {}

const SaveBanner = () => {
  return (
    <div className="border flex flex-col gap-3 w-full p-3 bg-base-200">
      <button className="btn btn-primary">save template</button>

      <p className="flex flex-col gap-1 font-bold py-5 px-1">
        <span className="px-2">Name</span>
        <input type="text" value={"template-2"} className="border px-2 " />
      </p>

      <p className="w-full flex justify-between py-5 px-1">
        <span className="border border-blue-500  w-full text-center">undo</span>
        <span className="border border-blue-500 w-full text-center">redo</span>
      </p>

      <p className=" px-3 flex justify-between font-bold">
        <span>New Layer</span>
        <span>+</span>
      </p>

      <div className="py-1 px-1 flex flex-col font-bold">
        <span className="px-2">Layers</span>
        <p className="flex justify-between px-5 py-1">
          <span>text_1</span>
          <span>....</span>
        </p>
        <p className="flex justify-between px-5 py-1">
          <span>text_2</span>
          <span>....</span>
        </p>
        <p className="flex justify-between px-5 py-1">
          <span>text_3</span>
          <span>....</span>
        </p>
      </div>
      <p className="font-bold py-5 px-1">Image Containeer</p>

      <p className="flex gap-3 items-center">
        <input type="checkbox" className="toggle" checked />

        <span>Disable Guide</span>
      </p>
    </div>
  );
};

export default SaveBanner;
