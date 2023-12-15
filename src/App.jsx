import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  const experienceData = [
    {
      id: "starbucks",
      companyTitle: "Starbucks",
      logo: "",
      cardClicked: false,
    },
    {
      id: "yayatea",
      companyTitle: "Adventurers Park",
      logo: "",
      cardClicked: false,
    },
    {
      id: "hunan",
      companyTitle: "Hunan Chinese Resturant",
      logo: "",
      cardClicked: false,
    },
    {
      id: "funfunsaturday",
      companyTitle: "Fun Fun Saturday",
      logo: "",
      cardClicked: false,
    },
  ];

  const navData = [
    {
      id: "home",
      component: Home,
      tabTitle: "HOME",
      logo: "bi bi-house-fill",
      tabClicked: true,
    },
    {
      id: "about",
      component: About,
      tabTitle: "ABOUT",
      logo: "bi bi-file-person-fill",
      tabClicked: false,
    },
    {
      id: "experience",
      component: Experience({ experienceData }),
      tabTitle: "EXPERIENCE",
      logo: "bi bi-briefcase-fill",
      tabClicked: false,
    },
    {
      id: "project",
      component: Project,
      tabTitle: "PROJECT",
      logo: "bi bi-file-earmark-check-fill",
      tabClicked: false,
    },
    {
      id: "contact",
      component: Contact,
      tabTitle: "CONTACT",
      logo: "bi bi-person-vcard-fill",
      tabClicked: false,
    },
  ];

  return (
    <>
      <NavBar navData={navData}></NavBar>
    </>
  );
}

export default App;
