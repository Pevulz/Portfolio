import React from "react";

function Info({ data }) {
  const links = data.link.split(", ");

  return (
    <>
      <div key={data.id} className="relative flex w-1/2">
        <img
          className="z-10 w-full object-fill hover:scale-105 duration-200 hover:opacity-0"
          src={data.logo}
        ></img>
        {/*container for details after hovering*/}
        <div className="absolute px-20 h-full bg-black w-full flex flex-col items-center justify-center text-white">
          <div className="text-5xl underline font-bold">{data.title}</div>
          <div className="pt-10">{data.detail}</div>
          <div className="">
            Links:
            {links.map((link) => (
              <div>{link}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;
