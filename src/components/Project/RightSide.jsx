import React from "react";
import { useState, useEffect } from "react";

function RightSide({ data }) {
  const [index, setIndex] = useState(0);
  const [detail, setDetail] = useState(data.at(0).detail);
  const [link, setLink] = useState(data.at(0).link);

  useEffect(() => {
    const detail = setInterval(() => {
      if (index < data.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
      setDetail(data.at(index).detail);
      setLink(data.at(index).link);
    }, 5000);
    return () => clearInterval(detail);
  }, [index]);

  return (
    <>
      <div className="text-black flex flex-col justify-center items-center w-full h-full">
        <p>{detail}</p>
        <li>{link}</li>
      </div>
    </>
  );
}

export default RightSide;
