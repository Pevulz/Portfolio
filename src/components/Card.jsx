import React from "react";

function Card({ data }) {
  return (
    <>
      <div
        key={data.id}
        src={data.logo}
        className="bg-white flex items-center justify-center w-48 h-60 cursor-pointer hover:scale-110 duration-200"
      >
        {data.companyTitle}
      </div>
    </>
  );
}

export default Card;
