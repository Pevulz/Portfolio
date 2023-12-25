import React, { useEffect } from "react";
import { useState } from "react";

function LeftSide({ data }) {
  const [index, setIndex] = useState(0);
  const [background, setBackground] = useState(data.at(0).logo);
  const [title, setTitle] = useState(data.at(0).title);

  useEffect(() => {
    const image = setInterval(() => {
      if (index < data.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
      setBackground(data.at(index).logo);
      setTitle(data.at(index).title);
    }, 5000);
    return () => clearInterval(image);
  }, [index]);

  return (
    <>
      <div className="text-black flex flex-col justify-center items-center w-full h-full">
        <h1 className="font-bold text-5xl">{title}</h1>
        <img src={background}></img>
      </div>
    </>
  );
}

export default LeftSide;
