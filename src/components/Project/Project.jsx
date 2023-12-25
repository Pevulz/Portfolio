import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import Info from "./Info";

function Project() {
  const projectData = [
    {
      id: "group_game",
      title: "Soviet Hold 'Em",
      link: "https://github.com/Pevulz/Serious-Game-Unity-Project, https://tony-li.itch.io/soviet-hold-em",
      logo: "https://raw.githubusercontent.com/Pevulz/Serious-Game-Unity-Project/main/Pictures/Capture4.PNG",
      detail:
        "Group project for game design class. A puzzle solving game made with CSharp and Unity. Learned how to use Unity to do movement, scenes transition, ui, etc.",
    },
    {
      id: "airplane_game",
      title: "Airplane Game",
      link: "https://github.com/Pevulz/Airplane-Lab, https://tony-li.itch.io/airplane-gametony-li",
      logo: "https://s3.amazonaws.com/gameartpartnersimagehost/wp-content/uploads/2017/03/Phantom-XXIV-Plane-Game-Sprites2.jpg",
      detail:
        "Solo project for game design class. An airplane shooting game made with CSharp and Unity. Learned how to use a sprite sheet to do animations, sound effects, ui, etc.",
    },
    {
      id: "group_website",
      title: "Quiz/Game Website",
      link: "https://github.com/SafiyyahKazim/Quiz-Website, https://www.youtube.com/watch?v=YH2igDhsvN0&ab_channel=SafiyyahKazim",
      logo: "https://github.com/SafiyyahKazim/Quiz-Website/blob/master/HomePage/HomeImage/pacman.jpg?raw=true",
      detail:
        "A website made with a group of three for my project/research class. Concept of the website was to have one quiz and one game made by each member. It was made with HTML, CSS, Javascript.",
    },
  ];

  return (
    <>
      <div className="relative h-full bg-no-repeat bg-cover bg-center  bg-[url('https://img.freepik.com/free-vector/hand-painted-black-watercolour-background_1048-16360.jpg?size=626&ext=jpg&ga=GA1.1.600854673.1703469356&semt=ais')]">
        {projectData.map((projectData) => (
          <div className="flex flex-col w-full items-center pb-5">
            <Info key={projectData.id} data={projectData}></Info>
          </div>
        ))}
        {/*<div className="bg-white w-1/2 h-full ">
          <LeftSide data={projectData}></LeftSide>
        </div>
        <div className="bg-white w-1/2 h-full">
          <RightSide data={projectData}></RightSide>
        </div>
  */}
      </div>
    </>
  );
}

export default Project;
