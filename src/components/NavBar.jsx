import { useState, useEffect } from "react";

function NavBar({ navData }) {
  const data = navData;
  const HomePage = data.at(0).component;

  const [activeTab, setActiveTab] = useState("HOME");
  const [showTab, setShowTab] = useState(<HomePage />);

  function tabClicked(e) {
    //get text
    const text = e.target.textContent;
    //check if active tab and clicked text match
    if (activeTab != text) {
      //go through the data array to turn tab that is clicked active and everything else not active
      data.map((data) => {
        if (data.id.toLowerCase() == text.toLowerCase()) {
          data.tabClicked = true;
        } else {
          data.tabClicked = false;
        }
      });
      setActiveTab(text);
    }
    console.log(e);
  }

  //switch between tabs when clicked
  //render on click only
  useEffect(() => {
    data.map((data) => {
      if (data.tabClicked == true) {
        setShowTab(<data.component />);
      }
    });
  }, [activeTab]);

  return (
    <>
      <div className="sticky top-0 w-full h-20 flex justify-between items-center px-8 text-white bg-gradient-to-r from-neutral-950 to-neutral-950">
        <h1 className="text-2xl font-bold text-[#32ffb1]">TONY LI</h1>
        <ul onClick={tabClicked} id="navMenu" className="flex items-center">
          {data.map((data) => (
            <button key={data.id} className="p-7 font-bold hover:bg-sky-700">
              {/*note: fix bug where when icon is clicked, page doesn't switch*/}
              <i key={data.id} className={`p-2 ${data.logo}`}></i>
              {data.tabTitle}
            </button>
          ))}
        </ul>
      </div>
      <div>{showTab}</div>
    </>
  );
}

export default NavBar;
