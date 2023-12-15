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
      <div className="h-screen bg-gray-400 flex flex-col items-center justify-center">
        <p className="animate-bounce text-8xl">{tools[index]}</p>
      </div>
    </>
  );
}

export default Home;
