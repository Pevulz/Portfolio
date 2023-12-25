import { useState, useEffect } from "react";

function Home() {
  const tools = ["React", "Tailwind"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      if (index < tools.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }, 2000);

    return () => clearInterval(id);
  }, [index]);

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center bg-no-repeat bg-cover bg-center bg-fixed bg-[url('https://img.freepik.com/free-vector/abstract-blue-light-pipe-speed-zoom-black-background-technology_1142-9980.jpg?w=1060&t=st=1703469359~exp=1703469959~hmac=e7f0f99fbfdd35093ce64b159fbef93215bac817048b243d024e3f53720bd434')]">
        <p className="animate-bounce text-white text-8xl">{tools[index]}</p>
      </div>
    </>
  );
}

export default Home;
