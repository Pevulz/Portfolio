import { useState, useEffect } from "react";
import Home from "./Home/Home";
import About from "./About/About";
import Experience from "./Experience/Experience";
import Project from "./Project/Project";
import Contact from "./Contact/Contact";

function NavBar() {
  const data = [
    {
      id: "home",
      component: Home,
      tabTitle: "HOME",
      logo: "bi bi-house-fill",
    },
    {
      id: "about",
      component: About,
      tabTitle: "ABOUT",
      logo: "bi bi-file-person-fill",
    },
    {
      id: "experience",
      component: Experience,
      tabTitle: "EXPERIENCE",
      logo: "bi bi-briefcase-fill",
    },
    {
      id: "project",
      component: Project,
      tabTitle: "PROJECT",
      logo: "bi bi-file-earmark-check-fill",
    },
    {
      id: "contact",
      component: Contact,
      tabTitle: "CONTACT",
      logo: "bi bi-person-vcard-fill",
    },
  ];

  const HomePage = data.at(0).component;

  const [activeTab, setActiveTab] = useState("HOME");
  const [showTab, setShowTab] = useState(<HomePage />);

  function tabClicked(e) {
    //get text
    const text = e.target.textContent.toLowerCase();
    setActiveTab(text);
  }

  //switch between tabs when clicked
  //render on click only
  useEffect(() => {
    data.map((data) => {
      if (data.id == activeTab) {
        setShowTab(<data.component />);
      }
    });
  }, [activeTab]);

  return (
    <>
      <div className="z-50 fixed top-0 w-full h-20 flex justify-between items-center px-8 text-white bg-gradient-to-r from-neutral-950 to-neutral-950">
        <h1 className="text-2xl font-bold text-[#ffec3e]">TONY LI</h1>
        <ul
          onClick={tabClicked}
          id="navMenu"
          className="hidden md:flex items-center"
        >
          {data.map((data) => (
            <li
              key={data.id}
              className=" p-7 font-bold hover:bg-sky-700 cursor-pointer hover:scale-110 duration-200"
            >
              {/*note: fix bug where when icon is clicked, page doesn't switch*/}
              <i key={data.id} className={`p-2 ${data.logo}`}></i>
              {data.tabTitle}
            </li>
          ))}
        </ul>
      </div>
      <div>{showTab}</div>
    </>
  );
}

export default NavBar;
