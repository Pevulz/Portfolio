import { useEffect, useState } from "react";

function Card({ data }) {
  const [display, setDisplay] = useState(false);
  const [showDisplay, setShowDisplay] = useState(showLogo());
  const details = data.detail.split(", ");

  function showCard() {
    setDisplay(!display);
  }

  useEffect(() => {
    if (display == false) {
      setShowDisplay(showLogo());
    }
    if (display == true) {
      setShowDisplay(showData());
    }
  }, [display]);

  function showData() {
    return (
      <>
        <div
          onClick={showCard}
          key={data.id}
          className="bg-black text-white flex flex-col items-center justify-center w-64 h-96 cursor-pointer hover:scale-110 duration-200"
        >
          <div className="text-xl font-bold ">{data.companyTitle}</div>
          <p className="pb-5">({data.time})</p>
          {details.map((details) => (
            <>
              <li className="px-10">{details}</li>
            </>
          ))}
        </div>
      </>
    );
  }

  function showLogo() {
    return (
      <>
        <div
          key={data.id}
          onClick={showCard}
          className="bg-white flex items-center justify-center w-64 h-96 cursor-pointer hover:scale-110 duration-200"
        >
          <img key={data.id} src={data.logo}></img>
        </div>
      </>
    );
  }

  return (
    <>
      <div>{showDisplay}</div>
    </>
  );
}

export default Card;
