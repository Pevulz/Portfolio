import React from "react";
import Card from "./Card";

function Experience() {
  const experienceData = [
    {
      id: "starbucks",
      companyTitle: "Starbucks",
      logo: "",
      cardClicked: false,
    },
    {
      id: "yayatea",
      companyTitle: "Yaya Tea",
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
      id: "adventurerpark",
      companyTitle: "Adventurer's Park",
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

  return (
    <>
      <div className="px-10 h-screen bg-gray-400 flex items-center justify-between">
        {experienceData.map((experienceData) => (
          <div key={experienceData.id}>
            <Card data={experienceData}></Card>
          </div>
        ))}
      </div>
    </>
  );
}

export default Experience;
